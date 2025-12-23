import type { Metadata } from 'next';

import { GroomingTechnicianBase } from '..';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getServerData } from '@/lib/getServerData';

const courseCodes = [ 'gt' ];

export const metadata: Metadata = {
  title: 'Grooming Technician Course',
  alternates: { canonical: '/certification-courses/grooming-technician' },
  description: 'Become a Certified Grooming Technician with interactive online training!',
};

const GroomingTechnicianPageAlt1: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

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
      <GroomingTechnicianBase gtPrice={gtPrice} dgPrice={dgPrice} enrollPath="/grooming-300-off" />;
    </>
  );
};

export default GroomingTechnicianPageAlt1;
