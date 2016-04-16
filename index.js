'use strict'
var random = require('node-random-number')
var bears = require('./bears')

module.exports = function (opts) {
  opts = opts || {}
  var count = opts.count || 1
  var indexes = random({start: 0, end: bears.length, count: count})
  return indexes.map(function (index) {
    return bears[index]
  })
}

module.exports.bears = bears
