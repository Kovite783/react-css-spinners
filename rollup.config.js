const dist = 'dist'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs' // cjs:commonjs, esm: es6 syntax
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm' // esm: es module
    },
    {
      name: 'reactCssSpinner',
      file: `${dist}/bundle.umd.js`,
      format: 'umd'
    }
  ]
}

/// output:
// dist
// - bundle.cjs.js for commonjs
// - bundle.esm.js for es6
// - bundle.umd.js
