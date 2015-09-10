# promise-and

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> The AND (&&) operator for promises

## Installation

Install `promise-and` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-and
```

## Usage

### Module usage

```javascript
var and = require('promise-and');

and(Promise.resolve(true), Promise.resolve(false))
  .then(function (val) {
    // val === false
  });
```

## API

### `and(...args)`

| Name | Type | Description |
|------|------|-------------|
| `...args` | `Mixed`| Values to run && between |

Returns: `Promise`, which resolves to the first "falsey" value among the arguments.

## Related

* [`promise-or`](https://github.com/joakimbeng/promise-or)
* [`promise-not`](https://github.com/joakimbeng/promise-not)

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/promise-and
[npm-image]: https://badge.fury.io/js/promise-and.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-and
[travis-image]: https://travis-ci.org/joakimbeng/promise-and.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
