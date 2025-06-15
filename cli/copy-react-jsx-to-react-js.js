const fs = require("fs");
const path = require("path");
const glob = require("glob");
const mkdirp = require("mkdirp");

const SRC_DIR = path.resolve(__dirname, "../src/react-jsx");
const DEST_DIR = path.resolve(__dirname, "../src/react-js");

const files = glob.sync("**/*.{js,jsx}", {
  cwd: SRC_DIR,
  ignore: ["**/*.test.jsx", "**/*.spec.jsx", "**/*.stories.jsx"]
});

files.forEach(file => {
  const srcPath = path.join(SRC_DIR, file);
  const destPath = path.join(DEST_DIR, file.replace(/\.jsx$/, ".js"));

  mkdirp.sync(path.dirname(destPath));

  const contents = fs.readFileSync(srcPath, "utf8");
  fs.writeFileSync(destPath, contents, "utf8");

  console.log(`✅ Copied: ${file} → ${destPath.replace(process.cwd(), ".")}`);
});
