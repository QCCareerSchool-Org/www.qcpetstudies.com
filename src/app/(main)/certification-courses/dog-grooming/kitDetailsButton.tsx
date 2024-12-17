'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import GroomingKitDetailImage from './grooming-kit-details.jpg';
import { useToggle } from '@/hooks/useToggle';

export const KitDetailsButton: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <>
      <button onClick={handleClick} className="btn btn-link">View Kit Details</button>
      <Modal show={show} onHide={handleClick}>
        <Modal.Header closeButton>Dog Grooming Kit</Modal.Header>
        <Modal.Body>
          <Image src={GroomingKitDetailImage} alt="grooming kit details" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </Modal.Body>
      </Modal>
    </>
  );
};
