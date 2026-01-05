'use client';

import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { Element as ScrollElement } from 'react-scroll';

import { FixedNav } from './fixedNav';
import styles from './header.module.scss';
import { Logo } from '@/components/logo';

interface Props {
  logoLink?: boolean;
  buttonHref?: string;
  buttonContent?: ReactNode | string;
}

export const Header: FC<Props> = ({ logoLink, buttonHref, buttonContent = <><span className="d-none d-sm-inline">Get the </span>Free Course Preview</> }) => (
  <ScrollElement name="top">
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className="container">
          {logoLink ? <Link href="/"><Logo height={28} /></Link> : <Logo height={28} />}
        </div>
      </header>
      <FixedNav buttonHref={buttonHref} buttonContent={buttonContent} />
    </div>
  </ScrollElement>
);
