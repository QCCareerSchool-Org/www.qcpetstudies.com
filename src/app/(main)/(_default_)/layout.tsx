import { LayoutComponent } from '@/app/serverComponent';
import { Footer } from '@/components/footer';

const DefaultFooterLayout: LayoutComponent = ({
  children,
}) => {
  return (
    <main className="flex-shrink-0">
      {children}
      <Footer className="bg-navy mt-auto" />
    </main>
  );
};

export default DefaultFooterLayout;
