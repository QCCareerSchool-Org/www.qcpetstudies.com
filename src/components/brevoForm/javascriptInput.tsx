'use client';

import type { FC } from 'react';
import { useLayoutEffect, useState } from 'react';

interface Props {
  name?: string;
}

type Value = 'enabled' | 'disabled';

export const JavasciptInput: FC<Props> = ({ name }) => {
  const [ value, setValue ] = useState<Value>('disabled');

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue('enabled');
  }, []);

  return (
    <input type="hidden" name={name ?? 'javascript'} value={value} />
  );
};
