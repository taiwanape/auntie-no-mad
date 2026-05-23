const canvas = document.getElementById("lab");
const ctx = canvas.getContext("2d");

const els = {
  intro: document.getElementById("intro"),
  start: document.getElementById("startBtn"),
  robotCount: document.getElementById("robotCount"),
  beaconCount: document.getElementById("beaconCount"),
  scoreCount: document.getElementById("scoreCount"),
  progressBar: document.getElementById("progressBar"),
  missionName: document.getElementById("missionName"),
  missionCopy: document.getElementById("missionCopy"),
  toolBeacon: document.getElementById("toolBeacon"),
  toolObstacle: document.getElementById("toolObstacle"),
  pauseBtn: document.getElementById("pauseBtn"),
  resetBtn: document.getElementById("resetBtn"),
  soundBtn: document.getElementById("soundBtn"),
  modes: [...document.querySelectorAll(".mode")]
};

const modes = {
  logistics: {
    key: "logistics",
    name: "物流搬運",
    copy: "點一下場地放任務信標，小車會自己分隊搬運。",
    color: "#00e5c8",
    alt: "#ffcf5a",
    third: "#73ffbd",
    speed: 1.25,
    cohesion: .026,
    separation: .72,
    wander: .28,
    tone: 440
  },
  care: {
    key: "care",
    name: "長照巡房",
    copy: "機器人會用比較柔順的隊形巡邏，不擠、不衝、慢慢完成。",
    color: "#8fe7ff",
    alt: "#ff9dcb",
    third: "#f8e58c",
    speed: .95,
    cohesion: .038,
    separation: .96,
    wander: .19,
    tone: 392
  },
  rescue: {
    key: "rescue",
    name: "災害搜索",
    copy: "隊伍會拉開掃描範圍，優先衝向最新信標並繞開封鎖區。",
    color: "#ff6b64",
    alt: "#ffd86f",
    third: "#ffffff",
    speed: 1.48,
    cohesion: .016,
    separation: 1.22,
    wander: .42,
    tone: 523
  },
  market: {
    key: "market",
    name: "夜市補給",
    copy: "路線比較活潑，像在攤位間找客人、送飲料、閃人潮。",
    color: "#ffcf5a",
    alt: "#ff5fa2",
    third: "#00e5c8",
    speed: 1.18,
    cohesion: .031,
    separation: .84,
    wander: .62,
    tone: 659
  }
};

const state = {
  dpr: 1,
  width: 0,
  height: 0,
  running: false,
  paused: false,
  sound: true,
  tool: "beacon",
  mode: "logistics",
  robots: [],
  beacons: [],
  obstacles: [],
  particles: [],
  ripples: [],
  pointer: { x: 0, y: 0, down: false, lastPlace: 0 },
  ticks: 0,
  completed: 0,
  progress: 0,
  audio: null,
  lastTone: 0
};

const rand = (min, max) => min + Math.random() * (max - min);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function resize() {
  state.dpr = Math.min(window.devicePixelRatio || 1, 2);
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  canvas.width = Math.floor(state.width * state.dpr);
  canvas.height = Math.floor(state.height * state.dpr);
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
}

function initRobots() {
  state.robots = [];
  const cx = state.width * .52;
  const cy = state.height * .54;
  for (let i = 0; i < 32; i++) {
    const ring = 70 + (i % 8) * 16;
    const angle = (i / 32) * Math.PI * 2;
    state.robots.push({
      id: i,
      x: cx + Math.cos(angle) * ring + rand(-18, 18),
      y: cy + Math.sin(angle) * ring + rand(-18, 18),
      vx: rand(-.8, .8),
      vy: rand(-.8, .8),
      angle,
      radius: rand(5.2, 7.4),
      phase: Math.random() * Math.PI * 2,
      carrying: Math.random() > .55,
      trail: [],
      heat: 0,
      hitCooldown: 0
    });
  }
  els.robotCount.textContent = state.robots.length;
}

function initScene() {
  state.beacons = [
    { x: state.width * .72, y: state.height * .42, charge: 22, age: 0, label: "A1" },
    { x: state.width * .28, y: state.height * .66, charge: 8, age: 0, label: "B2" }
  ];
  state.obstacles = [
    { x: state.width * .5, y: state.height * .44, r: 34, pulse: Math.random() * 9 },
    { x: state.width * .64, y: state.height * .68, r: 46, pulse: Math.random() * 9 },
    { x: state.width * .35, y: state.height * .36, r: 28, pulse: Math.random() * 9 }
  ];
  state.particles = [];
  state.ripples = [];
  state.completed = 0;
  state.progress = 0;
  initRobots();
  syncHud();
}

