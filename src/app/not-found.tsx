import type { Metadata } from 'next';
import Link from 'next/link';

// import HeroImage from './not-found-hero.jpg';
import styles from './not-found.module.scss';
import type { PageComponent } from './serverComponent';
// import { BackgroundImage } from '@/components/backgroundImage';
// import BookReaderIcon from '@/components/icons/book-reader.svg';
// import CertificationIcon from '@/components/icons/certification.svg';
// import ShieldCheckIcon from '@/components/icons/shield-check.svg';
// import { Layout } from '@/components/layout';
// import { SupportSection } from '@/components/supportSection';

export const metadata: Metadata = {
  title: 'Page Not Found - QC Design School',
};

// const iconSize = 32;

const NotFoundPage: PageComponent = () => {
  return (
    <>
      <section>
        {/* <BackgroundImage src={HeroImage} priority /> */}
        <div className="container text-white text-shadow">
          <div className={styles.wrapper}>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h1>Page Not Found</h1>
                <p className="lead mb-0">We're sorry&mdash;the page you're looking for doesn't exist. Please try our <Link href="/" className="link-info">home page</Link>, or choose one of the options below.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <div className="row justify-content-center g-4 text-center">
            <div className="col-12 col-lg-4 d-flex">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <div className="text-primary mb-3"><CertificationIcon height={iconSize} /></div>
                  <h2 className="h6 mb-3">Learn more about QC's professional certification courses.</h2>
                </div>
                <div>
                  <Link href="/online-courses" className="btn btn-primary">View Courses</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <div className="text-primary mb-3"><BookReaderIcon height={iconSize} /></div>
                  <h2 className="h6 mb-3">Hear from QC Design School's students and graduates.</h2>
                </div>
                <div>
                  <Link href="/student-experience" className="btn btn-primary">Student Experience</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <div className="text-primary mb-3"><ShieldCheckIcon height={iconSize} /></div>
                  <h2 className="h6 mb-3">Enroll today to jumpstart your new design career!</h2>
                </div>
                <div>
                  <Link href="https://enroll.qcdesignschool.com" className="btn btn-primary">Enroll Online</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section> */}
      {/* <SupportSection showLink /> */}
    </>

  );
};

export default NotFoundPage;
