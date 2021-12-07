import { NextPage } from 'next';
import Image from 'next/image';

import { BrochureForm } from '../components/BrochureForm';
import { LandingPageLayout } from '../components/LandingPageLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogImage from '../images/course-catalog-tablet.jpg';

const DogGroomingCatalogPage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <LandingPageLayout>
      <SEO
        title="Become a Professional Dog Trainer"
        description="Request a free preview of the online dog trainer course."
        canonical="/become-a-dog-trainer-course-preview"
      />

      <section id="firstSection" className="">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
              <h2 className="text-center">Become a Professional Dog Trainer</h2>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6 mb-4 mb-lg-0">
              <div className="card bg-light">
                <div className="card-body">
                  <p className="text-center lead">Get Started with a <strong>Free Course Preview</strong></p>
                  <BrochureForm action="https://go.qcpetstudies.com/l/947642/2021-11-18/6b85q" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6">
              {lgOrGreater && (
                <div className="px-5 mb-4">
                  <Image src={CatalogImage} layout="responsive" alt="tablet with dog image" />
                </div>
              )}
              <p className="lead">Get access to a free preview of the online dog trainer course to:</p>
              <ul>
                <li>Find out if a career in dog training is right for you</li>
                <li>Learn about the many careers you can pursue as a dog trainer</li>
                <li>View the course curriculum, course videos, and sample assignments</li>
                <li>Find out about tuition information and choose a payment plan</li>
                <li>Learn how you can&apos;t go wrong with QC&apos;s money back guarantee!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default DogGroomingCatalogPage;
