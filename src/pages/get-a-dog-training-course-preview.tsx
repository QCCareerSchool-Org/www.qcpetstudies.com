import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useMemo } from 'react';

import { BrochureForm } from '../components/BrochureForm';
import { LandingPageLayout } from '../components/LandingPageLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogImage from '../images/preview-landing-page-training.jpg';
import { getRandomIntInclusive } from '../lib/randomInt';

const formAction = 'https://go.qcpetstudies.com/l/947642/2021-12-05/6h9rx';

type Props = {
  testGroup: number;
};

const DogTrainingCatalogPage: NextPage<Props> = ({ testGroup }) => {
  const hiddenFields = useMemo(() => ([ { key: 'testGroup', value: testGroup } ]), [ testGroup ]);
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <LandingPageLayout>
      <SEO
        title="Become a Professional Dog Trainer"
        description="Request a free preview of the online dog trainer course."
        canonical="/get-a-dog-training-course-preview"
      />

      <section id="top">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
              <h2 className="text-center mb-0">Become a Professional Dog Trainer</h2>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6 mb-4 mb-lg-0">
              <div className="card bg-light">
                <div className="card-body">
                  <p className="text-center lead">Get Started with a <strong>Free Course Preview</strong></p>
                  <BrochureForm
                    action={formAction}
                    hiddenFields={hiddenFields}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6">
              {lgOrGreater && (
                <div className="px-5 mb-2">
                  <Image src={CatalogImage} layout="responsive" alt="tablet with dog image" />
                </div>
              )}
              <p className="lead">Get access to a free preview of the online dog trainer course to</p>
              <ul>
                <li>Find out if a career in dog training is right for you</li>
                <li>Learn about the many careers you can pursue as a dog trainer</li>
                <li>View the course curriculum, course videos, and sample assignments</li>
                <li>Find out about tuition information and choose a payment plan</li>
                <li>Learn how you can't go wrong with QC's money back guarantee!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async context => {
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
  return { props: { testGroup } };
};

export default DogTrainingCatalogPage;
