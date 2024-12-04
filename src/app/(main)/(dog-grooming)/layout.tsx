import type { LayoutComponent } from '@/app/serverComponent';
import { Footer } from '@/components/footer';
import { getData } from '@/lib/getData';

const DogGroomingFooterLayout: LayoutComponent = ({ children }) => {
  const { countryCode } = getData();

  return (
    <>
      {children}
      <Footer ctaType="grooming" countryCode={countryCode} />
    </>
  );
};

export default DogGroomingFooterLayout;
