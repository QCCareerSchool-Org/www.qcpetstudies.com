import * as HttpStatus from '@qccareerschool/http-status';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import type { PageComponent } from '@/app/_app';

import { EnrollmentDetails } from '@/components/EnrollmentDetails';
import { SEO } from '@/components/SEO';
import HappyPuppyRunning from '@/images/backgrounds/happy-puppy-running.jpg';
import { addToIDevAffiliate } from '@/lib/addToIDevAffiliate';
import { createBrevoContact } from '@/lib/brevoAPI';
import { fbPostPurchase } from '@/lib/facebookConversionAPI';
import { fbqSale } from '@/lib/fbq';
import { gaSale } from '@/lib/ga';
import { getEnrollment } from '@/lib/getEnrollment';
import { sendEnrollmentEmail } from '@/lib/sendEnrollmentEmail';
import { trustPulseEnrollment } from '@/lib/trustpulse';
import { Enrollment, RawEnrollment } from '@/models/enrollment';

type Props = {
  data?: {
    rawEnrollment: RawEnrollment;
  };
  errorCode?: number;
};

const WelcomeToTheSchoolThirdPartyPage: PageComponent = ({ data, errorCode }) => {
  const [ emailAddress, setEmailAddress ] = useState('');

  const enrollment: Enrollment | undefined = useMemo(() => {
    if (typeof data?.rawEnrollment === 'undefined') {
      return;
    }
    return {
      ...data.rawEnrollment,
      paymentDate: new Date(data.rawEnrollment.paymentDate),
      transactionTime: data.rawEnrollment.transactionTime === null ? null : new Date(data.rawEnrollment.transactionTime),
    };
  }, [ data?.rawEnrollment ]);

  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    setEmailAddress('info' + '@' + 'qcpetstudies.com');
  }, []);

  // perform this on the client side so that the client's IP address is used
  useEffect(() => {
    if (typeof data === 'undefined' || typeof enrollment === 'undefined') {
      return;
    }
    if (!enrollment.emailed) {
      gaSale(enrollment);
      fbqSale(enrollment);
    }
  }, [ data, enrollment ]);

  if (typeof errorCode !== 'undefined') {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (typeof data === 'undefined') {
    return <ErrorPage statusCode={500} />;
  }

  return <>
    <SEO
      title="Welcome to the School"
      description="Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center."
      canonical="/welcome-to-the-school-third-party"
      noIndex={true}
    />

    <section id="top" className="bg-dark">
      <Image
        src={HappyPuppyRunning}
        placeholder="blur"
        alt=""
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1>Thank You For Choosing QC Pet Studies</h1>
            <p className="lead mb-0">We are dedicated to providing quality education that prepares our students for success.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>We Have Received Your Enrollment!</h2>
            <p>You have successfully enrolled this student with QC Pet Studies. The student will receive an email within the next business day containing login information to the Online Student Center. If the student doesn't see an email from us, the email may be in their spam folder.</p>
            <p>If you or the student have any questions regarding this enrollment, our friendly and knowledgeable student support advisors are available 7 days a week by email at {emailAddress} or by phone at {emailAddress}.</p>
          </div>
        </div>
      </div>
    </section>

    {enrollment && <EnrollmentDetails enrollment={enrollment} /> }
  </>;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res, query, resolvedUrl }) => {
  try {
    if (typeof query.enrollmentId !== 'string' || typeof query.code !== 'string') {
      throw new HttpStatus.BadRequest();
    }

    const enrollmentId = parseInt(query.enrollmentId, 10);
    const code = query.code;

    if (isNaN(enrollmentId)) {
      throw new HttpStatus.BadRequest();
    }

    const rawEnrollment = await getEnrollment(enrollmentId, code);

    if (!rawEnrollment.complete || !rawEnrollment.success) {
      throw new HttpStatus.NotFound();
    }

    if (!rawEnrollment.emailed) {
      const getHeader = (headerName: string): string | null => {
        const rawHeader = req.headers[headerName];
        if (Array.isArray(rawHeader)) {
          return rawHeader?.[0] ?? null;
        }
        return rawHeader ?? null;
      };

      const ipAddress = getHeader('x-real-ip');
      const userAgent = getHeader('user-agent');

      const getCookie = (cookieName: string): string | undefined => {
        const rawCookie = req.cookies[cookieName];
        if (Array.isArray(rawCookie)) {
          return req.headers['x-real-ip']?.[0];
        }
        return rawCookie;
      };

      const fbc = getCookie('_fbc');
      const fbp = getCookie('_fbp');

      // send email
      try {
        await sendEnrollmentEmail(enrollmentId, code);
      } catch (err) {
        console.error(err);
      }

      // create Brevo contact
      try {
        await createBrevoContact(rawEnrollment.emailAddress, rawEnrollment.firstName, rawEnrollment.lastName, rawEnrollment.countryCode, rawEnrollment.provinceCode, { STATUS_PET_STUDENT: true });
      } catch (err) {
        console.error(err);
      }

      // TrustPulse
      try {
        await trustPulseEnrollment(rawEnrollment, ipAddress);
      } catch (err) {
        console.error(err);
      }

      // iDevAffiliate
      try {
        await addToIDevAffiliate(rawEnrollment, ipAddress);
      } catch (err) {
        console.error(err);
      }

      // Facebook
      if (rawEnrollment.transactionTime === null || new Date().getTime() - new Date(rawEnrollment.transactionTime).getTime() < 7 * 24 * 60 * 60 * 1000) {
        try {
          const source = (process.env.HOST ?? 'https://www.qcpetstudies.com') + resolvedUrl;
          await fbPostPurchase(rawEnrollment, source, ipAddress, userAgent, fbc, fbp);
        } catch (err) {
          console.error(err);
        }
      }

    }

    return { props: { data: { rawEnrollment } } };
  } catch (err) {
    const internalServerError = 500;
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : internalServerError;
    res.statusCode = errorCode;
    return { props: { errorCode } };
  }
};

export default WelcomeToTheSchoolThirdPartyPage;
