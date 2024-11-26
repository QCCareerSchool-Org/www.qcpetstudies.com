'use client';

import Image from 'next/image';
import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { BsCardChecklist, BsPeopleFill, BsScissors } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useToggle } from '@/hooks/useToggle';
import DogGroomingKit from '@/images/dog-grooming-kit-white.jpg';
import GroomingKitDetailImage from '@/images/grooming-kit-details.jpg';

const iconSize = 36;

export const IncludedSection: FC = () => {

  const screenWidth = useScreenWidth();
  const [ kitPopupVisible, kitPopupToggle ] = useToggle();

  const mdOrGreater = screenWidth >= 768;
  const lgOrGreater = screenWidth >= 992;

  const md = mdOrGreater && !lgOrGreater;
  return(
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
            <Image
              src={DogGroomingKit}
              alt="professional dog-grooming kit"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="courseContentIcon"><BsScissors size={iconSize} /></div>
            <h3>Professional-Grade Grooming Starter Kit</h3>
            <p>When you enroll, you'll receive a kit of dog grooming tools to help you complete your studies and start your career. This kit includes cordless WAHL clippers and combs, three grooming scissors, an assortment of brushes and combs, and more!</p>
            <button onClick={kitPopupToggle} className="btn btn-link link-primary">View Kit Details</button>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
            <h3>Newest{md ? <br /> : ' '}Course Materials</h3>
            <p className="mb-0">Your course materials are always available online and are always being updated with the latest industry standards.  Refer to your updated training guides throughout your career!</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
            <h3>Personalized{md ? <br /> : ' '}Feedback</h3>
            <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog grooming assignment you submit.</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
            <h3>Lifetime{md ? <br /> : ' '}Access</h3>
            <p className="mb-0">Once you're a member of the QC family you 'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
          </div>
        </div>
      </div>
      <Modal show={kitPopupVisible} onHide={kitPopupToggle}>
        <Modal.Header closeButton>Dog Grooming Kit</Modal.Header>
        <Modal.Body>
          <Image
            src={GroomingKitDetailImage}
            alt="grooming kit details"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
      <style jsx>{`
      .courseContentIcon { color: #ccc; margin-bottom: 0.5rem; }
    `}</style>
    </section>
  );
};
