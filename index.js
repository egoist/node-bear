'use strict'
var random = require('node-random-number')
var bears = require('./bears')

module.exports = function (opts) {
  opts = opts || {}
  var count = opts.count || 1
  var indexes = random({start: 0, end: bears.length, count: count})
  var ret = []
  indexes.forEach(function (index) {
    ret.push(bears[index])
  })
  return ret
}

module.exports.bears = bears
