const { RuleTester } = require('eslint');
const rule = require('../../rules/class');

const ruleTester = new RuleTester({ env: { es6: true } });

ruleTester.run('strict-class-case', rule, {
  valid: [
    {
      code: 'class H { }',
    },
  ],
  invalid: [
    {
      code: 'class h { }',
      errors: [
        { message: 'Class names must start with an uppercase letter' },
      ],
    },
    {
      code: 'class _ { }',
      errors: [
        { message: 'Class names must start with an uppercase letter' },
      ],
    },
  ],
});
