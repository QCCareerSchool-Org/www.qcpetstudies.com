'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitBImage from './_images/unit-b.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitB: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 4 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="1.5 hours" readingsTime="2.5 hours" videosCount={3} />
        <p>In Unit B, you&apos;ll learn all about dogs. You&apos;ll study canine communication signals so that you can identify potential problems that may arise when you care for dogs. You&apos;ll also learn how a dog&apos;s background, including its age and breed, can affect behavior.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit B Details</Modal.Header>
          <Modal.Body>
            <p className="lead">With expert advice from your tutor, you&apos;ll practice interpreting canine behavior in your Unit B assignments.</p>
            <p>You&apos;ll examine canine communication signals and scenarios to prepare you for situations you might encounter while caring for dogs.</p>
            <p><strong>Understanding Dog Behavior and Communication</strong></p>
            <p>Discover the normal and abnormal behaviors a dog may display so that you&apos;ll be prepared to address any situation at daycare. You&apos;ll learn how a dog uses signals to calm other dogs and communicate fear to help you understand the animals in your care.</p>
            <p><strong>Triggers and Incidents</strong></p>
            <p>In this lesson, you&apos;ll learn from the experience of a professional dog daycare provider. Read about the different events and incidents that can trigger reactions in dogs at a daycare and learn how to address these scenarios.</p>
            <p><strong>Development and Breeds</strong></p>
            <p className="mb-0">Learn how to provide customized care for each of your client&apos;s dogs. Discover a wide range of activities, exercise and care for dogs of all ages and breeds.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitBImage} alt="a leashed dog and a man going for a walk" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
