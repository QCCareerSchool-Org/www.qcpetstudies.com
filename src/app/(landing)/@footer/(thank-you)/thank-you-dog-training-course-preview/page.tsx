import { Footer } from '../../../_components/footer';
import { NewYearsFooter } from '../../../_components/newYearsFooter';

const NEW_YEARS_START = Date.UTC(2025, 11, 26, 8);
const NEW_YEARS_END = Date.UTC(2026, 0, 17, 8);

export const dynamic = 'force-dynamic';

const now = Date.now();

const TrainingThankYouFooter = () => {
  const isNewYearsWindow = now >= NEW_YEARS_START && now < NEW_YEARS_END;

  return isNewYearsWindow ? <NewYearsFooter course="dt" /> : <Footer />;
};

export default TrainingThankYouFooter;
