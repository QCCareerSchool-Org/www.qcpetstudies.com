'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';
import UnitEImage from '@/images/dd-full-outline-unit-e.jpg';

export const UnitE: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (

    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 2 hours</div>
        <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="1 hour" videosCount={1} />
        <p>Make sure you&apos;re providing dog owners with the best possible services for their pets. In this unit, you&apos;ll learn how standard operating procedures can help you to feel confident in your services. You&apos;ll also discover how dog daycare providers can offer supplementary services to make their business standout.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit E Details</Modal.Header>
          <Modal.Body>
            <p className="lead">In Unit E, you&apos;ll practice writing policies to protect the health and safety of dogs and dog-daycare employees.</p>
            <p>With help from your tutor, you&apos;ll feel confident and prepared as you begin working with dogs. Your tutor will also provide you with guidance as a pet-industry professional as you consider the supplementary services you might provide to enhance your daycare business.</p>
            <p><strong>Standard Operating Procedures</strong></p>
            <p>Learn how to create a formal handbook to detail basic employment, health and safety, and legal and ethical principles for a dog daycare business. Follow an interactive example to help you build your own handbook.</p>
            <p><strong>Supplementary Revenue</strong></p>
            <p className="mb-0">Offering supplementary services will boost your income and show dog owners that you&apos;re knowledgeable in many areas of dog care. Supplementary revenue options might include dog training, dog grooming, home visits and dog food production.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitEImage} alt="trainer and a dog practicing for an obstacle course" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
