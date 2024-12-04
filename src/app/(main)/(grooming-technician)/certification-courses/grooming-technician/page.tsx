import { Metadata } from 'next';
import { GroomingTechnicianBase } from '.';
import { PageComponent } from '@/app/serverComponent';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'gt' ];

export const metadata: Metadata = {
  title: 'Grooming Technician Course',
  alternates: { canonical: '/certification-courses/grooming-technician' },
  description: 'Become a Certified Grooming Technician with interactive online training!',
};

const GroomingTechnicianPage: PageComponent = async () => {
  const gtPrice = await lookupPrices(courseCodes);
  const dgPrice = await lookupPrices([ 'dg' ]);
  const props = { gtPrice, dgPrice };
  return <GroomingTechnicianBase {...props} />;
};

export default GroomingTechnicianPage;
