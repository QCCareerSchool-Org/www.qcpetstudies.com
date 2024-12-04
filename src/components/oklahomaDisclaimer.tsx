import { FC } from 'react';

import { getData } from '@/lib/getData';

export const OklahomaDisclaimer: FC = () => {
  const { countryCode, provinceCode } = getData();

  if (countryCode === 'US' && provinceCode === 'OK') {
    return (
      <div style={{ width: '100%', padding: '0.5rem', background: '#333', color: '#ccc', position: 'fixed', bottom: 0, zIndex: 100 }}>
        <div className="container text-center text-lg-start small">
          We are unable to enroll students from Oklahoma at this time. Please contact the school for more information.
        </div>
      </div>
    );
  }
};
