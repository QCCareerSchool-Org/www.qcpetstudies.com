import type { CSSProperties, FC, PropsWithChildren } from 'react';

type Props = {
  background: CSSProperties['background'];
  color: CSSProperties['color'];
  className?: string;
  style?: CSSProperties;
};

export const AuxNavBar: FC<PropsWithChildren<Props>> = ({ background, color, className, style, children }) => (
  <div className={className} style={{ width: '100%', padding: '0.5rem 0', background, color, ...style }}>
    <div className="container">
      {children}
    </div>
  </div>
);
