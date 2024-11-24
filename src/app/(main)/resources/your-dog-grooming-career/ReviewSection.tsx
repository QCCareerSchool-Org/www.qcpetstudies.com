'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useScreenWidth } from '@/hooks/useScreenWidth';
import ReviewDogGroomingCourse from '@/images/a-review-of-dog-grooming-course.jpg';

export const ReviewSection: FC = () => {

  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <section className="bg-dark py-0">{/* override padding */}
      <div className="container-fluid">
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-8 col-xl-9 col-fluid col-fluid-lg-8 col-fluid-xl-9">
            <div className="section pe-lg-5">{/* re-add section padding, and add right padding on lg or greater */}
              <div id="quoteWrapper" className="d-flex align-items-center">
                <div>
                  <p className="lead mb-4">I'm 2 units [into the Dog Grooming Course] and love it! It has a great background, written learning, supplies, and more! I came from a vet assisting background and wanted to open up my own grooming salon, but I have two kids, so I needed to do distance [training]. I love this course so much! I highly recommend this course and the First Aid for Groomers Course. With my background knowledge, I could tell the topics were well-researched. By far, blew me away!</p>
                  <div className="d-flex mb-4">
                    <p>Mackenzie Lafleur<br /><span className="text-muted">QC Graduate</span></p>
                  </div>
                  <p className="lead mb-0"><Link href="/category/student-features/" className="link-primary">Read other reviews like this one by checking out our Student &amp; Graduate Features!</Link></p>
                </div>
              </div>
            </div>
          </div>
          {lgOrGreater && (
            <div className="col-lg-4 col-xl-3" style={{ position: 'relative' }}>
              <Image
                src={ReviewDogGroomingCourse}
                alt="a review of dog grooming course"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
