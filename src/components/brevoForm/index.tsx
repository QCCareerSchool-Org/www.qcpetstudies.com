'use client';

import 'react-phone-number-input/style.css';
import Image from 'next/image';
import Link from 'next/link';
import type { ChangeEvent, ChangeEventHandler, FC, FormEventHandler, ReactElement } from 'react';
import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import type { Country, DefaultInputComponentProps, Value } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input/input';
import { v1 } from 'uuid';

import DownloadIcon from '../download.svg';
import { CurrentPageInput } from './currentPageInput';
import styles from './index.module.scss';
import { JavasciptInput } from './javascriptInput';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  onCourseChange?: (e: ChangeEvent<HTMLInputElement>, courseCode: CourseCode) => void;
  successLocation: string;
  listId: number;
  telephoneListId?: number;
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
  countryCode?: string | null;
}

export const BrevoForm: FC<Props> = props => {
  const id = useId();
  const [ nonce, setNonce ] = useState(() => v1());
  const randomName = useId();
  const [ telephoneNumber, setTelephoneNumber ] = useState<Value>();
  const [ token, setToken ] = useState<string>('');
  const [ refreshReCaptcha, setRefreshReCaptcha ] = useState(false);
  const submitting = useRef(false);
  const [ disabled, setDisabled ] = useState(true);

  const showTelephone = props.countryCode === 'CA' || props.countryCode === 'US';

  const handleTelephoneNumberChange = (value?: Value): void => {
    setTelephoneNumber(value);
  };

  const handleVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  // periodically refresh the token because it expires after 2 minutes
  useEffect(() => {
    const updateToken = (): void => {
      setRefreshReCaptcha(r => !r);
    };

    const intervalId = setInterval(updateToken, 90_000); // every 90 seconds

    window.addEventListener('focus', updateToken); // whenever the window regains focus

    return (): void => {
      clearInterval(intervalId);
      window.removeEventListener('focus', updateToken);
    };
  }, []);

  // enable the submit button after 1 second
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisabled(false);
    }, 1_000);

    return (): void => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSubmit: FormEventHandler = e => {
    if (submitting.current || disabled) {
      e.preventDefault();
      return;
    }

    submitting.current = true;

    setTimeout(() => { submitting.current = false; }, 10_000);

    setNonce(v1());
  };

  // neeed so that we send the telephone number in the correct format
  // if we try to use telephoneNumber directly there is an issue:
  // removing the telephone number from the visible field doesn't remove the value from the hidden field
  // if we try to use the <PhoneInput /> component directly, we don't get the correct format in the back end
  const telephoneNumberE164 = telephoneNumber ?? '';

  const handleDGSelection: ChangeEventHandler<HTMLInputElement> = e => {
    props.onCourseChange?.(e, 'dg');
  };

  const handleDTSelection: ChangeEventHandler<HTMLInputElement> = e => {
    props.onCourseChange?.(e, 'dt');
  };

  return (
    <form action="https://leads.qccareerschool.com" method="post" className={styles.brochureForm} onSubmit={handleSubmit}>
      <CurrentPageInput />
      <JavasciptInput />
      <input type="hidden" name="nonce" value={nonce} />
      <input type="hidden" name="g-recaptcha-response" value={token} />
      <input type="hidden" name="school" value="QC Pet Studies" />
      <input type="hidden" name="successLocation" value={props.successLocation} />
      <input type="hidden" name="listId" value={props.listId} />
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
        <input type="text" name="firstName" id={`${id}firstName`} className="form-control" placeholder={props.placeholders ? 'Name' : undefined} autoComplete="given-name" autoCapitalize="words" />
      </div>
      <input type="hidden" name="lastName" id={`${id}lastName`} tabIndex={-1} autoComplete="off" />
      <input type="text" name={`hp_${randomName}`} style={{ position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1, overflow: 'hidden' }} tabIndex={-1} autoComplete="off" />
      <div className="mb-3">
        {!props.placeholders && <label htmlFor={`${id}emailAddress`} className="form-label">Email <span className="text-primary">*</span></label>}
        <input type="email" name="emailAddress" id={`${id}emailAddress`} className={`form-control ${styles.emailAddressInput}`} placeholder={props.placeholders ? 'Email *' : undefined} required autoComplete="email" autoCapitalize="none" />
      </div>
      {showTelephone && typeof props.telephoneListId !== 'undefined' && (
        <>
          <input type="hidden" name="telephoneListId" value={props.telephoneListId} />
          <div className="mb-3">
            <PhoneInput id={`${id}telephoneNumber`} value={telephoneNumber} onChange={handleTelephoneNumberChange} defaultCountry={props.countryCode as Country} inputComponent={InputComponent} />
            <input type="hidden" name="telephoneNumber" value={telephoneNumberE164} />
            {telephoneNumberE164.length > 0 && <p className="p-1"><small>By providing your phone number, you agree to receive exclusive offers from QC Pet Studies. Message frequency varies. Message & data rates may apply. Reply STOP to opt out. <Link href="/terms" target="_blank" rel="noreferrer">Terms & Privacy</Link>.</small></p>}
          </div>
        </>
      )}
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
          <button className={`${styles.button} ${props.buttonClassName ?? 'btn btn-primary'}`} disabled={disabled}><span className="text-navy"><Image src={DownloadIcon} alt="" height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span>{props.buttonText ?? 'Get the Course Preview'}</button>
        )
      }
      <GoogleReCaptcha onVerify={handleVerify} refreshReCaptcha={refreshReCaptcha} />
    </form>
  );
};

interface InputProps {
  value: Value;
  onChange: ChangeEventHandler;
  name: string;
}

const InputComponent = forwardRef<HTMLInputElement, DefaultInputComponentProps>((props, ref) => {
  const { value, onChange, name } = props as InputProps;
  const handleChange = onChange;
  return <input ref={ref} name={name} type="tel" value={value} onChange={handleChange} className="form-control" placeholder="Phone (Optional)" />;
});

InputComponent.displayName = 'InputComponent';
