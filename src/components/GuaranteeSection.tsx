import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import Guarantee21DayImage from '../images/21-day-guarantee-outlined.svg';
import QcGuarantee from '../images/double-guarantee.svg';

type Props = {
  className?: string;
  double?: boolean;
  id?: string;
};

export const GuaranteeSection = ({ className, double = false, id = 'guarantee' }: Props): ReactElement => (
  <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 justify-content-center">
            <div className="mb-2">
              {double
                ? (
                  <Image
                    src={QcGuarantee}
                    alt="qc guarantee"
                    width="140"
                    height="140"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                )
                : (
                  <Image
                    src={Guarantee21DayImage}
                    alt="21 Day Money Back Guarantee"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                )
              }
            </div>
            <h2>QC Pet Studies' <strong>Guarantee{double ? 's' : ''}</strong></h2>
            <p className="mb-4">QC means Quality of Course, and we stand behind that promise. That's why QC Pet Studies offers a <strong>money-back guarantee</strong>.</p>
          </div>
          <div className="col-12 col-lg-5 mb-4 d-flex">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">The 21-Day Money-Back Guarantee</h3>
                <p className="card-text">Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you. If you decide it s not a good fit, simply contact QC and request a refund. It's that easy!</p>
                <p className="card-text"><strong>Note:</strong> For sanitary reasons, the clippers and attachment combs provided with the dog grooming course cannot be refunded (value $200 US)</p>
              </div>
            </div>
          </div>
          {double && (
            <div className="col-12 col-lg-5 mb-4 d-flex">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">The 1-Year Money-Back Guarantee</h3>
                  <p className="card-text">Your online course will pay for itself within one year. That's a promise. If, after one year of receiving your certificate of completion, you haven't earned the equivalent of your tuition fees in your professional salary, your course tuition will be refunded in full. All you have to do is provide proof that you've made a reasonable effort to find work as a dog groomer or dog trainer.</p>
                  <p className="card-text"><strong>Note:</strong> This guarantee is only valid for graduates of the Dog Grooming Course.</p>
                </div>
              </div>
            </div>
          )}
          <div className="col-12 col-lg-10">
            <p className="lead">Questions about the guarantee{double ? 's' : ''} ? <Link href="/contact-us" className="link-primary">Contact Us</Link></p>
          </div>
        </div>
      </div>
    </section>
  </>
);
