import { useReducer } from 'react';

export const useToggle = (initialState?: boolean): [ value: boolean, toggle: () => void ] => {
  const [ state, dispatch ] = useReducer(s => !s, initialState ?? false);

  return [ state, dispatch ];
};
