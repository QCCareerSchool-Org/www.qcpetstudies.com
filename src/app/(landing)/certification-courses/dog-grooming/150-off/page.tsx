import type { Metadata } from 'next';

import { DogGroomingBase } from '@/app/(main)/certification-courses/dog-grooming';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCode: CourseCode = 'dg';

export const metadata: Metadata = {
  title: 'Dog Grooming Course',
  description: 'Become a Certified Dog Groomer with Interactive Online Training!',
  alternates: { canonical: '/certification-courses/dog-grooming/150-off' },
};

const DogGrooming150OffPage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const [ dgPrice, dePrice ] = await Promise.all([
    fetchPrice([ 'dg' ], countryCode, provinceCode, { promoCode: 'DG150', school: 'QC Pet Studies' }, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice([ 'de' ], countryCode, provinceCode, { promoCode: 'DG150', school: 'QC Pet Studies' }, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);

  if (!dgPrice.success || !dePrice.success) {
    return null;
  }

  return (
    <>
      <DeadlineFunnelScript />
      <DogGroomingBase countryCode={countryCode} provinceCode={provinceCode} dgPrice={dgPrice.value} dePrice={dePrice.value} enrollPath="/grooming-150-off" courseCode={courseCode} />
    </>
  );
};

export default DogGrooming150OffPage;
