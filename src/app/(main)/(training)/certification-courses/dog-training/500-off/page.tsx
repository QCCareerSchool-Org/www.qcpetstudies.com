import DogTrainingCoursePreviewPage from '../course-preview/page';
import { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';

const Page: PageComponent = ({ searchParams }) => {
  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingCoursePreviewPage searchParams={{ ...searchParams, enrollPath: '/training-500-off', promoCode: 'DT500' }} params={{}} />
    </>
  );
};

export default Page;
