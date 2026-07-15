import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // Deliberate one-time sync of browser/DOM state into React state on
      // mount (matchMedia, hydration-safe "mounted" flags, scroll listeners)
      // is used throughout the motion + theme system.
      "react-hooks/set-state-in-effect": "off",
    },
  }),
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
