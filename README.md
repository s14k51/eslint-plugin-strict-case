# eslint-plugin-strict-case

Enforce case for variable names.

## Installation

```
$ npm i -D eslint eslint-plugin-strict-case
```

or

```
$ yarn add -D eslint eslint-plugin-strict-case
```

**Note:** If you installed ESLint globally then you must also install `eslint-plugin-strict-case` globally.

## Usage

In your `.eslintrc`, set the `es6` environment configuration, add `strict-case` to the plugins section, and configure the rules you want to use under the `rules` section.

```json
{
    "env": {
        "es6": true,
    },
    "plugins": [
        "strict-case"
    ],
    "rules": {
        "strict-case/class": "error"
    }
}
```

Or you can use the recommended configuration instead.

```json
{
    "extends": [
        "plugin:strict-case/recommended"
    ]
}
```

## Supported Rules

1. `strict-case/class`: Checks if the name of a class starts with an uppercase letter.
