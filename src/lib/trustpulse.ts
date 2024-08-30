import { RawEnrollment } from '../models/enrollment';

const urls = {
  dg: 'https://hooks.zapier.com/hooks/catch/1909320/358g42p',
  dt: 'https://hooks.zapier.com/hooks/catch/1909320/358q6qj',
  default: 'https://hooks.zapier.com/hooks/catch/1909320/35iyjpc',
};

const getUrl = (enrollment: RawEnrollment): string => {
  return enrollment.courses.some(c => c.code.toUpperCase() === 'DG')
    ? urls.dg
    : enrollment.courses.some(c => c.code.toUpperCase() === 'DT')
      ? urls.dt
      : urls.default;
};

export const trustPulseEnrollment = async (enrollment: RawEnrollment, ipAddress: string | null): Promise<void> => {
  const body = {
    firstName: enrollment.firstName,
    emailAddress: enrollment.emailAddress,
    postalCode: enrollment.postalCode,
    ipAddress,
  };

  const response = await fetch(getUrl(enrollment), {
    method: 'post',
    // headers: { 'Content-Type': 'application/json' }, // CORS doesn't allow Content-Type header
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  await response.json();
};
