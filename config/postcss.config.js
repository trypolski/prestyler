module.exports = {
  plugins: [
    require("postcss-prefixer")({
      prefix: process.env.PS_PREFIX || "bs-",
    }),
  ],
};
