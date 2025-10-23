'use client';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

type Props = {
  header: string;
  url: string;
};

export const QuizCTACard: FC<Props> = ({ header, url }) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!('IntersectionObserver' in window)) {
      setIsVisible(true);
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -150px 0px',
        threshold: 0.1,
      },
    );
    const currentCard = cardRef.current;
    if(currentCard) {
      observer.observe(currentCard);
    }
    return() => {
      if(currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  const containerClasses = `${styles.quizCardContainer} ${isVisible ? styles.animateIn : ''}`;

  return (
    <div ref={cardRef} className={containerClasses}>
      <div className={`${styles.quizCard} p-4 rounded bg-qhite text-center`}>
        <div className={`${styles.pulseDot} mt-4`} aria-hidden="true" />
        <h3 className="mb-3 text-navy">{header}</h3>
        <p className="mb-3">Take this 30-second quiz to unlock offers and advice tailored to your goals.</p>
        <a href={url} className="btn btn-secondary mb-4" target="_blank" rel="noopener noreferrer">Take the 30-Second Quiz</a>
      </div>
    </div>
  );
};
