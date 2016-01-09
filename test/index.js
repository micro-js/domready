/**
 * Imports
 */

var domready = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  domready(function () {
    t.pass()
  })

  t.plan(1)
})
