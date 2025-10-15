import Image from 'next/image';
import type { FC } from 'react';

import DesktopUK from './desktop-uk-no-btn.jpg';
import Desktop from './desktop-us-no-btn.jpg';

type Props = {
  countryCode?: string;
};

export const FourHundredOff: FC<Props> = ({ countryCode }) => {
  const discount = countryCode === 'GB' ? '£400' : '$400';
  const imageSrc = countryCode === 'GB' ? DesktopUK : Desktop;

  return (
    <section className="pt-0 bg-black text-white">
      <div className="container text-center">
        <Image src={imageSrc} alt="" className="img-fluid" />
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
          <p>As a special thank you for joining the QC Pet Studies community, you can enroll in any course today and <strong>save {discount}</strong> on your tuition! Hurry—this exclusive offer is only available for a limited time!</p>
          <a href="https://enroll.qcpetstudies.com"><button className="btn btn-primary btn-lg">Enroll & Claim {discount} Off</button></a>
        </div>
      </div>
    </section>
  );
};
