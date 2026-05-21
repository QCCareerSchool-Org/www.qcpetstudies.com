'use client';

import type { FC, MouseEventHandler } from 'react';

import styles from './learnMore.module.css';
import { useTaxCreditPopup } from '@/hooks/useTaxCreditPopup';
import { gaEvent } from '@/lib/gtag';

export const LearnMore: FC = () => {
  const [ , toggle ] = useTaxCreditPopup();

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
    gaEvent('canadian tax popup');
  };

  return (
    <>
      <a href="#" onClick={handleClick} className={styles.learnMore}>Learn More</a>
    </>
  );
};