function ensureAudio() {
  if (!state.sound || state.audio) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (AudioContext) state.audio = new AudioContext();
}

function tone(freq, type = "sine", duration = .1, gain = .045) {
  if (!state.sound) return;
  ensureAudio();
  const audio = state.audio;
  if (!audio) return;
  if (audio.state === "suspended") audio.resume();

  const now = audio.currentTime;
  const osc = audio.createOscillator();
  const amp = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + duration);
  amp.gain.setValueAtTime(0, now);
  amp.gain.linearRampToValueAtTime(gain, now + .01);
  amp.gain.exponentialRampToValueAtTime(.0001, now + duration);
  osc.connect(amp).connect(audio.destination);
  osc.start(now);
  osc.stop(now + duration + .02);
}

function burst(x, y, color, count = 22, power = 2.4) {
  for (let i = 0; i < count; i++) {
    const a = rand(0, Math.PI * 2);
    const speed = rand(.4, power);
    state.particles.push({
      x,
      y,
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed,
      life: rand(28, 70),
      maxLife: 70,
      size: rand(1, 3.4),
      color
    });
  }
  state.ripples.push({ x, y, r: 3, life: 42, color });
}

function placeBeacon(x, y) {
  state.beacons.push({
    x: clamp(x, 18, state.width - 18),
    y: clamp(y, 88, state.height - 24),
    charge: 0,
    age: 0,
    label: String.fromCharCode(65 + (state.beacons.length % 26)) + (state.beacons.length + 1)
  });
  burst(x, y, modes[state.mode].color, 18, 2);
  tone(modes[state.mode].tone, "triangle", .08, .035);
  syncHud();
}

function placeObstacle(x, y) {
  state.obstacles.push({
    x: clamp(x, 24, state.width - 24),
    y: clamp(y, 92, state.height - 24),
    r: rand(24, 52),
    pulse: Math.random() * 10
  });
  burst(x, y, "#ff6b64", 16, 1.7);
  tone(180, "sawtooth", .07, .025);
}

function setTool(tool) {
  state.tool = tool;
  els.toolBeacon.classList.toggle("active", tool === "beacon");
  els.toolObstacle.classList.toggle("active", tool === "obstacle");
}

function setMode(key) {
  if (!modes[key]) return;
  state.mode = key;
  els.modes.forEach(button => button.classList.toggle("active", button.dataset.mode === key));
  els.missionName.textContent = modes[key].name;
  els.missionCopy.textContent = modes[key].copy;
  document.documentElement.style.setProperty("--teal", modes[key].color);
  document.documentElement.style.setProperty("--amber", modes[key].alt);
  burst(state.width * .5, state.height * .54, modes[key].color, 40, 3);
  tone(modes[key].tone, "sine", .15, .04);
}

function reset() {
  initScene();
  tone(330, "triangle", .09, .04);
}

function syncHud() {
  els.beaconCount.textContent = state.beacons.filter(beacon => !beacon.done).length;
  els.scoreCount.textContent = state.completed;
  els.progressBar.style.width = `${Math.round(state.progress)}%`;
}

function start() {
  state.running = true;
  els.intro.classList.add("hidden");
  ensureAudio();
  tone(520, "triangle", .12, .045);
  setTimeout(() => tone(780, "sine", .14, .035), 90);
}

function pointerPosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (state.width / rect.width),
    y: (event.clientY - rect.top) * (state.height / rect.height)
  };
}

function handlePlacement(event, forceObstacle = false) {
  const now = performance.now();
  if (now - state.pointer.lastPlace < 90 && event.type === "pointermove") return;
  const p = pointerPosition(event);
  state.pointer.lastPlace = now;
  if (forceObstacle || state.tool === "obstacle") placeObstacle(p.x, p.y);
  else placeBeacon(p.x, p.y);
}

function nearestBeacon(robot) {
  const activeBeacons = state.beacons.filter(beacon => !beacon.done);
  if (!activeBeacons.length) {
    const t = state.ticks * .007 + robot.id;
    return {
      x: state.width * (.5 + Math.cos(t) * .28),
      y: state.height * (.52 + Math.sin(t * .83) * .25),
      charge: 0,
      phantom: true
    };
  }
  let best = activeBeacons[0];
  let bestScore = Infinity;
  for (const beacon of activeBeacons) {
    const d = distance(robot, beacon);
    const freshness = state.mode === "rescue" ? -beacon.age * .08 : 0;
    const score = d + freshness - beacon.charge * .8;
    if (score < bestScore) {
      best = beacon;
      bestScore = score;
    }
  }
  return best;
}

