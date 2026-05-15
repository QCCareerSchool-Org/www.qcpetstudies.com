import Image from 'next/image';
import type { FC } from 'react';

import BrunoBakerImage from './bruno-baker.jpg';
import SusanReadImage from './susan-read.jpg';

interface Props {
  className?: string;
  id?: string;
}

export const TutorSectionDT: FC<Props> = ({ className, id = 'tutors' }) => {

  return <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Get Personalized Feedback from Your Mentor</h2>
            <p className="lead">When you enroll with QC Pet Studies, you'll be paired with an expert training mentor who will review your work and provide detailed audio feedback on each assignment. With decades of industry experience, your mentor will offer valuable advice to help you succeed and improve as you progress through the course.</p>
          </div>
          <div className="col-12 col-lg-6 text-lg-start">
            <div className="mb-2">
              <Image
                src={SusanReadImage}
                placeholder="blur"
                alt="dog-training expert, Susan Read"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="lead"><strong>Susan Read</strong></p>
            <p>Certified Dog Trainer</p>
            <p className="mb-5 mb-lg-0">Susan has over 35 years of dog training experience, specializing in Search and Rescue (SAR), obedience, rally, agility, and tracking. She is the head K9 trainer and handler with Georgian Bay SAR, Provincial K9 Coordinator for OSARVA, and the only OPP/OSARVA-certified live find dog handler in Central Ontario with her dog, Zena. A former school teacher and experienced instructor, Susan brings decades of hands-on training and teaching expertise to QC's dog training students. </p>
          </div>
          <div className="col-12 col-lg-6 text-lg-start align-item-center mb-2">
            <div className="mb-2">
              <Image
                src={BrunoBakerImage}
                placeholder="blur"
                alt="dog-training expert, Bruno Baker"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="lead"><strong>Bruno Baker</strong></p>
            <p>K9 Search and Rescue Specialist & Canine Educator</p>
            <p className="mb-0">Bruno got his first dog over 30 years ago, fulfilling a lifelong yearning for a canine partnership. After distinguished careers with the Royal Canadian Mounted Police and Royal Canadian Air Force, he turned his lifelong passion for dogs into a professional career focused on canine teamwork and training. Today, he and his current partner, Mikaw, are dedicated to K9 Wilderness Search and Rescue.  Drawing on decades of experience as an instructor, trainer, and leader, Bruno is passionate about helping dog owners and trainers build stronger partnerships with their dogs.</p>
          </div>

        </div>
      </div>
    </section>
  </>;
};
