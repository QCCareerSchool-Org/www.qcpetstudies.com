import DogTrainingCoursePreviewPage from '../course-preview/page';
import type { PageComponent } from '@/app/_app';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import { lookupPrices } from '@/lib/lookupPrices';

const Page: PageComponent = async props => {
  const price = await lookupPrices([ 'dt' ], { promoCode: 'DT300' });
  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingCoursePreviewPage {...props} enrollPath="/training-300-off" />
    </>
  );
};

export default Page;
