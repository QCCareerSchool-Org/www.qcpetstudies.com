import { useEffect, useRef } from 'react';

export const usePrevious = <T = unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
