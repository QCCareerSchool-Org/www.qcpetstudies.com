import React from 'react';

import type { Expert } from './data';
import styles from './index.module.scss';
import { ImageCircle } from '@/components/ImageCircle';

interface ExpertCardProps {
  expert: Expert;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ expert }) => {
  return (
    <div className={`${styles['expert-card-wrapper']} p-3`}>
      <div className={`${styles['expert-card']} p-4 h-full`}>
        <div className="relative w-24 h-24 mx-auto mb-3">
          <ImageCircle src={expert.image} alt={expert.name} size={110} />
        </div>
        <h4 className="mb-0"><strong>{expert.name}</strong></h4>
        <p className="mb-3">{expert.title}</p>
        <p>{expert.description}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
