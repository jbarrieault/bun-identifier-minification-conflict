# Bun Identifier Minification Conflict

I ran into a problem producing a bundle targeting browsers.

The issue only occurs when the build command is configured with `minify` `identifiers: true`.

The result is a successful build that fails at runtime within a specific imported package with an error `Type d is not a function`.
In the actual app I discovered the issue in, the error had a slightly different token, `d3`.

Turning on identifier minifcation resolves the issue.

The package that deterministically fails with the identifier minifaction is controller by the company I work for, so if there is something its end contributing to the issue, we can address it.

If it's solely a Bun bundling issue, thanks in advance for addressing.

# Steps to Reproduce
`bun install`
`bun bun.config.js`
`open ./index.html` (in a browser)

Result:

The JS bundle fails at runtime:
```
Uncaught TypeError: d is not a function
```


This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
