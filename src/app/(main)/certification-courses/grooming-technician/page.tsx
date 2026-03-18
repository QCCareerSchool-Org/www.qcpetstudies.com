import type { Metadata } from 'next';

import { GroomingTechnicianBase } from '.';
import type { PageComponent } from '@/app/serverComponent';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetch';
import { getServerData } from '@/lib/getServerData';

const courseCodes: CourseCode[] = [ 'gt' ];

export const metadata: Metadata = {
  title: 'Grooming Technician Course',
  alternates: { canonical: '/certification-courses/grooming-technician' },
  description: 'Become a Certified Grooming Technician with interactive online training!',
};

const GroomingTechnicianPage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const [ gtPrice, dgPrice ] = await Promise.all([
    fetchPrice(courseCodes, countryCode, provinceCode),
    fetchPrice([ 'dg' ], countryCode, provinceCode),
  ]);

  if (!gtPrice.success || !dgPrice.success) {
    return null;
  }

  return <GroomingTechnicianBase gtPrice={gtPrice.value} dgPrice={dgPrice.value} />;
};

export default GroomingTechnicianPage;
