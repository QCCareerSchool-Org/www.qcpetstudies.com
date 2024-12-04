import DogTrainingCoursePreviewPage from '../course-preview/page';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';

const Page: PageComponent = ({ searchParams }) => {
  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingCoursePreviewPage searchParams={{ ...searchParams, enrollPath: '/training-150-off', promoCode: 'DT150' }} params={{}} />
    </>
  );
};
export default Page;
