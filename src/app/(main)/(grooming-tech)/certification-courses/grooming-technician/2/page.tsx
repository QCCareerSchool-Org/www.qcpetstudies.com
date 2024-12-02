import { Metadata } from 'next';
import { GroomingTechnicianBase } from '..';
import { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'gt' ];

export const metadata: Metadata = {
  title: 'Grooming Technician Course',
  alternates: { canonical: '/certification-courses/grooming-technician/2' },
  description: 'Become a Certified Grooming Technician with interactive online training!',
};

const GroomingTechnicianPageAlt2: PageComponent = async () => {
  const gtPrice = await lookupPrices(courseCodes);
  const dgPrice = await lookupPrices([ 'dg' ]);
  const props = { gtPrice, dgPrice };
  return (
    <>
      <DeadlineFunnelScript />
      <GroomingTechnicianBase {...props} enrollPath="/grooming-200-off" />;
    </>
  );
};

export default GroomingTechnicianPageAlt2;
