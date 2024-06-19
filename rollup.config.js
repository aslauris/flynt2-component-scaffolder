import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import pkg from './package.json' assert { type: "json" };

export default [
	{
		input: 'src/index.js',
		external: ['node:path', 'node:url'],
		output: {
			file: pkg.exports,
            format: 'cjs'
        },
        plugins: [
            del({ targets: 'dist/*' }),
            nodeResolve({ 
                exportConditions: ['node'],
                preferBuiltins: false,
            }), 
            commonjs(),
            json(),
            copy({
                targets: [
                    { src: 'src/plopfile.cjs', dest: 'dist' },
                    { src: 'src/templates/**/*', dest: 'dist/templates' }
                ]
            })
        ]
	},
];