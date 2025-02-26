# Bun Identifier Minification Collisions

`Bun.build({ minify: false })` is producing output with identifier collisions that error when parsed at runtime:
`Type d is not a function`

Specifically, the issue occurs when setting `minify` with `identifiers: false`. The other `minify` properties can be disabled just fine. Turning _on_ identifier minifcation resolves the issue.

I've reproduced on Bun 1.2.1, 1.2.2, 1.2.4.

# Steps to Reproduce
- Non-bundled, works: `bun index.js`
- Errors: `bun ./dist/index.js`

Or using your browser's JS runtime:
`bun ./index.unbundled.html`
`bun ./index.bundled.html`

`bun run build` to rebuild the bundle.

# Observations
The bundle, `dist/index.js` has a flattened scope—identifiers from all imported module files live at the top-level. Perhaps that's a strategy Bun has good reason for. But it appears `foo.js`'s `var d` promotion to the top-level scope is not noticed when transforming `bar.js`. Thus, the resulting identifier collision.

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
