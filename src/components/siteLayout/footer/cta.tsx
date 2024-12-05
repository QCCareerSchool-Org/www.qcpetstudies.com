'use client';

import { usePathname } from 'next/navigation';
import type { FC } from 'react';

import { CTAHeading } from './ctaHeading';

export type CTAType = 'grooming' | 'training' | 'care' | 'behavior' | 'grooming tech';

export const CTA: FC = () => {
  const pathname = usePathname();

  const type = getCTAType(pathname);
  const enrollmentUrl = getEnrollUrl(type);

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
  if (path?.startsWith('/certification-courses/dog-grooming')) {
    return 'grooming';
  }
};

const getIndustry = (type?: CTAType): string => {
  switch (type) {
    case 'grooming':
    case 'grooming tech':
      return 'dog grooming';
    case 'training':
      return 'dog training';
    case 'behavior':
      return `behavior`;
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
