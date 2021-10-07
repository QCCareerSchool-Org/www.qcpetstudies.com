import { ReactElement, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { SecondaryNavLinks } from './SecondaryNav';

type Props = {
  noHero?: boolean;
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLinks;
  children: ReactNode;
};

export const DefaultLayout = ({ noHero, secondaryTitle, secondaryNavLinks, children }: Props): ReactElement => (
  <>
    <div className="d-flex flex-column vh-100">
      <Header noHero={noHero} secondaryTitle={secondaryTitle} secondaryNavLinks={secondaryNavLinks} className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  </>
);
