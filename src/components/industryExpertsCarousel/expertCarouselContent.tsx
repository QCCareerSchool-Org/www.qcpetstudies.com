'use client';

import React from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import type { Expert } from './data';
import { experts } from './data';
import ExpertCard from './expertCard';

const expertArray: Expert[] = Object.values(experts).map(expert => ({ ...expert, id: expert.name }));

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 4000, min: 992 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 992, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ExpertCarouselContent: React.FC = () => {
  return (
    <div className="w-full">
      <Carousel responsive={responsive} infinite={false} itemClass="px-3" showDots={true} keyBoardControl={true} containerClass="carousel-container">
        {expertArray.map(expert => (
          <ExpertCard key={expert.name} expert={expert} />
        ))}
      </Carousel>
    </div>
  );
};

export default ExpertCarouselContent;
