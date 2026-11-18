'use client';

import type { FC, PropsWithChildren, SyntheticEvent } from 'react';
import { useState } from 'react';

export const Transcript: FC<PropsWithChildren> = ({ children }) => {
  const [ open, setOpen ] = useState(false);

  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement>): void => {
    setOpen(e.currentTarget.open);
  };

  return (
    <details className="mt-3" onToggle={handleToggle}>
      <summary className="fw-bold">{open ? 'Hide transcript' : 'Show transcript'}</summary>
      <div className="mt-3">{children}</div>
    </details>
  );
};
