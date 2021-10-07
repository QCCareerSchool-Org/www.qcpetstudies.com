import { NextPage } from 'next';
import Image from 'next/image';
import React, { Fragment, ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { useLocation } from '../hooks/useLocation';
import tutorBackground from '../images/backgrounds/tutor-background.jpg';
import { getAddress } from '../lib/address';
import { getTelephoneNumber } from '../lib/phone';

const ContactUsPage: NextPage = () => {
  const location = useLocation();
  const countryCode = location?.countryCode ?? 'US';

  const address = getAddress(countryCode);
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <DefaultLayout>
      <section id="firstSection" className="bg-dark text-light">
        <Image src={tutorBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dddd" />
        <div className="container">
          <h1>Contact Us</h1>
          <Address lines={address} />
          <p>{telephoneNumber}</p>
        </div>
      </section>
    </DefaultLayout>
  );
};

type AddressProps = {
  lines: string[];
};

const Address = ({ lines }: AddressProps): ReactElement => (
  <p>
    {/* show the first element and then show all the subsequent element with <br /> tags preceding them */}
    {lines.map((line, i) => (i === 0 ? <Fragment key={0}>{line}</Fragment> : <Fragment key={i}><br />{line}</Fragment>))}
  </p>
);

export default ContactUsPage;
