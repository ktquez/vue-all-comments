import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import VueLoader from 'rollup-plugin-vue'

export default {
  entry: 'src/index.js',
  plugins: [
    resolve(),
    VueLoader(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  targets: [
    {
      dest: 'dist/vue-all-comments.cjs.js',
      format: 'cjs'
    },
    {
      dest: 'dist/vue-all-comments.es.js',
      format: 'es'
    },
    {
      dest: 'dist/vue-all-comments.amd.js',
      format: 'amd'
    }
  ]
}
