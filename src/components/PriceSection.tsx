import { ReactElement } from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaInfinity } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

import { useLocation } from '../hooks/useLocation';
import { usePrice } from '../hooks/usePrice';
import { useToggle } from '../hooks/useToggle';
import { formatPrice } from '../lib/formatPrice';
import { Bar } from './Bar';
import { GuaranteeModal } from './GuaranteeModal';

type Variant = 'dark' | 'light';

type Props = {
  courses: string[];
  doubleGuarantee: boolean;
  variant?: Variant;
};

const invalid = (courses: string[], countryCode?: string, provinceCode?: string | null): boolean => {
  return countryCode === 'CA' && provinceCode === 'ON' && (courses.includes('dg') || courses.includes('fa'));
};

export const PriceSection = ({ courses, doubleGuarantee, variant = 'dark' }: Props): ReactElement => {
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);
  const [ popup, toggle ] = useToggle();

  const enrollLink = `https://enroll.qcpetstudies.com/?${courses.map(c => `c[]=${encodeURIComponent(c)}`).join('&')}`;

  console.log(location, courses);

  if (invalid(courses, location?.countryCode, location?.provinceCode)) {
    return (
      <section id="tuitionSection" className={variant === 'dark' ? 'bg-navy' : 'bg-light'}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
              <p>Unfortunately this course is not available in your location.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tuitionSection" className={variant === 'dark' ? 'bg-navy' : 'bg-light'}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
            <p className="lead">Includes everything you need to get certified!</p>
            <hr className="my-5" />
            <ul className="list-style-none">
              <li className="mb-3"><IoMdSend className="text-primary me-2" />Free shipping &amp; handling</li>
              <li className="mb-3"><BsShieldFillCheck className="text-primary me-2" />21-day money-back guarantee</li>
              <li><FaInfinity className="text-primary me-2" />Lifetime access</li>
            </ul>
          </div>
          {price && price.courses.length > 0 && (
            <>
              <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mb-4 mb-md-0 d-flex">
                <div className="card shadow text-center bg-light flex-fill">
                  <div className="card-body d-flex flex-column justify-content-around py-4">
                    <h4 className="text-muted mb-3">Installment Plan</h4>
                    <Bar variant="secondary" />
                    <p className="mb-3">Get Started for Only<br /><span className="h2 font-family-open-sans">{price?.currency.symbol}{formatPrice(price?.plans.part.deposit)}</span></p>
                    <p className="mb-3"><span className="lead">Deposit of {price?.currency.symbol}{formatPrice(price?.plans.part.deposit)}</span><br /><small>{price?.plans.part.installments} monthly payments of {price?.currency.symbol}{formatPrice(price?.plans.part.installmentSize)}</small></p>
                    <p className="mb-0"><a href={enrollLink} className="btn btn-outline-dark">Enroll Now</a></p>
                  </div>
                </div>
              </div>
              <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 d-flex">
                <div className="card shadow text-center bg-white flex-fill">
                  <div className="card-body d-flex flex-column justify-content-around py-4">
                    <h4 className="text-muted mb-3">Pay in Full</h4>
                    <Bar variant="secondary" />
                    <p className="mb-3">One-Time Payment<br /><span className="h2 font-family-open-sans">{price?.currency.symbol}{formatPrice(price?.plans.full.total)}</span></p>
                    <p className="mb-3"><span className="lead">SAVE {price?.currency.symbol}{formatPrice(price?.plans.full.discount)}</span><br /><small>When you pay in full</small></p>
                    <p className="mb-0"><a href={enrollLink} className="btn btn-secondary">Enroll Now</a></p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <GuaranteeModal show={popup} doubleGuarantee={doubleGuarantee} toggle={toggle} />
    </section>
  );
};
