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

var fns = []

if (!isDomLoaded()) {
  document.addEventListener('DOMContentLoaded', function listener () {
    document.removeEventListener('DOMContentLoaded', listener)

    if (!isDomLoaded()) {
      window.addEventListener('load', function loadListener () {
        onLoad()
        window.removeEventListener('load', loadListener)
      })
    } else {
      onLoad()
    }
  })
}

function onLoad () {
  fns.forEach(function (fn) { fn() })
  fns.length = 0
}

/**
 * domready
 */

function domready (fn) {
  isDomLoaded() ? setTimeout(fn) : fns.push(fn)
}
