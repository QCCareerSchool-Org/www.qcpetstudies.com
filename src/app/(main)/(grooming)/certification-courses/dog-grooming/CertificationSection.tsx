'use client';

import { FC, ReactEventHandler, useEffect, useState } from 'react';
import { usePrevious } from '@/hooks/usePrevious';
import { gaEvent } from '@/lib/ga';

const eventLabel = 'DG Teaser 2023';

export const CertificationSection: FC = () => {

  const [ videoPercentage, setVideoPercentage ] = useState(0);

  const videoPlay: ReactEventHandler<HTMLVideoElement> = () => {
    // eslint-disable-next-line camelcase
    gaEvent('Play', { event_category: 'Video', event_label: eventLabel });
  };

  const videoEnded: ReactEventHandler<HTMLVideoElement> = () => {
    // eslint-disable-next-line camelcase
    gaEvent('End', { event_category: 'Video', event_label: eventLabel });
  };

  const videoUpdate: ReactEventHandler<HTMLVideoElement> = e => {
    const target = e.target as HTMLVideoElement;
    const percentage = Math.round((target.currentTime / target.duration) * 100);
    setVideoPercentage(percentage);
  };

  const prevVideoPercentage = usePrevious<number>(videoPercentage);

  useEffect(() => {
    if (typeof prevVideoPercentage === 'undefined') {
      return;
    }
    if (videoPercentage >= 100 && prevVideoPercentage < 100) {
      // eslint-disable-next-line camelcase
      gaEvent('100%', { event_category: 'Video', event_label: eventLabel });
    } else if (videoPercentage >= 75 && prevVideoPercentage < 75) {
      // eslint-disable-next-line camelcase
      gaEvent('75%', { event_category: 'Video', event_label: eventLabel });
    } else if (videoPercentage >= 50 && prevVideoPercentage < 50) {
      // eslint-disable-next-line camelcase
      gaEvent('50%', { event_category: 'Video', event_label: eventLabel });
    } else if (videoPercentage >= 25 && prevVideoPercentage < 25) {
      // eslint-disable-next-line camelcase
      gaEvent('25%', { event_category: 'Video', event_label: eventLabel });
    }
  }, [ videoPercentage, prevVideoPercentage ]);
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="ratio ratio-16x9 mb-4">
              <video onTimeUpdate={videoUpdate} onEnded={videoEnded} onPlay={videoPlay} controls poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.jpg">
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
};
