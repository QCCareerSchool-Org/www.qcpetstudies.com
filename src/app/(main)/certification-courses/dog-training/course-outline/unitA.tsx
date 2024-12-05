'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitAImage from './_images/unit-a.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitA: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 4 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="1 to 2 hours" videosCount={3} videosTime="15 minutes" />
        <p>In the first unit of the dog training course, you'll meet your tutor and learn about the fundamentals of dog training. This introductory unit includes an overview of the dog training industry and a background in the fundamentals of ethical and safe training. </p>
        <p><em>You'll have the option to tell your tutor about your dog, or a dog you'll be working with to complete your course work! Then you can practice a safe dog introduction.</em></p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit A Details</Modal.Header>
          <Modal.Body>
            <p className="lead">Unit A will introduce you to the world of dog training and the many career paths available to you.</p>
            <p>You'll learn about what it means to work as a dog trainer. This unit will delve into the foundational principles of training that guide this course and will help you to build a successful career.</p>
            <p><strong>Introduction to Dog Training</strong></p>
            <p>Learn about the evolution of dog training and the relationship between canines and humans. Discover how dog training developed into the high-demand, lucrative industry it is today. Explore the many services you can provide as a dog trainer and the paths you might take to expand your career down the road.</p>
            <p><strong>Guiding Principles of Dog Training</strong></p>
            <p>QC's online dog training course follows a set of core values that guide our training methods. You'll study these values to build the foundation of your career in training. Follow these principles to ensure that your training methods are ethical, effective, safe and, of course, fun!</p>
            <p><strong>Fundamentals of Safe Training</strong></p>
            <p>Study the precautions you'll take to ensure your training services are safe for you, your clients and their canine companions. Learn how to setup and maintain a safe training space. Discover the basics of canine first aid and prepare yourself to handle emergency situations that could arise during a training session.</p>
            <p><strong>Unit A Assignments</strong></p>
            <p className="mb-0">Your dog training assignments in Unit A will prepare you to safely and responsibly work with dogs. You'll practice meeting a new dog and preparing your space for training. These assignments will test you on key, foundational aspects of working as a dog trainer.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitAImage} alt="two dogs running in a field" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
