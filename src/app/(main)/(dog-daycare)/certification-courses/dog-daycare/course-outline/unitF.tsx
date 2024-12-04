'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';
import UnitFImage from '@/images/dd-full-outline-unit-f.jpg';

export const UnitF: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
        <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="2 hours" videosCount={1} />
        <p>Once you&apos;ve developed the skills you need to provide a safe and enjoyable daycare experience for dogs, you&apos;ll need to practice your business skills. In this optional unit of your course, you&apos;ll turn your finely-honed dog-care skills into a business. Learn about the important first steps involved in launching a business, including choosing a business name, building a website and finding appropriate business insurance. Practice important skills for selling your services, including marketing your business and building positive relationships with clients. This business training unit will be a valuable tool to kickstart your career.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit F Details</Modal.Header>
          <Modal.Body>
            <p className="lead">In the business portion of your Dog Daycare course, you&apos;ll begin to plan the details of your business with expert guidance from your tutor.</p>
            <p>You&apos;ll begin to plan your ideal client and develop marketing materials that will appeal to dog owners.</p>
            <p><strong>Starting Your Own Business</strong></p>
            <p>Prepare to launch a successful dog daycare business. This lesson will guide you through the initial stages of setting up your business, from choosing a name to registering your business. You&apos;ll learn about the different types of business structures and regulations. You&apos;ll also learn helpful tips to help you manage your finances and develop a business plan.</p>
            <p><strong>Marketing and Promotion</strong></p>
            <p>Learn how to find new clients by marketing and promoting your dog daycare business. Develop important skills, including building an effective website and managing your social media. Explore these essential skills to reach out to new clients.</p>
            <p><strong>Working with Clients</strong></p>
            <p className="mb-0">Turn every client into a repeat customer. Learn how to communicate professionally and respectfully with clients to create a positive relationship. Study different techniques for selling your services and learn how to deal with unhappy clients in a professional and resourceful manner.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitFImage} alt="dog snarling at another dog" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
