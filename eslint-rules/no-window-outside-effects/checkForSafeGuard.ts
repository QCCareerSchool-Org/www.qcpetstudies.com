import type { Rule } from 'eslint';

/**
 * typeof window
 */
const isTypeofWindow = (node: Rule.Node | null | undefined): boolean => !!node &&
  node.type === 'UnaryExpression' &&
  node.operator === 'typeof' &&
  node.argument.type === 'Identifier' &&
  node.argument.name === 'window';

/**
 * 'undefined' literal
 */
const isUndefinedLiteral = (node: Rule.Node | null | undefined): boolean => !!node &&
  node.type === 'Literal' &&
  node.value === 'undefined';

/**
 * `undefined` identifier
 */
const isUndefinedIdent = (node: Rule.Node | null | undefined): boolean => !!node &&
  node.type === 'Identifier' &&
  node.name === 'undefined';

/**
 * typeof window !== 'undefined'
 * typeof window != 'undefined'
 * 'undefined' !== typeof window
 * 'undefined' != typeof window
 * window !== undefined
 * window != undefined
 * undefined !== window
 * undefined != window
 *
 * (window assumed *defined* in the truthy branch / first arm)
 */
const isWindowDefinedTest = (test: Rule.Node): boolean => {
  if (test.type === 'BinaryExpression' && (test.operator === '!==' || test.operator === '!=')) {
    const left = test.left as Rule.Node;
    const right = test.right as Rule.Node;

    // typeof window !== 'undefined'
    if (isTypeofWindow(left) && isUndefinedLiteral(right)) {
      return true;
    }

    // 'undefined' !== typeof window
    if (isUndefinedLiteral(left) && isTypeofWindow(right)) {
      return true;
    }

    // window !== undefined
    if (
      left.type === 'Identifier' &&
      left.name === 'window' &&
      isUndefinedIdent(right)
    ) {
      return true;
    }

    // undefined !== window
    if (
      right.type === 'Identifier' &&
      right.name === 'window' &&
      isUndefinedIdent(left)
    ) {
      return true;
    }
  }

  // if (window) { ... }
  if (test.type === 'Identifier' && test.name === 'window') {
    return true;
  }

  // if (!window) { ... } is *not* a "window defined" guard – you probably
  // only want it for guard-return, not for allowing `window` inside the body.
  return false;
};

/**
 * typeof window === 'undefined'
 * typeof window == 'undefined'
 * 'undefined' === typeof window
 * 'undefined' == typeof window
 * window === undefined
 * window == undefined
 * undefined === window
 * undefined == window
 *
 * (window assumed *undefined* when test is true)
 */
const isWindowUndefinedTest = (test: Rule.Node): boolean => {
  if (test.type === 'BinaryExpression' && (test.operator === '===' || test.operator === '==')) {
    const left = test.left as Rule.Node;
    const right = test.right as Rule.Node;

    if (isTypeofWindow(left) && isUndefinedLiteral(right)) {
      return true;
    }

    if (isUndefinedLiteral(left) && isTypeofWindow(right)) {
      return true;
    }

    if (
      left.type === 'Identifier' &&
      left.name === 'window' &&
      isUndefinedIdent(right)
    ) {
      return true;
    }

    if (
      right.type === 'Identifier' &&
      right.name === 'window' &&
      isUndefinedIdent(left)
    ) {
      return true;
    }
  }

  return false;
};

const isAbruptCompletion = (node: Rule.Node): boolean => node.type === 'ReturnStatement' ||
  node.type === 'ThrowStatement' ||
  node.type === 'BreakStatement' ||
  node.type === 'ContinueStatement';

/**
 * Find the nearest statement ancestor for a node.
 */
const getEnclosingStatement = (node: Rule.Node): Rule.Node | null => {
  let cur: Rule.Node | null = node;

  while (cur) {
    switch (cur.type) {
      case 'ExpressionStatement':
      case 'VariableDeclaration':
      case 'IfStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'ForOfStatement':
      case 'WhileStatement':
      case 'DoWhileStatement':
      case 'ReturnStatement':
      case 'ThrowStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'SwitchStatement':
      case 'TryStatement':
      case 'LabeledStatement':
      case 'WithStatement':
        return cur;
      default:
        cur = cur.parent;
    }
  }

  return null;
};

