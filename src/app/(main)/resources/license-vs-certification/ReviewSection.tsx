'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { FC } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import AprilCostigan from '@/images/april-costigan-300x300.jpg';
import DogStaircase from '@/images/dog-on-staircase.jpg';

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
                  <p className="lead mb-4">&quot;QC Pet Studies offered exactly what I wanted! There were lots of instructional videos that I could watch over and over again and the practical assignments offered lots of hands-on training. The valuable tutor feedback I received throughout the course was the most important thing to me...&quot;</p>
                  <div className="d-flex mb-4">
                    <div className="me-4">
                      <Image
                        src={AprilCostigan as StaticImageData}
                        className="rounded-circle"
                        width={50}
                        height={50}
                        alt="April Costigan"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                    <p>April Costigan<br /><span className="text-muted">QC Graduate</span></p>
                  </div>
                  <p className="lead mb-0"><Link href="/2021/01/qc-pet-studies-graduate-feature-april-costigan" className="link-primary">Read April's full Graduate Feature on QC's blog!</Link></p>
                </div>
              </div>
            </div>
          </div>
          {lgOrGreater && (
            <div className="col-lg-4 col-xl-3" style={{ position: 'relative' }}>
              <Image
                src={DogStaircase as StaticImageData}
                alt="a dog sitting on a staircase"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 992px) {
          #quoteWrapper {
            min-height: 400px;
          }
        }
      `}</style>
    </section>
  );
};
