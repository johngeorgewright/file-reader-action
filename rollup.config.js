import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: "src/main.ts",
  output: {
    esModule: true,
    file: "lib/main.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    nodeResolve({ preferBuiltins: true }),
    typescript()
  ],
};

export default config;
