'use client';

import type { FC } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import type { Testimonial } from './data';
import styles from './index.module.css';
import { getCourseName } from '@/domain/courseCode';

type Props = {
  testimonial: Testimonial;
};

export const Title: FC<Props> = ({ testimonial }) => {
  if (testimonial.courses.length === 0) {
    return;
  }

  if (testimonial.courses.length === 1) {
    return <span className={styles.title}>{getCourseName(testimonial.courses[0])}</span>;
  }

  const tooltip: FC = props => (
    <Tooltip id="button-tooltip" {...props}>
      Also a graduate of:
      <ul className="m-0 ps-3">
        {testimonial.courses.filter((c, i) => i >= 1).map(c => <li className="small" style={{ whiteSpace: 'nowrap' }} key={c}>{getCourseName(c)}</li>)}
      </ul>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <span className={styles.title}>{getCourseName(testimonial.courses[0])}</span>
    </OverlayTrigger>
  );
};
