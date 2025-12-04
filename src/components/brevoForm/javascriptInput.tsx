'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface Props {
  name?: string;
}

export const JavasciptInput: FC<Props> = ({ name }) => {
  const [ enabled, setEnabled ] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setEnabled(true);
    });
  }, []);

  return (
    <input type="hidden" name={name ?? 'javascript'} value={enabled ? 'enabled' : 'disabled'} />
  );
};
