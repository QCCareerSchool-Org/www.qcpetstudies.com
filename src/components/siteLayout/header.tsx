import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { CanadaHeader } from '../canadaHeader';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { june13, june27 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = props => (
  <div className={`${styles.wrapper} shadow-lg`}>
    <InnerBanner {...props} />
    <MainNav countryCode={props.countryCode} />
    <SecondaryNav />
  </div>
);

const InnerBanner: FC<Props> = ({ date, countryCode }) => {
  if (countryCode === 'CA') {
    return <CanadaHeader />;
  }

  if (june13.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={june13.toDTO()}>
        {countryCode === 'US'
          ? <>Ends Soon: Save $400 On Tuition</>
          : <><span className="d-none d-lg-inline">Limited-time offer:{' '}</span>Save {gbpCountry(countryCode) ? '£400' : '$400'} on your tuition when you enroll today!</>
        }
      </PromoBanner>
    );
  }
  if (june27.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={june27.toDTO()}>
        {countryCode === 'US'
          ? <>4th of July Special: Save $400 on Tuition</>
          : <><span className="d-none d-lg-inline">Limited-time offer:{' '}</span>Save {gbpCountry(countryCode) ? '£400' : '$400'} on your tuition when you enroll today!</>
        }
      </PromoBanner>
    );
  }
};
