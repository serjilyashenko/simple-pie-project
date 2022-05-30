import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: `dist/index.js`,
      sourcemap: true,
      format: "cjs",
    },
    {
      file: `dist/index.min.js`,
      sourcemap: true,
      format: "cjs",
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
  ],
  external: ["react", "react-dom"],
};
