import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { BsCardChecklist, BsPeopleFill, BsScissors } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { DGTutorSection } from '../../../components/DGTutorSection';
import { GuaranteeSection } from '../../../components/GuaranteeSection';
import { PriceSection } from '../../../components/PriceSection';
import { SectionBackground } from '../../../components/SectionBackground';
import { SEO } from '../../../components/SEO';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { useToggle } from '../../../hooks/useToggle';
import GuaranteeIcon from '../../../images/course-overview-icons/guarantee.svg';
import OutlineIcon from '../../../images/course-overview-icons/outline.svg';
import TutorIcon from '../../../images/course-overview-icons/tutor.svg';
import { formatPrice } from '../../../lib/formatPrice';
import { Location } from '../../../models/location';
import { PriceResult } from '../../../models/price';
import BeginnerKit from './beginner-tool-kit.jpg';
import CertificationGoldImage from './cgt-light-gold.svg';
import GroomingTechnicianBackground from './hero.jpg';
import { GroomingTechOutlineSection } from './outline';

const courseCodes = [ 'gt' ];
const headerIconSize = 20;
const iconSize = 36;

type Props = {
  location: Location;
  gtPrice: PriceResult;
  dgPrice: PriceResult;
};

export const GroomingTechnicianBase: FC<Props> = ({ gtPrice, dgPrice }) => {
  const screenWidth = useScreenWidth();
  const [ kitPopupVisible, kitPopupToggle ] = useToggle();

  const mdOrGreater = screenWidth >= 768;
  const lgOrGreater = screenWidth >= 992;

  const md = mdOrGreater && !lgOrGreater;

  return (
    <>
      <SEO
        title="Grooming Technician Course"
        description="Become a Certified Grooming Technician with interactive online training!"
        canonical="/certification-courses/grooming-technician"
      />

      <section id="top" className="bg-dark">
        <SectionBackground src={GroomingTechnicianBackground} priority objectPosition="right" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <Image
                src={CertificationGoldImage as StaticImageData}
                alt="Certified Grooming Technician CGT"
                height="125"
                width="125"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <h1>Grooming Technician Course</h1>
            {gtPrice && gtPrice.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{gtPrice.currency.symbol}{formatPrice(gtPrice.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c=gt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 d-flex">
              <div className="col text-uppercase">
                <a href="#outline"><Image
                  src={OutlineIcon as StaticImageData}
                  alt="outline"
                  width={headerIconSize}
                  height={headerIconSize}
                  style={{ maxWidth: '100%', height: 'auto' }}
                /></a>
                <p><strong>Outline</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#guarantee"><Image
                  src={GuaranteeIcon as StaticImageData}
                  alt="play button"
                  width={headerIconSize}
                  height={headerIconSize}
                  style={{ maxWidth: '100%', height: 'auto' }}
                /></a>
                <p><strong>Guarantee</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#tutors"><Image
                  src={TutorIcon as StaticImageData}
                  alt="play button"
                  width={headerIconSize}
                  height={headerIconSize}
                  style={{ maxWidth: '100%', height: 'auto' }}
                /></a>
                <p><strong>Tutors</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <h2>Become a <strong>Certified Grooming Technician&trade;</strong>&nbsp;|&nbsp;CGT&trade;</h2>
              <p>Dive into a fantastic entry role in the thriving pet industry! Grooming technicians perform essential preparatory tasks including nail trimming, brushing, bathing and drying to get dogs ready to be styled by grooming professionals. With these foundational skills, you&apos;ll be ready to work in grooming salons where you can help canine clients look and feel their best.</p>
              <p>With QC&apos;s Grooming Technician course, you&apos;ll gain the introductory skills you need to begin working in a grooming salon. Study at your own pace. Watch instructional videos and complete hands-on assignments to gain all the knowledge and skills you need to get started!</p>
              <p className="mb-0">Are you ready to start a fun and rewarding career?</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={courseCodes} price={gtPrice} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
              <Image
                src={BeginnerKit}
                alt="professional dog-grooming kit"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="courseContentIcon"><BsScissors size={iconSize} /></div>
              <h3>Beginner Tool Kit</h3>
              <p>When you enroll, you'll receive a beginner toolkit to help you complete your studies. This bonus kit includes an assortment of brushes, combs and nail clippers to get you started.</p>
              <button onClick={kitPopupToggle} className="btn btn-link link-primary">View Kit Details</button>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
              <h3>Leading{md ? <br /> : ' '}Course Materials</h3>
              <p className="mb-0">Your course materials are always being updated with the latest industry standards. Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized{md ? <br /> : ' '}Feedback</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog grooming assignment you submit.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime{md ? <br /> : ' '}Access</h3>
              <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
        <Modal show={kitPopupVisible} onHide={kitPopupToggle}>
          <Modal.Header closeButton>Grooming Tools Starter Kit</Modal.Header>
          <Modal.Body>
            <Image
              src={BeginnerKit}
              alt="grooming kit details"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <ul style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}>
              <li>2 Slicker Brushes (soft and hard)</li>
              <li>2 Nail Clippers (large and small)</li>
              <li>2 Mat Breakers (large and small)</li>
              <li>An undercoat rake</li>
              <li>A greyhound rake</li>
              <li>A fine-toothed comb</li>
              <li>A curry comb</li>
            </ul>
          </Modal.Body>
        </Modal>
      </section>

      <GroomingTechOutlineSection dgPrice={dgPrice} gtPrice={gtPrice} />

      <GuaranteeSection className="bg-light" />

      <DGTutorSection />

      <style jsx>{`
      .courseContentIcon { color: #ccc; margin-bottom: 0.5rem; }
      `}</style>
    </>
  );
};
