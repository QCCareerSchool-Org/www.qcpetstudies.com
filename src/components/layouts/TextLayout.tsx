import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TextLayout: FC<Props> = ({ children }) => (
  <main className="textLayout">
    {children}
  </main>
);
