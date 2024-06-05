import { GetServerSideProps } from 'next';

import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import { NextPageWithLayout } from '../../_app.page';
import { GroomingTechnicianBase } from '.';
import type { Props } from '.';

const courseCodes = [ 'gt' ];

const GroomingTechnicianPage: NextPageWithLayout<Props> = props => <GroomingTechnicianBase {...props} />;

GroomingTechnicianPage.getLayout = page => <DefaultLayout footerCTAType="grooming tech">{page}</DefaultLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const [ gtPrice, dgPrice ] = await Promise.all([
    lookupPrices(courseCodes, location.countryCode, location.provinceCode),
    lookupPrices([ 'dg' ], location.countryCode, location.provinceCode),
  ]);
  return { props: { location, gtPrice, dgPrice } };
};

export default GroomingTechnicianPage;
