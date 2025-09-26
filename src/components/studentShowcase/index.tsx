'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from '@/components/testimonial/index.module.css';
import { Star } from '@/components/testimonial/star';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription } from '@/domain/courseCode';

interface ShowcaseProps {
  id?: string;
  name: string;
  courses: CourseCode[];
  description: string;
  image: StaticImageData;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
}

export const StudentShowcaseSection: FC<{ student: ShowcaseProps }> = ({ student }) => {

  return (
    <div className="container">
      <div className="row justify-content-center g-s mb-5 mt-4">
        <div className="col-12 col-lg-6 h-100">
          <Image src={student.image} alt="" style={{ borderRadius: '30px' }} className="img-fluid rounded-lg" />
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-2">
          <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={i < student.stars} />)}</div>
          {student.description.split('\n\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )
          ))}
          <h3 className="mb-1">{student.name}</h3>
          <h5 className="mb-4">{getCourseDescription(student.courses[0])}</h5>
        </div>
      </div>
    </div>
  );
};
