import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "modules/SimplePie.tsx",
  output: [
    {
      file: `cjs/SimplePie.js`,
      sourcemap: true,
      format: "cjs",
    },
    {
      file: `cjs/SimplePie.min.js`,
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
