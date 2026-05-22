import type { Metadata } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { BiBulb } from 'react-icons/bi';
import { CiWarning } from 'react-icons/ci';

import styles from './box.module.scss';
import HeroImage from './hero.jpg';
import LaptopImage from './person-on-laptop.jpg';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { BackgroundImage } from '@/components/backgroundImage';
import CheckCircleIcon from '@/components/icons/check-circle.svg';
import MapleLeafIcon from '@/components/icons/maple-leaf.svg';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Canadian Tax Credits',
  description: 'Canadian students can use tax credits to save over 50% of their course fees',
  alternates: { canonical: '/canadian-tax-credits' },
};

const CanadianTaxCreditsPage: PageComponent = async props => {
  const { countryCode } = await getServerData(props.searchParams);

  if (countryCode !== 'CA') {
    redirect('/');
  }

  return (
    <>
      <section>
        <BackgroundImage src={HeroImage} priority />
        <div className="container">
          <div className="row text-white">
            <div className="col-12 col-lg-9 col-xl-8">
              <Image src={MapleLeafIcon} alt="" height={60} />
              <h1 className="text-shadow mb-4 text-white">Canadian Student Tax Credits</h1>
              <h6 className="mb-4 text-white">Can You Save Money on QC Pet Studies Tuition?</h6>
              <p>If you're a Canadian resident studying with QC Pet Studies, you may be able to reduce the cost of your tuition through federal student tax credits. Because QC Pet Studies is recognized by Employment and Social Development Canada (ESDC) for tax purposes, eligible tuition may qualify for Canadian tuition tax credits.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg">
              <h3 className="mb-3">What Tax Credits Can Canadian Students Claim?</h3>
              <p className="mb-3 fw-bold">Eligible students may be able to claim two federal tax credits:</p>
              <ul className="fw-bold">
                <li>The Canada Training Credit (CTC)</li>
                <li>The Tuition Tax Credit</li>
              </ul>
            </div>
            <div className="col-12 col-lg">
              <div className={styles.wrapper}>
                <div className="row">
                  <div className="col-1 text-end">
                    <BiBulb className={styles.customOrange} />
                  </div>
                  <div className="col">
                    <small className={`${styles.customOrange} mb-3 fw-bold`}>TUITION REDUCTIONS</small>
                    <p>Depending on your income, province, and available Canada Training Credit Limit (CTCL), these credits can significantly reduce your tuition costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '3px solid #ccc' }} />
          <div className="row justify-content-center mt-5">
            <div className={`${styles.CTCbox} col-12 col-lg-5 mb-3 mb-lg-0 me-4`}>
              <h3 className="mb-0">1. Canada Training Credit (CTC)</h3>
              <div
                style={{
                  height: '4px',
                  width: '80px',
                  backgroundColor: '#0374ed',
                  borderRadius: '2px',
                }}
              />
              <p className="mt-2">The Canada Training Credit is a refundable tax credit for eligible working Canadians between the ages of 26 and 65.</p>
              <div className={styles.howItWorks}>
                <h6>How it Works</h6>
                <p>Eligible Canadians can accumulate $250 in Canada Training Credit room each year they file a tax return, up to a lifetime maximum of $5,000. Your available balance appears on your CRA Notice of Assessment as your Canada Training Credit Limit (CTCL).</p>
                <hr style={{ border: 'none', borderTop: '1px solid #ccc' }} />
                <small className="text-dark fw-bold d-block mb-2">YOU MAY BE ABLE TO CLAIM:</small>
                <p><Image src={CheckCircleIcon} alt="" width={20} className="text-success" /> Up to 50% of eligible tuition fees, or </p>
                <p><Image src={CheckCircleIcon} alt="" width={20} className="text-success" /> Your available CTCL balance (whichever is lower)</p>
              </div>
              <p>Learn more about the <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45350-canada-training-credit.html" target="_blank" rel="noreferrer">Canada Training Credit</a></p>
            </div>
            <div className={`${styles.CTCbox} col-12 col-lg-5 mb-3 mb-lg-0`}>
              <h3 className="mb-0">2. Tuition Tax Credit</h3>
              <div
                style={{
                  height: '4px',
                  width: '80px',
                  backgroundColor: '#0374ed',
                  borderRadius: '2px',
                }}
              />
              <p className="mt-2">Any eligible tuition not claimed through the Canada Training Credit may still qualify for the federal Tuition Tax Credit.</p>
              <div className={styles.howItWorks}>
                <h6>How it Works</h6>
                <p>The federal Tuition Tax Credit equals 15% of your eligible tuition amount.</p>
                <p>You may also qualify for additional provincial tuition tax credits depending on your province of residence.</p>
              </div>
              <p> Learn more about the <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts/eligible-tuition-fees.html" target="_blank" rel="noreferrer">Tuition Tax Credit</a></p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h3 className="text-center">Sample Calculation: How student tax credits can reduce tuition costs</h3>
          <p className="text-center">Here's an example of how these credits could work together.</p>
          <div className={styles.caseHeader}>
            <h3 className="text-white">Example student: Tania</h3>
            <p className="text-white">Tania enrolls in a QC course with tuition totaling $1,998</p>
          </div>
          <div className={styles.caseBody}>
            <div className="row">
              <div className="col-12 col-lg-8">
                <h4>Step 1: Canada Training Credit</h4>
                <p>Tania checks her CRA account and sees she has a Canada Training Credit Limit of $1,500.</p>
                <p>Because 50% of her tuition equals $999, she may be able to claim the full $999 as a refundable Canada Training Credit.</p>
                <h4>Step 2: Tuition Tax Credit</h4>
                <p>The remaining $999 in eligible tuition may qualify for the federal Tuition Tax Credit.</p>
                <p>At the federal rate of 15%, this could reduce her taxes by approximately $149.85.</p>
                <h4>Estimated Total Savings</h4>
                <div className={styles.howItWorks}>
                  <p className="d-flex justify-content-between">
                    <span>Original Tuition:</span>
                    <span className="text-dark fw-bold">$1,998.00</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span className="text-dark">Canada Training Credit:</span>
                    <span className="text-success fw-bold">-$999.00</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span className="text-dark">Federal Tuition Tax Credit:</span>
                    <span className="text-success fw-bold">-$149.85</span>
                  </p>
                  <hr style={{ border: 'none', borderTop: '3px solid #ccc' }} />
                  <div className="d-flex justify-content-between mb-0">
                    <h5 className="fw-bold">Estimated Net Cost:</h5>
                    <h5 className={styles.customBlue}>$849.15</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <Image src={LaptopImage} alt="" className="img-fluid rounded" />
              </div>
            </div>
          </div>
          <p className="mt-4"><i>This is only an example. Actual savings depend on your personal tax situation.</i></p>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="text-center mb-4">Frequently Asked Questions</h3>
          <AccordionFAQ heading="How do I get my T2202 tax receipt from QC Pet Studies?" className="mb-3">
            <p>QC Pet Studies provides eligible students with a T2202 Tuition and Enrolment Certificate for tax purposes.
              so you're learning strategies that actually work in the real world.</p>
            <p>Students can download their T2202 from the My Account section of the Online Student Center. QC also submits a copy to the Canada Revenue Agency (CRA).</p>
          </AccordionFAQ>
          <AccordionFAQ heading="Can online and part-time students claim tuition tax credits in Canada?" className="mb-3">
            <p>In many cases, yes.</p>
            <p>Eligible tuition paid to recognized Canadian educational institutions — including qualifying online and self-paced programs — may qualify for Canadian tuition tax credits.</p>
            <p>Eligibility depends on both the institution and the specific program.</p>
          </AccordionFAQ>
          <AccordionFAQ heading="Where do I claim tuition tax credits on my Canadian tax return?" className="mb-3">
            <p>Students typically use Schedule 11 to calculate eligible tuition amounts.</p>
            <ul>
              <li>Tuition Tax Credit: Line 32300</li>
              <li>Canada Training Credit: Line 45350
              </li>
            </ul>
          </AccordionFAQ>
          <div className={styles.disclaimerBox}>
            <h6 className={styles.customAmber}><CiWarning className={styles.customAmber} /> Important Disclaimer</h6>
            <p>Tax rules and eligibility requirements can change and may vary based on your income, province, and tax history.</p>
            <p>For official guidance regarding the <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45350-canada-training-credit.html" target="_blank" rel="noreferrer">Canadian Training Credit</a> and <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts/eligible-tuition-fees.html" target="_blank" rel="noreferrer">Tuition Tax Credit</a>, visit Canada Revenue Agency (CRA) Tuition Information or speak with a CPA or qualified tax professional. </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CanadianTaxCreditsPage;
