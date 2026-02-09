import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

export const FormCard: FC<PropsWithChildren> = ({ children }) => (
  <div className={`card bg-white ${styles.card}`}>
    <div className="card-body">{children}</div>
  </div>
);
