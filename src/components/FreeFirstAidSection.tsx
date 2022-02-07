import Image from 'next/image';
import { ReactElement } from 'react';

import CourseMaterials from '../images/course-materials-first-aid.jpg';
import FirstAidLogo from '../images/first-aid-logo.svg';

type Props = {
  className?: string;
};

export const FreeFirstAidSection = ({ className }: Props): ReactElement => (
  <section className={className}>
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-lg-start">
          <div className="text-center mb-2">
            <Image src={FirstAidLogo} alt="First Aid plus Logo" />
          </div>
          <h2>Get a <strong>FREE</strong> First Aid Course</h2>
          <p className="lead">Enroll in Dog Grooming &amp; receive the First Aid for Dog Groomers course to take your career to the next level!</p>
          <p className="mb-0">Learn from first aid experts who will guide you through the course. You'll learn how to keep yourself and your furry clients out of harm's way.</p>
        </div>
        <div className="col-12 col-lg-6">
          <Image src={CourseMaterials} alt="Dog grooming first aid book" />
        </div>
      </div>
    </div>
  </section>
);
