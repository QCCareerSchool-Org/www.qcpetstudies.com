'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { subnavs } from './subnavs';

export const SecondaryNav: FC = () => {
  const pathname = usePathname();

  const subnav = subnavs.find(s => {
    if (s.includeChildren) {
      return pathname.startsWith(s.pathname);
    }
    return pathname === s.pathname;
  });

  if (!subnav) {
    return null;
  }

  return (
    <Navbar id="secondary-nav" bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand>
          {subnav.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            {subnav.links.map(link => <Link key={link.title} href={link.href} className="nav-link">{link.title}</Link>)}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
