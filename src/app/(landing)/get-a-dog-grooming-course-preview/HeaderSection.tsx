'use client';

import Image from 'next/image';
import { FC } from 'react';

import { BrevoForm } from '@/components/brevoForm';
import { CardBody } from '@/components/CardBody';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import CatalogImage from '@/images/dog-and-scissors.jpg';

const courses = [ 'dg' ];
const brevoListId = 31;
const brevoEmailTemplateId = 60;

type Props = {
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer?: string;
};

export const HeaderSection: FC<Props> = ({ gclid, msclkid, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, referrer }) => {

  const screenWidth = useScreenWidth();
  const xxlOrGreater = screenWidth >= 1400;
  const xlOrGreater = screenWidth >= 1200;
  const lgOrGreater = screenWidth >= 992;
  const smOrGreater = screenWidth >= 576;

  return (
    <section id="top">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
            <h2 className="text-center mb-0">Become a Professional{lgOrGreater ? ' ' : <br />}<strong>Dog Groomer</strong></h2>
          </div>
          <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
            <div className="card bg-light">
              <CardBody>
                <p className="text-center lead">Get Started with a{smOrGreater ? ' ' : <br />}<strong>Free Course Preview</strong></p>
                <BrevoForm
                  successLocation={`${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`}
                  listId={brevoListId}
                  emailTemplateId={brevoEmailTemplateId}
                  gclid={gclid ?? undefined}
                  msclkid={msclkid ?? undefined}
                  utmSource={utmSource ?? undefined}
                  utmMedium={utmMedium ?? undefined}
                  utmCampaign={utmCampaign ?? undefined}
                  utmContent={utmContent ?? undefined}
                  utmTerm={utmTerm ?? undefined}
                  placeholders
                  courseCodes={courses}
                  referrer={referrer ?? null}
                />
              </CardBody>
            </div>
          </div>
          <div className="col-12 col-sm-11 col-md-10 col-lg-6 col-xl-5">
            {lgOrGreater && (
              <div className="mb-2 d-flex justify-content-center">
                <Image
                  src={CatalogImage}
                  alt="dog with grooming tools"
                  width="922"
                  height="622"
                  sizes="100vw"
                  style={{ width: '100%', maxWidth: xxlOrGreater ? 400 : xlOrGreater ? 320 : 310, height: 'auto' }}
                />
              </div>
            )}
            <p className="lead">Get access to a free preview of the online dog grooming course to</p>
            <ul className="mb-0">
              <li>Find out if a career in dog grooming is right for you</li>
              <li>Learn about the many careers you can pursue as a dog groomer</li>
              <li>View the course curriculum, course videos, and sample assignments</li>
              <li>Find out about tuition information and choose a payment plan</li>
              <li>Learn how you can't go wrong with QC's money back guarantee!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
