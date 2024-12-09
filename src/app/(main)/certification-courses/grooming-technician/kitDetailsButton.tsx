'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import BeginnerToolkitImage from './beginner-tool-kit.jpg';
import { useToggle } from '@/hooks/useToggle';

export const KitDetailsButton: FC = () => {
  const [ kitPopupVisible, handleKitClick ] = useToggle();

  return (
    <>
      <button onClick={handleKitClick} className="btn btn-link link-primary">View Kit Details</button>
      <Modal show={kitPopupVisible} onHide={handleKitClick}>
        <Modal.Header closeButton>Grooming Tools Starter Kit</Modal.Header>
        <Modal.Body>
          <Image src={BeginnerToolkitImage} alt="grooming kit details" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
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
    </>
  );
};
