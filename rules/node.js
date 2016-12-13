/**
 * These rules are specific to JavaScript running on Node.js.
 * @module rules/node
 * @see http://eslint.org/docs/rules/#nodejs
 */

module.exports = {
  rules: {
    // Require return statements after callbacks:
    'callback-return': ['error', ['callback', 'cb', 'done', 'next']],

    // Don't require require() calls to be placed at top-level module scope:
    'global-require': 'off',

    // Enforce error handling in callbacks:
    'handle-callback-err': ['error', '^.*(e|E)rr(or)?$'],

    // Disallow mixing regular variable and require declarations:
    'no-mixed-requires': 'error',

    // Disallow use of new operator with the require function:
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename:
    'no-path-concat': 'error',

    // Allow use of process.env:
    'no-process-env': 'off',

    // Disallow process.exit():
    'no-process-exit': 'error',

    // Allow usage of all node modules
    'no-restricted-modules': 'off',

    // Warn about usage of synchronous methods:
    'no-sync': 'warn'
  }
};
