import { NewYearsFooter } from '../../../_components/newYearsFooter';
import { Footer } from '../../../_components/footer';

const NEW_YEARS_START = Date.UTC(2025, 11, 26, 8);
const NEW_YEARS_END = Date.UTC(2026, 0, 3, 8);

export const dynamic = 'force-dynamic';

const GroomingThankYouFooter = () => {
  const now = Date.now();
  const isNewYearsWindow = now >= NEW_YEARS_START && now < NEW_YEARS_END;

  return isNewYearsWindow ? <NewYearsFooter course="dg" /> : <Footer />;
};

export default GroomingThankYouFooter;
