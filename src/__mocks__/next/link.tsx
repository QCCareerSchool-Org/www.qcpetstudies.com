import { ReactElement, ReactNode } from 'react';

type Props = {
  src: string;
  children: ReactNode;
};

const Link = ({ children }: Props): ReactElement => <>{children}</>;

export default Link;
