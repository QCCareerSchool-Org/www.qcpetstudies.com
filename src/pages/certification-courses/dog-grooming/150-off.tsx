import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../components/LandingPageLayout';
import type { NextPageWithLayout } from '../../_app';
import CoursePreview, { getServerSideProps, Props } from './course-preview';

const Page: NextPageWithLayout<Props> = props => (
  <>
    <DeadlineFunnelScript />
    <CoursePreview {...props} enrollPath="/grooming-150-off" />
  </>
);

Page.getLayout = page => (
  <LandingPageLayout link={false} secondaryNav={false} enrollPath="/grooming-150-off">{page}</LandingPageLayout>
);

export { getServerSideProps };

export default Page;