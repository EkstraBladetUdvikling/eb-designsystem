import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["src/**/*.{ts}"] },
  { ignores: ["*.js", "node_modules", "node", "dist", "build", "docs", "docs_src", "svelte", "**/*.d.ts"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
