import type { CSSProperties, FC } from 'react';

type Props = {
  backgroundColor: CSSProperties['backgroundColor'];
  className?: string;
};

export const Overlay: FC<Props> = ({ backgroundColor, className }) => (
  <div className={className} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor }} />
);
