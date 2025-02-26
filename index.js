import { foo } from "./foo.js" // `var d`, unexported
import { bar } from "./bar.js" // `function d`, unexported

foo()
bar()

console.log("Hello via Bun!");
