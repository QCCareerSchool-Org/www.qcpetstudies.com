'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import styles from './fixedNav.module.scss';
import SmallLogo from './logo-sm.svg';
import QCIcon from './qc.svg';
import { Logo } from '@/components/logo';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollPosition } from '@/hooks/useScrollPosition';

interface Props {
  buttonHref?: string;
  buttonContent: ReactNode | string;
  buttonClass?: string;
}

export const FixedNav: FC<Props> = ({ buttonHref, buttonContent, buttonClass }) => {
  const scrollPosition = useScrollPosition();
  const screenWidth = useScreenWidth();

  const show = shouldShow(screenWidth, scrollPosition);

  return (
    <div className={`${styles.wrapper} ${show ? styles.show : undefined}`}>
      <div className={`container ${styles.container}`}>
        <HeaderLogo />
        {buttonHref
          ? <Link href={buttonHref} className={`btn btn-primary ${styles.button} ${buttonClass}`}>{buttonContent}</Link>
          : <ScrollLink to="top" smooth duration={300} className={`btn btn-primary ${styles.button} ${buttonClass}`}>{buttonContent}</ScrollLink>
        }
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
      <Image src={SmallLogo} height={18} className="me-2" alt="" /><Image src={QCIcon} height={16} alt="" />
    </div>
  </div>
);
