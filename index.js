const _ = require('non-existent-pacge');

function greet(name) {
  // This uses a lodash function.
  // We'll intentionally break it by downgrading lodash to a version where this doesn't work,
  // or by importing something that doesn't exist.
  return _.capitalize(name);
}

module.exports = { greet };
