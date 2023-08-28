import { Enrollment } from '../models/enrollment';

const url = 'https://hooks.zapier.com/hooks/catch/1909320/35iyjpc/';

export const trustPulseEnrollment = async (enrollment: Enrollment, ipAddress: string | null): Promise<void> => {
  const body = {
    firstName: enrollment.firstName,
    emailAddress: enrollment.emailAddress,
    postalCode: enrollment.postalCode,
    ipAddress,
  };

  const response = await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  await response.json();
};
