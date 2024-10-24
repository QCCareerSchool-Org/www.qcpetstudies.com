import { ChangeEvent, ChangeEventHandler, FC, FormEventHandler, useReducer, useRef } from 'react';

import { useLocation } from '../hooks/useLocation';
import { addLead } from '../lib/leads';
import { isSchool } from '../models/school';
import { Spinner } from './Spinner';

export type CourseCode = 'dg' | 'dt';

type Props = {
  action: string;
  lastName?: boolean;
  phoneNumber?: boolean;
  buttonText?: string | JSX.Element;
  buttonClassName?: string;
  hiddenFields?: Array<{
    key: string;
    value: string | number;
  }>;
  marketing: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  } | null;
  courses?: string[];
  initialValues?: {
    firstName: string | null;
    lastName: string | null;
    emailAddress: string | null;
    emailOptIn: boolean | null;
    telephoneNumber: string | null;
    smsOptIn: boolean | null;
  };
  courseSelection?: boolean;
  onCourseChange?: (courseCode: CourseCode) => void;
  errors?: boolean;
};

type State = {
  formSubmitting: boolean;
  telephoneNumber: string;
  smsOptIn: boolean;
  telephoneError: boolean;
  telephoneErrorMessage?: string;
};

type Action =
  | { type: 'FORM_SUBMITTED' }
  | { type: 'FORM_COMPLETE' }
  | { type: 'TELEPHONE_NUMBER_CHANGED'; payload: string }
  | { type: 'SMS_OPT_IN_CHANGED'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FORM_SUBMITTED':
      return { ...state, formSubmitting: true };
    case 'FORM_COMPLETE':
      return { ...state, formSubmitting: false };
    case 'TELEPHONE_NUMBER_CHANGED': {
      let telephoneError = false;
      let telephoneErrorMessage: string | undefined = undefined;
      if (state.smsOptIn && action.payload.length === 0) {
        telephoneError = true;
        telephoneErrorMessage = 'You have opted into getting text messages. A telephone number is required.';
      }
      return { ...state, telephoneNumber: action.payload, telephoneError, telephoneErrorMessage };
    }
    case 'SMS_OPT_IN_CHANGED': {
      let telephoneError = false;
      let telephoneErrorMessage: string | undefined = undefined;
      if (state.telephoneNumber.length === 0 && action.payload) {
        telephoneError = true;
        telephoneErrorMessage = 'You have opted into getting text messages. A telephone number is required.';
      }
      return { ...state, smsOptIn: action.payload, telephoneError, telephoneErrorMessage };
    }
  }
};

const initialState: State = { formSubmitting: false, telephoneNumber: '', smsOptIn: false, telephoneError: false };

const disableDelay = 5000;

const getHiddenField = (name: string, hiddenFields?: Array<{ key: string; value: string | number }>): string | number | null => {
  return hiddenFields?.find(({ key }) => key === name)?.value ?? null;
};

