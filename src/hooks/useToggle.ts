import { useState } from 'react';

export const useToggle = (initial = false): readonly [ boolean, () => void ] => {
  const [ state, dispatch ] = useState(initial);
  const toggle = (): void => {
    dispatch(s => !s);
  };
  return [ state, toggle ] as const;
};
