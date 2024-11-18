import type { FC } from 'react';

// import { CanadaAuxNavBar } from './CanadaAuxNavBar';
import { CountDownTimer } from './countDownTimer';
import styles from './Header.module.scss';
import { MainNav } from './MainNav';
import { SecondaryNav, SecondaryNavLink } from './SecondaryNav';
import { useLocation } from '@/hooks/useLocation';

type Props = {
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLink[];
  /** custom path for the shopping cart (include leading slash) */
  enrollPath?: string;
};

export const Header: FC<Props> = ({ secondaryTitle, secondaryNavLinks, enrollPath }) => {
  const location = useLocation();
  const countryCode = location?.countryCode;

  return (
    <div className={`${styles.wrapper} shadow-lg`}>
      {/* {countryCode === 'CA' && <CanadaAuxNavBar />} */}
      <CountDownTimer countryCode={countryCode ?? 'US'} />
      <MainNav enrollPath={enrollPath} countryCode={countryCode} />
      {secondaryNavLinks && <SecondaryNav title={secondaryTitle} nav={secondaryNavLinks} />}
    </div>
  );
};
