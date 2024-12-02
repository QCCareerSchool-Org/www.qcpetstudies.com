'use client';

import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';

import { EnrollmentDetails } from '@/components/EnrollmentDetails';
import HappyPuppyRunning from '@/images/backgrounds/happy-puppy-running.jpg';
import { fbqSale } from '@/lib/fbq';
import { gaSale } from '@/lib/ga';
import type { Enrollment, RawEnrollment } from '@/models/enrollment';

type Props = {
  rawEnrollment: RawEnrollment;
};

export const WelcomeToTheSchoolThirdPartyClient: FC<Props> = ({ rawEnrollment }) => {
  const [ emailAddress, setEmailAddress ] = useState('');

  const enrollment: Enrollment = useMemo(() => ({
    ...rawEnrollment,
    paymentDate: new Date(rawEnrollment.paymentDate),
    transactionTime: rawEnrollment.transactionTime === null ? null : new Date(rawEnrollment.transactionTime),
  }), [ rawEnrollment ]);

  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    setEmailAddress('info' + '@' + 'qcpetstudies.com');
  }, []);

  useEffect(() => {
    if (!enrollment.emailed) {
      gaSale(enrollment);
      fbqSale(enrollment);
    }
  }, [ enrollment ]);

  return (
    <>

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

      <EnrollmentDetails enrollment={enrollment} />
    </>
  );
};
