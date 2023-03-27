import { ReactElement } from 'react';
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

export const BrochureForm = ({ action, lastName = true, phoneNumber = false, buttonText = 'Get the Preview', buttonClassName, hiddenFields }: Props): ReactElement => {
  const location = useLocation();

  return (
    <form action={action} method="post">
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
          <input type="tel" id="telephoneNumber" name="telephoneNumber" className="form-control" autoComplete="tel" />
        </div>
      )}
      <div className="mb-3 mb-sm-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="emailOptIn" name="emailOptIn" value="yes" />
          <label className="form-check-label small fst-italic" htmlFor="emailOptIn">
            I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!
          </label>
        </div>
      </div>
      {phoneNumber && (
        <>
          <div className="mb-3 mb-sm-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="telephoneOptIn" name="telephoneOptIn" value="yes" />
              <label className="form-check-label small fst-italic" htmlFor="telephoneOptIn">
                I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply.
              </label>
            </div>
          </div>
        </>
      )}
      <button className={buttonClassName ?? 'btn btn-primary shadow-sm'} type="submit">{buttonText}</button>
    </form>
  );
};
