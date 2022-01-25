import { DefaultLayout } from '../../components/DefaultLayout';
import type { NextPageWithLayout } from '../_app';

const DogGroomingExpertsPage: NextPageWithLayout = () => <h1>Meet Our Experts</h1>;

DogGroomingExpertsPage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export default DogGroomingExpertsPage;
