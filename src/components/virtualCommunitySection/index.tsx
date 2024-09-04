import Image from 'next/image';
import type { FC } from 'react';

import DesktopImage from './desktop.jpg';
import MobileImage from './mobile.jpg';

type Props = {
  className?: string;
};

export const VirtualCommunitySection: FC<Props> = ({ className }) => (
  <section className={`pb-0 ${className}`}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="mb-3">Access an Exclusive Virtual Community Where Creativity Thrives</h2>
          <p className="mb-0">Become a member of QC's supportive Virtual Community where pet care enthusiasts and professionals connect with mentors, share insights, and grow together. Tap into free webinars where top pet care experts reveal industry secrets, and participate in engaging discussions on everything from your latest training to your next career move. We're here to inspire and enhance your journey in the pet care field.</p>
          <p className="fw-bold">Join us in shaping the future of pet care.</p>
        </div>
      </div>
      <div className="d-none d-sm-block"><Image src={DesktopImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
    </div>
    <div className="d-sm-none"><Image src={MobileImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
  </section>
);
