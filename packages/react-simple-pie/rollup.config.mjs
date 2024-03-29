import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: `dist/index.min.js`,
      sourcemap: true,
      format: "esm",
    },
    {
      file: `dist/index.min.cjs`,
      sourcemap: true,
      format: "cjs",
    },
  ],
  plugins: [
    terser(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
  ],
  external: ["react", "react-dom"],
};
