/**
 * These rules have to do with variable declarations.
 * @module rules/variables
 * @see http://eslint.org/docs/rules/#variables
 */

module.exports = {
  rules: {
    // Don't require initialization in variable declarations:
    'init-declarations': 'off',

    // Disallow the catch clause parameter name being the same as a variable in the outer scope:
    'no-catch-shadow': 'error',

    // Disallow deletion of variables:
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable:
    'no-label-var': 'error',

    // Allow all global variables:
    'no-restricted-globals': 'off',

    // Disallow shadowing of names such as arguments:
    'no-shadow-restricted-names': 'error',

    // Disallow declaration of variables already declared in the outer scope:
    'no-shadow': 'error',

    // Disallow use of undefined when initializing variables:
    'no-undef-init': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block:
    'no-undef': 'error',

    // Disallow use of undefined variable (off by default):
    'no-undefined': 'error',

    // Disallow declaration of variables that are not used in the code:
    'no-unused-vars': 'error',

    // Disallow use of variables before they are defined (but allow hoisted functions):
    'no-use-before-define': ['error', {functions: false}]
  }
};
