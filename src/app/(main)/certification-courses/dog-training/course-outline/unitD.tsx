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
        <div className="alert alert-primary mb-4">Unit Total: 5 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={11} videosTime="100 minutes" />
        <p>In Unit D of your dog training course, you'll learn about the learning theory behind effective dog training methods. You'll discover how dogs learn by making associations between different stimuli and by understanding the consequences associated with their own actions. Then you'll explore how to apply this learning theory to your training programs. You'll learn positive reinforcement methods, clicker training and much more!</p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit D Details</Modal.Header>
          <Modal.Body>
            <p className="lead">Unit D will introduce you to the learning theories that explain how dogs learn, and why our training methods work.</p>
            <p>By studying learning theory, you'll discover how you can teach dogs new behaviors and how to discourage undesirable behaviors with effective, dog-friendly training methods.</p>
            <p><strong>Learning Theory</strong></p>
            <p>This text will explain how dogs learn by making associations and understanding consequences. You'll learn about classical conditioning&mdash;also known as associative learning. Then you'll learn about operant condition, which is how dogs learn that their behaviors have consequences. Discover how you can use consequences in the form of reinforcement, reward markers and punishment to change a dog's behavior.</p>
            <p><strong>Applying Learning Theory</strong></p>
            <p>In this text, you'll learn how to put learning theory into practice to teach dogs cues for their new behaviors. You'll discover how to teach a dog when to perform a new behavior once he's learned how to do it. You'll also learn about obstacles dogs might face when learning new behaviors.</p>
            <p><strong>Unit D Assignments</strong></p>
            <p className="mb-0">In Unit D, your course work will test your understanding of how dogs learn. You'll practice using reward markers and clicker training to put reinforcement into action to teach dogs new behaviors. You'll be asked how to safely and effectively use punishment to discourage undesirable behavior.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitDImage} alt="trainer using a clicker and treat to reward a German Shepherd puppy" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
