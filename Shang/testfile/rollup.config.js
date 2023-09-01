import cleanup from 'rollup-plugin-cleanup'
import { terser } from 'rollup-plugin-terser'
// import strip from '@rollup/plugin-strip'

export default {
	input: './index.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
    plugins:[
        cleanup(),
        terser(),
        // strip({
        //     labels: ['unittest']
        // })
    ]
};