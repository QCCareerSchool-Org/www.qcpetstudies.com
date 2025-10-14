'use client';

import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

import { BrevoForm } from '@/components/brevoForm';
import type { CourseCode } from '@/domain/courseCode';

type FormFields = {
  successLocation: string;
  brevoListId: number;
  brevoEmailTemplateId: number;
  telephoneListId: number;
};

const formFieldsDictionary: Record<string, FormFields> = {
  dg: {
    successLocation: `${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`,
    brevoListId: 31,
    brevoEmailTemplateId: 1660,
    telephoneListId: 55,
  },
  dt: {
    successLocation: `${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-training-course-preview`,
    brevoListId: 30,
    brevoEmailTemplateId: 1635,
    telephoneListId: 57,
  },
};

type Props = {
  buttonText?: string;
  buttonClassName?: string;
  placeholders?: boolean;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer: string | null;
  countryCode?: string | null;
};

export const MultiCourseBrevoForm: FC<Props> = props => {
  const [ course, setCourse ] = useState<CourseCode>('dg');
  const [ formFields, setFormFields ] = useState<FormFields>(formFieldsDictionary.dg);

  const handleCourseChange = (e: ChangeEvent<HTMLInputElement>, courseCode: CourseCode): void => {
    if (formFieldsDictionary[courseCode]) {
      setCourse(courseCode);
      setFormFields(formFieldsDictionary[courseCode]);
    }
  };

  return (
    <BrevoForm
      onCourseChange={handleCourseChange}
      successLocation={formFields.successLocation}
      listId={formFields.brevoListId}
      telephoneListId={formFields.telephoneListId}
      emailTemplateId={formFields.brevoEmailTemplateId}
      gclid={props.gclid}
      msclkid={props.msclkid}
      utmSource={props.utmSource}
      utmMedium={props.utmMedium}
      utmCampaign={props.utmCampaign}
      utmContent={props.utmContent}
      utmTerm={props.utmTerm}
      placeholders={props.placeholders}
      courseCodes={[ course ]}
      referrer={props.referrer}
      countryCode={props.countryCode}
    />
  );
};
