import Link from 'next/link';
import type { FC } from 'react';

import { FixedNav } from './fixedNav';
import styles from './header.module.scss';
import { CountDownTimer } from '@/components/countDownTimer';
import { Logo } from '@/components/logo';
import { getData } from '@/lib/getData';

type Props = {
  logoLink?: boolean;
  showBanner?: boolean;
  buttonHref?: string;
  buttonContent?: JSX.Element | string;
};

export const Header: FC<Props> = async ({ logoLink, buttonHref, buttonContent, showBanner }) => {
  const { countryCode } = await getData();
  const date = new Date().getTime();

  return (
    <div className={styles.wrapper}>
      {showBanner && <CountDownTimer date={date} countryCode={countryCode} />}
      <header className={styles.header}>
        <div className="container">
          {logoLink ? <Link href="/"><Logo height={28} /></Link> : <Logo height={28} />}
        </div>
      </header>
      <FixedNav buttonHref={buttonHref} buttonContent={buttonContent} />
    </div>
  );
};
