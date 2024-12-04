import DogTrainingCoursePreviewPage from '../course-preview/page';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';

const Page: PageComponent = ({ searchParams }) => {
  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingCoursePreviewPage searchParams={{ ...searchParams, enrollPath: '/training-200-off', promoCode: 'DT200' }} params={{}} />
    </>
  );
};

export default Page;
