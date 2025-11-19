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
  alternates: { canonical: '/certification-courses/grooming-technician/2' },
  description: 'Become a Certified Grooming Technician with interactive online training!',
};

const GroomingTechnicianPageAlt2: PageComponent = async () => {
  const { countryCode, provinceCode } = await getData();

  const gtPriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const dgPriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: [ 'dg' ] };
  const [ gtPrice, dgPrice ] = await Promise.all([
    fetchPrice(gtPriceQuery),
    fetchPrice(dgPriceQuery),
  ]);

  if (!gtPrice || !dgPrice) {
    return null;
  }

  return (
    <>
      <DeadlineFunnelScript />
      <GroomingTechnicianBase gtPrice={gtPrice} dgPrice={dgPrice} enrollPath="/grooming-200-off" />;
    </>
  );
};

export default GroomingTechnicianPageAlt2;
