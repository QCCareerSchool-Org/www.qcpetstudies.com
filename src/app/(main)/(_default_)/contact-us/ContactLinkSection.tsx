'use client';

import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';

import { useLocation } from '@/hooks/useLocation';
import ContactByChatImage from '@/images/contact-chat.svg';
import ContactByEmailImage from '@/images/contact-email.svg';
import ContactByPhoneImage from '@/images/contact-headset.svg';
// import ScheduleCallImage from '@/images/schedule-call-contact.png';
import { openLiveChat } from '@/lib/livechat';
import { getTelephoneNumber } from '@/lib/phone';

export const ContactLinkSection: FC = () => {

  const location = useLocation();

  const [ emailAddress, setEmailAddress ] = useState('');
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  // add the correct email address after the component has loaded to fool simple scrapers
  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    setEmailAddress('info' + '@' + 'qcpetstudies.com');
  }, []);
  return(
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2>We Want to Hear From You</h2>
            <p className="mb-0">Whether you are a prospective student wondering about QC's courses or tuition, or a current student with questions about an assignment, we're here to help you in any way we can. Contact QC's student support specialists by phone, email, or live chat!</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
            <div className="px-lg-4">
              <Image
                src={ContactByPhoneImage as StaticImageData}
                height="80"
                width="64"
                alt="telephone icon"
                style={{ maxWidth: '100%' }}
              />
              <h3>By Phone</h3>
              <p className="mb-lg-4"><a href={`tel:${telephoneNumber}`} className="link-primary">{telephoneNumber}</a></p>
              <p className="mb-0">Speak with a student advisor about enrolling with QC or for assistance with your courses and assignments.</p>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
            <div className="px-lg-4">
              <Image
                src={ContactByEmailImage as StaticImageData}
                height="80"
                width="64"
                alt="email icon"
                style={{ maxWidth: '100%' }}
              />
              <h3>By Email</h3>
              <p className="mb-lg-4"><a href={`mailto:${emailAddress}`} className="link-primary">{emailAddress}</a></p>
              <p className="mb-0">Send us an email at any time and we'll get back to you as soon as possible!</p>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-4">
            <div className="px-lg-4">
              <Image
                src={ContactByChatImage as StaticImageData}
                height="80"
                width="64"
                alt="chat icon"
                style={{ maxWidth: '100%' }}
              />
              <h3>By Live Chat</h3>
              <p className="mb-lg-4"><a onClick={openLiveChat} className="link-primary">Click here to chat</a></p>
              <p className="mb-0">Do you have a question you want to be answered right away? Our student support specialists are ready to chat!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
