import type { Rule } from 'eslint';

import { checkForSafeGuard } from './checkForSafeGuard';

const HOOK_CALLBACKS = new Set([
  'useEffect',
  'useLayoutEffect',
  'useCallback',
]);

const isHandlerName = (name: string): boolean => /^(handle|on)[A-Z]/u.test(name);

export const noWindowOutsideEffects: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow global `window` during render; allow in hook callbacks and handler-style functions',
    },
    schema: [],
    messages: {
      windowDuringRender: 'Do not reference `window` during render or at module scope.',
    },
  },
  create: context => ({
    Identifier: node => {
      if (node.name !== 'window') {
        return;
      }

      if (checkForHookCallback(node) || checkForHandler(node) || checkForSafeGuard(node)) {
        return;
      }

      // Everything else: report
      context.report({ node, messageId: 'windowDuringRender', data: { location: 'module scope' } });
    },
  }),
};

/**
 * Allow window if any ancestor is a hook callback
 * @param node the current node to check
 * @returns whether the node exists inside a hook callback
 */
const checkForHookCallback = (node: Rule.Node): boolean => {
  let parent: Rule.Node | null = node.parent;
  while (parent) {
    if (parent.type === 'CallExpression') {
      const callee = parent.callee;
      if (callee.type === 'Identifier' && HOOK_CALLBACKS.has(callee.name)) {
        return true;
      }
      if (callee.type === 'MemberExpression' && callee.property.type === 'Identifier' && HOOK_CALLBACKS.has(callee.property.name)) {
        return true;
      }
    }
    parent = parent.parent;
  }
  return false;
};

/**
 * Allow window if any ancestor is a hook callback
 * @param node the current node to check
 * @returns whether the node exists inside a handler function
 */
const checkForHandler = (node: Rule.Node): boolean => {
  let parent: Rule.Node | null = node.parent;
  while (parent) {

    // function expressions and arrow functions
    if (parent.type === 'FunctionExpression' || parent.type === 'ArrowFunctionExpression') {
      let handlerName: string | null = null;

      if (parent.type === 'FunctionExpression' && parent.id?.type === 'Identifier') {
        handlerName = parent.id.name;
      } else if (parent.parent.type === 'VariableDeclarator' && parent.parent.id.type === 'Identifier') {
        handlerName = parent.parent.id.name;
      }

      if (handlerName && isHandlerName(handlerName)) {
        return true;
      }
    }

    // object methods: { handleClick() { window...} } or { handleClick: () => { window...} }
    if (parent.type === 'Property' && parent.key.type === 'Identifier' && isHandlerName(parent.key.name)) {
      return true;
    }

    // anonymous functions passed to addEventListener
    if (parent.type === 'CallExpression' && parent.callee.type === 'MemberExpression' && parent.callee.property.type === 'Identifier' && parent.callee.property.name === 'addEventListener') {
      return true;
    }

    if (parent.type === 'CallExpression' && parent.callee.type === 'Identifier' && parent.callee.name === 'requestAnimationFrame') {
      return true;
    }
    parent = parent.parent;
  }

  return false;
};
