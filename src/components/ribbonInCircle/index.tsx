'use client';

import type { CSSProperties, FC } from 'react';
import { IoMdRibbon } from 'react-icons/io';

type Props = {
  size?: number;
  background?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
};

export const RibbonInCircle: FC<Props> = ({ size = 48, background = 'white', color }) => {
  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center text-center"><IoMdRibbon size={size * 0.7} /></div>
      <style jsx>{`
      .wrapper {
        height: ${size}px;
        width: ${size}px;
        border-radius: ${size / 2}px;
        background-color: ${background};
        ${typeof color !== 'undefined' ? `color: ${color}` : ''}
      }
      `}</style>
    </>
  );
};
