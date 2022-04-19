import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/SimplePie.tsx",
  output: [
    {
      file: `dist/SimplePie.js`,
      sourcemap: true,
      format: "cjs",
    },
    {
      file: `dist/SimplePie.min.js`,
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
