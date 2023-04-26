import Image from 'next/legacy/image';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCog, FaCut, FaFolderOpen } from 'react-icons/fa';

import { useLocation } from '../hooks/useLocation';
import { useScreenWidth } from '../hooks/useScreenWidth';
import { useScrollPosition } from '../hooks/useScrollPosition';
import logoLight from '../images/qc-pet-horizontal-inverse.svg';
import logo from '../images/qc-pet-horizontal.svg';
import { getFlagImageData } from '../lib/flags';
import { CanadaAuxNavBar } from './CanadaAuxNavBar';
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
  const location = useLocation();
  const scrollPosition = useScrollPosition();
  const [ expanded, setExpanded ] = useState(false);
  const [ key, setKey ] = useState(0);

  const maxPosition = 20;
  const scrolled = scrollPosition > maxPosition;

  const lgOrGreater = screenWidth >= 992;

  const flagImage = getFlagImageData(location?.countryCode);

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
        className={`${inverseNav ? 'inverse' : ''} ${scrolled && !secondaryNavLinks ? 'shadow-sm' : ''} ${expanded && !lgOrGreater ? 'opened' : 'closed'} ${!lgOrGreater ? 'mobile' : 'desktop'} ${secondaryNavLinks ? '.with-secondary' : ''} ${className ?? ''} flex-column`}
        onToggle={setExpanded}
      >
        {location?.countryCode === 'CA' && <CanadaAuxNavBar />}
        <div className="container">
          <div id="nav-wrapper">
            <Navbar.Brand>
              <Link href="/" onClick={resetMenu}><Image src={(scrolled || (inverseNav && !expanded) ? logo : logoLight)} alt="QC Pet Studies" width="176" height="17" />{flagImage && <span style={{ position: 'relative', marginLeft: '0.5rem', top: '-3px' }}><Image src={flagImage.src} width={17.1434} height={10} alt={flagImage.alt} /></span>}</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar" className="justify-content-end">
              <Nav>
                <NavDropdown title="Certification Courses" id="courses-dropdown">
                  <Link href="/certification-courses/dog-grooming" onClick={resetMenu} className="dropdown-item">Dog Grooming Course</Link>
                  <Link href="/certification-courses/dog-training" onClick={resetMenu} className="dropdown-item">Dog Training Course</Link>
                  <Link href="/certification-courses/dog-daycare" onClick={resetMenu} className="dropdown-item">Dog Daycare Course</Link>
                  <hr />
                  <Link href="/certification-courses/how-it-works" onClick={resetMenu} className="dropdown-item"><FaCog className="text-primary me-2" /> How It Works</Link>
                  <Link href="/certification-courses/resources" onClick={resetMenu} className="dropdown-item"><FaFolderOpen className="text-primary me-2" /> Learning Resources</Link>
                  {/* <Link href="/certification-courses/meet-our-experts" onClick={resetMenu} className="dropdown-item"><FaUser className="text-primary me-2" /> Meet Our Experts</Link> */}
                  <Link href="/certification-courses/dog-grooming-kit" onClick={resetMenu} className="dropdown-item"><FaCut className="text-primary me-2" /> Dog Grooming Kit</Link>
                </NavDropdown>
                <NavDropdown title="About" id="about-dropdown">
                  <Link href="/about/about-qc-pet-studies" onClick={resetMenu} className="dropdown-item">About QC Pet Studies</Link>
                  <Link href="/about/student-experience" onClick={resetMenu} className="dropdown-item">Student Experience</Link>
                  <Link href="/about/student-discounts" onClick={resetMenu} className="dropdown-item">Student Discounts</Link>
                  <Link href="/about/faq" onClick={resetMenu} className="dropdown-item">FAQ</Link>
                  <Link href="/blog/sniffin-around-blog" onClick={resetMenu} className="dropdown-item">Blog</Link>
                </NavDropdown>
                <Link href="/contact-us" onClick={resetMenu} className="nav-link">Contact Us</Link>
                {!lgOrGreater
                  ? <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="nav-link">Enroll Online</a>
                  : <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="mt-1 ms-3 ms-xxl-5"><button className="btn btn-primary btn-sm">Enroll Online</button></a>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      {secondaryNavLinks && <SecondaryNav title={secondaryTitle} nav={secondaryNavLinks} scrolled={scrolled} mobile={!lgOrGreater} offset={location?.countryCode === 'CA' ? 40 : undefined} />}
      {location?.countryCode === 'CA' && <div style={{ marginTop: 40 }} />}
    </>
  );
};
