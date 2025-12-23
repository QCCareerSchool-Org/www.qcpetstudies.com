import type { FC } from 'react';

interface Props {
  countryCode: string;
  provinceCode: string | null;
}

export const OklahomaDisclaimer: FC<Props> = ({ countryCode, provinceCode }) => {

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
