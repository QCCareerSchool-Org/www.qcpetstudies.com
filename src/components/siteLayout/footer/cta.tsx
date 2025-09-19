'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

import { CTAHeading } from './ctaHeading';

export type CTAType = 'grooming' | 'training' | 'care' | 'behavior' | 'grooming tech';

export const CTA: FC = () => {
  const pathname = usePathname();

  const type = getCTAType(pathname);
  const enrollmentUrl = getEnrollUrl(type);

  if (pathname.startsWith('/diy-grooming')) {
    return (
      <div className="row align-items-center">
        <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
          <h2 className="mb-3"><strong>Not sure which<br />option is right for you?</strong></h2>
          <p className="lead mb-0">Give us a call or send an email to <Link href="mailto:info@qcpetstudies.com">info@qcpetstudies.com</Link><br />our friendly advisors will help you find the perfect fit.</p>
        </div>
        <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
          <a href="https://www.qcpetstudies.com/contact-us"><button className="btn btn-secondary btn-lg" style={{ borderRadius: '25px' }}>Talk to an Advisor</button></a>
        </div>
      </div>
    );
  }

  return (
    <div className="row align-items-center">
      <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
        <h2><CTAHeading type={type} /></h2>
        <p className="lead mb-0">Take the first step towards a new career in the booming {getIndustry(type)} industry.</p>
      </div>
      <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
        <a href={enrollmentUrl}><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
      </div>
    </div>
  );
};

/**
 * Determines the CTAType to use based on the page path
 */
const getCTAType = (path: string | null): CTAType | undefined => {
  if (path === null) { return; }
  if (
    path.startsWith('/certification-courses/dog-grooming')
    || path.startsWith('/certification-courses/breed-styling')
    || path.startsWith('/certification-courses/dog-grooming-kit')
    || path.startsWith('/certification-courses/rm')
    || path.startsWith('/certification-courses/success-guaranteed')
  ) { return 'grooming'; }

  if (path.startsWith('/certification-courses/dog-daycare')) { return 'care'; }

  if (path.startsWith('/certification-courses/dog-behavior')) { return 'behavior'; }

  if (path.startsWith('/certification-courses/dog-training')) { return 'training'; }

  if (path.startsWith('/certification-courses/grooming-technician')) { return 'grooming tech'; }
};

const getIndustry = (type?: CTAType): string => {
  switch (type) {
    case 'grooming':
    case 'grooming tech':
      return 'dog grooming';
    case 'training':
      return 'dog training';
    case 'behavior':
      return 'behavior';
    case 'care':
      return 'dog care';
    default:
      return 'pet';
  }
};

const getEnrollUrl = (type?: CTAType): string => {
  switch (type) {
    case 'grooming':
      return `https://enroll.qcpetstudies.com?c=dg`;
    case 'training':
      return `https://enroll.qcpetstudies.com?c=dt`;
    case 'behavior':
      return `https://enroll.qcpetstudies.com?c=dt&c=dc`;
    case 'care':
      return `https://enroll.qcpetstudies.com?c=dd`;
    case 'grooming tech':
      return `https://enroll.qcpetstudies.com?c=gt`;
    default:
      return `https://enroll.qcpetstudies.com`;
  }
};
