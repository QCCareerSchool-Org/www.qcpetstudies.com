import * as HttpStatus from '@qccareerschool/http-status';
import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { EnrollmentDetails } from '../components/EnrollmentDetails';
import { SEO } from '../components/SEO';
import { useLocation } from '../hooks/useLocation';
import AlexSignature from '../images/alex-myers.png';
import HappyPuppyRunning from '../images/backgrounds/happy-puppy-running.jpg';
import { addToActiveCampaign } from '../lib/addToActiveCampaign';
import { addToIDevAffiliate } from '../lib/addToIDevAffiliate';
import { fbqSale } from '../lib/fbq';
import { gaSale } from '../lib/ga';
import { getEnrollment } from '../lib/getEnrollment';
import { getPardotAccessToken, getProspectByEmail, setProspectAsStudent } from '../lib/pardot-api';
import { getTelephoneNumber } from '../lib/phone';
import { sendEnrollmentEmail } from '../lib/sendEnrollmentEmail';
import { Enrollment } from '../models/enrollment';

type Props = {
  data?: {
    enrollment: Enrollment;
    code: string;
    ipAddress: string | null;
  };
  errorCode?: number;
};

const WelcomeToTheSchoolPage: NextPage<Props> = ({ data, errorCode }) => {
  const [ emailAddress, setEmailAddress ] = useState('');
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    setEmailAddress('info' + '@' + 'qcpetstudies.com');
  }, []);

  // perform this on the client side so that the client's IP address is used
  useEffect(() => {
    if (typeof data === 'undefined') {
      return;
    }
    if (!data.enrollment.emailed) {
      addToActiveCampaign(data.enrollment).catch(() => { /* */ });
      addToIDevAffiliate(data.enrollment).catch(() => { /* */ });
      gaSale(data.enrollment);
      fbqSale(data.enrollment);
      sendEnrollmentEmail(data.enrollment.id, data.code).catch((err: unknown) => {
        console.error(err);
      });
    }
  }, [ data ]);

  if (typeof errorCode !== 'undefined') {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (typeof data === 'undefined') {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <DefaultLayout>
      <SEO
        title="Welcome to the School"
        description="Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center."
        canonical="/internal-welcome"
        noIndex={true}
      />
      <Script
        id="adwordsSale"
        dangerouslySetInnerHTML={{ __html: `
          gtag('event', 'conversion', { 'send_to': 'AW-1071836607/xFpdCJ3DpW8Qv9uL_wM', 'value': ${data.enrollment.cost}, 'currency': '${data.enrollment.currencyCode}', 'transaction_id': '${data.enrollment.id}' });
        ` }}
      />
      <section id="top" className="bg-dark">
        <Image src={HappyPuppyRunning} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="happy puppy running" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1>Welcome to the School</h1>
              <p className="lead mb-0">Whether you want to become a dog groomer, trainer, pet sitter, or all of the above, you'll gain the certification needed to become successful in your chosen career.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Thank You for Enrolling with <strong>QC Pet Studies!</strong></h2>
              <p>Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center. If you don't see an email from us, please check your spam folder.</p>
              <p>If you have any questions regarding the course, or if you want to discuss your goals, our friendly and knowledgeable student support advisors are available 7 days a week by email at <a href={`mailto:${emailAddress}`} className="link-primary">{emailAddress}</a> or by phone at {telephoneNumber}. We would be delighted to speak with you and assist you in any way we can. We hope your learning experience with us will be enjoyable, interesting, and valuable.</p>
              <p>Remember, we want to develop a personal relationship with you and be readily available for you whenever you need us.</p>
              <p><strong>Best of luck with your studies!</strong></p>
              <p>Sincerely,</p>
              <p><Image src={AlexSignature} alt="Alex Myers" /><br /><div style={{ marginTop: -14 }}>Director<br /><strong>QC Career School</strong></div></p>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentDetails enrollment={data.enrollment} />

    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  try {
    if (typeof query.enrollmentId !== 'string' || typeof query.code !== 'string') {
      throw new HttpStatus.BadRequest();
    }

    const enrollmentId = parseInt(query.enrollmentId, 10);
    const code = query.code;

    const enrollment = await getEnrollment(enrollmentId, code);

    if (!enrollment.complete || !enrollment.success) {
      throw new HttpStatus.NotFound();
    }

    const ipAddress = Array.isArray(req.headers['x-real-ip']) ? req.headers['x-real-ip']?.[0] : req.headers['x-real-ip'];

    try {
      // update the prospect's student status
      let token = await getPardotAccessToken();
      const { prospect } = await getProspectByEmail(enrollment.emailAddress, token.access_token);
      token = await getPardotAccessToken();
      await setProspectAsStudent(prospect.id, token.access_token);
    } catch (err) {
      console.error(err);
    }

    return { props: { data: { enrollment, code, ipAddress: ipAddress ?? null } } };
  } catch (err) {
    const internalServerError = 500;
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : internalServerError;
    res.statusCode = errorCode;
    return { props: { errorCode } };
  }
};

export default WelcomeToTheSchoolPage;
