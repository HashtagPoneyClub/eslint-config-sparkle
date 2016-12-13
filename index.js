/**
 * Base configuration.
 * @module index
 */

module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/ecmascript-6.js',
    './rules/node.js',
    './rules/possible-errors.js',
    './rules/stylistic-issues.js',
    './rules/variables.js'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    strict: ['error', 'global']
  }
};
