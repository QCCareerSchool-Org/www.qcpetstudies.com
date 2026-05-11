import type { FC } from 'react';

import styles from './index.module.scss';

interface Props {
  number: number;
  title: string;
  text: string;
}

export const JourneyCard: FC<Props> = ({ number, title, text }) => (
  <div className="card h-100 bg-light position-relative shadow">
    <div className={styles.stepNumber}>{number}</div>
    <div className="card-body pt-5">
      <p className="eyebrow mb-2">Step {number}:</p>
      <h3 className="h5 mb-3">{title}:</h3>
      <p className="mb-0">{text}</p>
    </div>
  </div>
);
