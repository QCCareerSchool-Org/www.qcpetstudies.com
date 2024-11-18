import { GetServerSideProps } from 'next';
import type { PageComponent } from '../../../../_app.page';
import CoursePreview, { Props } from './course-preview.page';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { LandingPageLayout } from '@/components/layouts/LandingPageLayout';
import { getLocation } from '@/lib/getLocation';
import { lookupPrices } from '@/lib/lookupPrices';

const Page: PageComponent = props => (
  <>
    <DeadlineFunnelScript />
    <CoursePreview {...props} enrollPath="/training-300-off" />
  </>
);

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices([ 'dt' ], location.countryCode, location.provinceCode, { promoCode: 'DT300' });
  return { props: { location, price, enrollPath: '/' } };
};

export default Page;
