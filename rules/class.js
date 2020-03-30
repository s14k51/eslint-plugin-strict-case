module.exports = function strictClassCase(context) {
  return {
    ClassDeclaration(node) {
      const idNode = node.id;
      const { name } = idNode;

      if (!/^[A-Z]/.test(name)) {
        context.report({
          node: idNode,
          message: 'Class names must start with an uppercase letter',
        });
      }
    },
  };
};
