'use client';

import Link from 'next/link';
import type { FC } from 'react';

import styles from './fixedNav.module.scss';
import { Logo } from '@/components/logo';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollPosition } from '@/hooks/useScrollPosition';

type Props = {
  buttonHref?: string;
  buttonContent?: JSX.Element | string;
};

export const FixedNav: FC<Props> = ({ buttonHref = '#', buttonContent }) => {
  const scrollPosition = useScrollPosition();
  const screenWidth = useScreenWidth();

  const show = shouldShow(screenWidth, scrollPosition);

  return (
    <div className={`${styles.wrapper} ${show ? styles.show : undefined}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Logo inverse height={16} />
        </div>
        <Link href={buttonHref} className={`btn btn-primary ${styles.button}`}>{buttonContent ?? <><span className="d-none d-sm-inline">Get the </span>Free Course Preview</>}</Link>
      </div>
    </div>
  );
};

const shouldShow = (screenWidth: number, scrollPosition: number): boolean => {
  return scrollPosition >= 640;
};
