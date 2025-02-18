import * as Bun from 'bun'
import path from 'path'

(async() => {
  Bun.build({
    sourcemap: 'external',
    entrypoints: ['index.ts'],
    outdir: path.resolve('dist'),
    minify: {
      identifiers: false,
      whitespace: true,
      syntax: true,
    },
  })
})()

