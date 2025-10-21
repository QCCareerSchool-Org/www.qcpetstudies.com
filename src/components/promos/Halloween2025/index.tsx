import Image from 'next/image';
import type { FC } from 'react';

import Desktop from './$400-off.jpg';
import DesktopUK from './£400-off.jpg';

type Props = {
  countryCode?: string;
};

export const Halloween2025: FC<Props> = ({ countryCode }) => {
  const discount = countryCode === 'GB' ? '£400' : '$400';
  const imageSrc = countryCode === 'GB' ? DesktopUK : Desktop;

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <h2 className="h1">Claim Your Bonus</h2>
            <p className="mb-4">As a special thank you for joining the QC Pet Studies community, you can enroll in any course today and <strong>save {discount}</strong> on your tuition! Hurry—this exclusive offer is only available for a limited time!</p>
            <div className="mb-4">
              <a href="https://enroll.qcpetstudies.com"><Image src={imageSrc} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qcpetstudies.com"><button className="btn btn-primary btn-lg">Enroll & Claim {discount} Off</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
