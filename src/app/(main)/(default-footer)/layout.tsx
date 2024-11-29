import { Footer } from '../footer';
import { LayoutComponent } from '@/app/serverComponent';

export const DefaultFooterLayout: LayoutComponent = ({
  children,
}) => {
  return (
    <main className="flex-shrink-0">
      {children}
      <Footer className="bg-navy mt-auto" />
    </main>
  );
};
