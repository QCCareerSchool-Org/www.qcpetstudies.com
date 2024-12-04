'use client';
import { FC, ReactEventHandler, useEffect, useState } from 'react';

import { usePrevious } from '@/hooks/usePrevious';
import { gaEvent } from '@/lib/gtag';

export const CertificationSection: FC = () => {

  const [ videoPercentage, setVideoPercentage ] = useState(0);

  const videoPlay: ReactEventHandler<HTMLVideoElement> = () => {
    // eslint-disable-next-line camelcase
    gaEvent('Play', { event_category: 'Video', event_label: 'DT Trailer' });
  };

  const videoEnded: ReactEventHandler<HTMLVideoElement> = () => {
    // eslint-disable-next-line camelcase
    gaEvent('End', { event_category: 'Video', event_label: 'DT Trailer' });
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
      gaEvent('100%', { event_category: 'Video', event_label: 'DT Trailer' });
    } else if (videoPercentage >= 75 && prevVideoPercentage < 75) {
      // eslint-disable-next-line camelcase
      gaEvent('75%', { event_category: 'Video', event_label: 'DT Trailer' });
    } else if (videoPercentage >= 50 && prevVideoPercentage < 50) {
      // eslint-disable-next-line camelcase
      gaEvent('50%', { event_category: 'Video', event_label: 'DT Trailer' });
    } else if (videoPercentage >= 25 && prevVideoPercentage < 25) {
      // eslint-disable-next-line camelcase
      gaEvent('25%', { event_category: 'Video', event_label: 'DT Trailer' });
    }
  }, [ videoPercentage, prevVideoPercentage ]);
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 mb-4">
            <div className="ratio ratio-16x9">
              <video onTimeUpdate={videoUpdate} onEnded={videoEnded} onPlay={videoPlay} controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer-poster.png">
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <h2>Become a <strong>Certified Dog Trainer</strong></h2>
            <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
            <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you'll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
            <p className="lead mb-0">Are you ready to start an amazing career?</p>
          </div>
        </div>
      </div>
    </section>
  );
};
