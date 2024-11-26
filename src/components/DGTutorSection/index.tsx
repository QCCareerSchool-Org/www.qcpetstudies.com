import type { FC } from 'react';

import { MasterIcon } from './masterIcon';
import { lisaDay, mariKusanagi, paddyGaffney } from './tutors';

type Props = {
  className?: string;
  id?: string;
};

export const DGTutorSection: FC<Props> = ({ className, id = 'tutors' }) => (
  <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h2>Learn from Certified <strong>Master Groomers</strong></h2>
            <p>When you enroll with QC Pet Studies, you'll be paired with an expert groomer who will review your work and provide detailed audio feedback on each assignment. With decades of industry experience, your tutor will offer valuable advice to help you succeed and improve as you progress through the course.</p>
          </div>
        </div>
        <div className="row mt-2 g-5">
          <MasterIcon {...mariKusanagi} />
          <MasterIcon {...lisaDay} />
          <MasterIcon {...paddyGaffney} />
        </div>
      </div>
    </section>
  </>
);
