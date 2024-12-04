import type { LayoutComponent } from '@/app/serverComponent';
import { Footer } from '@/components/footer';
import { getData } from '@/lib/getData';

const DogDaycareFooterLayout: LayoutComponent = ({ children }) => {
  const { countryCode } = getData();

  return (
    <>
      {children}
      <Footer ctaType="care" countryCode={countryCode} />
    </>
  );
};

export default DogDaycareFooterLayout;
