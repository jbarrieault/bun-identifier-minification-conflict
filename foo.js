var c = !1;
if ("undefined" != typeof window) try {
    // Bun.build() output declares this on the top-level scope,
    // and does not detect the identifier is taken when bundling bar.js
    var d = {
        get passive() {
            return c = !0, !0
        }
    };
    window.addEventListener("test", null, d), window.removeEventListener("test", null, d)
  } catch (e) {
    c = !1
  }

export function foo() {
  console.log('foo')
}
