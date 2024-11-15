import type { FC, PropsWithChildren } from 'react';

type Props = {
  src: string;
};

const Link: FC<PropsWithChildren<Props>> = ({ children }) => <>{children}</>;

export default Link;
