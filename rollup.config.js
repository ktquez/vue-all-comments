import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import VueLoader from 'rollup-plugin-vue'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    VueLoader(),
    uglify(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  dest: 'dist/vue-all-comments.min.js'
}
