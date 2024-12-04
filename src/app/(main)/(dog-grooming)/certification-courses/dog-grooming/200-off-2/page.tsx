import GroomingCoursePreviewPage from '../course-preview/page';
import { metadata as rootMetadata } from '../page';
import { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';

export const metadata = { ...rootMetadata, description: '' };

const Page: PageComponent = props => (
  <>
    <DeadlineFunnelScript />
    <GroomingCoursePreviewPage {...props} enrollPath="/grooming-200-off" />
  </>
);

export default Page;
