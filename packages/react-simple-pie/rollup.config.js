const rollupTypescript = require("@rollup/plugin-typescript");
const { uglify } = require("rollup-plugin-uglify");

const pkg = require("./package.json");

let cjs;

cjs = [
  {
    input: "modules/index.ts",
    output: {
      file: `cjs/${pkg.name}.js`,
      sourcemap: true,
      format: "cjs",
    },
    plugins: [
      rollupTypescript({
        allowSyntheticDefaultImports: true,
        rootDir: "modules",
        jsx: "react",
        sourceMap: true,
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "modules/index.ts",
    output: {
      file: `cjs/${pkg.name}.min.js`,
      sourcemap: true,
      format: "cjs",
    },
    plugins: [
      rollupTypescript({
        allowSyntheticDefaultImports: true,
        rootDir: "modules",
        jsx: "react",
        sourceMap: true,
      }),
      uglify(),
    ],
    external: ["react", "react-dom"],
  },
];

module.exports = cjs;
