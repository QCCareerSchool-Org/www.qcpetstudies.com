import { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TextLayout = ({ children }: Props): ReactElement => (
  <main className="textLayout">
    {children}
  </main>
);
