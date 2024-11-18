import { GetServerSideProps } from 'next';

import { PageComponent } from '../../../../_app.page';
import { GroomingTechnicianBase } from '.';
import type { Props } from '.';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { LandingPageLayout } from '@/components/layouts/LandingPageLayout';
import { getLocation } from '@/lib/getLocation';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'gt' ];

const GroomingTechnicianPageAlt1: PageComponent = props => (
  <>
    <DeadlineFunnelScript />
    <GroomingTechnicianBase {...props} enrollPath="/grooming-300-off" />;
  </>
);

GroomingTechnicianPageAlt1.getLayout = page => <LandingPageLayout link={false}>{page}</LandingPageLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const [ gtPrice, dgPrice ] = await Promise.all([
    lookupPrices(courseCodes, location.countryCode, location.provinceCode),
    lookupPrices([ 'dg' ], location.countryCode, location.provinceCode),
  ]);
  return { props: { location, gtPrice, dgPrice } };
};

export default GroomingTechnicianPageAlt1;
