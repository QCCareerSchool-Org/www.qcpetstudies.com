import { Metadata } from 'next';
import { OfferExpiredSection } from './OfferExpiredSections';
import { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Offer Expired',
  description: 'Your offer has expired, but there may be something else we can do for you. Talk to one of our student advisors.',
  alternates: {
    canonical: '/offer-expired',
  },
};

const OfferExpiredPage: PageComponent = () => {

  return <>

    <OfferExpiredSection />
  </>;
};

export default OfferExpiredPage;
