import type { Metadata } from 'next';

import { GroomingTechnicianBase } from '.';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'gt' ];

export const metadata: Metadata = {
  title: 'Grooming Technician Course',
  alternates: { canonical: '/certification-courses/grooming-technician' },
  description: 'Become a Certified Grooming Technician with interactive online training!',
};

const GroomingTechnicianPage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const [ gtPrice, dgPrice ] = await Promise.all([
    fetchPrice(courseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice([ 'dg' ], countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);

  if (!gtPrice.success || !dgPrice.success) {
    return null;
  }

  return <GroomingTechnicianBase gtPrice={gtPrice.value} dgPrice={dgPrice.value} />;
};

export default GroomingTechnicianPage;
