import '@/styles/global.scss';
import { ReactNode } from 'react';
import { RootLayoutWrapper } from './RootLayoutWrapper';

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  return (
    <html lang="en">
      <body className="d-flex flex-column h-100">
        <RootLayoutWrapper>
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
