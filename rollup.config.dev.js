import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import VueLoader from 'rollup-plugin-vue'

export default {
  entry: 'example/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    VueLoader({
      css: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  dest: 'example/bundle.js'
}
