import Link from 'next/link';
import { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export type SecondaryNavLink = {
  name: string;
  url: string;
};

type Props = {
  title?: string;
  nav: SecondaryNavLink[];
};

export const SecondaryNav: FC<Props> = ({ title, nav }) => {
  return (
    <Navbar id="secondary-nav" bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            {nav.map(n => <Link key={n.name} href={n.url} className="nav-link">{n.name}</Link>)}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
