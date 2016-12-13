/**
 * These rules are only relevant to ES6 environments.
 * @module rules/ecmascript-6
 * @see http://eslint.org/docs/rules/#ecmascript-6
 */

module.exports = {
  ecmaFeatures: {
    // Enable arrow functions:
    arrowFunctions: true,

    // Enable binary literals:
    binaryLiterals: true,

    // Enable let and const (aka block bindings):
    blockBindings: true,

    // Enable classes:
    classes: true,

    // Enable default function parameters:
    defaultParams: true,

    // Enable destructuring:
    destructuring: true,

    // Enable for-of loops:
    forOf: true,

    // Enable generators:
    generators: true,

    // Enable modules and global strict mode:
    modules: true,

    // Enable computed object literal property names:
    objectLiteralComputedProperties: true,

    // Enable duplicate object literal properties in strict mode:
    objectLiteralDuplicateProperties: true,

    // Enable object literal shorthand methods:
    objectLiteralShorthandMethods: true,

    // Enable object literal shorthand properties:
    objectLiteralShorthandProperties: true,

    // Enable octal literals:
    octalLiterals: true,

    // Enable the regular expression u flag:
    regexUFlag: true,

    // Enable the regular expression y flag:
    regexYFlag: true,

    // Enable the rest parameters:
    restParams: true,

    // Enable the spread operator:
    spread: true,

    // Enable super references inside of functions:
    superInFunctions: true,

    // Enable template strings:
    templateStrings: true,

    // Enable code point escapes:
    unicodeCodePointEscapes: true
  },

  rules: {
    // Require braces around arrow function bodies:
    'arrow-body-style': ['error', 'as-needed'],

    // Require parentheses around arrow function arguments:
    'arrow-parens': ['error', 'as-needed'],

    // Require space before/after arrow function's arrow:
    'arrow-spacing': 'error',

    // Verify super() callings in constructors:
    'constructor-super': 'error',

    // Enforce the spacing around the * in generator functions:
    'generator-star-spacing': ['error', 'after'],

    // Disallow modifying variables of class declarations:
    'no-class-assign': 'error',

    // Allow arrow functions where they could be confused with comparisons:
    'no-confusing-arrow': 'off',

    // Disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // Disallow duplicate name in class members:
    'no-dupe-class-members': 'error',

    // Disallow duplicate module imports
    'no-duplicate-imports': 'error',

    // Disallow new operators with the Symbol object:
    'no-new-symbol': 'error',

    // Allow all modules when loaded by import:
    'no-restricted-imports': 'off',

    // Disallow to use this/super before super() calling in constructors:
    'no-this-before-super': 'error',

    // Disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructors:
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name:
    'no-useless-rename': 'error',

    // Require let or const instead of var:
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals (off by default):
    'object-shorthand': ['error', 'always'],

    // Don't require arrow functions as callbacks:
    'prefer-arrow-callback': 'off',

    // Suggest using const declaration for variables that are never modified after declared:
    'prefer-const': 'error',

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals:
    'prefer-numeric-literals': 'error',

    // Suggest using the spread operator instead of .apply():
    'prefer-spread': 'error',

    // Suggest using template literals instead of strings concatenation:
    'prefer-template': 'error',

    // Require generator functions to contain yield:
    'require-yield': 'error',

    // Enforce spacing between rest and spread operators and their expressions:
    'rest-spread-spacing': ['error', 'never'],

    // Don't enforce sorted import declarations within modules:
    'sort-imports': 'off',

    // Require symbol descriptions:
    'symbol-description': 'error',

    // Disallow spacing around embedded expressions of template strings:
    'template-curly-spacing': ['error', 'never'],

    // Require spacing after the * in yield* expressions:
    'yield-star-spacing': ['error', 'after']
  }
};
