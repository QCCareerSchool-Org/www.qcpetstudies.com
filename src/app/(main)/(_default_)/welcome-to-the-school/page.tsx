import * as HttpStatus from '@qccareerschool/http-status';
import { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

import { ErrorPageWrapper } from '../internal-welcome/ErrorPageWrapper';
import { WelcomeToTheSchoolClient } from './WelcomeToTheSchoolClient';
import { PageComponent } from '@/app/serverComponent';
import { addToIDevAffiliate } from '@/lib/addToIDevAffiliate';
import { createBrevoContact } from '@/lib/brevoAPI';
import { fbPostPurchase } from '@/lib/facebookConversionAPI';
import { getEnrollment } from '@/lib/getEnrollment';
import { sendEnrollmentEmail } from '@/lib/sendEnrollmentEmail';
import { trustPulseEnrollment } from '@/lib/trustpulse';

const brevoStudentListId = 17;

export const metadata: Metadata = {
  title: 'Welcome to the School',
  description: 'Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center.',
  alternates: { canonical: '/welcome-to-the-school' },
};

const WelcomeToTheSchoolPage: PageComponent = async ({ searchParams }) => {
  try {
    const enrollmentId = searchParams.enrollmentId;
    const code = searchParams.code;

    if (typeof enrollmentId !== 'string' || typeof code !== 'string') {
      return <ErrorPageWrapper errorCode={'400'} />;
    }

    const parsedEnrollmentId = parseInt(enrollmentId, 10);
    if (isNaN(parsedEnrollmentId)) {
      return <ErrorPageWrapper errorCode={'400'} />;
    }

    const rawEnrollment = await getEnrollment(parsedEnrollmentId, code);

    if (!rawEnrollment.complete || !rawEnrollment.success) {
      return <ErrorPageWrapper errorCode={'404'} />;
    }

    if (!rawEnrollment.emailed) {
      const headersList = headers();
      const cookieStore = cookies();

      const ipAddress = headersList.get('x-real-ip');
      const userAgent = headersList.get('user-agent');
      const fbc = cookieStore.get('_fbc')?.value;
      const fbp = cookieStore.get('_fbp')?.value;

      // send email
      try {
        await sendEnrollmentEmail(parsedEnrollmentId, code);
      } catch (err) {
        console.error(err);
      }

      // create Brevo contact
      try {
        await createBrevoContact(
          rawEnrollment.emailAddress,
          rawEnrollment.firstName,
          rawEnrollment.lastName,
          rawEnrollment.countryCode,
          rawEnrollment.provinceCode,
          { STATUS_PET_STUDENT: true },
          [ brevoStudentListId ],
        );
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
      if (
        rawEnrollment.transactionTime === null ||
        new Date().getTime() - new Date(rawEnrollment.transactionTime).getTime() < 7 * 24 * 60 * 60 * 1000
      ) {
        try {
          const source = (process.env.HOST ?? 'https://www.qcpetstudies.com') + '/welcome-to-the-school';
          await fbPostPurchase(rawEnrollment, source, ipAddress, userAgent, fbc, fbp);
        } catch (err) {
          console.error(err);
        }
      }
    }

    return <WelcomeToTheSchoolClient rawEnrollment={rawEnrollment} />;
  } catch (err) {
    const statusCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : 500;
    return <ErrorPageWrapper errorCode={statusCode.toString()} />;
  }
};

export default WelcomeToTheSchoolPage;
