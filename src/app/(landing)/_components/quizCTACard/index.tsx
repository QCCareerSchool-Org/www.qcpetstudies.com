import type { FC } from 'react';

import styles from './index.module.scss';

type Props = {
  header: string;
  url: string;
};

export const QuizCTACard: FC<Props> = ({ header, url }) => {
  return (
    <div>
      <div className={`${styles.quizCard} p-4 rounded bg-qhite text-center`}>
        <div className={`${styles.pulseDot} mt-4`} aria-hidden="true" />
        <h3 className="mb-3 text-navy">{header}</h3>
        <p className="mb-3">Take this 30-second quiz to unlock offers and advice tailored to your goals.</p>
        <a href={url} className="btn btn-secondary mb-4">Take the 30-Second Quiz</a>
      </div>
    </div>
  );
};
