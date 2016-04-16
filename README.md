# node-bear [![NPM version](https://img.shields.io/npm/v/node-bear.svg)](https://npmjs.com/package/node-bear) [![NPM downloads](https://img.shields.io/npm/dm/node-bear.svg)](https://npmjs.com/package/node-bear) [![Build Status](https://img.shields.io/circleci/project/egoist/node-bear/master.svg)](https://circleci.com/gh/egoist/node-bear)

> Get random bear ASCII art. 随机获取「熊」的 ASCII 字符画 ʕ•͡౪•ʔ

## Install

```bash
$ npm install --save node-bear
```

## Usage

```js
const bear = require('node-bear')

bear()
//=> ['ʕ∙ჲ∙ʔ'']

bear({count: 3})
//=> ['˞͛ʕ̡̢̡⚭◞₀͒◟⚭̀ʔ̢̡̢˞͛', 'ʕ•̫͡•ʔ', '(^(エ)^)']

bear.bears
//=> All bears in array
```

## API

### nodeBear([options])

#### options

##### count

Type: `number`<br>
Default: `1`

How many bears you want.

#### return

Type: `array`

The bears ASCII art.

## License

MIT © [EGOIST](https://github.com/egoist)
