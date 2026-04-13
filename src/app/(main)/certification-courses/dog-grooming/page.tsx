import type { Metadata } from 'next';

import { DogGroomingBase } from '.';
import type { PageComponent } from '@/serverComponent';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';

const courseCode: CourseCode = 'dg';

export const metadata: Metadata = {
  title: 'Dog Grooming Course',
  description: 'Become a Certified Dog Groomer with Interactive Online Training!',
  alternates: { canonical: '/certification-courses/dog-grooming' },
};

const DogGroomingPage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const [ dgPrice, dePrice ] = await Promise.all([
    fetchPrice([ 'dg' ], countryCode, provinceCode),
    fetchPrice([ 'de' ], countryCode, provinceCode),
  ]);

  if (!dgPrice.success || !dePrice.success) {
    return null;
  }

  return <DogGroomingBase countryCode={countryCode} provinceCode={provinceCode} dgPrice={dgPrice.value} dePrice={dePrice.value} enrollPath="/" courseCode={courseCode} />;
};

export default DogGroomingPage;
