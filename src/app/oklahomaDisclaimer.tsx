'use client';

import { FC } from 'react';

import { useLocation } from '@/hooks/useLocation';

export const OklahomaDisclaimer: FC = () => {
  const location = useLocation();

  if (!(location?.countryCode === 'US' && location.provinceCode === 'OK')) {
    return null;
  }

  return (
    <div style={{ width: '100%', padding: '0.5rem', background: '#333', color: '#ccc', position: 'fixed', bottom: 0, zIndex: 100 }}>
      <div className="container text-center text-lg-start small">
        We are unable to enroll students from Oklahoma at this time. Please contact the school for more information.
      </div>
    </div>
  );
};
