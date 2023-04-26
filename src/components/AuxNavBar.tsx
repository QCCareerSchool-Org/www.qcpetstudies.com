import type { CSSProperties, FC, PropsWithChildren } from 'react';

import styles from './auxNavBar.module.css';

type Props = {
  background: CSSProperties['background'];
  color: CSSProperties['color'];
  className?: string;
  style?: CSSProperties;
};

export const AuxNavBar: FC<PropsWithChildren<Props>> = ({ background, color, className, style, children }) => (
  <div className={`${styles.navbar} ${className ?? ''}`} style={{ background, color, ...style }}>
    <div className="container">
      {children}
    </div>
  </div>
);
