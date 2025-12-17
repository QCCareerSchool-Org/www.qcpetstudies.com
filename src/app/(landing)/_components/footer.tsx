import Link from 'next/link';
import { headers } from 'next/headers';
import type { FC } from 'react';

import { BoxingDayFooter } from './boxingDayFooter';
import { TelephoneLink } from '@/components/telephoneLink';
import { gbpCountry } from '@/lib/currencies';
import { getData } from '@/lib/getData';

const BOXING_DAY_START = Date.UTC(2025, 11, 26, 8);
const BOXING_DAY_END = Date.UTC(2026, 0, 3, 8);
type BoxingDayCourse = 'dg' | 'dt';
const BOXING_DAY_PATHS = new Map<string, BoxingDayCourse>([
  [ '/thank-you-dog-grooming-course-preview', 'dg' ],
  [ '/thank-you-dog-training-course-preview', 'dt' ],
]);

const getBoxingDayCourse = async (): Promise<BoxingDayCourse | undefined> => {
  const now = Date.now();

  if (now < BOXING_DAY_START || now >= BOXING_DAY_END) {
    return undefined;
  }

  const headerList = await headers();
  const candidatePaths = [
    headerList.get('x-matched-path'),
    headerList.get('x-invoke-path'),
    headerList.get('next-url'),
  ];

  for (const candidate of candidatePaths) {
    if (!candidate) {
      continue;
    }

    const path = candidate.split('?')[0];
    const course = BOXING_DAY_PATHS.get(path);

    if (course) {
      return course;
    }
  }

  return undefined;
};

export const Footer: FC = async () => {
  const boxingDayCourse = await getBoxingDayCourse();

  if (boxingDayCourse) {
    return <BoxingDayFooter course={boxingDayCourse} />;
  }

  const { countryCode } = await getData();
  const termsLink = gbpCountry(countryCode) ? '/terms-gb' : '/terms';

  return (
    <footer className="bg-light">
      <section>
        <div className="container text-center">
          <h2>Have questions?<br />Give us a call.</h2>
          <p className="lead"><TelephoneLink countryCode={countryCode} /></p>
          &copy;{new Date().getFullYear()} QC Pet Studies<br /><Link href={termsLink}>Privacy Policy</Link>
        </div>
      </section>
    </footer>
  );
};
