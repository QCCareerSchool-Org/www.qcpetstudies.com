'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import UnitCImage from './_images/unit-c.jpg';
import { UnitStats } from '@/components/unitStats';
import { useToggle } from '@/hooks/useToggle';

export const UnitC: FC = () => {
  const [ show, toggle ] = useToggle();

  const handleClick = (): void => {
    toggle();
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={2} videosTime="25 minutes" />
        <p>Unit C of your dog training course focuses on canine communication. You'll learn all about the signals that dogs use to communicate. Explore how you can use these signals to improve your training methods and provide a safe, comfortable training space for dogs. This unit will also each you how to use canine communication to improve the relationships between dogs and their owners.</p>
        <p><em>Spend some quality time with your own dog, or a friend or family member's dog to practice reading canine communication!</em></p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit C Details</Modal.Header>
          <Modal.Body>
            <p className="lead">The third unit of Dog Training will explore canine communication.</p>
            <p>You'll learn about the signals that dogs use to communicate, and how interpreting those signals correctly will improve the training experience for you, your clients and their dogs.</p>
            <p><strong>Canine Communication</strong></p>
            <p>This text will cover how dogs use sounds, facial expressions and body language to express themselves. You'll learn the signals that dogs use to express excitement, fear, contentment, discomfort and more. You'll even discover and dispel the many misconceptions that humans have about canine communication.</p>
            <p><strong>Calming Signals and Fear Responses</strong></p>
            <p>Once you've learned to recognize the signals that dogs use to communicate, you'll be able to read when dogs are showing their discomfort. In this text, you'll explore the ways that dogs attempt to calm themselves and others in tense or worrying situations. You'll learn to interpret a dog's fear response when these tense situations escalate.</p>
            <p><strong>Problem Solving with Communication</strong></p>
            <p>In this text, you'll learn how to apply your understanding of canine communication to dog training. You'll discover how interpreting a dog's communication signals can help you to identify and resolve training challenges and advocate for a dog's wellbeing. You'll consider how your client's ability to understand her dog, and the dog's ability to understand his owner will impact the results of training.</p>
            <p><strong>Unit C Assignments</strong></p>
            <p className="mb-0">Your assignments in Unit C will ask you to practice looking for canine communication signals when you're working with dogs. Through scenario-based questions, you'll also practice advocating for the dog's wellbeing and helping your clients understand their dogs by interpreting canine communication.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitCImage} alt="white puppy with a toy lying on a dog bed" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
