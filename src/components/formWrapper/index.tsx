import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

export const FormWrapper: FC<PropsWithChildren> = ({ children }) => <div className={styles.formWrapper}>{children}</div>;
