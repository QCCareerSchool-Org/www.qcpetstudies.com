'use client';

import 'react-multi-carousel/lib/styles.css';

import type { FC, PropsWithChildren } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

const responsive: ResponsiveType = {
  xl: {
    breakpoint: { min: 1200, max: 9999 },
    items: 3,
    partialVisibilityGutter: 30,
    slidesToSlide: 3,
  },
  lg: {
    breakpoint: { min: 992, max: 1200 },
    items: 3,
    partialVisibilityGutter: 30,
    slidesToSlide: 3,
  },
  md: {
    breakpoint: { min: 768, max: 992 },
    items: 3,
    partialVisibilityGutter: 30,
    slidesToSlide: 3,
  },
  sm: {
    breakpoint: { min: 576, max: 768 },
    items: 2,
  },
  xs: {
    breakpoint: { min: 0, max: 576 },
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
