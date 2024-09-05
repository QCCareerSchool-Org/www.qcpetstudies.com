'use client';

import Image, { StaticImageData } from 'next/image';
import type { ChangeEvent, ChangeEventHandler, FC, FormEventHandler, ReactElement } from 'react';
import { useCallback, useId, useRef, useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { v1 } from 'uuid';

import { CourseCode } from '../../models/courseCode';
import DownloadIcon from '../download.svg';
import styles from './index.module.scss';

type Props = {
  onCourseChange?: (e: ChangeEvent<HTMLInputElement>, courseCode: CourseCode) => void;
  successLocation: string;
  listId: number;
  emailTemplateId?: number;
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
  courseCodes?: string[];
  button?: ReactElement;
};

export const BrevoForm: FC<Props> = props => {
  const id = useId();
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ token, setToken ] = useState<string>();
  const [ refreshReCaptcha ] = useState(false);
  const submitting = useRef(false);

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setLastName(e.target.value);
  };

  const handleEmailAddressChange: ChangeEventHandler<HTMLInputElement> = e => {
    setEmailAddress(e.target.value);
  };

  const handleVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  const handleSubmit: FormEventHandler = () => {
    if (submitting.current) {
      return false;
    }
    submitting.current = true;

    setTimeout(() => { submitting.current = false; }, 10_000);

    return true;
  };

  return (
    <form action="https://leads.qccareerschool.com" method="post" className={styles.brochureForm} onSubmit={handleSubmit}>
      <input type="hidden" name="g-recaptcha-response" value={token} />
      <input type="hidden" name="school" value="QC Pet Studies" />
      <input type="hidden" name="successLocation" value={props.successLocation} />
      <input type="hidden" name="listId" value={props.listId} />
      <input type="hidden" name="nonce" value={v1()} />
      {props.courseCodes?.map(c => <input key={c} type="hidden" name="courseCodes" value={c} />)}
      {typeof props.emailTemplateId !== 'undefined' && <input type="hidden" name="emailTemplateId" value={props.emailTemplateId} />}
      {props.gclid && <input type="hidden" name="gclid" value={props.gclid} />}
      {props.msclkid && <input type="hidden" name="msclkid" value={props.msclkid} />}
      {props.utmSource && <input type="hidden" name="utmSource" value={props.utmSource} />}
      {props.utmMedium && <input type="hidden" name="utmMedium" value={props.utmMedium} />}
      {props.utmCampaign && <input type="hidden" name="utmCampaign" value={props.utmCampaign} />}
      {props.utmContent && <input type="hidden" name="utmContent" value={props.utmContent} />}
      {props.utmTerm && <input type="hidden" name="utmTerm" value={props.utmTerm} />}
      {props.onCourseChange && (
        <div className="mb-3 mb-sm-4">
          <label className="mb-1">Which course are you interested in?</label>
          <div className="form-check">
            <input onChange={e => props.onCourseChange?.(e, 'dg')} checked={props.courseCodes?.includes('dg')} className="form-check-input" type="radio" id="courseDG" name="course" value="dg" />
            <label className="form-check-label" htmlFor="courseDG">Dog Grooming</label>
          </div>
          <div className="form-check">
            <input onChange={e => props.onCourseChange?.(e, 'dt')} checked={props.courseCodes?.includes('dt')} className="form-check-input" type="radio" id="courseDT" name="course" value="dt" />
            <label className="form-check-label" htmlFor="courseDT">Dog Training</label>
          </div>
        </div>
      )}
      <div className="mb-3">
        {!props.placeholders && <label htmlFor={`${id}firstName`} className="form-label">Name</label>}
        <input onChange={handleFirstNameChange} value={firstName} type="text" name="firstName" id={`${id}firstName`} className="form-control" placeholder={props.placeholders ? 'Name' : undefined} autoComplete="given-name" autoCapitalize="words" />
      </div>
      <input onChange={handleLastNameChange} value={lastName} type="hidden" name="lastName" id={`${id}lastName`} />
      <div className="mb-3">
        {!props.placeholders && <label htmlFor={`${id}emailAddress`} className="form-label">Email <span className="text-primary">*</span></label>}
        <input onChange={handleEmailAddressChange} value={emailAddress} type="email" name="emailAddress" id={`${id}emailAddress`} className={`form-control ${styles.emailAddressInput}`} placeholder={props.placeholders ? 'Email *' : undefined} required autoComplete="email" autoCapitalize="none" />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" name="emailOptIn" id={`${id}emailOptIn`} className="form-check-input" />
          <label htmlFor={`${id}emailOptIn`} className="form-check-label small">
            I agree to receive additional emails from QC, including <span className="d-none d-md-inline">promotions, </span>special offers<span className="d-none d-md-inline"> and more</span>. Unsubscribe anytime!
          </label>
        </div>
      </div>
      {props.button
        ? <>{props.button}</>
        : (
          <button className={`${styles.button} ${props.buttonClassName ?? 'btn btn-primary'}`}><span className="text-navy"><Image src={DownloadIcon as StaticImageData} alt="" height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span>{props.buttonText ?? 'Get Your Free Catalog'}</button>
        )
      }
      <GoogleReCaptcha onVerify={handleVerify} refreshReCaptcha={refreshReCaptcha} />
    </form>
  );
};
