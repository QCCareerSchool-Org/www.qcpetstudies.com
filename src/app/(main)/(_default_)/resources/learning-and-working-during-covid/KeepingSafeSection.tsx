'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import TipsCardBackground from '@/images/backgrounds/pet-covid-bg-light-gray.jpg';
export const KeepingSafeSection: FC = () => {

  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return (
    <section className="bg-light">
      {lgOrGreater && <Image
        src={TipsCardBackground}
        alt="Tips to keep safe"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />}
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-1">
            <h2>Tips for Keeping Yourself and Clients Safe</h2>
            <p className="lead">When working with clients in person, you should follow strict practices to keep everyone safe.</p>
            <h3>COVID-19 Safety Protocols for Dog Groomers</h3>
            <ul>
              <li>Reschedule or cancel appointments if you or your client is feeling ill or have been recently exposed to someone who has tested positive for COVID-19</li>
              <li>Ensure that you&apos;re always wearing a mask when working with clients</li>
              <li>Insist that clients also wear masks</li>
              <li>Consider reducing your overall grooming capacity to ensure a limited amount of people in your workspace</li>
              <li>Do not permit clients to wait for their dog on the premises. Consider meeting clients out in the parking lot to collect/deliver their dog</li>
              <li>Implement an online payment system so clients aren&apos;t required to linger in the salon for payment</li>
              <li>Socially distance whenever possible and enforce a maximum occupancy limit</li>
              <li>Wash your hands before and after working with a client, grooming their dog, or touching communal surfaces</li>
              <li>Disinfect all <Link href="/2018/08/learning-about-your-dog-grooming-kit-brushes-combs-and-dematting-tools" className="link-primary">grooming tools</Link> before and after use</li>
              <li>Work in a sanitized space and use air purifiers to keep the air clean</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
