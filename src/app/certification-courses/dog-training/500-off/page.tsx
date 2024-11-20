import DogTrainingCoursePreviewPage from '../course-preview/page';
import type { PageComponent } from '@/app/_app';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { lookupPrices } from '@/lib/lookupPrices';

const Page: PageComponent = async props => {
  const price = await lookupPrices([ 'dt' ], { promoCode: 'DT500' });
  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingCoursePreviewPage {...props} enrollPath="/training-500-off" />
    </>
  );
};

export default Page;
