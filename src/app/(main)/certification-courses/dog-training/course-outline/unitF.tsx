'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitFImage from './_images/unit-f.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitF: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 5 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={5} videosTime="85 minutes" />
        <p>In Unit F, you'll learn how to safely use common training tools when you work with dogs. You'll discover common tools to help with leash training and crate training and learn how to teach your clients to use these tools at home. You'll also learn how experienced trainers use these tools and other techniques to change a dog's unwanted behaviors.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit F Details</Modal.Header>
          <Modal.Body>
            <p className="lead">Unit F will teach you how to safely use common training tools, and how to use effectively and ethically use punishment to change a dog's behavior.</p>
            <p>With help from your tutor, you'll learn important information to help you keep dogs safe in your training sessions. The ability to safely, effectively and appropriately use training tools and punishment in dog training is essential to your work.</p>
            <p><strong>Training Tools</strong></p>
            <p>Discover the common tools, such as leashes, collars and crates, that you can recommend to clients to aid in dog training. You'll learn to safely and effectively use these tools to make training effective and fun for your clients and their dogs. You'll also learn about the safe use of aversive tools and their limited place in training.</p>
            <p><strong>Addressing Unwanted Behaviors</strong></p>
            <p>Learn how to identify problem behaviors that your clients might need help with, such as barking or destructive behavior. You'll discover how to address these problem behaviors through training. Importantly, you'll also learn when a dog's behavior requires attention from a behavior expert or veterinarian.</p>
            <p><strong>Unit F Assignments</strong></p>
            <p className="mb-0">The assignments in Unit F will ask you to practice using training tools in appropriate and safe ways. You'll design training programs in scenario-based questions that use training tools and safe, ethical punishments to change a dog's behavior.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitFImage} alt="dog snarling at another dog" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
