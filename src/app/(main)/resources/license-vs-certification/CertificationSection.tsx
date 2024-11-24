'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import DogSittingOnTowel from '@/images/dog-sitting-on-towel.jpg';

export const CertificationSection: FC = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Dog Grooming <strong>Certification</strong></h2>
            <p>A certification is earned after successfully completing a professional dog grooming certification course. Unlike a dog grooming license, a certification represents the training, education, and knowledge you have in the field of dog grooming.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5 mb-4 mb-md-0">
            <Image
              src={DogSittingOnTowel as StaticImageData}
              alt="a dog sitting on a towel"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', objectPosition: 'center' }}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="text-start">
              <p className="lead">Dog grooming certification courses will teach you</p>
              <ul className="mb-4">
                <li>Breed standards</li>
                <li>Grooming techniques</li>
                <li>Dog anatomy</li>
                <li>How to create various haircuts and styles</li>
                <li>How to use and sanitize equipment</li>
                <li>Dog behavior</li>
                <li>First aid training</li>
                <li>Business training</li>
                <li>And more!</li>
              </ul>
              <p>To truly be the best dog groomer you can be, proper training from a certification course is essential!</p>
              <Link href="/certification-courses/dog-grooming" className="btn btn-primary">View The Dog Grooming Course</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
