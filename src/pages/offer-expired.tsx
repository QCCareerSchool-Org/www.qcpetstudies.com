import { NextPage } from 'next';
import Image from 'next/image';

import { SEO } from '../components/SEO';
import { useLocation } from '../hooks/useLocation';
import EnglishCockerSpanielPosing from '../images/english-cocker-spaniel-posing.jpg';
import { openLiveChat } from '../lib/livechat';
import { getTelephoneNumber } from '../lib/phone';

const OfferExpiredPage: NextPage = () => {
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  return <>
    <SEO
      title="Offer Expired"
      description="Your offer has expired, but there may be something else we can do for you. Talk to one of our student advisors."
      canonical="/offer-expired"
    />

    <section id="top" className="bg-dark text-light">
      <Image
        src={EnglishCockerSpanielPosing}
        placeholder="blur"
        alt="English Cocker Spaniel posing"
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className="container text-center">
        <h1 className="fw-normal"><strong>Oops!</strong> Your Offer Has Expired!</h1>
        <p className="lead mb-5">But there may be something else we can do for you.<br />Talk to one of our student advisors to learn about all of QC&apos;s special offers and discounts.</p>
        <div className="row justify-content-center">
          <div className="col col-lg-8 col-xl-7 col-xxl-6">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-evenly">
              <a href={`tel:${telephoneNumber}`}><button className="btn btn-outline-primary mb-3 mb-lg-0">Call Us Now {telephoneNumber}</button></a>
              <button onClick={openLiveChat} className="btn btn-secondary">Chat with a Student Advisor</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default OfferExpiredPage;
