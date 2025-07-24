import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import GraphImage from './jack-russel-graphic.jpg';
import PosterImage from './poster.jpg';
import { Header } from '../_components/header';
import BarChartIcon from './_icons/bar-chart-alt.svg';
import BookmarkIcon from './_icons/bookmark-heart.svg';
import CertificationIcon from './_icons/certification.svg';
import HomeSmileIcon from './_icons/home-smile.svg';
import LoopIcon from './_icons/loop.svg';
import MessageCheckIcon from './_icons/message-alt-check.svg';
import BrunoImage from './bruno.jpg';
import KimImage from './kim.jpg';
import SusanImage from './susan.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BrevoForm } from '@/components/brevoForm';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { getParam } from '@/lib/getParam';

const courses = [ 'dt' ];
const brevoListId = 30;
const brevoEmailTemplateId = 1635;

const testimonialIds = [ 'TD-0001', 'TD-0002', 'TD-0003' ];

export const metadata: Metadata = {
  title: 'Become a Professional Dog Trainer',
  description: 'Request a free preview of the online dog trainer course.',
  alternates: { canonical: '/get-a-dog-training-course-preview' },
};

const DogTrainingCatalogPage: PageComponent = ({ searchParams }) => {
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = headers();
  const referrer = headerList.get('referer');

  return (
    <>
      <Header />
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
              <h2 className="text-center mb-0">Become a Professional <strong>Dog Trainer</strong></h2>
            </div>
            <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <p className="text-center lead">Get Started with a <strong>Free Course Preview</strong></p>
                  <BrevoForm
                    successLocation={`${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-training-course-preview`}
                    listId={brevoListId}
                    emailTemplateId={brevoEmailTemplateId}
                    gclid={gclid}
                    msclkid={msclkid}
                    utmSource={utmSource}
                    utmMedium={utmMedium}
                    utmCampaign={utmCampaign}
                    utmContent={utmContent}
                    utmTerm={utmTerm}
                    courseCodes={courses}
                    placeholders
                    referrer={referrer}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6 col-xl-5">
              <div className="ratio ratio-16x9">
                <video controls preload="metadata" poster={PosterImage.src}>
                  <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-10 col-md-6">
              <h2 className="mb-3">Step into a Thriving Industry</h2>
              <p>The demand for dog trainers is booming—with the industry projected to grow 15% over the next 10 years.*</p>
              <p>That's well above the average for all careers, making now the perfect time to turn your passion for helping dogs into a rewarding profession!</p>
              <p className="mt-5 small">* <Link href="https://www.bls.gov/ooh/personal-care-and-service/animal-care-and-service-workers.htm">https://www.bls.gov/ooh/personal-care-and-service/animal-care-and-service-workers.htm</Link></p>
            </div>
            <div className="col-12 col-sm-10 col-md-6">
              <Image src={GraphImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2 className="mb-4">How QC Pet Studies Sets You Up for Success</h2>
          <div className="row justify-content-center g-4">
            <div className="col-6 col-md-4">
              <div className="mb-3">
                <BookmarkIcon />
              </div>
              <h3 className="h5">Study at Your Own Pace</h3>
              Learn online anytime, from anywhere. Start with a 21-day money-back guarantee.
            </div>
            <div className="col-6 col-md-4">
              <div className="mb-3">
                <HomeSmileIcon />
              </div>
              <h3 className="h5">Train Real Dogs at Home</h3>
              Complete hands-on assignments and receive personalized feedback from expert mentors.
            </div>
            <div className="col-6 col-md-4">
              <div className="mb-3">
                <MessageCheckIcon />
              </div>
              <h3 className="h5">Learn from Industry Experts</h3>
              Master proven, science-backed techniques used by today's top professional dog trainers.
            </div>
            <div className="col-6 col-md-4">
              <div className="mb-3">
                <CertificationIcon />
              </div>
              <h3 className="h5">Earn a Recognized Certification</h3>
              Graduate with your IDTP™ designation and start your career as a professional dog trainer.
            </div>
            <div className="col-6 col-md-4">
              <div className="mb-3">
                <BarChartIcon />
              </div>
              <h3 className="h5">Build Your Business Skills</h3>
              Discover how to market your services, attract clients, and grow a thriving dog training business.
            </div>
            <div className="col-6 col-md-4">
              <div className="mb-3">
                <LoopIcon />
              </div>
              <h3 className="h5">Access Lifetime Support</h3>
              Stay connected with lifetime access, continuous updates, and a virtual student community.
            </div>
          </div>
        </div>
      </section>

      <TestimonialWallSection testimonialIds={testimonialIds} />

      <section className="bg-light">
        <div className="container">
          <h2>Meet Your Educational Team</h2>
          <p className="lead">At QC Pet Studies, you'll train under seasoned professionals.</p>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <Image src={KimImage} className="img-fluid" alt="Kim Cooper" />
              </div>
              <h3>Kim Cooper&mdash;Lead Educator</h3>
              <p>Kim brings over 35 years of experience as a certified dog trainer and industry leader. She designed the course to blend proven reward-based training methods with practical, real-world strategies—ensuring you graduate with the skills today's clients demand.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <Image src={BrunoImage} className="img-fluid" alt="Bruno Baker" />
              </div>
              <h3>Bruno Baker&mdash;Course Mentor</h3>
              <p>Bruno draws from two decades of hands-on experience in dog behavior and obedience. He guides students through practical training techniques using positive reinforcement and provides expert insight every step of the way.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <Image src={SusanImage} className="img-fluid" alt="usan Read" />
              </div>
              <h3>Susan Read&mdash;Course Mentor</h3>
              <p>Susan has helped hundreds of families build stronger bonds with their dogs. She mentors students with personalized feedback, clear instruction, and real-world advice that builds confidence and skill.</p>
            </div>
          </div>
          <p>With this expert team behind you, you'll be fully supported as you launch your career in dog training.</p>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-white mb-4">Start Your Dog Training Career Today!</h2>
              <p className="text-white">Request a free course preview today to learn more about how you can become a professional dog trainer with QC's online training! The preview includes a course curriculum, tuition information, and your career outlook.</p>
              <Link href="#" className="btn btn-secondary">Get the Course Preview</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DogTrainingCatalogPage;