function updateRobot(robot) {
  const mode = modes[state.mode];
  const target = nearestBeacon(robot);
  const dx = target.x - robot.x;
  const dy = target.y - robot.y;
  const d = Math.hypot(dx, dy) || 1;
  let ax = (dx / d) * .044 * mode.speed;
  let ay = (dy / d) * .044 * mode.speed;

  const neighbors = state.robots.filter(other => other !== robot && distance(robot, other) < 72);
  if (neighbors.length) {
    let cx = 0;
    let cy = 0;
    let sx = 0;
    let sy = 0;
    for (const other of neighbors) {
      cx += other.x;
      cy += other.y;
      const nd = Math.max(distance(robot, other), 1);
      if (nd < 34) {
        sx += (robot.x - other.x) / nd;
        sy += (robot.y - other.y) / nd;
      }
    }
    cx /= neighbors.length;
    cy /= neighbors.length;
    ax += (cx - robot.x) * mode.cohesion * .012 + sx * .05 * mode.separation;
    ay += (cy - robot.y) * mode.cohesion * .012 + sy * .05 * mode.separation;
  }

  for (const obstacle of state.obstacles) {
    const od = distance(robot, obstacle);
    const danger = obstacle.r + 48;
    if (od < danger) {
      const push = ((danger - od) / danger) * .16;
      ax += ((robot.x - obstacle.x) / Math.max(od, 1)) * push;
      ay += ((robot.y - obstacle.y) / Math.max(od, 1)) * push;
      robot.heat = Math.min(1, robot.heat + .025);
    }
  }

  const wave = Math.sin(state.ticks * .025 + robot.phase);
  ax += Math.cos(robot.phase + state.ticks * .017) * .018 * mode.wander;
  ay += wave * .016 * mode.wander;

  if (state.mode === "care" && state.beacons.length) {
    const orbit = Math.atan2(dy, dx) + Math.PI / 2;
    ax += Math.cos(orbit) * .018;
    ay += Math.sin(orbit) * .018;
  }

  if (state.mode === "market") {
    ax += Math.cos(state.ticks * .026 + robot.id) * .012;
    ay += Math.sin(state.ticks * .031 + robot.id * .8) * .012;
  }

  robot.vx = (robot.vx + ax) * .942;
  robot.vy = (robot.vy + ay) * .942;
  const maxSpeed = 2.55 * mode.speed;
  const speed = Math.hypot(robot.vx, robot.vy);
  if (speed > maxSpeed) {
    robot.vx = (robot.vx / speed) * maxSpeed;
    robot.vy = (robot.vy / speed) * maxSpeed;
  }

  robot.x += robot.vx;
  robot.y += robot.vy;
  robot.angle = Math.atan2(robot.vy, robot.vx);

  if (robot.x < 12 || robot.x > state.width - 12) robot.vx *= -1;
  if (robot.y < 86 || robot.y > state.height - 12) robot.vy *= -1;
  robot.x = clamp(robot.x, 12, state.width - 12);
  robot.y = clamp(robot.y, 86, state.height - 12);

  robot.trail.push({ x: robot.x, y: robot.y });
  if (robot.trail.length > 18) robot.trail.shift();
  robot.heat *= .94;
  robot.hitCooldown = Math.max(0, robot.hitCooldown - 1);

  if (!target.phantom && d < 24 && robot.hitCooldown === 0) {
    target.charge += state.mode === "rescue" ? 4.8 : 3.2;
    robot.hitCooldown = 34;
    robot.carrying = !robot.carrying;
    if (performance.now() - state.lastTone > 120) {
      state.lastTone = performance.now();
      tone(mode.tone + rand(-30, 80), "triangle", .05, .022);
    }
    if (target.charge >= 100) completeBeacon(target);
  }
}

function completeBeacon(beacon) {
  if (beacon.done) return;
  const mode = modes[state.mode];
  burst(beacon.x, beacon.y, mode.alt, 46, 4.4);
  state.ripples.push({ x: beacon.x, y: beacon.y, r: 8, life: 70, color: mode.third });
  tone(mode.tone * 1.5, "sine", .18, .055);
  beacon.done = true;
  beacon.completedAt = state.ticks;
  beacon.charge = 100;
  state.completed += 1;
  state.progress = (state.progress + 14 + state.beacons.length * 2) % 101;
  syncHud();
}

