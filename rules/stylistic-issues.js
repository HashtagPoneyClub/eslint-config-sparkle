/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylistic-issues-es5
 * @see http://eslint.org/docs/rules/#stylistic-issues
 */

module.exports = {
  rules: {
    // Enforce spacing inside array brackets:
    'array-bracket-spacing': ['error', 'never'],

    // Enforce consistent spacing inside single-line blocks:
    'block-spacing': ['error', 'always'],

    // Enforce one true brace style:
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],

    // Require camel case names:
    camelcase: ['error', {properties: 'never'}],

    // Disallow or enforce trailing commas:
    'comma-dangle': 'error',

    // Enforce spacing before and after comma:
    'comma-spacing': ['error', {before: false, after: true}],

    // Enforce one true comma style:
    'comma-style': ['error', 'last'],

    // Require or disallow padding inside computed properties:
    'computed-property-spacing': ['error', 'never'],

    // Enforces consistent naming when capturing the current execution context:
    'consistent-this': ['error', 'self'],

    // Enforce newline at the end of file, with no multiple empty lines:
    'eol-last': 'error',

    // Disallow spacing between function identifiers and their invocations:
    'func-call-spacing': ['error', 'never'],

    // Require function names to match the name of the variable or property to which they are assigned:
    'func-name-matching': 'error',

    // Don't require function expressions to have a name:
    'func-names': 'off',

    // Enforces use of function declarations or expressions:
    'func-style': ['error', 'declaration'],

    // Allow all identifiers:
    'id-blacklist': 'off',

    // Don't enforce minimum and maximum identifier lengths:
    'id-length': 'off',

    // Don't require identifiers to match a specified regular expression:
    'id-match': 'off',

    // This option sets a specific tab width for your code:
    indent: ['error', 2],

    // Enforces spacing between keys and values in object literal properties:
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],

    // Enforce consistent spacing before and after keywords:
    'keyword-spacing': ['error', {before: true, after: true}],

    // Don't enforce position of line comments:
    'line-comment-position': 'off',

    // Disallow mixed 'LF' and 'CRLF' as linebreaks:
    'linebreak-style': 'off',

    // Enforces empty lines around comments:
    'lines-around-comment': ['error', {beforeBlockComment: true}],

    // Require newlines around directives:
    'lines-around-directive': ['error', 'always'],

    // Enforce a maximum depth that blocks can be nested:
    'max-depth': ['error', 4],

    // Enforce a maximum line length:
    'max-len': ['error', 120],

    // Don't enforce enforce a maximum number of lines per file:
    'max-lines': 'off',

    // Specify the maximum depth callbacks can be nested:
    'max-nested-callbacks': ['error', 3],

    // enforce a maximum number of parameters in function definitions:
    'max-params': ['error', 10],

    // Enforce a maximum number of statements allowed per line:
    'max-statements-per-line': ['error', {max: 2}],

    // Enforce a maximum number of statements allowed in function blocks:
    'max-statements': ['error', 15],

    // Don't enforce newlines between operands of ternary expressions:
    'multiline-ternary': 'off',

    // Require a capital letter for constructors:
    'new-cap': ['error', {newIsCap: true}],

    // Disallow the omission of parentheses when invoking a constructor with no arguments:
    'new-parens': 'error',

    // Allow/disallow an empty newline after var statement:
    'newline-after-var': 'off',

    // Don't require an empty line before return statements:
    'newline-before-return': 'off',

    // Don't require a newline after each call in a method chain:
    'newline-per-chained-call': 'off',

    // Disallow use of the Array constructor:
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators:
    'no-bitwise': 'error',

    // Disallow use of the continue statement:
    'no-continue': 'error',

    // Allow comments inline after code:
    'no-inline-comments': 'off',

    // Disallow if as the only statement in an else block:
    'no-lonely-if': 'error',

    // Allow mixed binary operators:
    'no-mixed-operators': 'off',

    // Disallow mixed spaces and tabs for indentation:
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple empty lines:
    'no-multiple-empty-lines': 'error',

    // Disallow negated conditions:
    'no-negated-condition': 'error',

    // Disallow nested ternary expressions:
    'no-nested-ternary': 'error',

    // Disallow use of the Object constructor:
    'no-new-object': 'error',

    // Disallow the unary operators ++ and --:
    'no-plusplus': 'error',

    // Disallow specified syntax:
    'no-restricted-syntax': ['error', 'WithStatement'],

    // Disallow all tabs:
    'no-tabs': 'error',

    // Disallow the use of ternary operators:
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines:
    'no-trailing-spaces': 'error',

    // Allow dangling underscores in identifiers:
    'no-underscore-dangle': 'off',

    // Disallow the use of Boolean literals in conditional expressions:
    'no-unneeded-ternary': 'error',

    // Disallow whitespace before properties:
    'no-whitespace-before-property': 'error',

    // Don't enforce consistent line breaks inside braces:
    'object-curly-newline': 'off',

    // Require or disallow padding inside curly braces:
    'object-curly-spacing': ['error', 'never'],

    // Enforce placing object properties on separate lines:
    'object-property-newline': ['error', {allowMultiplePropertiesPerLine: true}],

    // Allow or disallow one variable declaration per function:
    'one-var': ['error', 'never'],

    // Require assignment operator shorthand where possible or prohibit it entirely:
    'operator-assignment': ['error', 'always'],

    // Enforce operators to be placed before or after line breaks:
    'operator-linebreak': ['error', 'after'],

    // Enforce padding within blocks:
    'padded-blocks': 'off',

    // Require quotes around object literal property names:
    'quote-props': ['error', 'as-needed'],

    // Specify whether backticks, double or single quotes should be used:
    quotes: ['error', 'single'],

    // Don't require JSDoc comments:
    'require-jsdoc': 'off',

    // Enforce spacing before and after semicolons:
    'semi-spacing': ['error', {before: false, after: true}],

    // Require or disallow use of semicolons instead of ASI:
    semi: ['error', 'always'],

    // Don't sort variables within the same declaration block:
    'sort-vars': 'off',

    // Require or disallow space before blocks:
    'space-before-blocks': ['error', 'always'],

    // Require or disallow space before function opening parenthesis:
    'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],

    // Require or disallow spaces inside parentheses:
    'space-in-parens': ['error', 'never'],

    // Require spaces around operators:
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default):
    'space-unary-ops': ['error', {words: true, nonwords: false}],

    // Require or disallow a space immediately following the // or /* in a comment:
    'spaced-comment': ['error', 'always'],

    // Disallow Unicode byte order mark (BOM):
    'unicode-bom': ['error', 'never'],

    // Require regex literals to be wrapped in parentheses:
    'wrap-regex': 'off'
  }
};
