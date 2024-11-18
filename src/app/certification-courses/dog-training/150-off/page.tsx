import DogTrainingCoursePreviewPage from '../course-preview/page';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { lookupPrices } from '@/lib/lookupPrices';

const Page: PageComponent = async props => {
  const price = await lookupPrices([ 'dt' ], { promoCode: 'DT150' });
  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingCoursePreviewPage {...props} enrollPath="/training-150-off" />
    </>
  );
};
export default Page;