function update() {
  if (!state.running || state.paused) return;
  state.ticks += 1;
  for (const beacon of state.beacons) beacon.age += 1;
  state.beacons = state.beacons.filter(beacon => !beacon.done || state.ticks - beacon.completedAt < 150);
  for (const robot of state.robots) updateRobot(robot);
  for (const obstacle of state.obstacles) obstacle.pulse += .025;

  state.particles = state.particles.filter(particle => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vx *= .982;
    particle.vy *= .982;
    particle.life -= 1;
    return particle.life > 0;
  });

  state.ripples = state.ripples.filter(ripple => {
    ripple.r += 2.6;
    ripple.life -= 1;
    return ripple.life > 0;
  });

  const activeBeacons = state.beacons.filter(beacon => !beacon.done);
  if (activeBeacons.length) {
    const average = activeBeacons.reduce((sum, beacon) => sum + beacon.charge, 0) / activeBeacons.length;
    state.progress = clamp(average, state.progress * .985, 100);
  } else {
    state.progress *= .992;
  }
  syncHud();
}

function drawGrid(mode) {
  ctx.save();
  ctx.lineWidth = 1;
  const gap = 46;
  const drift = (state.ticks * .35) % gap;
  ctx.strokeStyle = "rgba(255,255,255,.045)";
  for (let x = -gap + drift; x < state.width + gap; x += gap) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + state.height * .18, state.height);
    ctx.stroke();
  }
  for (let y = 74; y < state.height + gap; y += gap) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(state.width, y - state.width * .04);
    ctx.stroke();
  }

  ctx.strokeStyle = `${mode.color}28`;
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 5; i++) {
    const y = state.height * (.22 + i * .13) + Math.sin(state.ticks * .008 + i) * 12;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(state.width * .24, y - 42, state.width * .7, y + 46, state.width, y - 10);
    ctx.stroke();
  }
  ctx.restore();
}

function drawRadar(mode) {
  const cx = state.width * .5;
  const cy = state.height * .55;
  const maxR = Math.min(state.width, state.height) * .44;
  const angle = state.ticks * .018;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = `${mode.color}22`;
  ctx.lineWidth = 1;
  for (let r = maxR * .25; r < maxR; r += maxR * .18) {
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
  grad.addColorStop(0, `${mode.color}1e`);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, maxR, angle - .1, angle + .23);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = `${mode.alt}66`;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(Math.cos(angle) * maxR, Math.sin(angle) * maxR);
  ctx.stroke();
  ctx.restore();
}

