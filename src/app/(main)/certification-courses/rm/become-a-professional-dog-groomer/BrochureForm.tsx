'use client';

import { FC, useEffect, useMemo, useState } from 'react';

import { BrochureForm as ExternalBrochureForm } from '@/components/BrochureForm';
import { getRandomIntInclusive } from '@/lib/randomInt';

const formAction = 'https://go.qcpetstudies.com/l/947642/2021-12-05/6h9rv';

export type Marketing = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
  term: string | null;
};

type Props = {
  gclid: string | undefined;
  msclkid: string | undefined;
  buttonText: string;
  firstName: string | undefined;
  lastName: string | undefined;
  emailAddress: string | undefined;
  emailOptIn: boolean;
  telephoneNumber: string | undefined;
  smsOptIn: boolean;
  marketing: Marketing;
  courses: string[] | undefined;
  errors: boolean | undefined;
};

export const BrochureForm: FC<Props> = ({ gclid, msclkid, buttonText, firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn, marketing, courses, errors }) => {
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

  return <ExternalBrochureForm
    action={formAction}
    buttonClassName="btn btn-outline-primary"
    buttonText={buttonText}
    hiddenFields={hiddenFields}
    marketing={marketing}
    courses={courses}
    initialValues={{ firstName: firstName ?? null, lastName: lastName ?? null, emailAddress: emailAddress ?? null, emailOptIn: emailOptIn, telephoneNumber: telephoneNumber ?? null, smsOptIn: smsOptIn }}
    errors={errors}
  />;
};
