'use client';

import Image from 'next/image';
import { ChangeEvent, FC, useState } from 'react';

import { BrevoForm } from '@/components/brevoForm';
import { CourseCode } from '@/components/BrochureForm';
import { CardBody } from '@/components/CardBody';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import CatalogImage from '@/images/dog-and-scissors.jpg';
import { getParam } from '@/lib/getParam';

const formFieldsDictionary: Record<CourseCode, FormFields> = {
  dg: {
    successLocation: `${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`,
    brevoListId: 31,
    brevoEmailTemplateId: 60,
  },
  dt: {
    successLocation: `${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-training-course-preview`,
    brevoListId: 30,
    brevoEmailTemplateId: 61,
  },
};

type FormFields = {
  successLocation: string;
  brevoListId: number;
  brevoEmailTemplateId: number;
};

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
  referrer?: string;
};

export const CoursePreviewSection: FC<Props> = ({ searchParams }) => {

  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const referrer = getParam(searchParams.referrer);

  const screenWidth = useScreenWidth();
  const xxlOrGreater = screenWidth >= 1400;
  const xlOrGreater = screenWidth >= 1200;
  const lgOrGreater = screenWidth >= 992;
  const smOrGreater = screenWidth >= 576;

  const [ course, setCourse ] = useState<CourseCode>('dg');
  const [ formFields, setFormFields ] = useState<FormFields>(formFieldsDictionary.dg);

  const handleCourseChange = (e: ChangeEvent<HTMLInputElement>, courseCode: CourseCode): void => {
    if (formFieldsDictionary[courseCode]) {
      setCourse(courseCode);
      setFormFields(formFieldsDictionary[courseCode]);
    }
  };

  return (
    <section id="top">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
            <h2 className="text-center mb-0">Become a Pet Care Professional</h2>
          </div>
          <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
            <div className="card bg-light">
              <CardBody>
                <p className="text-center lead">Get Started with a{smOrGreater ? ' ' : <br />}<strong>Free Course Preview</strong></p>
                <BrevoForm
                  onCourseChange={handleCourseChange}
                  successLocation={formFields.successLocation}
                  listId={formFields.brevoListId}
                  emailTemplateId={formFields.brevoEmailTemplateId}
                  gclid={gclid ?? undefined}
                  msclkid={msclkid ?? undefined}
                  utmSource={utmSource ?? undefined}
                  utmMedium={utmMedium ?? undefined}
                  utmCampaign={utmCampaign ?? undefined}
                  utmContent={utmContent ?? undefined}
                  utmTerm={utmTerm ?? undefined}
                  placeholders
                  courseCodes={[ course ]}
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
            <p className="lead">Get access to a free course preview to</p>
            <ul className="mb-0">
              <li>Find out if a career in pet care is right for you</li>
              <li>Learn about the many careers you can pursue</li>
              <li>View course curriculums, course videos, and sample assignments</li>
              <li>Find out about tuition information and choose a payment plan</li>
              <li>Learn how you can't go wrong with QC's money back guarantee!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
