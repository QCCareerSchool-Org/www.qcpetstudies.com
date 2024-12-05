import type { LayoutComponent } from '@/app/serverComponent';
import { Footer } from '@/components/footer';
import { getData } from '@/lib/getData';

const DefaultFooterLayout: LayoutComponent = ({ children }) => {
  const { countryCode } = getData();

  return (
    <>
      {children}
      <Footer countryCode={countryCode} />
    </>
  );
};

export default DefaultFooterLayout;
