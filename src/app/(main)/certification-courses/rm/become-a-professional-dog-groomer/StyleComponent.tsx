'use client';

import { FC } from 'react';

export const StyleComponent: FC = () => {
  return (
    <style jsx>{`
      .bg-grayish-blue {
        background: #3e4557 !important;
      }
      .bg-desaturated-blue {
        background: #262e41 !important;
      }
      .formImage { z-index: 100; }
    `}</style>
  );
};
