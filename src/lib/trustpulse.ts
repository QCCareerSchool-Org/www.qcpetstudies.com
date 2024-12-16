import type { Enrollment } from '@/domain/enrollment';

const urls = {
  dg: 'https://hooks.zapier.com/hooks/catch/1909320/358g42p',
  dt: 'https://hooks.zapier.com/hooks/catch/1909320/358q6qj',
  default: 'https://hooks.zapier.com/hooks/catch/1909320/35iyjpc',
};

const getUrl = (enrollment: Enrollment): string => {
  return enrollment.courses.some(c => c.code.toUpperCase() === 'DG')
    ? urls.dg
    : enrollment.courses.some(c => c.code.toUpperCase() === 'DT')
      ? urls.dt
      : urls.default;
};

export const trustPulseEnrollment = async (enrollment: Enrollment, ipAddress: string | null): Promise<void> => {
  const payload: Payload = {
    firstName: enrollment.firstName,
    emailAddress: enrollment.emailAddress,
    postalCode: enrollment.postalCode,
    ipAddress,
  };

  const url = getUrl(enrollment);

  await trustPulse(payload, url);
};

type Payload = {
  firstName: string | null;
  emailAddress: string | null;
  postalCode: string | null;
  ipAddress: string | null;
};

const trustPulse = async (payload: Payload, url: string): Promise<void> => {
  const response = await fetch(url, {
    method: 'post',
    // headers: { 'Content-Type': 'application/json' }, // CORS doesn't allow Content-Type header
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  await response.json();
};
