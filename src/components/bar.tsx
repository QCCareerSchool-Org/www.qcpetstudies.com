'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';

interface Props {
  variant: 'primary' | 'secondary' | 'dark' | 'light';
  align?: 'start' | 'center' | 'end';
}

export const Bar: FC<Props> = ({ variant, align = 'center' }) => {
  const [ onScreen, ref ] = useIntersectionObserver(true);

  const className = `bar ${onScreen ? 'expanded' : 'collapsed'} bg-${variant}`;

  return (
    <>
      <hr ref={ref} className={className} />
      <style jsx>{`
        .bar {
          border: none;
          height: 0.5rem;
          width: 4rem;
          margin: 0 ${align === 'end' ? 0 : 'auto'} 1.5rem ${align === 'start' ? 0 : 'auto'};
          opacity: 1;
          transition: width 1s;
        }
        .bar.collapsed {
          width: 1rem;
        }
      `}</style>
    </>
  );
};
