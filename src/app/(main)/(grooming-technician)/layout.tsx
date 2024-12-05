import type { LayoutComponent } from '@/app/serverComponent';
import { Footer } from '@/components/footer';
import { getData } from '@/lib/getData';

const GroomingTechnicianFooterLayout: LayoutComponent = ({ children }) => {
  const { countryCode } = getData();

  return (
    <>
      {children}
      <Footer ctaType="grooming tech" countryCode={countryCode} />
    </>
  );
};

export default GroomingTechnicianFooterLayout;
