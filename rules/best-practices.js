/**
 * These are rules designed to prevent you from making mistakes.
 * @module rules/best-practices
 * @see http://eslint.org/docs/rules/#best-practices
 */

module.exports = {
  rules: {
    // Enforce getter/setter pairs in objects:
    'accessor-pairs': 'error',

    // Enforce return statements in callbacks of array methods:
    'array-callback-return': 'error',

    // Treat var statements as if they were block scoped:
    'block-scoped-var': 'error',

    // Enforce that class methods utilize this:
    'class-methods-use-this': 'error',

    // Specify the maximum cyclomatic complexity allowed in a program:
    complexity: ['error', 6],

    // Require return statements to either always or never specify values:
    'consistent-return': 'error',

    // Specify curly brace conventions for all control statements
    curly: [2, 'all'],

    // Require default case in switch statements:
    'default-case': 'error',

    // Enforces consistent newlines before or after dots:
    'dot-location': ['error', 'property'],

    // Encourages use of dot notation whenever possible
    'dot-notation': ['error', {allowKeywords: true}],

    // Require the use of === and !==
    eqeqeq: 'error',

    // Make sure for-in loops have an if statement:
    'guard-for-in': 'error',

    // Disallow the use of alert, confirm, and prompt:
    'no-alert': 'error',

    // Disallow use of arguments.caller or arguments.callee:
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses:
    'no-case-declarations': 'error',

    // Disallow division operators explicitly at beginning of regular expression:
    'no-div-regex': 'error',

    // Disallow else after a return in an if:
    'no-else-return': 'error',

    // Disallow empty functions:
    'no-empty-function': 'error',

    // Disallow empty destructuring patterns:
    'no-empty-pattern': 'error',

    // Disallow comparisons to null without a type-checking operator:
    'no-eq-null': 'error',

    // Disallow use of eval():
    'no-eval': 'error',

    // Disallow adding to native types:
    'no-extend-native': 'error',

    // Disallow unnecessary function binding:
    'no-extra-bind': 'error',

    // Disallow unnecessary labels:
    'no-extra-label': 'error',

    // Disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // Disallow the use of leading or trailing decimal points in numeric literals:
    'no-floating-decimal': 'error',

    // Disallow assignments to native objects or read-only global variables:
    'no-global-assign': 'error',

    // Disallow shorthand type conversions:
    'no-implicit-coercion': 'error',

    // Disallow variable and function declarations in the global scope:
    'no-implicit-globals': 'error',

    // Disallow this keywords outside of classes or class-like objects:
    'no-invalid-this': 'error',

    // Disallow use of eval()-like methods:
    'no-implied-eval': 'error',

    // Disallow usage of __iterator__ property:
    'no-iterator': 'error',

    // Disallow use of labeled statements:
    'no-labels': 'error',

    // Disallow unnecessary nested blocks:
    'no-lone-blocks': 'error',

    // Disallow creation of functions within loops:
    'no-loop-func': 'error',

    // Allow magic numbers:
    'no-magic-numbers': 'off',

    // Disallow use of multiple spaces:
    'no-multi-spaces': 'error',

    // Disallow use of multiline strings:
    'no-multi-str': 'error',

    // Disallow use of new operator for Function object:
    'no-new-func': 'error',

    // Disallows creating new instances of String, Number, and Boolean:
    'no-new-wrappers': 'error',

    // Disallow use of new operator when not part of the assignment or comparison:
    'no-new': 'error',

    // Disallow use of octal escape sequences in string literals, such as "Copyright \251":
    'no-octal-escape': 'error',

    // Disallow use of octal literals:
    'no-octal': 'error',

    // Allow reassignment of function parameters:
    'no-param-reassign': 'off',

    // Disallow usage of __proto__ property:
    'no-proto': 'error',

    // Disallow declaring the same variable more than once:
    'no-redeclare': 'error',

    // Disallow certain properties on certain objects:
    'no-restricted-properties': [
      'error',
      {
        object: 'describe',
        property: 'only',
        message: 'Unexpected exclusive mocha test (remove .only)'
      },
      {
        object: 'test',
        property: 'only',
        message: 'Unexpected exclusive tape test (remove .only)'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead'
      }
    ],

    // Disallow use of assignment in return statement:
    'no-return-assign': 'error',

    // Disallow use of javascript: urls:
    'no-script-url': 'error',

    // Disallow comparisons where both sides are exactly the same:
    'no-self-compare': 'error',

    // Disallow use of comma operator:
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception:
    'no-throw-literal': 'error',

    // Disallow unmodified loop conditions:
    'no-unmodified-loop-condition': 'error',

    // Disallow usage of expressions in statement position:
    'no-unused-expressions': 'error',

    // Disallow unused labels:
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to .call() and .apply():
    'no-useless-call': 'error',

    // Disallow unnecessary concatenation of literals or template literals:
    'no-useless-concat': 'error',

    // Disallow unnecessary escape characters:
    'no-useless-escape': 'error',

    // Disallow redundant return statements:
    'no-useless-return': 'error',

    // Disallow use of void operator:
    'no-void': 'error',

    // Warn about usage of warning terms in comments:
    'no-warning-comments': ['warn', {
      terms: ['todo', '@todo', 'fixme', '@fixme', 'refactor', '@refactor'],
      location: 'start'
    }],

    // Disallow use of the with statement:
    'no-with': 'error',

    // Require use of the second argument for parseInt():
    radix: 'error',

    // Require var declarations be placed at the top of their containing scope:
    'vars-on-top': 'error',

    // Require immediate function invocation to be wrapped in parentheses:
    'wrap-iife': ['error', 'inside'],

    // Disallow Yoda conditions:
    yoda: ['error', 'never']
  }
};
