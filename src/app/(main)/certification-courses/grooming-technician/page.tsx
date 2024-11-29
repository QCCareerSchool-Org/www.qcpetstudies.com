import { GroomingTechnicianBase } from '.';
import { PageComponent } from '@/app/serverComponent';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'gt' ];

const GroomingTechnicianPage: PageComponent = async () => {
  const gtPrice = await lookupPrices(courseCodes);
  const dgPrice = await lookupPrices([ 'dg' ]);
  const props = { gtPrice, dgPrice };
  return <GroomingTechnicianBase {...props} />;
};

export default GroomingTechnicianPage;
