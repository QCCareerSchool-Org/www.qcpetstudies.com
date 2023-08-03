import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useMemo } from 'react';
import { FaFilm } from 'react-icons/fa';

import { BrochureForm } from '../components/BrochureForm';
import { ImageCircle } from '../components/ImageCircle';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import Qc35Year from '../images/35-year-emblem-gold.svg';
import AprilCostigan from '../images/april-costigan.png';
import Hero from '../images/backgrounds/black-and-white-dog-looking-up.jpg';
import DogSitting from '../images/black-and-white-dog-sitting.jpg';
import FiveStars from '../images/five-stars-secondary.svg';
import { getRandomIntInclusive } from '../lib/randomInt';
import { NextPageWithLayout } from './_app.page';

const formAction = 'https://go.qccareerschool.com/l/947642/2023-02-16/thly8';

type Props = {
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  emailOptIn: boolean | null;
  telephoneNumber: string | null;
  smsOptIn: boolean | null;
  errors: boolean;
  testGroup: number;
  gclid: string | null;
  msclkid: string | null;
  marketing: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  };
};

const courses = [ 'dg' ];

const PetCareerFreeTrainingPage: NextPageWithLayout<Props> = ({ firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn, errors, testGroup, gclid, msclkid, marketing }) => {
  const hiddenFields = useMemo(() => {
    const h: Array<{ key: string; value: string | number }> = [ { key: 'testGroup', value: testGroup } ];
    if (gclid) {
      h.push({ key: 'gclid', value: gclid });
    }
    if (msclkid) {
      h.push({ key: 'msclkid', value: msclkid });
    }
    return h;
  }, [ testGroup, gclid, msclkid ]);

  const screenWidth = useScreenWidth();
  const lg = screenWidth >= 992;
  const xl = screenWidth >= 1200;
  const xxl = screenWidth >= 1600;

  return (
    <>
      <SEO
        title="Pet Career Free Training"
        description="Want to know wow to start, grow & scale a hugely successful pet business in 2023?"
        canonical="/pet-career-free-training"
      />

      <section id="top" className="bg-black text-white">
        {lg && <Image
          src={Hero}
          placeholder="blur"
          alt="Black and white dog"
          priority
          fill
          sizes="100vw"
          style={{
            objectPosition: xxl ? '50% 50%' : xl ? '40% 50%' : '30% 50%',
            objectFit: 'cover',
            transform: 'scaleX(-1)',
          }}
        />}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6 col-xxl-5">
              <h1>Free Training!</h1>
              <p className="lead">Calling all dog groomers, trainers, walkers &amp; daycare providers: <strong>learn how to start, grow &amp; scale a hugely successful pet business in 2023!</strong></p>
              <BrochureForm
                action={formAction}
                lastName={false}
                hiddenFields={hiddenFields}
                buttonClassName="btn btn-secondary btn-lg"
                buttonText={<><span style={{ position: 'relative', top: -1, marginRight: '0.25rem' }}><FaFilm /></span> Watch the free training now!</>}
                marketing={marketing}
                courses={courses}
                initialValues={{ firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn }}
                errors={errors}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-4">Here's What You'll Learn:</h2>
              <ul className="checkmarkList mb-0">
                <li>Why starting a pet care business is one of the <strong>best</strong> opportunities in 2023</li>
                <li>The top (and most profitable) career opportunities for new pet professionals</li>
                <li>Which services you should offer to grow your business (&amp; bank account) quickly</li>
                <li>How to keep a reliable and consistent flow of happy customers and furry clients</li>
              </ul>
            </div>
            <div className="col-8 col-md-6 col-lg-4 text-center">
              <Image src={DogSitting} width="862" height="792" style={{ maxWidth: '100%', height: 'auto' }} alt="a dog lying down" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container text-center text-md-start">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-center mb-4">
                <div className="me-4 flex-shrink-0 mb-2 mb-md-0" style={{ width: '120px' }}>
                  <Image
                    src={Qc35Year}
                    alt="distance education for over 35 years"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <p className="lead mb-0">QC Pet Studies is a faculty of QC Career School. We're an online, international school that's been offering distance education courses since 1984, and in this time we&apos;ve mastered the art of delivering quality course content online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="mb-4"><Image src={FiveStars} width="268" height="48" alt="5 out of 5" /></div>
              <p className="lead">&ldquo;I don't think I could be where I am today without QC Pet Studies.&rdquo;</p>
              <p className="mb-4">&ldquo;The Dog Grooming and First Aid courses are fantastic. I learned so much from Lisa Day and Paddy Gaffney. I've officially started my own business, Sparkling Dog Grooming. I've constructed an entire professional grooming studio in my basement and have started building a very nice client list.&rdquo;</p>
              <div className="d-flex justify-content-center">
                <div className="me-3"><ImageCircle src={AprilCostigan} alt="April Costigan, IDGP" objectPosition="0% 50%" /></div>
                <p className="mb-0"><span className="fw-bold">April Costigan</span><br /><span className="fst-italic gold">QC Pet Studies Graduate, IDGP</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center">
              <h2 className="mb-4">Ready to jump into an<br /><strong>exciting new pet care career?</strong></h2>
              <a className="btn btn-secondary btn-lg" href="#top"><span style={{ position: 'relative', top: -1, marginRight: '0.25rem' }}><FaFilm /></span> Watch the free training now!</a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .checkmarkList li {
        list-style-image: url('/images/check-mark-blue-16.svg');
        padding-inline-start: 1ch;
        margin-bottom: 0.5rem;
      }
      .checkmarkList li:last-of-type {
        margin-bottom: 0;
      }
      .gold {
        color: #cfa245;
      }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const firstName = typeof context.query.firstName === 'string' ? context.query.firstName : null;
  const lastName = typeof context.query.lastName === 'string' ? context.query.lastName : null;
  const emailAddress = typeof context.query.emailAddress === 'string' ? context.query.emailAddress : null;
  const emailOptIn = typeof context.query.emailOptIn === 'string' ? context.query.emailOptIn === 'yes' : null;
  const telephoneNumber = typeof context.query.telephoneNumber === 'string' ? context.query.telephoneNumber : null;
  const smsOptIn = typeof context.query.smsOptIn === 'string' ? context.query.smsOptIn === 'yes' : null;

  const errors = typeof context.query.errors === 'string' && context.query.errors === 'true';

  let testGroup: number | undefined;
  const storedTestGroup = context.req.cookies.testGroup;
  if (typeof storedTestGroup !== 'undefined') {
    const parsed = parseInt(storedTestGroup, 10);
    if (!isNaN(parsed)) {
      testGroup = parsed;
    }
  }
  if (typeof testGroup === 'undefined') {
    testGroup = getRandomIntInclusive(1, 12);
    const maxAge = 60 * 60 * 24 * 365;
    context.res.setHeader('Set-Cookie', `testGroup=${testGroup}; Max-Age=${maxAge}; Path=/; Secure; SameSite=Strict`);
  }

  const gclid = typeof context.query.gclid === 'string' ? context.query.gclid : null;
  const msclkid = typeof context.query.msclkid === 'string' ? context.query.msclkid : null;

  const marketing = {
    source: typeof context.query.utm_source === 'string' ? context.query.utm_source || null : null,
    medium: typeof context.query.utm_medium === 'string' ? context.query.utm_medium || null : null,
    campaign: typeof context.query.utm_campaign === 'string' ? context.query.utm_campaign || null : null,
    content: typeof context.query.utm_content === 'string' ? context.query.utm_content || null : null,
    term: typeof context.query.utm_term === 'string' ? context.query.utm_term || null : null,
  };

  return { props: { firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn, errors, testGroup, gclid, msclkid, marketing } };
};

PetCareerFreeTrainingPage.getLayout = page => <LandingPageLayout footer={false}>{page}</LandingPageLayout>;

export default PetCareerFreeTrainingPage;
