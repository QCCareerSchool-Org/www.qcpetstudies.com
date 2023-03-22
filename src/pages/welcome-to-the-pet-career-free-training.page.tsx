import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { ImageCircle } from '../components/ImageCircle';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import Qc35Year from '../images/35-year-emblem-gold.svg';
import APlus from '../images/a-plus-left-pad-black.svg';
import AprilCostigan from '../images/april-costigan.png';
import FiveStars from '../images/five-stars.svg';
import { NextPageWithLayout } from './_app.page';

const WelcomeToThePetCareerFreeTraining: NextPageWithLayout = () => {
  const swatch = useRef<HTMLDivElement>(null);
  const [ client, setClient ] = useState(false); // we only want to load the wistia video on the client to avoid hydration errors

  const handleLoad = (): void => {
    if (swatch.current) {
      swatch.current.style.opacity = '1';
    }
  };

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      <section id="top" className="bg-black text-white">
        <div className="container text-center">
          <h1 className="h2 mb-4 mb-md-5" style={{ lineHeight: 'normal' }}>Start, Grow &amp; Scale a Hugely Successful Pet Business in 2023!</h1>
          <script src="https://fast.wistia.com/embed/medias/logodkgd9s.jsonp" async />
          <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
          {client && (
            <>
              <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                  <div className="wistia_embed wistia_async_logodkgd9s videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                    <div ref={swatch} className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://fast.wistia.com/embed/medias/logodkgd9s/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" onLoad={handleLoad} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h2>Ready to Jump Into an Exciting New Pet Care Career?</h2>
              <p className="lead">Claim <strong>$300</strong> off your tuition before it expires!</p>
              <a href="https://enroll.qcpetstudies.com/free-training-300-off" className="btn btn-secondary btn-lg">Enroll Now</a>
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
                <div className="me-3"><ImageCircle src={AprilCostigan} objectPosition="0% 50%" /></div>
                <p className="mb-0"><span className="fw-bold">April Costigan</span><br /><span className="fst-italic gold">QC Pet Studies Graduate, IDGP</span></p>
              </div>
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
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="mb-2">
                <Image src={APlus} width={61} height={48} alt="BBB A+" />
              </div>
              <h2>BBB Accreditation</h2>
              <p className="lead">QC is happy to celebrate 15 years of accreditation with the Better Business Bureau.</p>
              <p className="mb-0">Since 1984, QC has had thousands of satisfied students who have taken our courses and launched successful careers in their chosen fields. QC Pet Studies, a subsidiary of QC Career School, has an A+ rating with the Better Business Bureau the highest possible consumer satisfaction rating. You can rest assured that you are receiving high quality course materials and a premium educational experience.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h2>Still Need Help Chosing the Best Pet Care Career Path?</h2>
              <p>Book a call with a student advisor and we'd be happy to guide you!</p>
              <a href="https://ng295qu8zyk.typeform.com/to/aLUG3dpN" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">Book a Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeToThePetCareerFreeTraining;

WelcomeToThePetCareerFreeTraining.getLayout = page => <LandingPageLayout footer={false}>{page}</LandingPageLayout>;
