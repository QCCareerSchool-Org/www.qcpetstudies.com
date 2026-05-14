'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitGImage from './_images/unit-g.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitG: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 4 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={3} videosTime="25 minutes" />
        <p>You've learned all about training dogs. Now in Unit G you'll learn to teach dog owners. You'll discover what it takes to develop a training program and set up a safe training space to facilitate learning in your training sessions. You'll learn essential teaching skills to help your students work effectively to train their dogs.</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit G Details</Modal.Header>
          <Modal.Body>
            <p className="lead">Working as a dog trainer requires you to teach people as well as dogs. In this unit of your online course, you'll focus on working with clients to teach them how to train their dogs.</p>
            <p>You'll learn how to develop effective training programs for different types of classes and study keys skills for teaching people.</p>
            <p><strong>Working as a Trainer</strong></p>
            <p>In this text, you'll study the day-to-day tasks of a dog trainer. You'll learn the steps you'll take to facilitate learning for your clients, whether you're teaching a group class or a private session. You'll study how to develop a training program and create a safe training space.</p>
            <p><strong>Teaching Skills</strong></p>
            <p>This course text will cover strategies for teaching people. You'll learn to communicate with dog owners in ways that help them retain the information you share with them. Study the different ways that people learn to prepare yourself to work with clients.</p>
            <p><strong>Unit G Assignments</strong></p>
            <p className="mb-0">You'll practice your teaching skills as you complete your Unit G assignments. You'll try your hand at developing training programs that accommodate your clients' goals and learning needs. These assignments require to prioritize the needs of both your human and canine students.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitGImage} alt="white dog sitting next to a dog trainer" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
