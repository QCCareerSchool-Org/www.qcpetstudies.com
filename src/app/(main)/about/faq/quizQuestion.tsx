'use client';

import type { FC, MouseEventHandler } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './page.module.scss';
import { useToggle } from '@/hooks/useToggle';

export const QuizQuestion: FC = () => {
  const handleQuizLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    handleQuizClick();
  };

  const [ quizPopupVisible, handleQuizClick ] = useToggle(false);

  return (
    <>
      <h3 className={styles.question}>I'm not sure which course to take: Dog Training, Dog Behavior or both?</h3>
      <p>Fill out <a onClick={handleQuizLinkClick} href="https://ng295qu8zyk.typeform.com/to/IrVyZ1ak" target="_blank" rel="noreferrer">this short quiz</a> to find the learning path that best fits your unique learning goals.</p>
      <Modal size="lg" show={quizPopupVisible} onHide={handleQuizClick}>
        <Modal.Header closeButton>Dog Training or Dog Behavior</Modal.Header>
        <Modal.Body>
          <iframe style={{ width: '100%', minHeight: 800 }} src="https://ng295qu8zyk.typeform.com/to/IrVyZ1ak" />
        </Modal.Body>
      </Modal>
    </>
  );
};