/**
 * Case 2:
 *
 * if (typeof window === 'undefined') {
 *   return; // or break / continue / throw
 * }
 * // here, treat window as "guarded"
 */
const hasGuardReturnBefore = (node: Rule.Node): boolean => {
  const stmt = getEnclosingStatement(node);

  if (stmt?.parent?.type !== 'BlockStatement') {
    return false;
  }

  const block = stmt.parent;
  for (const sibling of block.body) {
    if (sibling === stmt) {
      break;
    }

    if (
      sibling.type === 'IfStatement' &&
      isWindowUndefinedTest(sibling.test as Rule.Node) &&
      !sibling.alternate &&
      // If consequent is a single abrupt statement or a block of abrupt statements
      (
        (isAbruptCompletion(sibling.consequent as Rule.Node)) ||
        (sibling.consequent.type === 'BlockStatement' &&
          sibling.consequent.body.length > 0 &&
          sibling.consequent.body.every(x => isAbruptCompletion(x as Rule.Node)))
      )
    ) {
      return true;
    }
  }

  return false;
};

const isInSubtree = (node: Rule.Node, root: Rule.Node | null): boolean => {
  if (!root) {
    return false;
  }

  let cur: Rule.Node | null = node;

  while (cur) {
    if (cur === root) {
      return true;
    }
    cur = cur.parent;
  }

  return false;
};

/**
 * Check if any ancestor / previous statement enforces a guard
 * guaranteeing window exists.
 */
export const checkForSafeGuard = (node: Rule.Node): boolean => {
  // Special case: typeof window is always safe; you probably don't want to
  // report the `window` used *inside* the typeof.
  if (node.parent?.type === 'UnaryExpression' && node.parent.operator === 'typeof') {
    return true;
  }

  // Case 1: ancestor IfStatement / ConditionalExpression / LogicalExpression
  // with a "window defined" guard, and this node is in the guarded branch.
  let parent: Rule.Node | null = node.parent;

  while (parent) {
    if (parent.type === 'IfStatement') {
      const test = parent.test as Rule.Node;

      // if (typeof window !== 'undefined') { /* node here is safe */ }
      // if (typeof window !== 'undefined' && something) { /* node here is safe */ }
      if (
        (
          isWindowDefinedTest(test) ||
          (test.type === 'LogicalExpression' &&
            test.operator === '&&' &&
            isWindowDefinedTest(test.left as Rule.Node))
        ) &&
        isInSubtree(node, parent.consequent as Rule.Node)
      ) {
        return true;
      }

      // if (typeof window === 'undefined') { ... } else { /* node here is safe */ }
      if (
        parent.alternate &&
        isWindowUndefinedTest(test) &&
        isInSubtree(node, parent.alternate as Rule.Node)
      ) {
        return true;
      }
    } else if (parent.type === 'ConditionalExpression') {
      const test = parent.test as Rule.Node;

      // typeof window !== 'undefined' ? /* node here safe */ : ...
      // typeof window !== 'undefined' && something ? /* node here safe */ : ...
      if (
        (
          isWindowDefinedTest(test) ||
          (test.type === 'LogicalExpression' &&
            test.operator === '&&' &&
            isWindowDefinedTest(test.left as Rule.Node))
        ) &&
        isInSubtree(node, parent.consequent as Rule.Node)
      ) {
        return true;
      }

      // typeof window === 'undefined' ? ... : /* node here safe */
      if (
        isWindowUndefinedTest(test) &&
        isInSubtree(node, parent.alternate as Rule.Node)
      ) {
        return true;
      }
    } else if (parent.type === 'LogicalExpression') {
      const left = parent.left as Rule.Node;
      const right = parent.right as Rule.Node;

      if (
        // typeof window !== 'undefined' && /* node somewhere in right side */
        parent.operator === '&&' &&
        isWindowDefinedTest(left) &&
        isInSubtree(node, right)
      ) {
        return true;
      }

      if (
        // typeof window === 'undefined' || /* node somewhere in right side */
        parent.operator === '||' &&
        isWindowUndefinedTest(left) &&
        isInSubtree(node, right)
      ) {
        return true;
      }
    }

    parent = parent.parent;
  }

  // Case 2: guard-return earlier in the same block
  if (hasGuardReturnBefore(node)) {
    return true;
  }

  return false;
};
