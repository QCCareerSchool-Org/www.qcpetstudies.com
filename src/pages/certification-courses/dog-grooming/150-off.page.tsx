import { GetServerSideProps } from 'next';
import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../components/layouts/LandingPageLayout';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import type { NextPageWithLayout } from '../../_app.page';
import CoursePreview, { Props } from './course-preview.page';

const Page: NextPageWithLayout<Props> = props => (
  <>
    <DeadlineFunnelScript />
    <CoursePreview {...props} enrollPath="/grooming-150-off" />
  </>
);

Page.getLayout = page => (
  <LandingPageLayout link={false}>{page}</LandingPageLayout>
);

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices([ 'dg' ], location.countryCode, location.provinceCode, { promoCode: 'DG150' });
  return { props: { location, price, enrollPath: '/' } };
};

export default Page;
