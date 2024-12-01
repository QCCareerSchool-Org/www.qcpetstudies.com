'use client';

import { FC } from 'react';

export const CustomStyle: FC = () => (
  <style jsx>{`
      #outlineSection {
        background-color: #f7f7f7 !important;
      }
      .unitStatsTable {
        font-size: 1.25rem;
      }
      .unitStatsTable th {
        font-weight: bold;
        padding-right: 0.5rem;
      }
      .unitStatsTable tr > td, .unitStatsTable tr > th {
        padding-bottom: 0.75rem;
      }
      .unitStatsTable tr:last-of-type > td, .unitStatsTable tr:last-of-type > th {
        padding-bottom: 0.25rem;
      }
    `}</style>
);
