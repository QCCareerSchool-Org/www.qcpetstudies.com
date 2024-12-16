import type { FC, PropsWithChildren } from 'react';

import styles from './questionAndAnswer.module.scss';

type Props = {
  header: string;
};

export const QuestionAndAnswer: FC<PropsWithChildren<Props>> = ({ header, children }) => (
  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <h3 className={styles.question} itemProp="name">{header}</h3>
    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
      <div itemProp="text">
        {children}
      </div>
    </div>
  </div>
);
