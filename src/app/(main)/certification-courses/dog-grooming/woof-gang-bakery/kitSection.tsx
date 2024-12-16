'use client';

import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import DogGroomingKit from '@/images/dog-grooming-kit-white.jpg';
import GroomingKitDetails from '@/images/grooming-kit-details.jpg';

export const KitSection: FC = () => {
  const [ popup, setPopup ] = useState(false);

  const handlePopupLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(true);
  };

  const handlePopupClose = (): void => {
    setPopup(false);
  };

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <h2 className="fw-bold">Your Professional Grooming Kit</h2>
            <div className="my-4">
              <Image src={DogGroomingKit} alt="professional dog-grooming kit" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>When you enroll in QC's online dog grooming course, you'll receive a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, grooming scissors, and an assortment of tools used for preparation work. These items will be shipped to you when you successfully complete Unit B.</p>
            <p><a onClick={handlePopupLinkClick} href="#" className="btn btn-link">View kit details</a></p>
            <Modal show={popup} onHide={handlePopupClose}>
              <Modal.Header closeButton>
                <Modal.Title>Your Professional Grooming Kit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="p-2">
                  <Image src={GroomingKitDetails} width="652" height="1009" alt="grooming kit details" style={{ width: '100%', height: 'auto' }} />
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};
