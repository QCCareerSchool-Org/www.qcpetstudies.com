'use client';

import type { FC } from 'react';
import { useEffect } from 'react';

import type { Enrollment } from '@/domain/enrollment';
import { brevoIdentifyStudent } from '@/lib/brevo';
import { fbqSale } from '@/lib/fbq';
import { gaSale } from '@/lib/gtag';

type Props = {
  enrollment: Enrollment;
};

export const Processing: FC<Props> = ({ enrollment }) => {
  useEffect(() => {
    if (!enrollment.emailed) {
      gaSale(enrollment);
      fbqSale(enrollment);
    }
    brevoIdentifyStudent(enrollment.emailAddress, enrollment.countryCode, enrollment.provinceCode ?? undefined, enrollment.firstName, enrollment.lastName);
  }, [ enrollment ]);
  return null;
};
