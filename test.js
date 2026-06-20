const { greet } = require('./index.js');
const assert = require('assert');

try {
  assert.strictEqual(greet('world'), 'World');
  console.log("Test passed!");
} catch (e) {
  console.error("Test failed:", e.message);
  process.exit(1);
}
