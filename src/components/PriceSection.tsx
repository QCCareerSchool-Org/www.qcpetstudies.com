import { ReactElement } from 'react';

import { useLocation } from '../hooks/useLocation';
import { usePrice } from '../hooks/usePrice';
import { useToggle } from '../hooks/useToggle';
import { formatPrice } from '../lib/formatPrice';
import { GuaranteeModal } from './GuaranteeModal';

type Props = {
  courses: string[];
  doubleGuarantee: boolean;
};

export const PriceSection = ({ courses, doubleGuarantee }: Props): ReactElement => {
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);
  const enrollLink = `https://enroll.qcpetstudies.com/?${courses.map(c => `c[]=${encodeURIComponent(c)}`).join('&')}`;

  const [ popup, toggle ] = useToggle();

  if (price === undefined || price.courses.length === 0) {
    return <></>;
  }

  return (
    <section className="bg-light">
      <GuaranteeModal show={popup} doubleGuarantee={doubleGuarantee} toggle={toggle} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4 text-center text-xl-left mb-4 mb-xl-0">
            <h2 className="text-dark">Tuition &amp;<br />Payment Plans</h2>
            <p className="text-dark">Includes everything you need to get certified!<br />All prices are in {price?.currency.name}</p>
            <button type="button" className="btn btn-dark" onClick={toggle}>21-Day Money-Back Guarantee!</button>
          </div>
          <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-xl-4 mb-4 mb-xl-0">
            <div className="card shadow text-center">
              <div className="card-body">
                <h4>Pay in Full</h4>
                <p className="small text-muted mb-0"><del>{price?.currency.symbol}{formatPrice(price?.discountedCost)}</del></p>
                <p className="card-text price text-dark h3"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.full.total)}</p>
                <p className="card-text"><a href={enrollLink} className="btn btn-secondary">ENROLL NOW</a></p>
                <p className="card-text"><strong><mark>SAVE {price?.currency.symbol}{formatPrice(price?.plans.full.discount)}</mark></strong><br />when you pay in full</p>
              </div>
            </div>
          </div>
          <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-xl-4">
            <div className="card shadow text-center">
              <div className="card-body">
                <h4>Installment Plan</h4>
                <p className="small text-muted mb-0">&nbsp;</p>
                <p className="card-text price text-dark h3"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.part.installmentSize)} <small className="text-muted">/ mo</small></p>
                <p className="card-text"><a href={enrollLink} className="btn btn-secondary">ENROLL NOW</a></p>
                <p className="card-text"><strong>Deposit of {price?.currency.symbol}{formatPrice(price?.plans.part.deposit)}</strong><br />then {price?.plans.part.installments} monthly payments of {price?.currency.symbol}{formatPrice(price?.plans.part.installmentSize)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
