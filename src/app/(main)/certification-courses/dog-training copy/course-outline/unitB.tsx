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
        <div className="alert alert-primary mb-4">Unit Total: 5 hours</div>
        <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="2 hours" videosCount={3} videosTime="25 minutes" />
        <p>In this unit, you'll begin to learn about canine behavior. Unit B will introduce you to canine ethology&mdash;the study of natural canine behavior. You'll discover how a dog's breeding history and stage of development will affect his behavior. In particular, you'll learn about how effective socialization as a puppy can impact a dog's behavior throughout his whole life.</p>
        <p><em>You'll have the chance to research your own dog, or a friend or family member's dog to learn about its breed characteristics!</em></p>
        <button onClick={handleClick} className="btn btn-primary">View Details</button>
        <Modal show={show} onHide={handleClick} size="lg">
          <Modal.Header closeButton>Unit B Details</Modal.Header>
          <Modal.Body>
            <p className="lead">In Unit B, you'll learn all about canine behavior. You'll discover why dogs do the things they do by examining characteristics and canine development.</p>
            <p>We'll cover important factors that affect canine behavior and explain how you can influence this behavior through training.</p>
            <p><strong>Introduction to Ethology</strong></p>
            <p>Learn about the scientific study of animal behavior. Discover which canine behaviors are normal and which ones are abnormal. Many behaviors that seem problematic to dog owners are actually normal and healthy for dogs. You'll learn to help your clients understand their dogs' behavior. You'll also learn to identify abnormal dog behaviors that could indicate a medical condition.</p>
            <p><strong>Breed Groups</strong></p>
            <p>Discover how a dog's breeding history can influence his behavior. Learn how to use a dog's natural instincts and breed to develop the best possible training program for that individual dog. Explore the common traits of the seven breed groups identified by the American Kennel Club.</p>
            <p><strong>Stages of Development</strong></p>
            <p>Learn about the different stages of a dog's physical and mental development. Discover how a dog's behavior will change from puppyhood into adulthood, and how that development will affect his training needs.</p>
            <p><strong>Socialization Stages</strong></p>
            <p>Discover why the socialization stages of a puppy's life are so important to the dog's wellbeing into adulthood. Learn about the effects of poor socialization on a dog's life and explore how you, as a trainer, can help to ensure that a puppy is well socialized.</p>
            <p><strong>Unit B Assignments</strong></p>
            <p className="mb-0">In Unit B of your online dog training course, you'll find assignments that test your knowledge of dog behavior, development and socialization. You'll practice analyzing a dog's behavior based on his breeding history and stage of development. With guidance from your tutor, you'll learn to use these factors to explain a dog's behavior to his owner. You'll even try your hand at designing a socialization activity to help your puppy students grow into well-adjusted dogs.</p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitBImage} alt="a leashed dog and a man going for a walk" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};
