import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import type { Rule } from 'eslint';
import type { Node } from 'estree';

const baseRule = tsEslintPlugin.rules['no-unnecessary-condition'] as unknown as Rule.RuleModule | undefined;
if (!baseRule) {
  throw Error('base rule not found');
}

type TraversableNode = Node & {
  parent?: TraversableNode | null;
};

const isTraversableNode = (value: unknown): value is TraversableNode => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    typeof (value as { type: unknown }).type === 'string'
  );
};

const isNode = (key: string, node: TraversableNode): node is TraversableNode & { [key]: TraversableNode | TraversableNode[] | null | undefined } => {
  return key in node;
};

const containsWindow = (node: TraversableNode | null | undefined, context: Rule.RuleContext): boolean => {
  if (!node) {
    return false;
  }

  if (node.type === 'Identifier' && node.name === 'window') {
    return true;
  }

  const keys = context.sourceCode.visitorKeys[node.type] ?? [];

  for (const key of keys) {
    if (!isNode(key, node)) {
      continue;
    }

    const value = node[key];

    if (!value) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const child of value) {
        if (isTraversableNode(child) && containsWindow(child, context)) {
          return true;
        }
      }
    } else if (isTraversableNode(value) && containsWindow(value, context)) {
      return true;
    }
  }

  return false;
};

export const noUnnecessaryConditionExceptWindow: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Same as @typescript-eslint/no-unnecessary-condition, but ignores conditions involving window.',
    },
    schema: [],
    messages: baseRule.meta?.messages,
    hasSuggestions: baseRule.meta?.hasSuggestions,
  },
  create: context => {
    // proxy that inherits from the real context, so parserServices etc. still work
    const proxyContext = Object.create(context) as Rule.RuleContext;

    const originalReport = context.report.bind(context);

    Object.defineProperty(proxyContext, 'report', {
      configurable: true,
      enumerable: false,
      // same type as RuleContext['report'], but we don't need to over-type it
      value: (descriptor: unknown) => {
        if (typeof descriptor !== 'string') {
          const node = (descriptor as { node?: Rule.Node }).node;

          if (node && containsWindow(node as TraversableNode, context)) {
            // swallow any report whose node subtree touches `window`
            return;
          }
        }

        originalReport(descriptor as never);
      },
    });

    // run the original rule with the proxy (with wrapped report)
    return baseRule.create(proxyContext);
  },
};
