import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCog, FaCut, FaFolderOpen, FaUser } from 'react-icons/fa';

import { useScreenWidth } from '../hooks/useScreenWidth';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useToggle } from '../hooks/useToggle';

import logoLight from '../images/qc-pet-horizontal-inverse.svg';
import logo from '../images/qc-pet-horizontal.svg';
import { SecondaryNav, SecondaryNavLinks } from './SecondaryNav';

type Props = {
  noHero?: boolean;
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLinks;
  className?: string;
};

export const Header = ({ noHero, secondaryTitle, secondaryNavLinks, className }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();
  const [ mobileMenu, toggleMobileMenu ] = useToggle(false);

  const maxPosition = 20;
  const scrolled = scrollPosition > maxPosition;

  const lgOrGreater = screenWidth >= 992;
  const xlOrGreater = screenWidth >= 1200;

  return (
    <>
      <Navbar
        id="main-nav"
        bg={scrolled ? 'white' : noHero ? 'dark' : undefined}
        variant={scrolled ? undefined : 'dark'}
        expand="lg"
        className={`${scrolled && !secondaryNavLinks ? 'shadow-sm' : ''} ${mobileMenu && !lgOrGreater ? 'opened' : 'closed'} ${!lgOrGreater ? 'mobile' : 'desktop'} ${secondaryNavLinks ? '.with-secondary' : ''} ${className}`}
      >
        <div className="container">
          <div id="nav-wrapper">
            <Navbar.Brand>
              <Link href="/"><a><Image src={scrolled ? logo : logoLight} alt="QC Pet Studies" width="176" height="17" /></a></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" onClick={() => toggleMobileMenu()} />
            <Navbar.Collapse id="main-navbar" className="justify-content-end">
              <Nav>
                <NavDropdown title={xlOrGreater || !lgOrGreater ? 'Become a Dog Groomer' : 'Dog Grooming'} id="dog-groomer-dropdown">
                  <Link href="/dog-grooming-courses/dog-grooming"><a className="dropdown-item dropdown-item-primary">Dog Grooming Course</a></Link>
                  <Link href="/dog-grooming-courses/dog-grooming#outline"><a className="dropdown-item dropdown-item-sub">Outline</a></Link>
                  <Link href="/dog-grooming-courses/dog-grooming#certification"><a className="dropdown-item dropdown-item-sub">Certification</a></Link>
                  <Link href="/dog-grooming-courses/dog-grooming#tuition"><a className="dropdown-item dropdown-item-sub">Tuition</a></Link>
                  <Link href="/dog-grooming-courses/first-aid"><a className="dropdown-item dropdown-item-primary">First Aid Course</a></Link>
                  <Link href="/dog-grooming-courses/breed-styling"><a className="dropdown-item dropdown-item-primary">Breed Styling Course</a></Link>
                  <hr />
                  <Link href="/dog-grooming-courses/how-it-works"><a className="dropdown-item"><FaCog className="text-primary me-2" /> How It Works</a></Link>
                  <Link href="/dog-grooming-courses/resources"><a className="dropdown-item"><FaFolderOpen className="text-primary me-2" /> Dog Grooming Resources</a></Link>
                  <Link href="/dog-grooming-courses/meet-our-experts"><a className="dropdown-item"><FaUser className="text-primary me-2" /> Meet Our Experts</a></Link>
                  <Link href="/dog-grooming-courses/dog-grooming-kit"><a className="dropdown-item"><FaCut className="text-primary me-2" /> Dog Grooming Kit</a></Link>
                </NavDropdown>
                <NavDropdown title={xlOrGreater || !lgOrGreater ? 'Become a Dog Trainer' : 'Dog Training'} id="dog-trainer-dropdown">
                  <Link href="/dog-training-courses/dog-training"><a className="dropdown-item dropdown-item-primary">Dog Training Course</a></Link>
                  <Link href="/dog-training-courses/dog-training#outline"><a className="dropdown-item dropdown-item-sub">Outline</a></Link>
                  <Link href="/dog-training-courses/dog-training#certification"><a className="dropdown-item dropdown-item-sub">Certification</a></Link>
                  <Link href="/dog-training-courses/dog-training#tuition"><a className="dropdown-item dropdown-item-sub">Tuition</a></Link>
                  <hr />
                  <Link href="/dog-training-courses/how-it-works"><a className="dropdown-item"><FaCog className="text-primary me-2" /> How It Works</a></Link>
                  <Link href="/dog-training-courses/resources"><a className="dropdown-item"><FaFolderOpen className="text-primary me-2" /> Dog Training Resources</a></Link>
                  <Link href="/dog-training-courses/meet-our-experts"><a className="dropdown-item"><FaUser className="text-primary me-2" /> Meet Our Experts</a></Link>
                </NavDropdown>
                <NavDropdown title="About" id="about-dropdown">
                  <Link href="/about/about-qc-pet-studies"><a className="dropdown-item">About QC Pet Studies</a></Link>
                  <Link href="/about/student-experience"><a className="dropdown-item">Student Experience</a></Link>
                  <Link href="/about/student-discounts"><a className="dropdown-item">Student Discounts</a></Link>
                  <Link href="/about/faq"><a className="dropdown-item">FAQ</a></Link>
                  <Link href="/sniffin-around-blog"><a className="dropdown-item">Blog</a></Link>
                </NavDropdown>
                <Link href="/contact-us"><a className="nav-link">Contact Us</a></Link>
                {!lgOrGreater
                  ? <a href="https://enroll.qcpetstudies.com" className="nav-link">Enroll Online</a>
                  : <a href="https://enroll.qcpetstudies.com" className="mt-1 ms-3 ms-xxl-5"><button className="btn btn-primary btn-sm">Enroll Online</button></a>
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
