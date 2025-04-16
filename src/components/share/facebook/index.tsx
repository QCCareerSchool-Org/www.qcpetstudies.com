'use client';

import type { FC, MouseEventHandler } from 'react';

import styles from './index.module.css';
import globalStyles from '../global.module.css';

type Props = {
  url: string;
};

export const FacebookShare: FC<Props> = ({ url }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const href = target.href;
    window.open(href, 'Share on Facebook', 'width=640, height=536');
  };

  return <a onClick={handleClick} href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_window" className={`${globalStyles.button} ${styles.button}`}>Share on Facebook</a>;
};
