import type { LayoutComponent } from '@/app/serverComponent';
import { Footer } from '@/components/footer';
import { getData } from '@/lib/getData';

const DogTrainingFooterLayout: LayoutComponent = ({ children }) => {
  const { countryCode } = getData();

  return (
    <>
      {children}
      <Footer ctaType="training" countryCode={countryCode} />
    </>
  );
};

export default DogTrainingFooterLayout;
