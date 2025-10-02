import dynamic from 'next/dynamic';
import React from 'react';

const ExpertCarouselContent = dynamic(
  async () => {
    const mod = await import('./expertCarouselContent');
    return mod.default;
  },
  {
    ssr: false,
    loading: () => <p> </p>,
  },
);

const ExpertCarousel: React.FC = () => {
  return (
    <div className="w-full">
      <ExpertCarouselContent />
    </div>
  );
};

export default ExpertCarousel;
