import type { FC, PropsWithChildren } from 'react';

export const TextLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className="textLayout">
    {children}
  </main>
);
