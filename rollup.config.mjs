import typescript from "@rollup/plugin-typescript";
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";


export default {
	input: "./src/index.ts",
	output: {
		sourcemap: true,
		file: "./build/index.js",
		format: "cjs",
	},
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
    getBabelOutputPlugin({
      presets: ['@babel/preset-env']
    })
  ],
};
