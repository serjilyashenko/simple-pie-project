import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/simple-pie.ts",
  output: [
    {
      file: `dist/simple-pie.min.js`,
      sourcemap: true,
      format: "esm",
    },
    {
      file: `dist/simple-pie.min.cjs`,
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
