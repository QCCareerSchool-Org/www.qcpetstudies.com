import GroomingCoursePreviewPage from '../course-preview/page';
import { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';

const Page: PageComponent = props => (
  <>
    <DeadlineFunnelScript />
    <GroomingCoursePreviewPage {...props} enrollPath="/grooming-300-off" />
  </>
);

export default Page;
