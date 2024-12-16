'use client';

import type { FC, MouseEventHandler } from 'react';
import { Modal } from 'react-bootstrap';

import { useToggle } from '@/hooks/useToggle';

export const QuizAnswer: FC = () => {
  const [ show, toggle ] = useToggle(false);

  const handleQuizLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    toggle();
  };

  const handleClose = (): void => {
    toggle();
  };

  return (
    <>
      <p>Fill out <a onClick={handleQuizLinkClick} href="https://ng295qu8zyk.typeform.com/to/IrVyZ1ak" target="_blank" rel="noreferrer">this short quiz</a> to find the learning path that best fits your unique learning goals.</p>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>Dog Training or Dog Behavior</Modal.Header>
        <Modal.Body>
          <iframe style={{ width: '100%', minHeight: 800 }} src="https://ng295qu8zyk.typeform.com/to/IrVyZ1ak" />
        </Modal.Body>
      </Modal>
    </>
  );
};
