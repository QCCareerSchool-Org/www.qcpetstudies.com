import Image from 'next/image';
import { FaFilm } from 'react-icons/fa';

import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import { SEO } from '../components/SEO';
import Qc35Year from '../images/35-year-emblem.svg';
import GrowthIcon from '../images/growth-icon-1.svg';
import { NextPageWithLayout } from './_app';

const PetCareerFreeTrainingPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO
        title="Pet Career Free Training"
        description="Want to know wow to start, grow & scale a hugely successful pet business in 2023?"
        canonical="/pet-career-free-training"
      />

      <section id="top">
        <div className="container">
          <Image src={GrowthIcon} width="74" height="62" alt="growth chart" />
          <h1>Free Training!</h1>
          <p className="lead">Calling all dog groomers, trainers, walkers &amp; daycare providers:</p>
          <p className="lead mb-4">Want to know wow to start, grow &amp; scale <strong>a hugely successful pet business in 2023?</strong></p>
          <a className="btn btn-secondary btn-lg" href="https://youtube.com"><span style={{ position: 'relative', top: -1 }}><FaFilm /></span> Watch the free training now!</a>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h2>Here's What You'll Learn:</h2>
          <ul className="checkmarkList">
            <li>Why starting a pet care business is one of the <strong>best</strong> opportunities in 2023</li>
            <li>The top (and most profitable) career opportunities for new pet professionals</li>
            <li>Which services you should offer to grow your business (&amp; bank account) quickly</li>
            <li>How to keep a reliable and consistent flow of happy customers and furry clients</li>
          </ul>
        </div>
      </section>
      <section>
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
              <p>QC Pet Studies offers the most comprehensive online pet course available. Through lesson texts, video tutorials, hands on assignments, and personalized feedback from industry professionals, our students receive the skills and resources they need to build successful careers in the pet care industry.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non imperdiet tortor. Donec rhoncus interdum efficitur. Maecenas euismod, justo eu molestie gravida, eros arcu ultricies neque, pulvinar volutpat purus elit eget nunc. Vivamus sed aliquet nisi. Mauris imperdiet enim cursus arcu sodales dictum. Praesent arcu dolor, accumsan at ante et, interdum commodo velit. Mauris finibus diam vitae enim volutpat ultricies. Aliquam porttitor maximus nisi, ut consequat nulla condimentum euismod. Sed id elit eleifend erat interdum scelerisque sit amet sed erat. Duis pharetra scelerisque urna quis imperdiet. Fusce efficitur elit aliquet commodo rhoncus. Suspendisse venenatis lacus urna, ac placerat leo fringilla et. Donec vestibulum in justo malesuada eleifend. Mauris non ante sit amet velit iaculis elementum vel dignissim magna.</p>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
              <h2 className="mb-4">Ready to jump into an<br /><strong>exciting new pet care career?</strong></h2>
              <a className="btn btn-secondary btn-lg" href="https://youtube.com"><span style={{ position: 'relative', top: -1 }}><FaFilm /></span> Watch the free training now!</a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .checkmarkList li {
        list-style-type: '✔️';
        padding-inline-start: 1ch;
      }
      `}</style>
    </>
  );
};

PetCareerFreeTrainingPage.getLayout = page => <LandingPageLayout footer={false}>{page}</LandingPageLayout>;

export default PetCareerFreeTrainingPage;
