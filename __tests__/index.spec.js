const path = require('path');
const fs = require('fs');
const { rules, configs } = require('..');

const rulesDirectory = path.join(__dirname, '../rules');
const ruleFiles = fs.readdirSync(rulesDirectory).map((file) => file.slice(0, file.indexOf('.js')));

test('recommended config should set es6 env', () => {
  expect(configs.recommended.env.es6).toStrictEqual(true);
});

test('recommended config should define correct plugin', () => {
  expect(configs.recommended.plugins).toStrictEqual(['strict-case']);
});

test('recommended config should contain all the rules', () => {
  const { recommended: { rules: recommendedRules } } = configs;

  ruleFiles.forEach((rule) => {
    expect(recommendedRules).toHaveProperty(`strict-case/${rule}`);
  });
  Object.keys(recommendedRules).forEach((rule) => {
    expect(recommendedRules[rule]).toStrictEqual('error');
  });
});

test('plugin should export all rules', () => {
  ruleFiles.forEach((rule) => {
    expect(rules).toHaveProperty(rule);
  });
});
