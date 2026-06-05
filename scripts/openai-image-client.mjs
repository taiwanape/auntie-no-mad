import fs from "node:fs";
import path from "node:path";
import { AUNTIE_REFERENCE_IMAGE } from "./image-style-rules.mjs";

const root = process.cwd();

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function mimeTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  return "image/jpeg";
}

function outputExtension(outputFormat = "jpeg") {
  return outputFormat === "jpeg" ? ".jpg" : `.${outputFormat || "png"}`;
}

function splitReferencePaths(referencePath = "") {
  return String(referencePath)
    .split(/[;,]/)
    .map((value) => value.trim())
    .filter(Boolean);
}

export function resolveImageReferencePath(referencePath = process.env.OPENAI_IMAGE_REFERENCE_PATH || AUNTIE_REFERENCE_IMAGE) {
  return resolveImageReferencePaths(referencePath)[0] || "";
}

export function resolveImageReferencePaths(referencePath = process.env.OPENAI_IMAGE_REFERENCE_PATH || AUNTIE_REFERENCE_IMAGE) {
  return splitReferencePaths(referencePath)
    .map((candidate) => (path.isAbsolute(candidate) ? candidate : path.join(root, candidate)))
    .filter((fullPath) => fs.existsSync(fullPath));
}

export function relativeImageReferencePath(referencePath) {
  if (!referencePath) return "";
  return normalizePath(path.relative(root, referencePath));
}

export function relativeImageReferencePaths(referencePaths = []) {
  return referencePaths.map((referencePath) => relativeImageReferencePath(referencePath)).filter(Boolean);
}

async function readJsonResponse(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return { error: { message: text || `OpenAI image request failed: ${response.status}` } };
  }
}

function appendSharedImageOptions(target, options) {
  target.append("model", options.model);
  target.append("prompt", options.prompt);
  target.append("size", options.size);
  target.append("quality", options.quality);
  target.append("n", "1");
  if (options.outputFormat) target.append("output_format", options.outputFormat);
  if (["jpeg", "webp"].includes(options.outputFormat) && Number.isFinite(options.outputCompression)) {
    target.append("output_compression", String(options.outputCompression));
  }
}

function generationRequestBody(options) {
  const requestBody = {
    model: options.model,
    prompt: options.prompt,
    size: options.size,
    quality: options.quality,
    n: 1
  };
  if (options.outputFormat) requestBody.output_format = options.outputFormat;
  if (["jpeg", "webp"].includes(options.outputFormat) && Number.isFinite(options.outputCompression)) {
    requestBody.output_compression = options.outputCompression;
  }
  return requestBody;
}

export async function generateOpenAIImageFile(options) {
  const referencePaths = resolveImageReferencePaths(options.referencePath);
  const userAgent = options.userAgent || "auntie-no-mad-image-generator/1.0";
  const headers = {
    authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    "user-agent": userAgent
  };
  let endpoint = "https://api.openai.com/v1/images/generations";
  let response;

  if (referencePaths.length) {
    endpoint = "https://api.openai.com/v1/images/edits";
    const form = new FormData();
    appendSharedImageOptions(form, options);
    for (const referencePath of referencePaths) {
      const imageBytes = fs.readFileSync(referencePath);
      form.append("image[]", new Blob([imageBytes], { type: mimeTypeFor(referencePath) }), path.basename(referencePath));
    }
    response = await fetch(endpoint, { method: "POST", headers, body: form });
  } else {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        ...headers,
        "content-type": "application/json"
      },
      body: JSON.stringify(generationRequestBody(options))
    });
  }

  const body = await readJsonResponse(response);
  if (!response.ok) {
    throw new Error(body.error?.message || `OpenAI image generation failed: ${response.status}`);
  }

  const b64 = body.data?.[0]?.b64_json;
  if (!b64) throw new Error("OpenAI image generation returned no b64_json");
  fs.writeFileSync(options.outputPath, Buffer.from(b64, "base64"));

  return {
    endpoint: endpoint.endsWith("/edits") ? "images/edits" : "images/generations",
    outputExtension: outputExtension(options.outputFormat),
    referenceImage: referencePaths.length ? relativeImageReferencePaths(referencePaths).join(";") : ""
  };
}
