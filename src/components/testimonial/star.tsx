import Image from 'next/image';
import type { FC } from 'react';

import StarIcon from './star-icon.svg';
import styles from './star.module.css';

interface Props {
  filled?: boolean;
}

export const Star: FC<Props> = ({ filled }) => (
  <span className={`${styles.star} ${filled ? styles.filled : ''}`}><Image src={StarIcon} alt="★" /></span>
);
