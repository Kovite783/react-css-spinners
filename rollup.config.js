import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const dist = 'dist'
const bundle = 'bundle'
const production = !process.env.ROLLUP_WATCH // if process.env.ROLLUP_WATCH = true we are dev else prod

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs' // cjs:commonjs, esm: es6 syntax
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm' // esm: es module
    },
    {
      name: 'reactCssSpinner',
      file: `${dist}/${bundle}.umd.js`,
      globale: {
        react: 'React' // refer to React in our import file
      },
      format: 'umd'
    }
  ],
  plugins: [
    resolve(), // resolve the dependencies
    babel({
      exclude: 'node_modules/**' // exclude node modules
    }),
    production && terser()
  ],
  // indicate which modules should be treated as external
  external: ['react']
}

/// output:
// dist
// - bundle.cjs.js for commonjs
// - bundle.esm.js for es6
// - bundle.umd.js
