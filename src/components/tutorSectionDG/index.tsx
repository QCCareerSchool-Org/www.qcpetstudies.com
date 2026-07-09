import type { FC } from 'react';

import { MasterIcon } from './masterIcon';
import { caseyBechard, lisaDay, paddyGaffney } from './tutors';

interface Props {
  className?: string;
  casey?: string;
  paddy?: string;
  lisa?: string;
}

export const TutorSectionDG: FC<Props> = ({ className, casey = 'casey', paddy = 'paddy', lisa = 'lisa' }) => (
  <>
    <div className="sectionAnchor" />
    <section className={className}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h2>Meet Your Grooming Mentors</h2>
            <p>When you enroll with QC Pet Studies, you'll be paired with an expert grooming mentor who will review your work and provide detailed audio feedback on each assignment. With decades of industry experience, your mentor will offer valuable advice to help you succeed and improve as you progress through the course.</p>
            <div className="row justify-content-center g-5 g-lg-5 mt-4">
              <div className="col-12 col-lg-4" id={lisa}>
                <MasterIcon {...lisaDay} />
              </div>
              <div className="col-12 col-lg-4" id={paddy}>
                <MasterIcon {...paddyGaffney} />
              </div>
              <div className="col-12 col-lg-4" id={casey}>
                <MasterIcon {...caseyBechard} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
