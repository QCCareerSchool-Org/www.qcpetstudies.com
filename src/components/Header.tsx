import type { FC } from 'react';

import { useLocation } from '../hooks/useLocation';
import { CanadaAuxNavBar } from './CanadaAuxNavBar';
import styles from './Header.module.scss';
import { MainNav } from './MainNav';
import { SecondaryNav, SecondaryNavLink } from './SecondaryNav';

type Props = {
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLink[];
  /** custom path for the shopping cart (include leading slash) */
  enrollPath?: string;
};

export const Header: FC<Props> = ({ secondaryTitle, secondaryNavLinks, enrollPath = '/' }) => {
  const location = useLocation();
  const countryCode = location?.countryCode;

  return (
    <div className={`${styles.wrapper} shadow-lg`}>
      {countryCode === 'CA' && <CanadaAuxNavBar />}
      <MainNav enrollPath={enrollPath} countryCode={countryCode} />
      {secondaryNavLinks && <SecondaryNav title={secondaryTitle} nav={secondaryNavLinks} />}
    </div>
  );
};
