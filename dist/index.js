// foo.js
var c = false;
if (typeof window != "undefined")
  try {
    d = {
      get passive() {
        return c = true, true;
      }
    };
    window.addEventListener("test", null, d), window.removeEventListener("test", null, d);
  } catch (e) {
    c = false;
  }
var d;
function foo() {
  console.log("foo");
}

// bar.js
function d() {
  console.log("bar");
}
function bar() {
  d();
}

// index.js
foo();
bar();
console.log("Hello via Bun!");

//# debugId=5667FAA9E988ED7564756E2164756E21
