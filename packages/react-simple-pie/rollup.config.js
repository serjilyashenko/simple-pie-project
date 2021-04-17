import json from "@rollup/plugin-json";
const { uglify } = require("rollup-plugin-uglify");

const pkg = require("./package.json");

let cjs;

cjs = [
  {
    input: "modules/index.js",
    output: {
      file: `cjs/${pkg.name}.js`,
      sourcemap: true,
      format: "cjs",
    },
    plugins: [json()],
  },
  {
    input: "modules/index.js",
    output: {
      file: `cjs/${pkg.name}.min.js`,
      sourcemap: true,
      format: "cjs",
    },
    plugins: [json(), uglify()],
  },
];

module.exports = cjs;
