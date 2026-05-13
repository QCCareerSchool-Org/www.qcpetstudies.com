import Image from 'next/image';
import type { FC } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

import ProfessionalGroomer from './professional_groomer.jpg';

export const ResponsibilitiesSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">What Does a Professional Dog Groomer Do?</h2>
          <p className="lead mb-5">A professional dog groomer is both a stylist and a wellness advocate for pets. Groomers provide essential hygiene care, such as bathing, brushing, nail trimming, and coat maintenance, while also improving a dog's comfort, health, and appearance. Each grooming session helps dogs feel clean, confident, and look their best. </p>
          <div className="d-grid gap-4">
            <h3 className="h6 mb-0">Your Core Responsibilities &amp; Professional Impact</h3>
            {responsibilities.map(item => (
              <div className="d-flex gap-3" key={item.title}>
                <BiCheckCircle aria-hidden="true" className="text-primary fs-3 flex-shrink-0" />
                <div>
                  <h4 className="h6 mb-1">{item.title}</h4>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <Image src={ProfessionalGroomer} alt="" placeholder="blur" sizes="(min-width: 992px) 50vw, 100vw" className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  </section>
);

const responsibilities = [
  {
    title: 'Precision Styling:',
    text: 'Mastering breed-specific cuts for popular breeds like Poodles, Terriers and Yorkies, and convenient pet cuts like the "teddy bear” clip,  tailored to a pet\'s lifestyle.',
  },
  {
    title: 'Wellness Assessments:',
    text: 'Performing health checks before grooming to identify skin issues or irregularities before they become medical problems.',
  },
  {
    title: 'Skin & Coat Health:',
    text: 'Selecting specialized products to treat allergies and coat damage, moving beyond basic cleaning to dermatological care.',
  },
  {
    title: 'Low-Stress Handling:',
    text: 'Using "Fear Free" techniques to provide a calm, safe experience for dogs, especially anxious or senior pets.',
  },
  {
    title: 'Business Operations:',
    text: 'Managing online bookings, maintaining consistent grooming schedules, and recommending the right retail products to support each dog\'s coat health between appointments.',
  },
];
