import DogTrainingCoursePreviewPage from '../course-preview/page';
import { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';

const Page: PageComponent = ({ searchParams }) => {
  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingCoursePreviewPage searchParams={{ ...searchParams, enrollPath: '/training-300-off', promoCode: 'DT300' }} params={{}} />
    </>
  );
};

export default Page;
