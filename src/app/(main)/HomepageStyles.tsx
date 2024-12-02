'use client';

import { CSSProperties, FC } from 'react';

export const HomepageStyles: FC = () => {
  return (
    <style jsx>{`
    .heroContainer {
      margin-bottom: 16rem;
    }
    @media screen and (min-width: 576px) {
      .heroContainer {
        margin-bottom: 20rem;
      }
    }
    @media screen and (min-width: 768px) {
      .heroContainer {
        margin-bottom: 24rem;
      }
    }
    @media screen and (min-width: 992px) {
      .heroContainer {
        margin-bottom: 0;
      }
    }
    `}</style>
  );
};

type RibbonInCircleStyleProps = {
  size?: number;
  background?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
};

export const RibbonInCircleStyles: FC<RibbonInCircleStyleProps> = ({ size = 48, background = 'white', color }) => {
  return (
    <style jsx>{`
      .wrapper {
        height: ${size}px;
        width: ${size}px;
        border-radius: ${size / 2}px;
        background-color: ${background};
        ${typeof color !== 'undefined' ? `color: ${color}` : ''}
      }
      `}</style>
  );
};
