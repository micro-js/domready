/**
 * Modules
 */

var isDomLoaded = require('@f/is-dom-loaded')

/**
 * Expose domready
 */

module.exports = domready

/**
 * Check whether the DOM is ready already, and setup
 * a listener if necessary
 */

var loaded = isDomLoaded()
var fns = []

if (!loaded) {
  document.addEventListener('DOMContentLoaded', function listener () {
    document.removeEventListener('DOMContentLoaded', listener)
    loaded = true
    fns.forEach(function (fn) { fn() })
    fns.length = 0
  })
}

/**
 * domready
 */

function domready (fn) {
  loaded ? setTimeout(fn) : fns.push(fn)
}
