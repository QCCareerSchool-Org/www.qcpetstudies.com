import Image from 'next/image';
import type { FC } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

import PetStudiesImage from './qc_pet_studies_career.jpg';

export const TraitsSection: FC = () => (
  <section>
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Is Dog Grooming Right for You?</h2>
          <p className="lead mb-5">You don't need prior experience to become a professional groomer—but certain strengths will set you up for success. If these sound like you, you're well-suited to the work:</p>
          <Image src={PetStudiesImage} alt="" placeholder="blur" sizes="(min-width: 992px) 50vw, 100vw" className="img-fluid rounded shadow" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-grid gap-4">
            {plannerTraits.map(trait => (
              <div className="d-flex gap-3" key={trait.title}>
                <BiCheckCircle aria-hidden="true" className="text-primary fs-3 flex-shrink-0" />
                <div>
                  <h3 className="h6 mb-1">{trait.title}</h3>
                  <p className="mb-0">{trait.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-light border-start border-primary border-4 rounded mt-5 p-4">
            <h3 className="h5 mb-2">Does this sound like you?</h3>
            <p className="mb-0">If you have the passion, we have the professional roadmap to help you turn it into a profitable career.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const plannerTraits = [
  {
    title: 'Love Working with Dogs:',
    text: 'You\'re patient, observant, and able to handle dogs of different temperaments in a calm, controlled way.',
  },
  {
    title: 'Hands-On and Practical: ',
    text: 'You prefer active, skill-based work and are comfortable handling tools, equipment, and physical tasks throughout the day.',
  },
  {
    title: 'Detail-Oriented:',
    text: 'You focus on precision and consistency, understanding that clean lines, balanced trims, and proper technique define professional results.',
  },
  {
    title: 'Composed Under Pressure:',
    text: 'You can manage challenges—such as nervous dogs or complex coat conditions—without losing focus or compromising safety.',
  },
  {
    title: 'Technically and Creatively Engaged:',
    text: 'You\'re interested in both following breed standards and mastering clean, functional pet trims that suit each dog and client.',
  },
  {
    title: 'Motivated to Build a Career:',
    text: 'You’re ready to develop your skills, follow professional standards, and apply what you learn in a real working environment.',
  },
];
