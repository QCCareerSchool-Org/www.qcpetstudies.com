import { GroomingTechnicianBase } from '../';
import { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'gt' ];

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

// GroomingTechnicianPageAlt2.getLayout = page => <LandingPageLayout link={false}>{page}</LandingPageLayout>;

export default GroomingTechnicianPageAlt2;
