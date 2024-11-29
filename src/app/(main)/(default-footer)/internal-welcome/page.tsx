import * as HttpStatus from '@qccareerschool/http-status';
import { headers } from 'next/headers';

import { EnrollmentDetailsWrapper } from './EnrollmentDetailsWrapper';
import { ErrorPageWrapper } from './ErrorPageWrapper';
import { InternalWelcomeComponent } from './InternalWelcomeComponent';
import { PageComponent } from '@/app/serverComponent';
import { SEO } from '@/components/SEO';
import { getEnrollment } from '@/lib/getEnrollment';
import { getParam } from '@/lib/getParam';
import { RawEnrollment } from '@/models/enrollment';

type PropData = {
  data?: {
    rawEnrollment: RawEnrollment;
    code: string | undefined;
    ipAddress: string | null;
  };
  errorCode: string | undefined;
};

const InternalWelcomePage: PageComponent = async ({ searchParams }) => {

  const getData = async (): Promise<PropData> => {
    try {
      if (typeof getParam(searchParams.enrollmentId) !== 'string' || typeof getParam(searchParams.code) !== 'string') {
        throw new HttpStatus.BadRequest();
      }

      const enrollmentId = parseInt(getParam(searchParams.enrollmentId) ?? '', 10);
      const code = getParam(searchParams.code);

      const rawEnrollment = await getEnrollment(enrollmentId, code ?? '');

      if (!rawEnrollment.complete || !rawEnrollment.success) {
        throw new HttpStatus.NotFound();
      }

      const headerList = headers();

      const ipAddress = Array.isArray(headerList.get('x-real-ip')) ? headerList.get('x-real-ip')?.[0] : headerList.get('x-real-ip');

      return { data: { rawEnrollment, code, ipAddress: ipAddress ?? null }, errorCode: undefined };

    } catch (err) {
      const internalServerError = 500;
      const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : internalServerError;
      return { errorCode: errorCode.toString() };
    }
  };

  const { data, errorCode } = await getData();

  if (typeof errorCode !== 'undefined') {
    return <ErrorPageWrapper errorCode={errorCode} />;
  }

  if (typeof data === 'undefined') {
    return <ErrorPageWrapper errorCode="500" />;
  }

  return <>
    <SEO
      title="Welcome to the School"
      description="Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center."
      canonical="/welcome-to-the-school"
    />

    <InternalWelcomeComponent {...data} />

    {data.rawEnrollment && <EnrollmentDetailsWrapper rawEnrollment={data.rawEnrollment} />}
  </>;
};

export default InternalWelcomePage;
