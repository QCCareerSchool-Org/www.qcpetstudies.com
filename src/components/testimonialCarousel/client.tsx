'use client';

import 'react-multi-carousel/lib/styles.css';

import type { FC, PropsWithChildren } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

const responsive: ResponsiveType = {
  all: {
    breakpoint: { min: 0, max: 9999 },
    items: 1,
  },
};

export const TestimonialCarouselClient: FC<PropsWithChildren> = ({ children }) => {
  const { gte } = useScreenSizeContext();

  return (
    <div style={{ minHeight: 360 }}>
      <Carousel ssr responsive={responsive} partialVisible infinite showDots={gte('md')}>
        {children}
      </Carousel>
    </div>
  );
};
