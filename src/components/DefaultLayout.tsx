import { ReactElement, ReactNode } from 'react';

import { Footer, FooterCTAType } from './Footer';
import { Header } from './Header';
import { SecondaryNavLinks } from './SecondaryNav';

type Props = {
  noHero?: boolean;
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLinks;
  footerCTAType?: FooterCTAType;
  children: ReactNode;
};

export const DefaultLayout = ({ noHero, secondaryTitle, secondaryNavLinks, footerCTAType, children }: Props): ReactElement => (
  <div id="defaultPage" className="d-flex flex-column vh-100">
    <Header noHero={noHero} secondaryTitle={secondaryTitle} secondaryNavLinks={secondaryNavLinks} className="flex-shrink-0 fixed-top" />
    <main className="flex-shrink-0">
      {children}
    </main>
    <Footer ctaType={footerCTAType} className="bg-navy mt-auto" />
  </div>
);
