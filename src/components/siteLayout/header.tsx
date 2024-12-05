import type { FC } from 'react';

// import { CanadaAuxNavBar } from './CanadaAuxNavBar';
import styles from './header.module.scss';
import { SecondaryNav } from './secondaryNav';
import { CountDownTimer } from '@/components/countDownTimer';
import { MainNav } from '@/components/siteLayout/mainNav';

type Props = {
  date: number;
  countryCode: string;
};

export const Header: FC<Props> = ({ date, countryCode }) => {
  return (
    <div className={`${styles.wrapper} shadow-lg`}>
      {/* {countryCode === 'CA' && <CanadaAuxNavBar />} */}
      <CountDownTimer date={date} countryCode={countryCode} />
      <MainNav countryCode={countryCode} />
      <SecondaryNav />
    </div>
  );
};
