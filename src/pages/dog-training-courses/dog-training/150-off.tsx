import { NextPage } from 'next';
import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import CoursePreview, { getServerSideProps, Props } from './course-preview';

const Page: NextPage<Props> = props => (
  <>
    <DeadlineFunnelScript />
    <CoursePreview {...props} reloadApp={true} secondaryNav={false} enrollPath="/training-150-off" />
  </>
);

export { getServerSideProps };

export default Page;