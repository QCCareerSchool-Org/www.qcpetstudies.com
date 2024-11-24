import type { FC } from 'react';

// import { CanadaAuxNavBar } from './CanadaAuxNavBar';
import styles from './Header.module.scss';
import { SecondaryNav } from './secondaryNav';
import { CountDownTimer } from '@/components/countDownTimer';
import { MainNav } from '@/components/MainNav';
import { useLocation } from '@/hooks/useLocation';

type Props = {
  enrollPath?: string;
};

export const Header: FC<Props> = ({ enrollPath }) => {
  const location = useLocation();
  const countryCode = location?.countryCode;

  return (
    <div className={`${styles.wrapper} shadow-lg`}>
      {/* {countryCode === 'CA' && <CanadaAuxNavBar />} */}
      <CountDownTimer countryCode={countryCode ?? 'US'} />
      <MainNav enrollPath={enrollPath} countryCode={countryCode} />
      <SecondaryNav />
    </div>
  );
};
