'use client';

import { FC, useMemo } from 'react';
import { EnrollmentDetails } from '@/components/EnrollmentDetails';
import { Enrollment, RawEnrollment } from '@/models/enrollment';

type Props = {
  rawEnrollment: RawEnrollment;
};

export const EnrollmentDetailsWrapper: FC<Props> = ({ rawEnrollment }) => {
  const enrollment: Enrollment | undefined = useMemo(() => {
    if (typeof rawEnrollment === 'undefined') {
      return;
    }
    return {
      ...rawEnrollment,
      paymentDate: new Date(rawEnrollment.paymentDate),
      transactionTime: rawEnrollment.transactionTime === null ? null : new Date(rawEnrollment.transactionTime),
    };
  }, [ rawEnrollment ]);
  return (
    <>{enrollment && <EnrollmentDetails enrollment={enrollment} />}</>
  );
};
