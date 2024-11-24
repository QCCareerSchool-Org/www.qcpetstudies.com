import { OfferExpiredSection } from './OfferExpiredSection';
import { PageComponent } from '@/app/serverComponent';

import { SEO } from '@/components/SEO';

const OfferExpiredPage: PageComponent = () => {

  return <>
    <SEO
      title="Offer Expired"
      description="Your offer has expired, but there may be something else we can do for you. Talk to one of our student advisors."
      canonical="/offer-expired"
    />

    <OfferExpiredSection />
  </>;
};

export default OfferExpiredPage;
