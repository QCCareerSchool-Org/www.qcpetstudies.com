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

const DogGrooming200Off2Page: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes, options: { school: 'QC Pet Studies', promoCode: 'DG200' } };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return (
    <>
      <DeadlineFunnelScript />
      <DogGroomingBase price={price} enrollPath="/grooming-200-off" courseCodes={courseCodes} />;
    </>
  );
};

export default DogGrooming200Off2Page;
