import type { FC } from 'react';

import { MasterIcon } from './masterIcon';
import { lisaDay, paddyGaffney } from './tutors';

type Props = {
  className?: string;
  id?: string;
};

export const TutorSectionDG: FC<Props> = ({ className, id = 'tutors' }) => (
  <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h2>Meet Your Grooming Mentors</h2>
            <p>When you enroll with QC Pet Studies, you'll be paired with an expert grooming mentor who will review your work and provide detailed audio feedback on each assignment. With decades of industry experience, your mentor will offer valuable advice to help you succeed and improve as you progress through the course.</p>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <MasterIcon {...lisaDay} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <MasterIcon {...paddyGaffney} />
          </div>
        </div>
      </div>
    </section>
  </>
);
