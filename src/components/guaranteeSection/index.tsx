import Link from 'next/link';
import type { FC } from 'react';

import TwentyOneDayGuaranteeIcon from './21-day-guarantee-outlined.svg';
import DoubleGuaranteeIcon from './double-guarantee.svg';

type Props = {
  className?: string;
  double?: boolean;
  id?: string;
};

export const GuaranteeSection: FC<Props> = ({ className, double = false, id = 'guarantee' }) => (
  <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 justify-content-center">
            <div className="mb-2">
              {double
                ? <DoubleGuaranteeIcon alt="qc guarantee" width="140" height="140" style={{ maxWidth: '100%', height: 'auto' }} />
                : <TwentyOneDayGuaranteeIcon alt="21 Day Money Back Guarantee" width="140" height="140" style={{ maxWidth: '100%', height: 'auto' }} />
              }
            </div>
            <h2>QC Pet Studies' <strong>Guarantee{double ? 's' : ''}</strong></h2>
            <p className="mb-4">QC means Quality of Course, and we stand behind that promise. That's why QC Pet Studies offers a <strong>money-back guarantee</strong>.</p>
          </div>
          <div className="col-12 col-lg-5 mb-4 d-flex">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">The 21-Day Money-Back Guarantee</h3>
                <p className="card-text">Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the course is right for you. If you decide it's not a good fit, simply contact QC and request a refund. It's that easy!</p>
              </div>
            </div>
          </div>
          {double && (
            <div className="col-12 col-lg-5 mb-4 d-flex">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">The 1-Year Money-Back Guarantee</h3>
                  <p className="card-text">Your online course will pay for itself within one year. That's a promise. If, after one year of receiving your certificate of completion, you haven't earned the equivalent of your tuition fees in your professional salary, your course tuition will be refunded in full. All you have to do is provide proof that you've made a reasonable effort to find work as a dog groomer.</p>
                  <p className="card-text"><strong>Note:</strong> This guarantee is only valid for graduates of the Dog Grooming Course.</p>
                </div>
              </div>
            </div>
          )}
          <div className="col-12 col-lg-10">
            <p className="lead">Questions about the guarantee{double ? 's' : ''} ? <Link href="/contact-us">Contact Us</Link></p>
          </div>
        </div>
      </div>
    </section>
  </>
);