function drawObstacles(mode) {
  for (const obstacle of state.obstacles) {
    const pulse = Math.sin(obstacle.pulse) * 4;
    ctx.save();
    ctx.translate(obstacle.x, obstacle.y);
    ctx.fillStyle = "rgba(255, 91, 91, .12)";
    ctx.strokeStyle = "rgba(255, 107, 100, .62)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, obstacle.r + pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = `${mode.alt}35`;
    ctx.setLineDash([5, 7]);
    ctx.beginPath();
    ctx.arc(0, 0, obstacle.r + 16 + pulse, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function drawBeacons(mode) {
  for (const beacon of state.beacons) {
    const pulse = 1 + Math.sin(state.ticks * .08 + beacon.age * .02) * .08;
    const doneAge = beacon.done ? state.ticks - beacon.completedAt : 0;
    const fade = beacon.done ? clamp(1 - doneAge / 150, 0, 1) : 1;
    ctx.save();
    ctx.translate(beacon.x, beacon.y);
    ctx.globalAlpha = fade;
    ctx.strokeStyle = beacon.done ? `${mode.third}dd` : `${mode.color}aa`;
    ctx.fillStyle = beacon.done ? `${mode.third}20` : `${mode.color}18`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, (beacon.done ? 24 : 18) * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = beacon.done ? `${mode.alt}aa` : `${mode.alt}88`;
    ctx.setLineDash([4, 5]);
    ctx.beginPath();
    ctx.arc(0, 0, 34 + beacon.charge * .22, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#eef9f5";
    ctx.font = "700 11px Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(beacon.done ? "OK" : beacon.label, 0, 4);
    ctx.restore();
  }
}

function drawConnections(mode) {
  ctx.save();
  ctx.lineWidth = 1;
  for (let i = 0; i < state.robots.length; i++) {
    const a = state.robots[i];
    for (let j = i + 1; j < state.robots.length; j++) {
      const b = state.robots[j];
      const d = distance(a, b);
      if (d < 82) {
        const alpha = (1 - d / 82) * .22;
        ctx.strokeStyle = `${mode.color}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  ctx.restore();
}

function drawRobot(robot, mode) {
  ctx.save();
  for (let i = 1; i < robot.trail.length; i++) {
    const p = robot.trail[i];
    const alpha = i / robot.trail.length;
    ctx.fillStyle = `${robot.carrying ? mode.alt : mode.color}${Math.round(alpha * 82).toString(16).padStart(2, "0")}`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, robot.radius * .45 * alpha, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.translate(robot.x, robot.y);
  ctx.rotate(robot.angle);
  const fill = robot.carrying ? mode.alt : mode.color;
  ctx.shadowColor = fill;
  ctx.shadowBlur = 16 + robot.heat * 12;
  ctx.fillStyle = fill;
  ctx.strokeStyle = "rgba(255,255,255,.78)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(robot.radius + 5, 0);
  ctx.lineTo(-robot.radius, -robot.radius * .82);
  ctx.lineTo(-robot.radius * .55, 0);
  ctx.lineTo(-robot.radius, robot.radius * .82);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#061018";
  ctx.beginPath();
  ctx.arc(robot.radius * .12, 0, robot.radius * .32, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = `${mode.third}77`;
  ctx.beginPath();
  ctx.arc(robot.radius + 6, 0, 16 + robot.heat * 9, -.35, .35);
  ctx.stroke();
  ctx.restore();
}

function drawParticles() {
  for (const particle of state.particles) {
    const alpha = clamp(particle.life / particle.maxLife, 0, 1);
    ctx.fillStyle = `${particle.color}${Math.round(alpha * 220).toString(16).padStart(2, "0")}`;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const ripple of state.ripples) {
    const alpha = clamp(ripple.life / 70, 0, 1);
    ctx.strokeStyle = `${ripple.color}${Math.round(alpha * 190).toString(16).padStart(2, "0")}`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.r, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function render() {
  const mode = modes[state.mode];
  ctx.clearRect(0, 0, state.width, state.height);
  const bg = ctx.createLinearGradient(0, 0, state.width, state.height);
  bg.addColorStop(0, "#071522");
  bg.addColorStop(.5, "#06090f");
  bg.addColorStop(1, "#111108");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, state.width, state.height);

  drawGrid(mode);
  drawRadar(mode);
  drawObstacles(mode);
  drawBeacons(mode);
  drawConnections(mode);
  for (const robot of state.robots) drawRobot(robot, mode);
  drawParticles();

  if (state.paused) {
    ctx.save();
    ctx.fillStyle = "rgba(0,0,0,.34)";
    ctx.fillRect(0, 0, state.width, state.height);
    ctx.fillStyle = "#eef9f5";
    ctx.font = "800 34px Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("PAUSED", state.width / 2, state.height / 2);
    ctx.restore();
  }
}

function loop() {
  update();
  render();
  requestAnimationFrame(loop);
}

function bindEvents() {
  window.addEventListener("resize", () => {
    resize();
    initScene();
  });

  els.start.addEventListener("click", start);
  els.toolBeacon.addEventListener("click", () => setTool("beacon"));
  els.toolObstacle.addEventListener("click", () => setTool("obstacle"));
  els.pauseBtn.addEventListener("click", () => {
    state.paused = !state.paused;
    els.pauseBtn.classList.toggle("active", state.paused);
  });
  els.resetBtn.addEventListener("click", reset);
  els.soundBtn.addEventListener("click", () => {
    state.sound = !state.sound;
    els.soundBtn.classList.toggle("active", state.sound);
  });

  els.modes.forEach(button => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  canvas.addEventListener("contextmenu", event => event.preventDefault());
  canvas.addEventListener("pointerdown", event => {
    ensureAudio();
    state.pointer.down = true;
    canvas.setPointerCapture(event.pointerId);
    handlePlacement(event, event.button === 2);
  });
  canvas.addEventListener("pointermove", event => {
    const p = pointerPosition(event);
    state.pointer.x = p.x;
    state.pointer.y = p.y;
    if (state.pointer.down) handlePlacement(event, event.buttons === 2);
  });
  canvas.addEventListener("pointerup", event => {
    state.pointer.down = false;
    try {
      canvas.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Pointer capture may already be released on some mobile browsers.
    }
  });
  canvas.addEventListener("pointercancel", () => {
    state.pointer.down = false;
  });

  window.addEventListener("keydown", event => {
    if (event.key === " ") {
      event.preventDefault();
      state.paused = !state.paused;
      els.pauseBtn.classList.toggle("active", state.paused);
    }
    if (event.key.toLowerCase() === "r") reset();
    if (event.key.toLowerCase() === "b") setTool("beacon");
    if (event.key.toLowerCase() === "o") setTool("obstacle");
    if (event.key === "1") setMode("logistics");
    if (event.key === "2") setMode("care");
    if (event.key === "3") setMode("rescue");
    if (event.key === "4") setMode("market");
  });
}

resize();
initScene();
bindEvents();
loop();
