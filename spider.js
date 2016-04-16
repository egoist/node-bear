'use strict'
const Fs = require('fs')
const aimer = require('aimer')
const flatten = require('lodash.flatten')

const spider = (page) => {
  return new Promise(resolve => {
    console.log(`fetching page ${page}...`)
    aimer(`http://japaneseemoticons.me/bear-emoticons/${page}/`, {decodeEntities: false})
      .then($ => {
        const ret = []
        $('.copyjava td').each(function () {
          const bear = $(this).html()
          if (bear) {
            ret.push(bear)
          }
        })
        resolve(ret)
      })
  })
}

Promise.all([1, 2, 3, 4, 5].map(page => spider(page)))
  .then(ret => {
    Fs.writeFileSync('bears.json', JSON.stringify(flatten(ret), null, 2), 'utf8')
    console.log('done!')
  })
