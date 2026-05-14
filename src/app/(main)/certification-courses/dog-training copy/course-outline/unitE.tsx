'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitEImage from './_images/unit-e.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitE: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 5 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={8} videosTime="75 minutes" />
        <p>Once you reach Unit E of your online dog training course, you're ready to put everything you've learned into action. You'll learn about the six training methods, all based in positive reinforcement, you can use to teach dogs new behaviors. Discover how to effectively motivate dogs to perform these behaviors and how to use reinforcement schedules in dog training.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit E Details</Modal.Header>
          <Modal.Body>
            <p className="lead">In Unit E, you'll put everything you've learned into practice and begin working with dogs to teach them new behaviors.</p>
            <p>You'll learn about the six training methods you can use to teach dogs new behaviors and how to motivate and reinforce those behaviors.</p>
            <p><strong>Training Methods</strong></p>
            <p>In this text, you'll learn about the six methods that trainers use to teach dogs new behaviors. You'll discover how to use luring, shaping, targeting, modelling, capturing and mimicry in different training contexts. We'll cover common canine behaviors and the best training method for each one.</p>
            <p><strong>Motivations and Reinforcement</strong></p>
            <p>Discover the tools you'll use for reinforcement: motivators and reinforcement schedules. In this text, you'll learn about why dogs choose to perform a behavior&mdash;their motivation&mdash;and when they should be rewarded for it&mdash;the reinforcement schedules.</p>
            <p><strong>Unit E Assignments</strong></p>
            <p className="mb-0">It's time to start training! In Unit E you'll practice using the six training methods to teach dogs new behaviors. You'll record training videos for your tutor to examine your technique and provide feedback to help you improve. You'll use different motivators and consider reinforcement schedules to learn how these factors affect training.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitEImage} alt="trainer and a dog practicing for an obstacle course" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
