import type { FC } from 'react';

import StarIcon from './star-icon.svg';
import styles from './star.module.css';

type Props = {
  filled?: boolean;
};

export const Star: FC<Props> = ({ filled }) => (
  <span className={`${styles.star} ${filled ? styles.filled : ''}`}><StarIcon /></span>
);
