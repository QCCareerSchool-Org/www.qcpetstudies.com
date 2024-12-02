'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import ManOnPhoneImage from '@/images/man-on-phone-holding-dog.jpg';

export const SettingUpForSuccessSection: FC = () => {
  const screenWidth = useScreenWidth();
  const xlOrGreater = screenWidth >= 1200;
  return (
    <section>
      <div className="container text-center text-lg-start text-xl-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 mb-4 mb-lg-0">
            <h2>Setting You Up for Success</h2>
            <p className="lead">As a QC Pet Studies Student, you'll get help through <strong>every step of your education.</strong></p>
            <p className="mb-0">When you enroll, you gain access to QC's friendly and experienced Student Support Specialists who are ready to assist you and answer your questions. As you work through your course, you'll be guided by our team of teaching assistants, as well as top-notch industry experts with years of experience in the industry. These experts include  Master groomers, certified dog trainers and experienced dog daycare providers. Even after you graduate, you'll remain an essential member of the QC community. You'll build relationships with other pet industry professionals and be connected with business resources that will help you succeed in your career.</p>
          </div>
          {!xlOrGreater && (
            <div className="col-12 col-sm-10 col-md-8 col-lg-4">
              <Image
                src={ManOnPhoneImage}
                alt="man on the phone holding a dog"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
