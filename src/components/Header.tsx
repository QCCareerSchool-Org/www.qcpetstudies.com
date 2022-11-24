import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCog, FaCut, FaFolderOpen } from 'react-icons/fa';

import { useScreenWidth } from '../hooks/useScreenWidth';
import { useScrollPosition } from '../hooks/useScrollPosition';
import logoLight from '../images/qc-pet-horizontal-inverse.svg';
import logo from '../images/qc-pet-horizontal.svg';
import { SecondaryNav, SecondaryNavLinks } from './SecondaryNav';

type Props = {
  noHero?: boolean;
  inverseNav?: boolean;
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLinks;
  /** custom path for the shopping cart (include leading slash) */
  enrollPath?: string;
  className?: string;
};

export const Header = ({ noHero, inverseNav, secondaryTitle, secondaryNavLinks, enrollPath = '/', className }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();
  const [ expanded, setExpanded ] = useState(false);
  const [ key, setKey ] = useState(0);

  const maxPosition = 20;
  const scrolled = scrollPosition > maxPosition;

  const lgOrGreater = screenWidth >= 992;
  const xlOrGreater = screenWidth >= 1200;

  const resetMenu = (): void => {
    setExpanded(false);
    setTimeout(() => {
      setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
    }, 100);
  };

  return (
    <>
      <Navbar
        key={key}
        id="main-nav"
        bg={scrolled ? 'white' : noHero ? 'dark' : undefined}
        variant={scrolled ? undefined : 'dark'}
        expand="lg"
        className={`${inverseNav ? 'inverse' : ''} ${scrolled && !secondaryNavLinks ? 'shadow-sm' : ''} ${expanded && !lgOrGreater ? 'opened' : 'closed'} ${!lgOrGreater ? 'mobile' : 'desktop'} ${secondaryNavLinks ? '.with-secondary' : ''} ${className ?? ''}`}
        onToggle={setExpanded}
      >
        <div className="container">
          <div id="nav-wrapper">
            <Navbar.Brand>
              <Link href="/"><a onClick={resetMenu}><Image src={(scrolled || (inverseNav && !expanded) ? logo : logoLight)} alt="QC Pet Studies" width="176" height="17" /></a></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar" className="justify-content-end">
              <Nav>
                <NavDropdown title="Certification Courses" id="courses-dropdown">
                  <Link href="/certification-courses/dog-grooming"><a onClick={resetMenu} className="dropdown-item">Dog Grooming Course</a></Link>
                  <Link href="/certification-courses/dog-training"><a onClick={resetMenu} className="dropdown-item">Dog Training Course</a></Link>
                  <Link href="/certification-courses/dog-care"><a onClick={resetMenu} className="dropdown-item">Dog Care Course</a></Link>
                  <hr />
                  <Link href="/certification-courses/how-it-works"><a onClick={resetMenu} className="dropdown-item"><FaCog className="text-primary me-2" /> How It Works</a></Link>
                  <Link href="/certification-courses/resources"><a onClick={resetMenu} className="dropdown-item"><FaFolderOpen className="text-primary me-2" /> Learning Resources</a></Link>
                  {/* <Link href="/certification-courses/meet-our-experts"><a onClick={resetMenu} className="dropdown-item"><FaUser className="text-primary me-2" /> Meet Our Experts</a></Link> */}
                  <Link href="/certification-courses/dog-grooming-kit"><a onClick={resetMenu} className="dropdown-item"><FaCut className="text-primary me-2" /> Dog Grooming Kit</a></Link>
                </NavDropdown>
                <NavDropdown title="About" id="about-dropdown">
                  <Link href="/about/about-qc-pet-studies"><a onClick={resetMenu} className="dropdown-item">About QC Pet Studies</a></Link>
                  <Link href="/about/student-experience"><a onClick={resetMenu} className="dropdown-item">Student Experience</a></Link>
                  <Link href="/about/student-discounts"><a onClick={resetMenu} className="dropdown-item">Student Discounts</a></Link>
                  <Link href="/about/faq"><a onClick={resetMenu} className="dropdown-item">FAQ</a></Link>
                  <Link href="/blog/sniffin-around-blog"><a onClick={resetMenu} className="dropdown-item">Blog</a></Link>
                </NavDropdown>
                <Link href="/contact-us"><a onClick={resetMenu} className="nav-link">Contact Us</a></Link>
                {!lgOrGreater
                  ? <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="nav-link">Enroll Online</a>
                  : <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="mt-1 ms-3 ms-xxl-5"><button className="btn btn-primary btn-sm">Enroll Online</button></a>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      {secondaryNavLinks && <SecondaryNav title={secondaryTitle} nav={secondaryNavLinks} scrolled={scrolled} mobile={!lgOrGreater} />}
    </>
  );
};
