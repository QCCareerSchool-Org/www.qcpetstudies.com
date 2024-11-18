import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaCog, FaCut, FaFolderOpen } from 'react-icons/fa';

import logo from '@/images/qc-pet-horizontal.svg';
import { getFlagImageData } from '@/lib/flags';

type Props = {
  enrollPath?: string;
  countryCode?: string;
};

export const MainNav: FC<Props> = ({ enrollPath = '/', countryCode }) => {
  const [ key, setKey ] = useState(0);

  const flagImage = getFlagImageData(countryCode);

  /** resets the navbar */
  const resetMenu = (): void => {
    setTimeout(() => {
      setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
    }, 100);
  };

  return (
    <div className="container">
      <Navbar key={key} expand="lg">
        <Navbar.Brand>
          <Link href="/" onClick={resetMenu}><Image src={logo as StaticImageData} alt="QC Pet Studies" width="176" height="17" />{flagImage && <span style={{ position: 'relative', marginLeft: '0.5rem', top: '-3px' }}><Image src={flagImage.src} width={17.1434} height={10} alt={flagImage.alt} /></span>}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            <NavDropdown title={<><span className="d-lg-none d-xl-inline">Certification </span>Courses</>} id="courses-dropdown">
              <Link href="/certification-courses/dog-grooming" onClick={resetMenu} className="dropdown-item">Dog Grooming</Link>
              <Link href="/certification-courses/grooming-technician" onClick={resetMenu} className="dropdown-item">Grooming Technician</Link>
              <Link href="/certification-courses/dog-daycare" onClick={resetMenu} className="dropdown-item">Dog Daycare</Link>
              <Link href="/certification-courses/dog-training" onClick={resetMenu} className="dropdown-item">Dog Training</Link>
              <Link href="/certification-courses/dog-behavior" onClick={resetMenu} className="dropdown-item">Dog Behavior</Link>
              <hr />
              <Link href="/certification-courses/how-it-works" onClick={resetMenu} className="dropdown-item"><FaCog className="text-primary me-2" /> How It Works</Link>
              <Link href="/resources" onClick={resetMenu} className="dropdown-item"><FaFolderOpen className="text-primary me-2" /> Learning Resources</Link>
              <Link href="/certification-courses/dog-grooming-kit" onClick={resetMenu} className="dropdown-item"><FaCut className="text-primary me-2" /> Dog Grooming Kit</Link>
            </NavDropdown>
            <Link href="/get-a-course-preview" onClick={resetMenu} className="nav-link">Request Info</Link>
            <NavDropdown title="About" id="about-dropdown">
              <Link href="/about/about-qc-pet-studies" onClick={resetMenu} className="dropdown-item">About QC Pet Studies</Link>
              <Link href="/about/student-experience" onClick={resetMenu} className="dropdown-item">Student Experience</Link>
              <Link href="/about/student-discounts" onClick={resetMenu} className="dropdown-item">Student Discounts</Link>
              <Link href="https://ng295qu8zyk.typeform.com/to/PKUz5ENs" onClick={resetMenu} className="dropdown-item" target="_blank" rel="noopener">Corporate Admissions</Link>
              <Link href="/about/faq" onClick={resetMenu} className="dropdown-item">FAQ</Link>
              <Link href="/blog" onClick={resetMenu} className="dropdown-item">Blog</Link>
            </NavDropdown>
            <Link href="/contact-us" onClick={resetMenu} className="nav-link">Contact</Link>
            <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="nav-link d-lg-none">Enroll Online</a>
            <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="mt-1 ms-3 ms-xxl-5 d-none d-lg-block"><button className="btn btn-secondary btn-sm">Enroll Online</button></a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
