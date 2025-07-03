import Image from 'next/image';
import type { FC } from 'react';

import BrunoBakerImage from './bruno-baker.jpg';
import SusanReadImage from './susan-read.png';

type Props = {
  className?: string;
  id?: string;
};

export const TutorSectionDT: FC<Props> = ({ className, id = 'tutors' }) => {

  return <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Learn from <strong>Dog Training Experts</strong></h2>
            <p className="lead">QC's dog training course was developed with the assistance of Kim Cooper.</p>
            <p className="mb-5">Kim Cooper is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in aerospace engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs&mdash;all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search-and-rescue dogs. Kim and her dogs have earned many search-and-rescue certifications as well as obedience and agility titles.</p>
            <h3 className="mb-4">Your Dog Training Tutors</h3>
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
            <p className="mb-0">Bruno got his first dog over 30 years ago, fulfilling a lifelong yearning for a canine partnership. He views working with dogs as an ongoing study of canine ethology, with the goal of becoming a better human teammate. After retiring from distinguished careers in the Royal Canadian Mounted Police and Royal Canadian Air Force, Bruno decided to bring his passion for dogs to a professional level. Today, he and his current partner, Mikaw, are dedicated to K9 Wilderness Search and Rescue. In addition to this full-time endeavor, Bruno finds great joy in sharing his knowledge with fellow dog owners and trainers, watching their partnerships with their canine companions grow. His teaching is deeply informed by years of experience as a civilian flight instructor, military pilot trainer, flight training program director, military flying school commander, and search and rescue trainer.</p>
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
            <p className="mb-0">Susan has been training dogs for over 35 years. She specializes in Search and Rescue (SAR) work, but Susan's experience extends to competitive obedience, rally and agility training as well. Susan has been teaching tracking for many years, and conducts workshops across Ontario. She has been involved with K9 SAR since 2000, and is now the head K9 trainer and handler with Georgian Bay SAR. Susan is also the Provincial K9 Coordinator and sits on the Ontario Search and Rescue Volunteer Association (OSARVA) Board of Directors. Susan is currently the only OPP/OSARVA certified dog handler in Central Ontario with her live find dog, Zena. She has also worked with Human Remains Detection K9 with her dog, Zappa, since 2014. As a former school teacher and a highly experienced dog training instructor, Susan looks forward to using her significant teaching experience to benefit QC's dog training students.</p>
          </div>
        </div>
      </div>
    </section>
  </>;
};
