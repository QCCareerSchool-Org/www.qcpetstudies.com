import { NextPage } from 'next';
import Error from 'next/error';
import React, { useState } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { FooterCTAType } from '../components/Footer';

type Props = {
  production: boolean;
};

const FooterTestPage: NextPage<Props> = ({ production }) => {
  const [ ctaType, setCTAType ] = useState<FooterCTAType>();

  if (production) {
    // don't show this page in production
    return <Error statusCode={400} />;
  }

  const ctaChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const target = e.target;
    if (target.value === 'grooming' || target.value === 'training') {
      setCTAType(target.value);
    } else {
      setCTAType(undefined);
    }
  };

  return (
    <DefaultLayout footerCTAType={ctaType}>

      <div className="backgroundVideoWrapper">
        <video autoPlay muted loop className="backgroundVideo">
          <source src="https://www.doggroomingcourse.com/wp-content/uploads/2016/06/web-banner-intro.mp4" type="video/mp4" />
        </video>
        <div className="foregroundContent">
          <section id="firstSection" className="text-shadow">
            <div className="container text-center">
              <h1 className="text-light">Become a Professional<br />Dog Groomer</h1>
              <p className="h4 text-light">Learn Online and Get Hands-On Training</p>
            </div>
          </section>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <label htmlFor="ctaType">CTA Type</label>
              <select onChange={ctaChange} className="form-select" id="ctaType">
                <option value="">default</option>
                <option value="grooming">grooming</option>
                <option value="training">training</option>
              </select>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
FooterTestPage.getInitialProps = async () => {
  return { production: process.env.NODE_ENV === 'production' };
};

export default FooterTestPage;
