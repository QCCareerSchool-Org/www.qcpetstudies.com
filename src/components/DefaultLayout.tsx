import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { Footer, FooterCTAType } from './Footer';
import { Header } from './Header';
import { SecondaryNavLinks } from './SecondaryNav';

type Props = {
  noHero?: boolean;
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLinks;
  footerCTAType?: FooterCTAType;
  enrollPath?: string;
  children: ReactNode;
};

export const DefaultLayout = ({ noHero, secondaryTitle, secondaryNavLinks, footerCTAType, enrollPath = '/', children }: Props): ReactElement => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="defaultPage" className="d-flex flex-column vh-100">
      <Header noHero={noHero} secondaryTitle={secondaryTitle} secondaryNavLinks={secondaryNavLinks} enrollPath={enrollPath} className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
        <h1>{count}</h1>
      </main>
      <Footer ctaType={footerCTAType} enrollPath={enrollPath} className="bg-navy mt-auto" />
    </div>
  );
};
