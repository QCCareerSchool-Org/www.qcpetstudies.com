import type { Metadata } from 'next';

import { GroomingTechnicianBase } from '..';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

const courseCodes = [ 'gt' ];

export const metadata: Metadata = {
  title: 'Grooming Technician Course',
  alternates: { canonical: '/certification-courses/grooming-technician' },
  description: 'Become a Certified Grooming Technician with interactive online training!',
};

const GroomingTechnicianPageAlt1: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();

  const gtPriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const dgPriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: [ 'dg' ] };
  const [ gtPrice, dgPrice ] = await Promise.all([
    fetchPrice(gtPriceQuery),
    fetchPrice(dgPriceQuery),
  ]);
  const props = { gtPrice, dgPrice };
  return (
    <>
      <DeadlineFunnelScript />
      <GroomingTechnicianBase {...props} enrollPath="/grooming-300-off" />;
    </>
  );
};

export default GroomingTechnicianPageAlt1;
