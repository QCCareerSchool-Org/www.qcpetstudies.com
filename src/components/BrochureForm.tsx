import { ChangeEventHandler, FC, FormEventHandler, useEffect, useReducer, useRef, useState } from 'react';

import { useLocation } from '../hooks/useLocation';

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
};

// Do we need to keep track of the opt in date, or will Pardot do that? For telephoneOptIn too?

type State = {
  telephoneNumber: string;
  smsOptIn: boolean;
  telephoneError: boolean;
  telephoneErrorMessage?: string;
};

type Action =
  | { type: 'TELEPHONE_NUMBER_CHANGED'; payload: string }
  | { type: 'SMS_OPT_IN_CHANGED'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
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

const initialState: State = { telephoneNumber: '', smsOptIn: false, telephoneError: false };

export const BrochureForm: FC<Props> = ({ action, lastName = true, phoneNumber = false, buttonText = 'Get the Preview', buttonClassName, hiddenFields }) => {
  const location = useLocation();
  const telephoneNumberRef = useRef<HTMLInputElement>(null);

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleTelephoneNumberChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'TELEPHONE_NUMBER_CHANGED', payload: e.target.value });
  };

  const handleSMSOptInChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'SMS_OPT_IN_CHANGED', payload: e.target.checked });
  };

  const handleSubmit: FormEventHandler = e => {
    if (state.telephoneError) {
      e.preventDefault();
      telephoneNumberRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} action={action} method="post">
      <input type="hidden" name="school" value="QC Pet Studies" />
      {hiddenFields?.map(h => (
        <input key={h.key} type="hidden" name={h.key} value={h.value} />
      ))}
      {location?.countryCode && <input type="hidden" name="countryCode" value={location.countryCode} />}
      {location?.provinceCode && <input type="hidden" name="provinceCode" value={location.provinceCode} />}
      <div className="mb-3 mb-sm-4">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" id="firstName" name="firstName" className="form-control" autoComplete="given-name" autoCapitalize="words" />
      </div>
      {lastName && (
        <div className="mb-3 mb-sm-4">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="form-control" autoComplete="family-name" autoCapitalize="words" />
        </div>
      )}
      <div className="mb-3 mb-sm-4">
        <label htmlFor="emailAddress" className="form-label">Email Address <span className="text-secondary">*</span></label>
        <input type="email" id="emailAddress" name="emailAddress" className="form-control" autoComplete="email" required />
      </div>
      {phoneNumber && (
        <div className="mb-3 mb-sm-4">
          <label htmlFor="telephoneNumber" className="form-label">Phone Number</label>
          <input ref={telephoneNumberRef} onChange={handleTelephoneNumberChange} value={state.telephoneNumber} type="tel" id="telephoneNumber" name="telephoneNumber" className={`form-control ${state.telephoneError ? 'is-invalid' : ''}`} autoComplete="tel" />
          {state.telephoneErrorMessage && <div className="invalid-feedback">{state.telephoneErrorMessage}</div>}
        </div>
      )}
      <div className="mb-3 mb-sm-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="emailOptIn" name="emailOptIn" value="yes" />
          <label className="form-check-label small fst-italic" htmlFor="emailOptIn">
            I agree to receive additional emails from QC, including news and offers. Unsubscribe anytime!
          </label>
        </div>
        {phoneNumber && (
          <div className="mt-2">
            <div className="form-check">
              <input onChange={handleSMSOptInChange} checked={state.smsOptIn} className="form-check-input" type="checkbox" id="smsOptIn" name="smsOptIn" value="yes" />
              <label className="form-check-label small fst-italic" htmlFor="smsOptIn">
                Text me with news and offers.
              </label>
            </div>
          </div>
        )}
      </div>
      <button className={buttonClassName ?? 'btn btn-primary shadow-sm'} type="submit">{buttonText}</button>
    </form>
  );
};
