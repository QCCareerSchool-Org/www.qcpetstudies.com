import { FC, ReactNode } from 'react';

type Props = {
  src: string;
  children: ReactNode;
};

const Link: FC<Props> = ({ children }) => <>{children}</>;

export default Link;
