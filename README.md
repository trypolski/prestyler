# Prestyler

## 📚 Table of Contents

- [CLI: Build Bootstrap CSS with Prefixes](#cli-build-bootstrap-css-with-prefixes)
  - [Usage](#cli-build-bootstrap-css-with-prefixes-usage)
  - [CLI Arguments](#cli-build-bootstrap-css-with-prefixes-arguments)

## 🔧 CLI: Build Bootstrap CSS with Prefixes

The Prestyler CLI allows you to generate a CSS file from your SCSS source, prefixing all class names automatically using PostCSS. This is helpful when integrating Bootstrap or shared styles into larger projects to prevent style collisions.

### 📝 Usage

```bash
npx prestyler-build-bs --prefix=<prefix> --input=<input-scss-path> --outDir=<output-directory>
```

### 📌 CLI Arguments

All arguments are optional — sensible defaults are provided for convenience.

| Argument     | Default                            | Description                                                                 |
|--------------|------------------------------------|-----------------------------------------------------------------------------|
| `--prefix`   | `bs-`                              | Prefix to apply to all class names. Useful to namespace your styles and avoid collisions. |
| `--input`    | `src/styles/bootstrap/bootstrap.scss` | Path to the SCSS entry file that will be compiled to CSS.                  |
| `--outDir`   | `prestyler/` (in current directory) | Directory where the prefixed CSS will be written as `bootstrap-prefixed.css`. |

