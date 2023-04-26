import Link from 'next/link';
import { ReactElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useToggle } from '../hooks/useToggle';

export type SecondaryNavLinks = Array<{
  name: string;
  url: string;
}>;

type Props = {
  title?: string;
  nav: SecondaryNavLinks;
  mobile: boolean;
  scrolled: boolean;
  offset?: number;
};

export const SecondaryNav = ({ title, nav, mobile, scrolled, offset }: Props): ReactElement => {
  const [ mobileMenu, toggleMobileMenu ] = useToggle(false);

  return (
    <Navbar
      id="secondary-nav"
      bg="light"
      expand="lg"
      fixed="top"
      className={`shadow-sm ${mobileMenu && mobile ? 'opened' : 'closed'} ${mobile ? 'mobile' : 'desktop'} ${scrolled ? 'scrolled' : ''}`}
      style={offset ? { marginTop: `calc(var(--navBarHeight) + ${offset}px)` } : undefined}
    >
      <div className="container">
        <Navbar.Brand>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" onClick={() => toggleMobileMenu()} />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            {nav.map(n => <Link key={n.name} href={n.url} className="nav-link">{n.name}</Link>)}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
