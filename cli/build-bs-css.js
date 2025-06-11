#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

// -----------------------------
// Helper functions
// -----------------------------

function parseArg(name, fallback = undefined) {
  const arg = process.argv.find((arg) => arg.startsWith(`--${name}=`));
  return arg ? arg.split("=")[1] : fallback;
}

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function log(msg) {
  console.log(`💡 ${msg}`);
}

// -----------------------------
// Parse arguments
// -----------------------------

const prefix = parseArg("prefix", "bs-");
const inputScss = parseArg("input", path.join(__dirname, "../src/styles/bootstrap/bootstrap.scss"));
const outDir = parseArg("outDir", path.join(process.cwd(), "prestyler"));

if (!/^[a-zA-Z0-9_-]+$/.test(prefix)) {
  fail(`Invalid prefix: "${prefix}". Only letters, numbers, underscores, and dashes are allowed.`);
}

if (!fs.existsSync(inputScss)) {
  fail(`Input SCSS file does not exist: "${inputScss}"`);
}

try {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
    log(`Created output directory: ${outDir}`);
  }
} catch (err) {
  fail(`Failed to create output directory "${outDir}": ${err.message}`);
}

// -----------------------------
// Define paths
// -----------------------------

const tmpCss = path.join(os.tmpdir(), `prestyler-${Date.now()}.css`);
const outCss = path.join(outDir, "bootstrap-prefixed.css");

// -----------------------------
// Build process
// -----------------------------

console.log("🏗️  Building Bootstrap CSS");
console.log(`🔹 Prefix: ${prefix}`);
console.log(`🔹 Input: ${inputScss}`);
console.log(`🔹 Output: ${outCss}`);

try {
  console.log("🔧 Compiling SCSS...");
  execSync(`sass "${inputScss}" "${tmpCss}"`, { stdio: "inherit" });
} catch (err) {
  fail("SASS compilation failed.");
}

try {
  console.log("🔧 Running PostCSS...");
  execSync(
    `postcss "${tmpCss}" --config "${path.join(__dirname, "../config/postcss.config.js")}" --output "${outCss}"`,
    {
      stdio: "inherit",
      env: { ...process.env, PS_PREFIX: prefix },
    }
  );
} catch (err) {
  fail("PostCSS processing failed.");
}

// Cleanup temp file
try {
  fs.unlinkSync(tmpCss);
} catch (_) {
  // Ignore cleanup error
}

// -----------------------------
// Write config file
// -----------------------------

const configPath = path.join(outDir, "prestyler.config.json");

try {
  const configJson = { prefix };
  fs.writeFileSync(configPath, JSON.stringify(configJson, null, 2), "utf8");
  log(`Wrote prefix config to: ${configPath}`);
} catch (err) {
  fail(`Failed to write config file: ${err.message}`);
}

console.log(`✅ Bootstrap CSS built successfully at: ${outCss}`);
