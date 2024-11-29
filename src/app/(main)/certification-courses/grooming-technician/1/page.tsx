import { GroomingTechnicianBase } from '../';
import { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'gt' ];

const GroomingTechnicianPageAlt1: PageComponent = async () => {
  const gtPrice = await lookupPrices(courseCodes);
  const dgPrice = await lookupPrices([ 'dg' ]);
  const props = { gtPrice, dgPrice };
  return (
    <>
      <DeadlineFunnelScript />
      <GroomingTechnicianBase {...props} enrollPath="/grooming-300-off" />;
    </>
  );
};

// GroomingTechnicianPageAlt1.getLayout = page => <LandingPageLayout link={false}>{page}</LandingPageLayout>;

export default GroomingTechnicianPageAlt1;
