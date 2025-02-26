import * as Bun from 'bun'
import path from 'path'

(async() => {
  Bun.build({
    sourcemap: 'external',
    entrypoints: ['index.js'],
    outdir: path.resolve('dist'),
    minify: {
      identifiers: false,
      whitespace: false ,
      syntax: false,
    },
  })
})()

