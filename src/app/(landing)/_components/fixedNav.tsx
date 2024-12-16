'use client';

import Link from 'next/link';
import type { FC } from 'react';

import styles from './fixedNav.module.scss';
import SmallLogo from './logo-sm.svg';
import QCIcon from './qc.svg';
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
        <HeaderLogo />
        <Link href={buttonHref} className={`btn btn-primary ${styles.button}`}>{buttonContent ?? <><span className="d-none d-sm-inline">Get the </span>Free Course Preview</>}</Link>
      </div>
    </div>
  );
};

const shouldShow = (screenWidth: number, scrollPosition: number): boolean => {
  return scrollPosition >= 640;
};

const HeaderLogo: FC = () => (
  <div className={styles.headerLogo}>
    <div className={styles.fullLogo}>
      <Logo inverse height={16} />
    </div>
    <div className={styles.smallLogo}>
      <SmallLogo height={18} className="me-2" /><QCIcon height={16} />
    </div>
  </div>
);
