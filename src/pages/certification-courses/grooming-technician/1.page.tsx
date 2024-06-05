import { GetServerSideProps } from 'next';

import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../components/layouts/LandingPageLayout';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import { Location } from '../../../models/location';
import { PriceResult } from '../../../models/price';
import { NextPageWithLayout } from '../../_app.page';
import { GroomingTechnicianBase } from '.';

const courseCodes = [ 'gt' ];

type Props = {
  location: Location;
  gtPrice: PriceResult;
  dgPrice: PriceResult;
};

const GroomingTechnicianPageAlt1: NextPageWithLayout<Props> = ({ gtPrice, dgPrice, location }) => (
  <>
    <DeadlineFunnelScript />
    <GroomingTechnicianBase gtPrice={gtPrice} dgPrice={dgPrice} location={location} />;
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
