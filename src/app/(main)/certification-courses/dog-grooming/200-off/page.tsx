import type { Metadata } from 'next';

import { DogGroomingBase } from '..';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import type { CourseCode } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

const courseCodes: CourseCode[] = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Dog Grooming Course',
  description: 'Become a Certified Dog Groomer with Interactive Online Training!',
  alternates: { canonical: '/certification-courses/dog-grooming/200-off' },
};

const DogGrooming200OffPage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const dgPriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: [ 'dg' ] };
  const dePriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: [ 'de' ] };
  const [ dgPrice, dePrice ] = await Promise.all([
    fetchPrice(dgPriceQuery),
    fetchPrice(dePriceQuery),
  ]);

  if (!dgPrice || !dePrice) {
    return null;
  }

  return (
    <>
      <DeadlineFunnelScript />
      <DogGroomingBase dgPrice={dgPrice} dePrice={dePrice} enrollPath="/grooming-200-off" courseCodes={courseCodes} />
    </>
  );
};

export default DogGrooming200OffPage;
