'use client';

import 'react-multi-carousel/lib/styles.css';

import type { FC, PropsWithChildren } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import styles from './client.module.scss';

const responsive: ResponsiveType = {
  all: {
    breakpoint: { min: 0, max: 9999 },
    items: 1,
  },
};

export const TestimonialCarouselClient: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.carouselShell}>
      <Carousel
        ssr
        responsive={responsive}
        partialVisible
        infinite
        showDots
        arrows={false}
        autoPlay
        autoPlaySpeed={4000}
        pauseOnHover={false}
        transitionDuration={500}
        containerClass={styles.carouselContainer}
        dotListClass={styles.dotList}
      >
        {children}
      </Carousel>
    </div>
  );
};
