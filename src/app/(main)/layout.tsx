import type { LayoutComponent } from '@/app/serverComponent';
import { Layout } from '@/components/layout';
import { getData } from '@/lib/getData';

const MainLayout: LayoutComponent = ({ children }) => {
  const date = new Date().getTime();
  const { countryCode } = getData();

  return (
    <Layout date={date} countryCode={countryCode}>
      {children}
    </Layout>
  );
};

export default MainLayout;
