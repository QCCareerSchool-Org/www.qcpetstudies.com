'use client';

import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

import { ActiveCampaginForm } from '@/components/activeCampaignForm';
import type { CourseCode } from '@/domain/courseCode';

interface FormFields {
  successLocation: string;
  requiredIds: bigint[];
  optionalIds?: bigint[];
}

const formFieldsDictionary: Record<string, FormFields> = {
  dg: {
    successLocation: `${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`,
    requiredIds: [ 55n ],
    optionalIds: [ 2n ],
  },
  dt: {
    successLocation: `${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-training-course-preview`,
    requiredIds: [ 56n ],
    optionalIds: [ 36n ],
  },
} as const;

interface Props {
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
}

export const MultiCourseForm: FC<Props> = props => {
  const [ course, setCourse ] = useState<CourseCode>('dg');
  const [ formFields, setFormFields ] = useState<FormFields>(formFieldsDictionary.dg);

  const handleCourseChange = (e: ChangeEvent<HTMLInputElement>, courseCode: CourseCode): void => {
    if (Object.hasOwn(formFieldsDictionary, courseCode)) {
      setCourse(courseCode);
      setFormFields(formFieldsDictionary[courseCode]);
    }
  };

  return (
    <ActiveCampaginForm
      onCourseChange={handleCourseChange}
      successLocation={formFields.successLocation}
      requiredIds={formFields.requiredIds}
      optionalIds={formFields.optionalIds}
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
