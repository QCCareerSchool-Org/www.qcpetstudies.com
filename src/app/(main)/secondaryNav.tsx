'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Subnav, subnavs } from './subnavs';

export const SecondaryNav: FC = () => {

  const pathname = usePathname();
  const subnav = getSecondaryNav(pathname);

  if (!subnav) {
    return null;
  }

  const { title, links } = subnav;

  return (
    <Navbar id="secondary-nav" bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            {links.map(link => <Link key={link.title} href={link.href} className="nav-link">{link.title}</Link>)}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

const getSecondaryNav = (pathname: string): Subnav | undefined => {
  return subnavs.find(s => (
    (s.includeChildren && pathname?.startsWith(s.pathname))
    ?? (pathname === s.pathname)
  ));
};
