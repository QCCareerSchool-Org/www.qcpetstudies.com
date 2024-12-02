'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import RequiredDogBreedImage from '@/images/dog-breeds-required.jpg';

export const UnitsSection: FC = () => {
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          {lgOrGreater && (
            <div className="col-12 col-lg-3 offset-lg-1">
              <Image
                src={RequiredDogBreedImage}
                alt="dog in a towel"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )}
          <div className="col-12 col-lg-8">
            <p>For Units A to C, you're expected to work with a coated dog of any breed. For the rest of the units, you will groom dogs that exhibit a variety of different conditions.</p>
            <p className="lead mb-4">Worried about finding dogs for your assignments? Check out these guides on how to recruit dogs for your online grooming assignments!</p>
            <ul>
              <li><Link href="/blog/2017/07/finding-dogs-online-grooming-assignments/" className="link-secondary">Finding Dogs for Your Online Grooming Assignments</Link></li>
              <li><Link href="/blog/2017/09/5-places-find-dogs-pet-grooming-course/" className="link-secondary">5 Places to Find Dogs for Your Pet Grooming Course</Link></li>
              <li><Link href="/blog/2019/03/approaching-pet-owners-to-find-dogs-for-your-online-dog-grooming-courses/" className="link-secondary">Approaching Pet Owners to Find Dogs for Your Pet Grooming Course</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
      #unitsSection .card-body {
        padding: 2rem;
      }
    `}</style>
    </section>
  );
};
