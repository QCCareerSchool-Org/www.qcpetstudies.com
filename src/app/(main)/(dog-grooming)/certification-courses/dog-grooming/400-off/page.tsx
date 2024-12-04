import GroomingCoursePreviewPage from '../course-preview/page';
import { metadata as rootMetadata } from '../page';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
export const metadata = { ...rootMetadata, description: '' };
const Page: PageComponent = props => (
  <>
    <DeadlineFunnelScript />
    <GroomingCoursePreviewPage {...props} enrollPath="/grooming-400-off" />
  </>
);
export default Page;
