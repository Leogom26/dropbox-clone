const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "source-map", // Mais rápido e com bom suporte a debug
};
