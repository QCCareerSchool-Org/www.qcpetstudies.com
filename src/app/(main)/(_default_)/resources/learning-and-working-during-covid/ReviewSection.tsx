'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';

import PetWithMaskImage from '@/images/pet-covid-image.jpg';

export const ReviewSection: FC = () => {

  const screenWidth = useScreenWidth();

  const xlOrGreater = screenWidth >= 1200;

  return <section className="bg-light">
    {xlOrGreater && <Image
      src={PetWithMaskImage}
      alt="Mask"
      fill
      sizes="100vw"
      style={{ objectFit: 'contain', objectPosition: 'left' }}
    />}
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-8 offset-xl-4 offset-xxl-3">
          <p className="lead mb-4">&quot;I&apos;m 2 units [into the Dog Grooming Course] and love it! It has a great background, written learning, supplies, and more! I came from a vet assisting background and wanted to open up my own grooming salon, but I have two kids, so I needed to do distance [training]. I love this course so much! I highly recommend this course and the First Aid for Groomers Course. With my background knowledge, I could tell the topics were well-researched. By far, blew me away!&quot; </p>
          <p className="mb-4">Mackenzie Lafleur<br /><span className="text-muted">QC Student</span></p>
          <p>Read other reviews like this one by checking out our <Link href="/category/student-features/" className="link-secondary">Student &amp; Graduate Features</Link>!</p>
        </div>
      </div>
    </div>
  </section>;
};
