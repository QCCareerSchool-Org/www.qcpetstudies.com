'use client';

import type { FC, MouseEventHandler } from 'react';

import styles from './index.module.css';
import globalStyles from '../global.module.css';

type Props = {
  text: string;
};

export const BlueskyShare: FC<Props> = ({ text }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const href = target.href;
    window.open(href, 'Share on Bluesky', 'width=640, height=536');
  };

  return <a onClick={handleClick} href={`https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer" className={`${globalStyles.button} ${styles.button}`}>Share on Bluesky</a>;
};
