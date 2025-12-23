import type { Metadata } from 'next';

import { DogGroomingBase } from '@/app/(main)/certification-courses/dog-grooming';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import type { CourseCode } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getServerData } from '@/lib/getServerData';

const courseCode: CourseCode = 'dg';

export const metadata: Metadata = {
  title: 'Dog Grooming Course',
  description: 'Become a Certified Dog Groomer with Interactive Online Training!',
  alternates: { canonical: '/certification-courses/dog-grooming/400-off' },
};

const DogGrooming400OffPage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);
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
      <DogGroomingBase countryCode={countryCode} provinceCode={provinceCode} dgPrice={dgPrice} dePrice={dePrice} enrollPath="/grooming-400-off" courseCode={courseCode} />
    </>
  );
};

export default DogGrooming400OffPage;
