'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitHImage from './_images/unit-h.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitH: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 9 to 16 Hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={3} videosTime="20 minutes" />
        <p>By this point in the dog training class, you've completed all your theoretical and practical work, and are feeling pretty confident in your training skills! Now it's time to use those abilities in the real-world and turn your passion into a career. Business training is optional for the Online Track students, but includes mandatory components for those in the Externship Track. We encourage all students to take full advantage of this training to build valuable skills for running a successful training business.</p>
        <p>You'll work with your mentor to name your business and establish a business plan. You'll learn all about different marketing techniques and how to use them effectively. You'll also read up on the most effective networking techniques and find out how to apply them to your business or job search. Even if launching your business isn't in your immediate future, take advantage of this wonderful opportunity and complete this optional unit of your course!</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit H Details</Modal.Header>
          <Modal.Body>
            <p className="lead">This online business unit is optional for those who want to start and run a successful dog training business.</p>
            <p>You'll learn how to kickstart your business and promote your training services, and study the ins and outs of developing positive client relationships.</p>
            <p><strong>Starting Your Own Business</strong></p>
            <p>Prepare to launch a successful dog training business. This text will guide you through the initial stages of setting up your business, from choosing a name to registering your business. You'll learn about the different types of business structures and regulations. You'll also learn helpful tips to help you manage your finances and develop a business plan.</p>
            <p><strong>Marketing and Promotion</strong></p>
            <p>Learn how to find new clients by marketing and promoting your dog training business. Develop important skills, including building an effective website and managing your social media. Explore these essential skills to reach out to new clients.</p>
            <p><strong>Working with Clients</strong></p>
            <p>Turn every client into a repeat customer. Learn how communicate professionally and respectfully with clients to create a positive relationship. Study different techniques for selling your services and learn how to deal with unhappy clients in a professional and resourceful manner.</p>
            <p><strong>Unit H Assignments</strong></p>
            <p className="mb-0">In the business portion of your dog training course work, you'll learn how to evaluate your business and optimize your plan to suit your career goals. With your tutor's guidance, you'll develop an ideal business scenario suitable for your aspirations.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitHImage} alt="dog and a trainer shaking hands" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
