import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import QcGuarantee from '../images/double-guarantee.svg';

type Props = {
  className?: string;
  double?: boolean;
};

export const GuaranteeSection = ({ className, double = false }: Props): ReactElement => (
  <section id="guarantee" className={className}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="mb-2">
            <Image src={QcGuarantee} alt="qc guarantee" width="140" height="140" />
          </div>
          <h2>QC Pet Studies&apos; <strong>Guarantees</strong></h2>
          <p className="mb-4">QC means Quality of Course, and we stand behind that promise. That&apos;s why QC Pet Studies offers a money-back <strong>double guarantee</strong>.</p>
        </div>
        <div className="col-12 col-lg-5 mb-4 d-flex">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">The 21-Day Money-Back Guarantee</h3>
              <p className="card-text">Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you. If you decide it s not a good fit, simply contact QC to arrange a return of your course materials for a refund. It&apos;s that easy!</p>
              <p className="card-text"><strong>Note:</strong> For sanitary reasons, the clippers and attachment combs provided with the dog grooming course cannot be refunded (value $200 US)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 mb-4 d-flex">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">The 1-Year Money-Back Guarantee</h3>
              <p className="card-text">Your online course will pay for itself within two years. That&apos;s a promise. If after two years of receiving your certificate of completion, you haven&apos;t earned the equivalent of your tuition fees in your professional salary, your course tuition will be refunded in full. All you have to do is provide proof that you&apos;ve made a reasonable effort to find work as a dog groomer or dog trainer.</p>
              <p className="card-text"><strong>Note:</strong> This guarantee is only valid for graduates of the online dog grooming or online dog training courses.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-10">
          <p className="lead">Questions about the guarantees? <Link href="/contact-us"><a className="link-primary">Contact Us</a></Link></p>
        </div>
      </div>
    </div>
  </section>
);