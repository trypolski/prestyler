#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

const defaultConfigPath = path.join(process.cwd(), "prestyler", "prestyler.config.json");
const configExists = fs.existsSync(defaultConfigPath);

if (configExists) {
  log(`Using existing config at: ${defaultConfigPath}`);
} else {
  log(`No config found, will create at: ${defaultConfigPath}`);
}

function getPrefix() {
  if (configExists) {
    try {
      const config = JSON.parse(fs.readFileSync(defaultConfigPath, "utf8"));
      if (config && typeof config.prefix === "string") {
        return config.prefix;
      }
    } catch (e) {
      // Ignore parse errors and fallback to default
    }
  }
  // Default prefix if config not found or invalid
  return "bs-";
}

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

const prefix = parseArg("prefix", getPrefix());
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

try {
  const configJson = { prefix };
  // If config does not exist, create it in prestyler directory
  if (!fs.existsSync(defaultConfigPath)) {
    const prestylerDir = path.dirname(defaultConfigPath);
    if (!fs.existsSync(prestylerDir)) {
      fs.mkdirSync(prestylerDir, { recursive: true });
    }
    fs.writeFileSync(defaultConfigPath, JSON.stringify(configJson, null, 2), "utf8");
    log(`Created new prefix config at: ${prestylerDir}`);
  }
} catch (err) {
  fail(`Failed to write config file: ${err.message}`);
}

console.log(`✅ Bootstrap CSS built successfully at: ${outCss}`);
