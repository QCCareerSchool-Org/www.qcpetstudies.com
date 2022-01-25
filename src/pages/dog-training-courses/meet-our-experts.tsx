import { DefaultLayout } from '../../components/DefaultLayout';
import type { NextPageWithLayout } from '../_app';

const DogTrainingExpertsPage: NextPageWithLayout = () => <h1>Meet Our Experts</h1>;

DogTrainingExpertsPage.getLayout = page => <DefaultLayout footerCTAType="training">{page}</DefaultLayout>;

export default DogTrainingExpertsPage;
