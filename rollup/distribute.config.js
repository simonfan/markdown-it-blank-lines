const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')

module.exports = {
	input: 'src/index.js',
	output: {
		file: 'index.js',
		dir: 'dist',
		format: 'cjs',
		exports: 'named',
	},
	external: [],
	plugins: [
		babel({
			babelrc: true,
			exclude: 'node_modules/**'
		}),
		resolve(),
		commonjs(),
	]
}
