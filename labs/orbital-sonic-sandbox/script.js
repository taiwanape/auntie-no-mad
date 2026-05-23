const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d", { alpha: false });
const intro = document.querySelector("#intro");
const hud = document.querySelector("#hud");
const startBtn = document.querySelector("#startBtn");
const seedBtn = document.querySelector("#seedBtn");
const clearBtn = document.querySelector("#clearBtn");
const muteBtn = document.querySelector("#muteBtn");
const toast = document.querySelector("#toast");
const nodeCount = document.querySelector("#nodeCount");
const particleCount = document.querySelector("#particleCount");
const hitCount = document.querySelector("#hitCount");

let width = 0;
let height = 0;
let dpr = 1;
let audioCtx;
let masterGain;
let running = false;
let paused = false;
let muted = false;
let frame = 0;
let hits = 0;
let dragStamp = 0;

const particles = [];
const nodes = [];
const ripples = [];
const scale = [130.81, 155.56, 174.61, 196.00, 233.08, 261.63, 311.13, 349.23, 392.00, 466.16, 523.25];

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  paintBackdrop(true);
}

function paintBackdrop(force = false) {
  ctx.fillStyle = force ? "#030712" : "rgba(3, 7, 18, 0.18)";
  ctx.fillRect(0, 0, width, height);

  const gradient = ctx.createRadialGradient(width * .72, height * .25, 30, width * .72, height * .25, Math.max(width, height) * .78);
  gradient.addColorStop(0, "rgba(0, 240, 255, 0.08)");
  gradient.addColorStop(.42, "rgba(141, 92, 255, 0.055)");
  gradient.addColorStop(1, "rgba(255, 79, 216, 0.015)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

class Particle {
  constructor(x, y, vx, vy, color = 188) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = Math.random() * 2.1 + 2.2;
    this.life = 1;
    this.decay = Math.random() * 0.0025 + 0.0018;
    this.hue = color + Math.random() * 70;
    this.hitCooldown = 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.045;
    this.life -= this.decay;
    this.hitCooldown = Math.max(0, this.hitCooldown - 1);
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 100%, 64%, ${Math.max(0, this.life)})`;
    ctx.shadowBlur = 16;
    ctx.shadowColor = `hsla(${this.hue}, 100%, 60%, .8)`;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

class SonicNode {
  constructor(x, y, index = nodes.length) {
    this.x = x;
    this.y = y;
    this.r = Math.random() * 19 + 18;
    this.freq = scale[index % scale.length];
    this.hue = 178 + ((index * 37) % 120);
    this.pulse = 0;
    this.phase = Math.random() * Math.PI * 2;
  }

  trigger(velocity = 1) {
    this.pulse = 1;
    hits += 1;
    ripples.push(new Ripple(this.x, this.y, this.hue, this.r));
    playTone(this.freq, this.hue, Math.min(.32, .10 + velocity * .022));
  }

  draw() {
    this.phase += .018;
    this.pulse *= .90;
    const breathe = Math.sin(this.phase) * 2.4;
    const radius = this.r + breathe + this.pulse * 18;

    ctx.beginPath();
    ctx.arc(this.x, this.y, radius + 10, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 90%, 55%, ${0.035 + this.pulse * .06})`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `hsla(${this.hue}, 96%, 66%, ${.75 + this.pulse * .25})`;
    ctx.lineWidth = 2.2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(4, radius - 9), 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 48%, 16%, .86)`;
    ctx.fill();
  }
}

class Ripple {
  constructor(x, y, hue, radius) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.r = radius;
    this.life = 1;
  }

  update() {
    this.r += 3.5;
    this.life -= .022;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.strokeStyle = `hsla(${this.hue}, 100%, 70%, ${this.life * .55})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = muted ? 0 : .74;
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function playTone(freq, hue, volume) {
  if (!audioCtx || muted) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const mod = audioCtx.createOscillator();
  const modGain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();
  const pan = audioCtx.createStereoPanner();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);
  mod.type = "sine";
  mod.frequency.setValueAtTime(freq * 1.5, now);
  modGain.gain.setValueAtTime(freq * .42, now);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1600 + (hue % 100) * 18, now);
  filter.Q.value = 6;
  pan.pan.setValueAtTime(Math.max(-.75, Math.min(.75, (Math.random() - .5) * 1.2)), now);

  mod.connect(modGain);
  modGain.connect(osc.frequency);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(pan);
  pan.connect(masterGain);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + .018);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.35);

  osc.start(now);
  mod.start(now);
  osc.stop(now + 1.42);
  mod.stop(now + 1.42);
}

function addNode(x, y) {
  if (!running) return;
  const safeX = Math.max(24, Math.min(width - 24, x));
  const safeY = Math.max(88, Math.min(height - 24, y));
  nodes.push(new SonicNode(safeX, safeY));
  nodes[nodes.length - 1].trigger(.6);
  updateStats();
}

