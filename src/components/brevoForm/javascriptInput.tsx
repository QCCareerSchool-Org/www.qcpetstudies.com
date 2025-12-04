'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

interface Props {
  name?: string;
}

export const JavasciptInput: FC<Props> = ({ name }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = 'enabled';
    }
  }, []);

  return (
    <input ref={ref} type="hidden" name={name ?? 'javascript'} value="disabled" />
  );
};
