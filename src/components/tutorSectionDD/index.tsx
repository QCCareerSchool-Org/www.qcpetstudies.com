import Image from 'next/image';
import type { FC } from 'react';

import SamanthaMichaelsImage from './samantha-michaels.jpg';

interface Props {
  className?: string;
  id?: string;
}

export const TutorSectionDD: FC<Props> = ({ className, id = 'tutors' }) => {

  return <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Learn from <strong>Dog-Care Experts</strong></h2>
            <p className="mb-5">QC&apos;s Dog Daycare course was developed with assistance from experts in the pet-care industry. When you enroll with QC Pet Studies, you&apos;ll be matched with an industry professional working in the field who is eager to share their professional insight and help you succeed.  Your tutor will review your work and provide you with in-depth audio feedback on each assignment to let you know what you did well and how you could improve. Use this feedback to guide you through the next unit in your course.</p>
            <h3 className="mb-4">Your Dog Daycare Tutor</h3>
          </div>
          <div className="col-12 col-lg-6 align-item-center mb-2">
            <div className="mb-2">
              <Image
                src={SamanthaMichaelsImage}
                placeholder="blur"
                alt="dog-care expert, Samantha Michaels"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="lead"><strong>Samantha Michaels</strong></p>
            <p className="mb-0">Samantha has many years of experience running her own pet-care business, offering a range of services including dog grooming, dog training, first aid, dog walking and doggy daycare. Becoming an expert in this industry required dedication, hard work and lots of qualifications. Samantha has gained a wealth of experience in the many facets of the pet-care industry. She is now excited to share her experience and professional skills to help QC Pet Studies&apos; students build successful careers in the pet industry. She hopes that her experience offers added value to help her students safely care for dogs, while developing strong technical knowledge and confidence.</p>
          </div>
        </div>
      </div>
    </section>
  </>;
};
