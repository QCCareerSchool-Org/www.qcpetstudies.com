import type { TSESTree } from '@typescript-eslint/utils';
import type { Rule } from 'eslint';

export const noJSXTrailingTextSpace: Rule.RuleModule = {
  meta: {
    type: 'layout',
    fixable: 'whitespace',
    messages: {
      trailing: 'Remove trailing whitespace in JSX text.',
    },
  },

  create: context => ({
    JSXText: (node: TSESTree.JSXText) => {
      const match = /[ \t]+$/u.exec(node.value);
      if (!match) {
        return;
      }

      if (node.value.includes('\n')) {
        return;
      }

      if (!/\S/u.test(node.value)) {
        return;
      }

      const textAfterNode = context.sourceCode.text.slice(node.range[1], node.range[1] + 2);

      if (textAfterNode !== '</') {
        return;
      }

      context.report({
        node,
        messageId: 'trailing',
        fix: fixer => fixer.removeRange([
          node.range[1] - match[0].length,
          node.range[1],
        ]),
      });
    },
  }),
};
