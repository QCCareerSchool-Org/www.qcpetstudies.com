import type { Metadata } from 'next';

import EnglishCockerSpanielPosing from './english-cocker-spaniel-posing.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { LivechatLink } from '@/components/livechatLink';
import { getData } from '@/lib/getData';
import { getTelephoneNumber } from '@/lib/telephone';

export const metadata: Metadata = {
  title: 'Offer Expired',
  description: 'Your offer has expired, but there may be something else we can do for you. Talk to one of our student advisors.',
  alternates: { canonical: '/offer-expired' },
};

const OfferExpiredPage: PageComponent = () => {
  const { countryCode } = getData();
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <section id="top" className="bg-dark text-light">
      <BackgroundImage src={EnglishCockerSpanielPosing} priority />
      <div className="container text-center">
        <h1 className="fw-normal"><strong>Oops!</strong> Your Offer Has Expired!</h1>
        <p className="lead mb-5">But there may be something else we can do for you.<br />Talk to one of our student advisors to learn about all of QC&apos;s special offers and discounts.</p>
        <div className="row justify-content-center">
          <div className="col col-lg-8 col-xl-7 col-xxl-6">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-evenly">
              <a href={`tel:${telephoneNumber}`}><button className="btn btn-outline-primary mb-3 mb-lg-0">Call Us Now {telephoneNumber}</button></a>
              <LivechatLink className="btn btn-primary">Chat with a Student Advisor</LivechatLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferExpiredPage;
