import type { Ref } from 'react';

export const mergeRefs = <T>(...refs: (Ref<T> | undefined)[]) => {
  return (node: T | null) => {
    refs.forEach(ref => {
      if (!ref) { return; }
      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    });
  };
};
