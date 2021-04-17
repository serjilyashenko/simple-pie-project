import json from "@rollup/plugin-json";

let config;

config = {
  input: "modules/index.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
  plugins: [json()],
};

module.exports = config;
