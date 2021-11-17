import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsCalendarCheck, BsCheckCircle, BsFillCloudArrowDownFill } from 'react-icons/bs';
import { DefaultLayout } from '../../components/DefaultLayout';
import { PriceSection } from '../../components/PriceSection';
import { SEO } from '../../components/SEO';
import QcYearGuaratnteeLogo from '../../images/1-year-guarantee-outlined.svg';
import QcDayGuaratnteeLogo from '../../images/21-day-guarantee-outlined.svg';
import DryingDogBg from '../../images/backgrounds/drying-dog-bg.jpg';
import FullKitWithManualsImage from '../../images/dg-course-materials-manuals-kit-white.jpg';
import FirstAidBookImage from '../../images/first-aid-book-white.jpg';
import FirstAidLogo from '../../images/first-aid-logo.svg';
import MagnifyingGLassImage from '../../images/icon-magnifying-glass-2.svg';

const courseCodes = [ 'dg' ];

const SuccessGuaranteedPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Success Guaranteed"
        description="Success Guaranteed"
        canonical="/dog-grooming-courses/success-guaranteed"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={DryingDogBg} layout="fill" objectFit="cover" objectPosition="center" alt="Person drying dog with dryer" />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <h2 className="mb-3">Your Success,<br /><strong className="text-uppercase">Guaranteed</strong></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-5">
              <p className="lead"><strong>QC means Quality of Course, and we stand behind that promise.</strong></p>
              <p className="lead"><strong>Study with confidence thanks to QC&apos;s double guarantee.</strong></p>
              <p>First, try the course risk-free for 21 days.  Then, if you don&apos;t earn back your tuition in dog grooming fees within one year of graduating, you&apos;ll receive a full tuition refund!</p>
              <Link href=""><a className="lead" style={{ color: 'white' }}><strong>Click here</strong> for more information</a></Link>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <Image src={QcDayGuaratnteeLogo} alt="Qc 21 Day Money Back Guaratntee Logo" />
            </div>
            <div className="col-12 col-lg-3">
              <Image src={QcYearGuaratnteeLogo} alt="Qc 1 Year Money Back Guaratntee Logo" />
            </div>
          </div>
          <a href=""><button className="btn btn-outline-light border-2">Enroll Today</button></a>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h3 className="mb-3">Your Course Materials</h3>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <p>Before you begin your practical work in Unit C, you&apos;ll receive a toolkit with the essential items you need to get started.</p>
              <p>Your kit includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
              <p className="lead">These professional-grade tools have a $200 value!</p>
            </div>
          </div>
          <div className="mb-5">
            <Image src={FullKitWithManualsImage} alt="Full course kit with manuals" width="724" height="374" />
          </div>
        </div>
      </section>

      <PriceSection courses={courseCodes} doubleGuarantee={true} />

      <section className="bg-light">
        <div className="container text-center">
          <h2 className="mb-5">How the Courses Work</h2>
          <div className="row">
            <div className="col-12 col-lg-3">
              <BsCalendarCheck className="h2 text-secondary mb-4" />
              <h3>Enroll<br />Online</h3>
              <p>Get online access to your course right away. Receive your books and grooming tools in 7-10 days.</p>
            </div>
            <div className="col-12 col-lg-3">
              <BsFillCloudArrowDownFill className="h2 text-secondary mb-4" />
              <h3>Submit Your<br /><strong>Assignments</strong></h3>
              <p>Use your computer, phone or tablet to upload your work to QC&apos;s Online Student Center.</p>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-3">
                <Image src={MagnifyingGLassImage} alt="Magnifying Glass Icon" height="50px" width="50px" />
              </div>
              <h3>Review Your<br /><strong>Feedback</strong></h3>
              <p>Get audio feedback from your tutor, a professional dog groomer, after each unit you submit.</p>
            </div>
            <div className="col-12 col-lg-3">
              <BsCheckCircle className="h2 text-secondary mb-4" />
              <h3>Receive Your<br /><strong>Certificate</strong></h3>
              <p>Get your certificate of completion and begin your career as a professional dog groomer.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-lg-start">
              <div className="text-center mb-4">
                <Image src={FirstAidLogo} alt="First Aid Logo" />
              </div>
              <h2>Get a <strong>FREE</strong> First Aid Course</h2>
              <p className="lead">Enroll in Dog Grooming &amp; receive the First Aid for Dog Groomers course to take your career to the next level!</p>
              <p>Learn from first aid experts who will guide you through the course. You&apos;ll learn how to keep yourself and your furry clients out of harm&apos;s way.</p>
            </div>
            <div className="col-12 col-lg-6">
              <Image src={FirstAidBookImage} alt="First Aid Book" />
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default SuccessGuaranteedPage;
