import globals from "globals";
import packagesConfig from "../../config/eslint.packages.config.mjs";

export default [
  ...packagesConfig,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } }
];
