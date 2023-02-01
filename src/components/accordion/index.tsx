import type { FC, ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export const Accordion: FC<Props> = ({ id, className, children }) => (
  <div id={id} className={`accordion ${className ?? ''}`}>
    {children}
  </div>
);
