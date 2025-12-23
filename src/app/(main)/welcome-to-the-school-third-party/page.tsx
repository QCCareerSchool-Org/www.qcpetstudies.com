import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

import HappyPuppyRunning from '../welcome-to-the-school/happy-puppy-running.jpg';
import { Processing } from '../welcome-to-the-school/processing';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { EmailLink } from '@/components/emailLink';
import { EnrollmentDetails } from '@/components/enrollmentDetails';
import { TelephoneLink } from '@/components/telephoneLink';
import { addToIDevAffiliate } from '@/lib/addToIDevAffiliate';
import { createBrevoContact } from '@/lib/brevoAPI';
import { fbPostPurchase } from '@/lib/facebookConversionAPI';
import { getEnrollment } from '@/lib/fetch';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import { sendEnrollmentEmail } from '@/lib/sendEnrollmentEmail';

export const metadata: Metadata = {
  title: 'Welcome to the School',
  description: 'Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center.',
  alternates: { canonical: '/welcome-to-the-school-third-party' },
  robots: { index: false },
};

const WelcomeToTheSchoolThirdPartyPage: PageComponent = async props => {
  const { date } = await getServerData(props.searchParams);
  const searchParams = await props.searchParams;
  const enrollmentIdParam = getParam(searchParams.enrollmentId);
  const codeParam = getParam(searchParams.code);

  if (typeof enrollmentIdParam === 'undefined' || typeof codeParam === 'undefined') {
    redirect('/');
  }

  const enrollmentId = parseInt(enrollmentIdParam, 10);
  if (isNaN(enrollmentId)) {
    redirect('/');
  }

  const enrollment = await getEnrollment(enrollmentId, codeParam);

  if (!enrollment.success) {
    redirect('/');
  }

  if (!enrollment.emailed) {
    const headerList = await headers();
    const ipAddress = headerList.get('x-real-ip');
    const userAgent = headerList.get('user-agent');

    const cookieStore = await cookies();
    const fbc = cookieStore.get('_fbc')?.value;
    const fbp = cookieStore.get('_fbp')?.value;

    // send email
    try {
      await sendEnrollmentEmail(enrollmentId, codeParam);
    } catch (err) {
      console.error(err);
    }

    // create Brevo contact
    try {
      await createBrevoContact(enrollment.emailAddress, enrollment.firstName, enrollment.lastName, enrollment.countryCode, enrollment.provinceCode, { STATUS_PET_STUDENT: true });
    } catch (err) {
      console.error(err);
    }

    // iDevAffiliate
    try {
      await addToIDevAffiliate(enrollment, ipAddress);
    } catch (err) {
      console.error(err);
    }

    // Facebook
    if (enrollment.transactionTime === null || new Date(date).getTime() - enrollment.transactionTime.getTime() < 7 * 24 * 60 * 60 * 1000) {
      try {
        const source = 'https://www.qcpetstudies.com/welcome-to-the-school';
        await fbPostPurchase(enrollment, source, ipAddress, userAgent, fbc, fbp);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <>
      <section id="top" className="bg-dark">
        <BackgroundImage src={HappyPuppyRunning} />
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
              <p>If you or the student have any questions regarding this enrollment, our friendly and knowledgeable student support advisors are available 7 days a week by email at <EmailLink /> or by phone at <TelephoneLink countryCode={enrollment.countryCode} />.</p>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentDetails enrollment={enrollment} />
      <Processing enrollment={enrollment} />
    </>
  );
};

export default WelcomeToTheSchoolThirdPartyPage;
