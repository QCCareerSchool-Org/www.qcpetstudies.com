'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ChangeEvent, ChangeEventHandler, FC, FormEventHandler, ReactElement } from 'react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { v1 } from 'uuid';

import DownloadIcon from '../download.svg';
import styles from './index.module.scss';
import type { CourseCode } from '@/domain/courseCode';

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
  referrer: string | null;
};

export const BrevoForm: FC<Props> = props => {
  const id = useId();
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ token, setToken ] = useState<string>();
  const [ refreshReCaptcha, setRefreshReCaptcha ] = useState(false);
  const submitting = useRef(false);
  const [ disabled, setDisabled ] = useState(true);

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setLastName(e.target.value);
  };

  const handleEmailAddressChange: ChangeEventHandler<HTMLInputElement> = e => {
    const input = e.target;
    input.setCustomValidity('');
    setEmailAddress(input.value);
  };

  const handleVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  // Google reCaptcha token expires after 2 minutes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefreshReCaptcha(r => !r);
    }, 90_000); // 90 seconds

    return (): void => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisabled(false);
    }, 1_000);

    return (): void => {
      clearTimeout(timeoutId);
    };
  }, []);

  const validForm = (): boolean => {
    if (submitting.current || disabled) {
      return false;
    }

    if (!/^[^@\s]+@(?:[^@\s]+\.)+[^@\s]+$/ug.test(emailAddress)) {
      emailAddressRef.current?.setCustomValidity('Please ensure that your email address includes the TLD, such as .com or .org.');
      emailAddressRef.current?.focus();
      emailAddressRef.current?.reportValidity();
      return false;
    }

    return true;
  };

  const handleSubmit: FormEventHandler = e => {
    if (!validForm()) {
      e.preventDefault();
      return;
    }

    submitting.current = true;

    setTimeout(() => { submitting.current = false; }, 10_000);
  };

  const handleDGSelection: ChangeEventHandler<HTMLInputElement> = e => {
    props.onCourseChange?.(e, 'dg');
  };

  const handleDTSelection: ChangeEventHandler<HTMLInputElement> = e => {
    props.onCourseChange?.(e, 'dt');
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
      {props.referrer && <input type="hidden" name="referrer" value={props.referrer} />}
      {props.onCourseChange && (
        <div className="mb-3 mb-sm-4">
          <label className="mb-1">Which course are you interested in?</label>
          <div className="form-check">
            <input onChange={handleDGSelection} checked={props.courseCodes?.includes('dg')} className="form-check-input" type="radio" id="courseDG" name="course" value="dg" />
            <label className="form-check-label" htmlFor="courseDG">Dog Grooming</label>
          </div>
          <div className="form-check">
            <input onChange={handleDTSelection} checked={props.courseCodes?.includes('dt')} className="form-check-input" type="radio" id="courseDT" name="course" value="dt" />
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
        <input ref={emailAddressRef} onChange={handleEmailAddressChange} value={emailAddress} type="email" name="emailAddress" id={`${id}emailAddress`} className={`form-control ${styles.emailAddressInput}`} placeholder={props.placeholders ? 'Email *' : undefined} required autoComplete="email" autoCapitalize="none" />
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
          <button className={`${styles.button} ${props.buttonClassName ?? 'btn btn-primary'}`} disabled={disabled}><span className="text-navy"><Image src={DownloadIcon as StaticImageData} alt="" height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span>{props.buttonText ?? 'Get the Course Preview'}</button>
        )
      }
      <GoogleReCaptcha onVerify={handleVerify} refreshReCaptcha={refreshReCaptcha} />
    </form>
  );
};
