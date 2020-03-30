const strictClassCase = require('./rules/class');

module.exports = {
  rules: {
    class: strictClassCase,
  },
  configs: {
    recommended: {
      env: {
        es6: true,
      },
      plugins: [
        'strict-case',
      ],
      rules: {
        'strict-case/class': 'error',
      },
    },
  },
};
