'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import { StyleComponent } from './StyleComponent';
import { PageComponent } from '@/app/serverComponent';
import { BrochureForm } from '@/components/BrochureForm';
import { FreeFirstAidSection } from '@/components/FreeFirstAidSection';
import { HowTheCoursesWorkSection } from '@/components/HowTheCoursesWorkSection';
import { SEO } from '@/components/SEO';
import CourseCatalogImage from '@/images/bottom-ipad-shepard.jpg';
import FullKitImage from '@/images/Kit-Blue-bg.jpg';
import { getParam } from '@/lib/getParam';
import { getRandomIntInclusive } from '@/lib/randomInt';

const formAction = 'https://go.qcpetstudies.com/l/947642/2021-12-05/6h9rv';
const courses = [ 'dg' ];

const ProfessionalDogGroomerPage: PageComponent = ({ searchParams }) => {

  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const emailOptIn = getParam(searchParams.emailOptIn) === 'yes';
  const telephoneNumber = getParam(searchParams.telephoneNumber);
  const smsOptIn = getParam(searchParams.smsOptIn) === 'yes';

  const errors = getParam(searchParams.errors) === 'true';

  const [ testGroup, setTestGroup ] = useState<number>();

  useEffect(() => {
    // Get cookie on mount
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('testGroup='));

    if (cookie) {
      const value = parseInt(cookie.split('=')[1], 10);
      if (!isNaN(value)) {
        setTestGroup(value);
        return;
      }
    }

    // Set new test group if none exists
    const newTestGroup = getRandomIntInclusive(1, 12);
    document.cookie = `testGroup=${newTestGroup}; max-age=${60 * 60 * 24 * 365}; path=/; secure; samesite=strict`;
    setTestGroup(newTestGroup);
  }, []);

  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);

  const marketing = {
    source: getParam(searchParams.utm_source) ?? null,
    medium: getParam(searchParams.utm_medium) ?? null,
    campaign: getParam(searchParams.utm_campaign) ?? null,
    content: getParam(searchParams.utm_content) ?? null,
    term: getParam(searchParams.utm_term) ?? null,
  };

  const hiddenFields = useMemo(() => {
    const h: Array<{ key: string; value: string | number }> = [ { key: 'testGroup', value: testGroup ?? '' } ];
    if (gclid) {
      h.push({ key: 'gclid', value: gclid });
    }
    if (msclkid) {
      h.push({ key: 'msclkid', value: msclkid });
    }
    return h;
  }, [ testGroup, gclid, msclkid ]);

  return <>
    <SEO
      title="Become a Professional Dog Groomer"
      description="Become a Professional Dog Groomer"
      canonical="/certification-courses/rm/become-a-professional-dog-groomer"
    />

    <section id="top" className="bg-dark bg-grayish-blue">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h1 className="fw-normal">Become a <strong>Professional</strong> Dog Groomer</h1>
            <p className="lead">Start your <strong>dream career</strong> as a professional dog groomer online with QC's Dog Grooming course!</p>
            <p>Learning dog grooming online is just as effective as in-class dog groomer training. And it's way more convenient! You'll complete your training from home with practical and theoretical assignments, while receiving guidance from certified master groomers every step of the way! When you graduate, you will receive a certificate of completion to prove that you have completed training in dog grooming.</p>
          </div>
          <div className="col-12 col-lg-6 text-lg-start mb-4 mb-lg-0">
            <h3>Free Dog Grooming Starter Kit</h3>
            <p>Before you begin your practical work in Unit C, you'll receive a toolkit with the essential items you need to get started.</p>
            <p>Your kit includes a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
            <p><em>Grooming Kit Estimated value: $200</em></p>
            <Image
              src={FullKitImage}
              alt="Dog Grooming Starter Full Kit"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-12 col-lg-6 d-flex text-start">
            <div className="card bg-desaturated-blue">
              <div className="card-body">
                <h3>Download a Free Course Catalog!</h3>
                <ul className="no-indent">
                  <li>Find out if a career in dog grooming is right for you</li>
                  <li>Learn about the many careers you can pursue as a dog groomer</li>
                  <li>View the course curriculum, watch course videos, and look at sample assignments</li>
                  <li>Find out about tuition information including finding a payment plan that works well for you</li>
                  <li>Learn how you can't go wrong with QC's money back guarantee!</li>
                </ul>
                <BrochureForm
                  action={formAction}
                  buttonClassName="btn btn-outline-primary"
                  buttonText="Download Catalog"
                  hiddenFields={hiddenFields}
                  marketing={marketing}
                  courses={courses}
                  initialValues={{ firstName: firstName ?? null, lastName: lastName ?? null, emailAddress: emailAddress ?? null, emailOptIn: emailOptIn, telephoneNumber: telephoneNumber ?? null, smsOptIn: smsOptIn }}
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FreeFirstAidSection />

    <HowTheCoursesWorkSection className="bg-light" />

    <section>
      <div className="contaner text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-4">Get Started with a <strong>Free Course Catalog</strong></h2>
            <p className="mb-0">Request a free course catalog today to learn more about how you can become a professional dog groomer with QC's online training! Catalog includes course curriculum, tuition information, sample course video and assignments, and your career outlook.</p>
          </div>
        </div>
      </div>
    </section>

    <div className="container" style={{ marginBottom: -56, maxWidth: 696 }}>
      <Image
        src={CourseCatalogImage}
        alt="Dog looking at you"
        className="formImage"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
    <section className="bg-navy bg-desaturated-blue pt-3">
      <div className="container">
        <div className="row justify-content-center bg-desaturated-blue text-white">
          <div className="col-12 col-lg-6 mb-4 px-5" style={{ marginTop: '50px' }}>
            <BrochureForm
              action={formAction}
              buttonClassName="btn btn-outline-primary"
              buttonText="Download Free Catalog"
              hiddenFields={hiddenFields}
              marketing={marketing}
              courses={courses}
              initialValues={{ firstName: firstName ?? null, lastName: lastName ?? null, emailAddress: emailAddress ?? null, emailOptIn: emailOptIn, telephoneNumber: telephoneNumber ?? null, smsOptIn: smsOptIn }}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </section>

    <StyleComponent />
  </>;
};

// ProfessionalDogGroomerPage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export default ProfessionalDogGroomerPage;
