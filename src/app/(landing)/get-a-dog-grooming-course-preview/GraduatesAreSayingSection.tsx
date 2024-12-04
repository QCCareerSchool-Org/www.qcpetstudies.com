'use client';

import Image from 'next/image';
import type { FC } from 'react';

import { TestimonialSmCaseyBechard } from '@/components/testimonialsSmall/caseyBechard';
import { TestimonialSmKaylaTorraville } from '@/components/testimonialsSmall/kaylaTorraville';
import { TestimonialSmMelodyMason } from '@/components/testimonialsSmall/melodyMason';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import TestiminialBackground from '@/images/backgrounds/testimonials-bg.jpg';

export const GraduatesAreSayingSection: FC = () => {

  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;
  return (
    <section className="text-light" style={{ backgroundColor: '#61677a' }}>
      {false && lgOrGreater && <Image
        src={TestiminialBackground}
        alt="happy dog with open mouth"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'right' }}
      />}
      <div className="container text-center">
        <h2 className="text-light mb-4">What <strong>Graduates Are Saying</strong></h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <TestimonialSmMelodyMason size={120} starSize={180} />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <TestimonialSmKaylaTorraville size={120} starSize={180} />
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <TestimonialSmCaseyBechard size={120} starSize={180} />
          </div>
        </div>
      </div>
    </section>
  );
};