function seedConstellation() {
  if (!running) return;
  const count = width < 620 ? 5 : 8;
  for (let i = 0; i < count; i += 1) {
    const x = width * (.18 + Math.random() * .68);
    const y = height * (.22 + Math.random() * .62);
    nodes.push(new SonicNode(x, y, i));
  }
  nodes.forEach((node, i) => setTimeout(() => node.trigger(.8), i * 90));
  updateStats();
  showToast("已撒下一組隨機星座");
}

function clearSandbox() {
  nodes.length = 0;
  particles.length = 0;
  ripples.length = 0;
  hits = 0;
  updateStats();
  paintBackdrop(true);
  showToast("沙盒已清空");
}

function emitParticles() {
  if (paused) return;
  const centerX = width / 2;
  const emitterY = Math.max(26, height * .045);
  const sweep = Math.sin(frame * .018) * Math.PI * .34;
  const spread = Math.sin(frame * .007) * 1.2;
  const speed = 3.2 + Math.random() * 2.4;
  const vx = Math.sin(sweep + spread * .08) * speed;
  const vy = Math.cos(sweep) * speed + 1;
  particles.push(new Particle(centerX, emitterY, vx, vy, 178));

  if (nodes.length > 8 && frame % 18 === 0) {
    const target = nodes[Math.floor(Math.random() * nodes.length)];
    const angle = Math.atan2(target.y - emitterY, target.x - centerX);
    particles.push(new Particle(centerX, emitterY, Math.cos(angle) * 4.2, Math.sin(angle) * 4.2, 300));
  }
}

function resolveCollision(p, node) {
  const dx = p.x - node.x;
  const dy = p.y - node.y;
  const dist = Math.max(.001, Math.hypot(dx, dy));
  const min = p.r + node.r;
  if (dist >= min || p.hitCooldown > 0) return;

  const nx = dx / dist;
  const ny = dy / dist;
  const dot = p.vx * nx + p.vy * ny;
  p.vx = (p.vx - 2 * dot * nx) * .82;
  p.vy = (p.vy - 2 * dot * ny) * .82;
  p.x = node.x + nx * (min + 1);
  p.y = node.y + ny * (min + 1);
  p.hitCooldown = 7;
  node.trigger(Math.hypot(p.vx, p.vy));
}

function drawConnections() {
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist > 210) continue;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 210)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}

function drawEmitter() {
  const x = width / 2;
  const y = Math.max(26, height * .045);
  ctx.beginPath();
  ctx.arc(x, y, 9 + Math.sin(frame * .08) * 2, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0, 240, 255, .9)";
  ctx.shadowBlur = 28;
  ctx.shadowColor = "rgba(0, 240, 255, .75)";
  ctx.fill();
  ctx.shadowBlur = 0;
}

function updateStats() {
  nodeCount.textContent = nodes.length;
  particleCount.textContent = particles.length;
  hitCount.textContent = hits;
}

function animate() {
  if (!running) return;
  frame += 1;
  paintBackdrop(false);

  if (!paused && frame % 4 === 0) emitParticles();
  drawConnections();
  drawEmitter();

  for (const node of nodes) node.draw();

  for (let i = ripples.length - 1; i >= 0; i -= 1) {
    ripples[i].update();
    ripples[i].draw();
    if (ripples[i].life <= 0) ripples.splice(i, 1);
  }

  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    if (!paused) p.update();
    for (const node of nodes) resolveCollision(p, node);
    p.draw();
    if (p.life <= 0 || p.y > height + 80 || p.x < -80 || p.x > width + 80) {
      particles.splice(i, 1);
    }
  }

  if (frame % 10 === 0) updateStats();
  requestAnimationFrame(animate);
}

function start() {
  initAudio();
  running = true;
  intro.classList.add("hidden");
  hud.classList.add("active");
  seedConstellation();
  showToast("點擊或拖曳，開始佈置聲音軌道");
  requestAnimationFrame(animate);
}

function handlePointer(event) {
  if (!running) return;
  event.preventDefault();
  const now = performance.now();
  if (event.type === "pointermove" && now - dragStamp < 130) return;
  dragStamp = now;
  addNode(event.clientX, event.clientY);
}

startBtn.addEventListener("click", start);
seedBtn.addEventListener("click", seedConstellation);
clearBtn.addEventListener("click", clearSandbox);
muteBtn.addEventListener("click", () => {
  muted = !muted;
  muteBtn.textContent = muted ? "聲音關" : "聲音開";
  if (masterGain) masterGain.gain.setTargetAtTime(muted ? 0 : .74, audioCtx.currentTime, .03);
  showToast(muted ? "已靜音" : "聲音已開啟");
});

canvas.addEventListener("pointerdown", handlePointer);
canvas.addEventListener("pointermove", (event) => {
  if (event.buttons || event.pressure > 0) handlePointer(event);
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    paused = !paused;
    showToast(paused ? "已暫停粒子流" : "粒子流繼續");
  }
  if (event.key.toLowerCase() === "r") clearSandbox();
  if (event.key.toLowerCase() === "m") muteBtn.click();
});

window.addEventListener("resize", resize);
resize();
