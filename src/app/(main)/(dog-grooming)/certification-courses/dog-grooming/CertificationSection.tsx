'use client';

import type { FC } from 'react';

export const CertificationSection: FC = () => (
  <section>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="ratio ratio-16x9 mb-4">
            <video controls poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.jpg">
              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.mp4" type="video/mp4" />
            </video>
          </div>

          <h2>Become a <strong>Certified Professional Dog Groomer</strong></h2>
          <p className="lead"><strong>International Dog Grooming Professional&trade;</strong> | <i>IDGP&trade;</i></p>
          <p>There's never been a better time to start a career as a professional dog groomer. Groomers and pet stylists all over the country have waiting lists or are simply refusing new clients. What an amazing opportunity to start a new and lucrative career!</p>
          <p>Get your International Dog Groomer Certification in less than a year with QC's comprehensive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to grow your grooming skills. With QC's all-encompassing Professional Grooming course, you'll master all levels of pet grooming from bathing and brushing and pet cuts, all the way to advanced pet styling. Graduate with all the knowledge and skills you need to succeed in the dog grooming industry!</p>
          <p className="mb-0">Are you ready to start an amazing career?</p>
        </div>
      </div>
    </div>
  </section>
);
