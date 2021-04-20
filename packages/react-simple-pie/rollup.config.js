import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";

const pkg = require("./package.json");

let cjs;

cjs = [
  {
    input: "modules/index.ts",
    output: [
      {
        file: `cjs/${pkg.name}.js`,
        sourcemap: true,
        format: "cjs",
      },
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
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
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      uglify(),
    ],
    external: ["react", "react-dom"],
  },
];

export default cjs;
