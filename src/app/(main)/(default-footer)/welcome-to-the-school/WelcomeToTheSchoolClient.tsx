'use client';

import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';

import { EnrollmentDetails } from '@/components/EnrollmentDetails';
import { useLocation } from '@/hooks/useLocation';
import AlexSignature from '@/images/alex-myers.png';
import HappyPuppyRunning from '@/images/backgrounds/happy-puppy-running.jpg';
import { brevoIdentifyStudent } from '@/lib/brevo';
import { fbqSale } from '@/lib/fbq';
import { gaSale } from '@/lib/ga';
import { getTelephoneNumber } from '@/lib/phone';
import type { Enrollment, RawEnrollment } from '@/models/enrollment';

type Props = {
  rawEnrollment: RawEnrollment;
};

export const WelcomeToTheSchoolClient: FC<Props> = ({ rawEnrollment }) => {
  const [ emailAddress, setEmailAddress ] = useState('');
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

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
    brevoIdentifyStudent(
      enrollment.emailAddress,
      enrollment.countryCode,
      enrollment.provinceCode ?? undefined,
      enrollment.firstName,
      enrollment.lastName,
    );
  }, [ enrollment ]);

  return (
    <>

      <section id="top" className="bg-dark">
        <Image
          src={HappyPuppyRunning}
          placeholder="blur"
          alt="happy puppy running"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1>Welcome to the School</h1>
              <p className="lead mb-0">Whether you want to become a dog groomer, trainer, pet sitter, or all of the above, you'll gain the certification needed to become successful in your chosen career.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Thank You for Enrolling with <strong>QC Pet Studies!</strong></h2>
              <p>Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center. If you don't see an email from us, please check your spam folder.</p>
              <p>If you have any questions regarding the course, or if you want to discuss your goals, our friendly and knowledgeable student support advisors are available 7 days a week by email at <a href={`mailto:${emailAddress}`} className="link-primary">{emailAddress}</a> or by phone at {telephoneNumber}. We would be delighted to speak with you and assist you in any way we can. We hope your learning experience with us will be enjoyable, interesting, and valuable.</p>
              <p>Remember, we want to develop a personal relationship with you and be readily available for you whenever you need us.</p>
              <p><strong>Best of luck with your studies!</strong></p>
              <p>Sincerely,</p>
              <Image
                src={AlexSignature}
                alt="Alex Myers"
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }}
              /><br /><div style={{ marginTop: -14 }}>Director<br /><strong>QC Career School</strong></div>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentDetails enrollment={enrollment} />
    </>
  );
};
