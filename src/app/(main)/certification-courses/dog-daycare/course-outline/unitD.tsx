'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitDImage from './_images/unit-d.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitD: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 2.5 hours</div>
        <UnitStats assignmentsCount={3} assignmentsTime="1 hour" readingsTime="1.5 hours" />
        <p>As a dog daycare provider, you&apos;ll need to ensure the safety of your clients&apos; beloved pets. In Unit D, you&apos;ll learn how to create a safe daycare space to prevent accidents and injuries when you care for dogs. You&apos;ll also learn about canine first aid so that you&apos;ll be prepared to address any accidents that do occur on the job.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit D Details</Modal.Header>
          <Modal.Body>
            <p className="lead">You&apos;ll keep health and safety firmly in mind as you complete your course work in Unit D.</p>
            <p>You&apos;ll receive guidance from your tutor to help you plan essential safety policies to prevent injuries and accidents. You&apos;ll examine daycare scenarios to practice your response in the event that a dog is injured at your daycare.</p>
            <p><strong>Hygiene, Health and Safety</strong></p>
            <p>In this lesson, you&apos;ll learn how to monitor for different diseases and parasites, how to effectively clean the facility, and how to maintain a safe working environment.</p>
            <p><strong>Safe Nutrition</strong></p>
            <p>Discover the diets and nutritional needs of different dogs, as well as how to monitor for toxic items such as tools and toys.</p>
            <p><strong>Responding to Accidents and Injuries</strong></p>
            <p className="mb-0">Learn about potential first aid emergencies you may encounter in dog daycare and how to handle them. You&apos;ll learn how to respond to minor injuries and how to stabilize a dog in need of veterinary care.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitDImage} alt="trainer using a clicker and treat to reward a German Shepherd puppy" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
