'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import GroomingKitDetailImage from './grooming-kit-details.jpg';
import { useToggle } from '@/hooks/useToggle';
import { gbpCountry } from '@/lib/currencies';

type Props = {
  countryCode: string;
};

export const KitDetailsButton: FC<Props> = ({ countryCode }) => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  const url = gbpCountry(countryCode) ? '/enrollment-agreement-gb' : '/enrollment-agreement';

  return (
    <>
      <button onClick={handleClick} className="btn btn-link">View Kit Details</button>
      <Modal show={show} onHide={handleClick}>
        <Modal.Header closeButton>Dog Grooming Kit</Modal.Header>
        <Modal.Body>
          <Image src={GroomingKitDetailImage} alt="grooming kit details" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </Modal.Body>
        <Modal.Footer>
          <small>The kit will be sent to students with accounts in good standing after completing Submission B. Items in the kit are subject to change. <a href={url} target="_blank" rel="noreferrer">Learn more</a></small>
        </Modal.Footer>
      </Modal>
    </>
  );
};
