# eslint-config-sparkle

[![NPM version](http://img.shields.io/npm/v/eslint-config-sparkle.svg)](https://www.npmjs.org/package/eslint-config-sparkle)
[![Build Status](https://travis-ci.org/HashtagPoneyClub/eslint-config-sparkle.svg?branch=master)](https://travis-ci.org/HashtagPoneyClub/eslint-config-sparkle)

An opinionated [ESLint](http://eslint.org/) configuration made by [Poneys](https://github.com/HashtagPoneyClub).

## Installation

![](docs/images/sparkle-gallop.gif)

Install ESLint and this config package:

```bash
$ npm install --save-dev eslint eslint-config-sparkle
```

## Usage

![](docs/images/sparkle-read.gif)

 Just add the extends attribute to your `.eslintrc.js`:

```js
module.exports = {
  extends: 'sparkle'
};
```

The base configuration assumes ECMAScript-6. It is meant to be extended on a per-project basis as necessary using ESLint's shareable configs feature. For more details about how shareable configs work, see the [ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

This ruleset enforces neither `env` nor `globals` settings. They are meant to be set individually on every project.

## License

![](docs/images/sparkle-partyhard.gif)

[MIT License](http://opensource.org/licenses/MIT)
