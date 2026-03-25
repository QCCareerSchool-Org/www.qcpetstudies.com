'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

interface Props {
  header: string;
  url: string;
}

const options = {
  root: null,
  rootMargin: '0px 0px -150px 0px',
  threshold: 0.1,
};

export const QuizCTACard: FC<Props> = ({ header, url }) => {
  const [ showIFrame, setShowIFrame ] = useState(false);
  const [ intesecting, cardRef ] = useIntersectionObserver(false, options);

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    setShowIFrame(true);
  };

  const containerClasses = `${styles.quizCardContainer} ${intesecting ? styles.animateIn : ''}`;

  return (
    <div ref={cardRef} className={containerClasses}>
      <div className={`${styles.quizCard} p-4 rounded bg-qhite text-center`}>
        <div className={`${styles.pulseDot} mt-4`} aria-hidden="true" />
        <h3 className="mb-3 text-navy">{header}</h3>
        <p className="mb-3">Take this 30-second quiz to unlock offers and advice tailored to your goals.</p>
        <a onClick={handleClick} href={url} className="btn btn-secondary mb-4" target="_blank" rel="noopener noreferrer">Take the 30-Second Quiz</a>
      </div>
      {showIFrame && (
        <iframe src={url} width="100%" height="860" />
      )}
    </div>
  );
};
