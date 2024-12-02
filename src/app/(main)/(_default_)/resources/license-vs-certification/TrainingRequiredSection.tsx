'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useScreenWidth } from '@/hooks/useScreenWidth';
import DogToy from '@/images/dog-toy.jpg';

export const TrainingRequiredSection: FC = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;
  return (

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Is Training Required to Be a <strong>Dog Groomer?</strong></h2>
            <p>In many places, there are no formal licensing or training requirements to be a professional dog groomer. It all depends on where you live and varies from region to region. Some places require a license or certification in order to operate a grooming business. Others will require nothing at all.</p>
            <p>Be sure to research local regulations to best determine what is required in order to start a dog grooming career in your city or town.</p>
            <p className="lead">Even if education is not required, discover the many <Link href="/2020/11/el-paso-requires-dog-groomer-certification-as-of-january-1st" className="link-primary">advantages of getting professionally trained and certified</Link>!</p>
          </div>
          {lgOrGreater && <div className="col-6">
            <Image
              src={DogToy as StaticImageData}
              alt="a dog toy"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', objectPosition: 'center' }}
            />
          </div>}
        </div>
      </div>
    </section>
  );
};
