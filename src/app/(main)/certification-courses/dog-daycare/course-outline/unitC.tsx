'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitCImage from './_images/unit-c.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitC: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
        <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="2 hours" videosCount={2} />
        <p>Unit C will provide you with detailed information to help you plan safe and stimulating activities for dogs in your care. You&apos;ll learn how to assess a dog&apos;s needs for social, physical, emotional and cognitive stimulation so that you can provide an engaging experience for your clients&apos; pets.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit C Details</Modal.Header>
          <Modal.Body>
            <p className="lead">Your Unit C assignments will ask you to begin planning transportation services and exercise routines for dogs in various daycare scenarios.</p>
            <p>With detailed feedback from your tutor, you&apos;ll learn how to plan activities that will benefit every dog in your care.</p>
            <p><strong>Transportation of Dogs</strong></p>
            <p>You may provide collection and drop-off services for dogs. In this lesson, you&apos;ll learn how to choose and prepare a vehicle for dog transportation, plan an effective route and safely manage dogs while in transit.</p>
            <p><strong>Exercising Dogs</strong></p>
            <p>Every dog is unique. In this lesson, you&apos;ll learn how to assess the needs of each dog and plan activities accordingly. You&apos;ll practice coordinating a wide range of activities, exercise and care for dogs of all ages and breeds.</p>
            <p><strong>Security and Precautions</strong></p>
            <p className="mb-0">Discover how to provide topnotch dog-care services that prioritize the safety of dogs, dog owners and employees. You&apos;ll learn how to ensure vehicle, workplace and client home security while caring for dogs.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitCImage} alt="white puppy with a toy lying on a dog bed" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
