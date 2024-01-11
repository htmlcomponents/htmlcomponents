import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "scripts/create-project/create-project-dev.js",
  output: {
    file: "scripts/create-project/create-project.js",
    format: "es",
  },
  plugins: [nodeResolve(), commonjs()],
});
