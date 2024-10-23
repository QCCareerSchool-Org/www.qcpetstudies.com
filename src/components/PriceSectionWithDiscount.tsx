import Big from 'big.js';
import { FC, ReactElement, ReactNode, useMemo } from 'react';
import { FaClock, FaLock, FaStar } from 'react-icons/fa';

import { useToggle } from '../hooks/useToggle';
import { formatPrice } from '../lib/formatPrice';
import { Price } from '../models/price';
import { Bar } from './Bar';
import { GuaranteeModal } from './GuaranteeModal';
import { PriceSection } from './PriceSection';

const iconSize = 24;

type Variant = 'dark' | 'light';

type Props = {
  courses: string[];
  price: Price;
  doubleGuarantee: boolean;
  variant?: Variant;
  id?: string;
  /** custom path for the shopping cart (include leading slash) */
  enrollPath?: string;
  message?: ReactNode;
};

export const PriceSectionWithDiscount: FC<Props> = ({ courses, price, doubleGuarantee, variant = 'dark', id = 'tuition', enrollPath = '/', message }) => {
  const [ popup, toggle ] = useToggle();

  const enrollLink = `https://enroll.qcpetstudies.com${enrollPath}?${courses.map(c => `c=${encodeURIComponent(c)}`).join('&')}`;

  const [ newFullDiscount, originalPartTotal ] = useMemo(() => {
    if (price.promoDiscount === 0) {
      return [ price.plans.full.total, price.plans.part.total ];
    }
    return [
      parseFloat(Big(price.plans.full.discount).plus(price.promoDiscount).toFixed(2)),
      parseFloat(Big(price.plans.part.total).plus(price.promoDiscount).toFixed(2)),
    ];
  }, [ price ]);

  if (price.promoDiscount === 0) {
    return <PriceSection courses={courses} price={price} doubleGuarantee={doubleGuarantee} variant={variant} id={id} enrollPath={enrollPath} message={message} />;
  }

  return (
    <>
      <div id={id} className="sectionAnchor" />
      <section className={variant === 'dark' ? 'bg-navy' : 'bg-light'}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
              <p className="lead">{message ?? 'Includes everything you need to get started!'}</p>
              <hr className="my-4" />
              <ul className="list-style-none">
                <li className="mb-3 d-flex align-items-center"><FaStar size={iconSize} className="text-primary me-2" />Certification upon graduation</li>
                <li className="mb-3 d-flex align-items-center"><FaLock size={iconSize} className="text-primary me-2" />21-day money-back guarantee</li>
                <li className="d-flex align-items-center"><FaClock size={iconSize} className="text-primary me-2" />Lifetime access</li>
              </ul>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mb-4 mb-md-0 d-flex">
              <div className="card shadow text-center bg-light flex-fill">
                <div className="card-body d-flex flex-column justify-content-around py-4 px-1">
                  <h4 className="text-muted mb-3">Installment Plan</h4>
                  <Bar variant="secondary" />
                  {price.courses.length > 0
                    ? (
                      <>
                        <p className="mb-3">Pay a Low Deposit of Only<br /><span className="h2 font-family-open-sans">{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</span></p>
                        <p className="mb-3"><span className="lead">Total cost: <span className="text-secondary text-decoration-line-through">{price.currency.symbol}{formatPrice(originalPartTotal)}</span> {price.currency.symbol}{formatPrice(price.plans.part.total)}</span><br /><small>{price.plans.part.installments} monthly payments of {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</small></p>
                        <p className="mb-0"><a href={enrollLink} className="btn btn-outline-dark">Enroll Now</a></p>
                      </>
                    )
                    : <Loader />
                  }
                </div>
              </div>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 d-flex">
              <div className="card shadow text-center bg-white flex-fill">
                <div className="card-body d-flex flex-column justify-content-around py-4 px-1">
                  <h4 className="text-muted mb-3">Pay in Full</h4>
                  <Bar variant="secondary" />
                  {price.courses.length > 0
                    ? (
                      <>
                        <p className="mb-3">One-Time Payment<br /><span className="h2 font-family-open-sans">{price.currency.symbol}{formatPrice(price.plans.full.total)}</span></p>
                        {price.plans.full.discount > 0
                          ? <p className="mb-3"><span className="lead">SAVE <span className="text-secondary text-decoration-line-through">{price.currency.symbol}{formatPrice(price.plans.full.discount)}</span> {price.currency.symbol}{formatPrice(newFullDiscount)}</span><br /><small>When you pay in full</small></p>
                          : <p className="mb-3"><span className="lead">SAVE {price.currency.symbol}{formatPrice(price.promoDiscount)}</span><br /><small>&nbsp;</small></p>
                        }
                        <p className="mb-0"><a href={enrollLink} className="btn btn-secondary">Enroll Now</a></p>
                      </>
                    )
                    : <Loader />
                  }
                </div>
              </div>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-12 offset-md-0">
              <p className="mt-3 mb-0 text-end small fst-italic">Prices are listed in {price.currency.name}.</p>
            </div>
          </div>
        </div>
        <GuaranteeModal show={popup} doubleGuarantee={doubleGuarantee} toggle={toggle} />
      </section>
    </>
  );
};

const Loader = (): ReactElement => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: 186 }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
