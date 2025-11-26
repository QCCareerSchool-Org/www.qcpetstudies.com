import Link from 'next/link';
import type { FC, JSX } from 'react';

import { FixedNav } from './fixedNav';
import styles from './header.module.scss';
import { Logo } from '@/components/logo';

interface Props {
  logoLink?: boolean;
  buttonHref?: string;
  buttonContent?: JSX.Element | string;
}

export const Header: FC<Props> = ({ logoLink, buttonHref, buttonContent }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <div className="container">
        {logoLink ? <Link href="/"><Logo height={28} /></Link> : <Logo height={28} />}
      </div>
    </header>
    <FixedNav buttonHref={buttonHref} buttonContent={buttonContent} />
  </div>
);