export const BrochureForm: FC<Props> = props => {
  const { action, lastName = true, phoneNumber = false, buttonText = 'Get the Preview', buttonClassName, hiddenFields, marketing, courses, initialValues, courseSelection, errors } = props;

  const location = useLocation();

  const submitting = useRef(false);

  const formRef = useRef<HTMLFormElement>(null);
  const schoolRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const telephoneNumberRef = useRef<HTMLInputElement>(null);
  const emailOptInRef = useRef<HTMLInputElement>(null);
  const smsOptInRef = useRef<HTMLInputElement>(null);

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleTelephoneNumberChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'TELEPHONE_NUMBER_CHANGED', payload: e.target.value });
  };

  const handleSMSOptInChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'SMS_OPT_IN_CHANGED', payload: e.target.checked });
  };

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();

    if (submitting.current) {
      return;
    }

    if (state.telephoneError) {
      telephoneNumberRef.current?.focus();
      return;
    }

    if (!formRef.current || !schoolRef.current || !emailAddressRef.current || !firstNameRef.current || !lastNameRef.current) {
      return;
    }

    const form = formRef.current;
    const schoolInput = schoolRef.current;
    const emailAddressInput = emailAddressRef.current;
    const firstNameInput = firstNameRef.current;
    const lastNameInput = lastNameRef.current;

    dispatch({ type: 'FORM_SUBMITTED' });

    void Promise.resolve().then(async () => {
      submitting.current = true;

      const gclid = getHiddenField('gclid', hiddenFields);
      const msclkid = getHiddenField('msclkid', hiddenFields);

      return addLead({
        school: isSchool(schoolInput.value) ? schoolInput.value : 'QC Pet Studies',
        emailAddress: emailAddressInput.value,
        firstName: firstNameInput.value || undefined,
        lastName: lastNameInput.value || undefined,
        telephoneNumber: telephoneNumberRef.current?.value || undefined, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
        emailOptIn: emailOptInRef.current?.checked ?? undefined,
        smsOptIn: smsOptInRef.current?.checked ?? undefined,
        gclid: typeof gclid === 'number' ? gclid.toString() : gclid ?? undefined,
        msclkid: typeof msclkid === 'number' ? msclkid.toString() : msclkid ?? undefined,
        marketing: marketing ?? undefined,
        courses: courses,
      });
    }).catch(err => {
      console.error('Error adding lead', err);
    }).then(async () => {
      form.submit();
      return new Promise(res => setTimeout(res, disableDelay));
    }).finally(() => {
      dispatch({ type: 'FORM_COMPLETE' });
      submitting.current = false;
    });
  };

  const handleCourseChange = (e: ChangeEvent<HTMLInputElement>, courseCode: CourseCode): void => {
    props.onCourseChange?.(courseCode);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} action={action} method="post">
      <input ref={schoolRef} type="hidden" name="school" value="QC Pet Studies" />
      {hiddenFields?.map(h => (
        <input key={h.key} type="hidden" name={h.key} value={h.value} />
      ))}
      {location?.countryCode && <input type="hidden" name="countryCode" value={location.countryCode} />}
      {location?.provinceCode && <input type="hidden" name="provinceCode" value={location.provinceCode} />}
      {courseSelection && (
        <div className="mb-3 mb-sm-4">
          <label className="mb-1">Which course are you interested in?</label>
          <div className="form-check">
            <input onChange={e => handleCourseChange(e, 'dg')} checked={courses?.includes('dg')} className="form-check-input" type="radio" id="courseDG" name="course" value="dg" />
            <label className="form-check-label" htmlFor="courseDG">Dog Grooming</label>
          </div>
          <div className="form-check">
            <input onChange={e => handleCourseChange(e, 'dt')} checked={courses?.includes('dt')} className="form-check-input" type="radio" id="courseDT" name="course" value="dt" />
            <label className="form-check-label" htmlFor="courseDT">Dog Training</label>
          </div>
        </div>
      )}
      <div className="mb-3 mb-sm-4">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input ref={firstNameRef} type="text" id="firstName" name="firstName" className="form-control" autoComplete="given-name" autoCapitalize="words" defaultValue={initialValues?.firstName ?? ''} />
      </div>
      {lastName && (
        <div className="mb-3 mb-sm-4">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input ref={lastNameRef} type="text" id="lastName" name="lastName" className="form-control" autoComplete="family-name" autoCapitalize="words" defaultValue={initialValues?.lastName ?? ''} />
        </div>
      )}
      <div className="mb-3 mb-sm-4">
        <label htmlFor="emailAddress" className="form-label">Email Address <span className="text-secondary">*</span></label>
        <input ref={emailAddressRef} type="email" id="emailAddress" name="emailAddress" className="form-control" autoComplete="email" required defaultValue={initialValues?.emailAddress ?? ''} />
      </div>
      {phoneNumber && (
        <div className="mb-3 mb-sm-4">
          <label htmlFor="telephoneNumber" className="form-label">Phone Number</label>
          <input ref={telephoneNumberRef} onChange={handleTelephoneNumberChange} value={state.telephoneNumber} type="tel" id="telephoneNumber" name="telephoneNumber" className={`form-control ${state.telephoneError ? 'is-invalid' : ''}`} autoComplete="tel" defaultValue={initialValues?.telephoneNumber ?? ''} />
          {state.telephoneErrorMessage && <div className="invalid-feedback">{state.telephoneErrorMessage}</div>}
        </div>
      )}
      <div className="mb-3 mb-sm-4">
        <div className="form-check">
          <input ref={emailOptInRef} className="form-check-input" type="checkbox" id="emailOptIn" name="emailOptIn" value="yes" defaultChecked={initialValues?.emailOptIn ?? false} />
          <label className="form-check-label small fst-italic" htmlFor="emailOptIn">
            I agree to receive additional emails from QC, including news and offers. Unsubscribe anytime!
          </label>
        </div>
        {phoneNumber && (
          <div className="mt-2">
            <div className="form-check">
              <input ref={smsOptInRef} onChange={handleSMSOptInChange} checked={state.smsOptIn} className="form-check-input" type="checkbox" id="smsOptIn" name="smsOptIn" value="yes" defaultChecked={initialValues?.smsOptIn ?? false} />
              <label className="form-check-label small fst-italic" htmlFor="smsOptIn">
                Text me with news and offers.
              </label>
            </div>
          </div>
        )}
      </div>
      {errors && <p className="text-danger mb-4" style={{ marginTop: '-0.5rem' }}>Please complete all required form fields.</p>}
      <div className="d-flex align-items-center">
        <button className={buttonClassName ?? 'btn btn-primary shadow-sm'} type="submit" disabled={state.formSubmitting}>{buttonText}</button>
        {state.formSubmitting && <div className="ms-2"><Spinner /></div>}
      </div>
    </form>
  );
};
