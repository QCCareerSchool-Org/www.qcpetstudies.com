import { ReactElement } from 'react';

type Props = {
  formId?: number;
  phoneNumber?: boolean;
  buttonText?: string;
  buttonClassName?: string;
};

export const BrochureForm = ({ formId = 37, phoneNumber = true, buttonText = 'Get the Catalog', buttonClassName }: Props): ReactElement => (
  <form action="https://qccareerschool.activehosted.com/proc.php">
    <input type="hidden" name="u" value="616046046283C" />
    <input type="hidden" name="f" value={formId} />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <div className="mb-4">
      <label htmlFor="firstName" className="form-label">First Name</label>
      <input type="text" id="firstName" name="firstname" className="form-control" autoComplete="given-name" autoCapitalize="words" />
    </div>
    <div className="mb-4">
      <label htmlFor="lastName" className="form-label">Last Name</label>
      <input type="text" id="lastName" name="lastname" className="form-control" autoComplete="family-name" autoCapitalize="words" />
    </div>
    <div className="mb-4">
      <label htmlFor="emailAddress" className="form-label">Email Address <span className="text-secondary">*</span></label>
      <input type="email" id="emailAddress" name="email" className="form-control" autoComplete="email" required />
    </div>
    {phoneNumber && (
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="tel" id="phoneNumber" name="phone" className="form-control" autoComplete="tel" />
      </div>
    )}
    <input type="hidden" id="field[3][]" name="field[3][]" value="~|" />
    <div className="mb-4">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="emailOptIn" name="field[3][]" value="I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!" />
        <label className="form-check-label" htmlFor="emailOptIn">
          I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!
        </label>
      </div>
    </div>
    {phoneNumber && (
      <>
        <input type="hidden" id="field[103][]" name="field[103][]" value="~|" />
        <div className="mb-4">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="phoneOptIn" name="field[103][]" value="I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply." />
            <label className="form-check-label" htmlFor="phoneOptIn">
              I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply.
            </label>
          </div>
        </div>
      </>
    )}
    <button className={buttonClassName ?? 'btn btn-primary'} type="submit">{buttonText}</button>
  </form>
);
