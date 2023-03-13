import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../components/layouts/LandingPageLayout';
import type { NextPageWithLayout } from '../../_app';
import CoursePreview, { getServerSideProps, Props } from './course-preview';

const Page: NextPageWithLayout<Props> = props => (
  <>
    <DeadlineFunnelScript />
    <CoursePreview {...props} enrollPath="/grooming-500-off" />
  </>
);

Page.getLayout = page => (
  <LandingPageLayout link={false}>{page}</LandingPageLayout>
);

export { getServerSideProps };

export default Page;
