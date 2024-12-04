'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';
import UnitAImage from '@/images/dd-full-outline-unit-a.jpg';

export const UnitA: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
        <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="2 hours" videosCount={2} />
        <p>In the first unit of your Dog Daycare course, you&apos;ll introduce yourself to your expert tutor and learn about the fundamentals of professionally caring for dogs. You&apos;ll dive into an overview of the dog daycare industry, study different types of dog-care locations and learn about the tools and equipment you&apos;ll need as you begin working with dogs.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit A Details</Modal.Header>
          <Modal.Body>
            <p className="lead">When you complete your course work in Unit A, you&apos;ll introduce yourself to your tutor, who is a successful pet-industry professional.</p>
            <p>You&apos;ll have the opportunity to get your tutor&apos;s feedback as you practice planning your dog-care services, considering important factors including safe locations and dog-walking equipment.</p>
            <p><strong>Introduction to Dog Daycare</strong></p>
            <p>In this lesson, you&apos;ll learn about the dog daycare industry. You&apos;ll discover the different types of dog daycare and begin to think about what your own career might look like.</p>
            <p><strong>Dog-Care Locations</strong></p>
            <p>Next, you&apos;ll learn about the different settings in which a dog daycare can be established and the necessary safety considerations for each one.</p>
            <p className="mb-0"><strong>Tools, Equipment and Supplies</strong></p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitAImage} alt="two dogs running in a field" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
