import { useEffect, useState } from 'react';

import { TextLayout } from '../components/layouts/TextLayout';
import { SEO } from '../components/SEO';
import type { NextPageWithLayout } from './_app.page';

const AgreementGBPage: NextPageWithLayout = () => {
  const [ emailAddress, setEmailAddress ] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    setEmailAddress('info' + '@' + 'qcpetstudies.com');
  }, []);

  return (
    <>
      <SEO
        title="Enrollment Agreement"
        description="The agreement for enrolling with QC Pet Studies"
        canonical="/enrollment-agreement-gb"
      />

      <h1>Enrollment Agreement</h1>

      <h2>1. Shipping Policy</h2>
      <p>QC Pet Studies' course lessons are fully online.</p>
      <p>If you are an eligible student enrolled in QC's Dog Grooming course, your Wahl-ARCO 5-in-1 cordless clippers, matching comb set, set of 3 grooming scissors, and the grooming starter kit will be automatically sent to you after you have submitted Unit B of the course in the Online Student Center. Students who are not in good standing and students who live in countries that QC does not ship to due to international shipping restrictions are not eligible to receive these supplementary dog grooming supplies.</p>

      <h2>2. Money-Back Guarantee</h2>
      <p>You have 21 days from the date of enrollment to examine the course. If you are not entirely satisfied or choose not to complete the course, contact the School within this 21-day period, either by phone or email.</p>
      <p>If you received any supplementary physical items with your course, you must return them to receive a refund:</p>
      <ul>
        <li>QC will provide you with shipping instructions and ask you to return the physical course items, postage paid and with a tracking number. QC is not responsible for lost return shipments that do not have a valid tracking number.</li>
        <li>Your course fees will be refunded in full once QC has received your returned items. Note that return shipping fees will not be covered or refunded by QC.</li>
        <li>Returned items must be unused and in their original condition. A full refund cannot be issued if any items have been used or are not in their original condition.</li>
      </ul>
      <p>A full refund cannot be granted if you have already submitted course work to your tutor for grading. In this case, a partial tuition refund may be offered instead.</p>
      <h3>Non-Refundable Materials</h3>
      <p>If you are enrolled in Dog Grooming, please note that the clippers and attachment combs that are provided as part of the Professional Dog Grooming Course cannot be refunded if the box has been opened (seal broken).  These have a value of $200 (US). If you wish to withdraw from the course but have opened these materials, you will be required to pay the cost of those materials (and keep them), while returning all other unused items.</p>
      <h3>1-Year Money-Back Guarantee</h3>
      <p>QC Pet Studies offers a 1-year money-back guarantee on all of our courses. If, after graduation, you do not earn the equivalent of your course tuition in professional fees, you will be eligible for a full refund of your tuition. In order to qualify for this refund, you must demonstrate that you have made a reasonable effort to obtain clients.</p>
      <p>Graduates who request a refund under the 1-year guarantee must contact the School <strong>at least 13 months and no later than 18 months after graduation</strong> and provide proof that they</p>
      <ul>
        <li>Have completed the optional business training unit in full before graduation;</li>
        <li>Have a working website and social media presence that are at least 10 months old and that follow best practices outlined in the course's business unit; and</li>
        <li>Provide examples of how their services were advertised over the course of the past 10 months (social media ads, direct mailers, proof of one-on-one outreach, etc.)</li>
      </ul>

      <h2>3. Tuition Payments &amp; Installment Plans</h2>
      <p>If you choose to pay your course fees in monthly installments, you are obligated and agree to continue to make your scheduled payments until the entire tuition amount has been paid.</p>

      <h3>Missed Payments</h3>
      <p>Tuition installment payments are processed according to a fixed monthly schedule. It is your responsibility to ensure the credit card provided has sufficient funds to cover your monthly tuition payment.</p>
      <ul>
        <li>If you know in advance that you will miss a tuition payment, contact the School as quickly as possible and a student advisor will work with you to change your scheduled payment date(s).</li>
        <li>You are allowed a maximum of three months of tuition deferrals within your payment schedule. A missed monthly payment is considered a tuition deferral.</li>
        <li>Should you miss a scheduled tuition payment, you are required to communicate with the School and arrange a replacement payment as quickly as possible. Your student center account will be placed &ldquo;on hold&rdquo; until your payments are up to date.</li>
      </ul>

      <h2>4. Course Deadlines</h2>
      <p>Once enrolled, you have two years to complete your courses. However, QC is happy to offer an extension to students who need more time. Simply contact the School to arrange an extension, before your two-year deadline. A nominal administration fee will be charged to your account.</p>

      <h2>5. Assignment Deadlines &amp; Grading</h2>
      <p>There are no deadlines for submitting any assignment or course unit to QC.</p>
      <p>Once a full unit has been submitted for grading, you will receive a grade and audio feedback from your tutor within 10 business days. Should your tutor take longer than 10 business days, contact the School for assistance.</p>
      <p>Units are awarded a letter grade ranging from A+ (exceptional) to F (fail). A grade of C- or above is required to pass each unit.</p>
      <p>Failing a unit (grade below C-) will require you to re-submit that unit. An administrative fee will be charged to your account when re-submitting a unit for grading.</p>
      <p>At any point if you are unsatisfied with a unit grade, you can request to redo your assignments and re-submit that unit. Contact to school to make these arrangements. An administrative fee will apply.</p>
      <h3>Communication with Your Tutor</h3>
      <p>Student advisors will be your first point of contact for all communications with the School, including questions about your course and assignments or questions specifically for your tutor. Your student advisor may answer your questions directly, or may forward your request to your tutor and relay the answer back to you.</p>

      <h2>6. Withdrawal Policy</h2>
      <p>Withdrawals after the 21-day guarantee period are evaluated on a case-by-case basis. If you wish to withdraw from your course(s) after the 21-day guarantee period, a student advisor will evaluate your student account to determine whether a withdrawal fee will apply.</p>
      <ul>
        <li>It is your responsibility to contact the School in writing via email if you wish to withdraw from your course(s).</li>
        <li>Automated tuition payments will continue to be processed, and you are responsible for meeting your tuition payment obligations until you have reached a withdrawal agreement with the School.</li>
        <li>Withdrawal fees are dependent on tuition fees paid to date, the course materials sent to you, and the amount of tutorial used. If you have completed significant course work, you may be charged additional fees before a withdrawal from the course is processed.</li>
        <li>QC reserves the right to refuse any withdrawal request after the 21-day guarantee period.</li>
      </ul>

      <h2>7. Code of Conduct</h2>
      <p>QC's tutors and support staff are dedicated to providing a top-quality experience to all students. When you communicate with the QC Team, you will be greeted in a courteous, friendly and respectful manner.</p>
      <p>Students who exhibit abusive, threatening or offensive behavior when communicating with any member of the QC team may be placed on academic probation or expelled from the School without a tuition refund.</p>
      <p>QC considers cyber-bullying to be a serious and dangerous situation for all. Any individual who is identifiable as a QC student who is found to exhibit threatening, harassing, abusive or offensive behavior online may be placed on academic probation or expelled from the School without a tuition refund.</p>
      <h3>Cheating &amp; Plagiarism</h3>
      <p>As a student of QC, you are expected to put in your best effort to complete your course work and assignments. Cheating, plagiarism, tampering, or falsification of your work in any way is not permitted.</p>
      <p>If your tutor suspects your work to be the result of any form of cheating, your account may be immediately placed under academic probation while a review of your work is conducted. If your work is determined to be the result of cheating, you will receive a failing grade for that unit and will be required to pay a re-submission fee to submit the unit. Additional instances of cheating will result in immediate expulsion from the School without a tuition refund.</p>

      <h2>8. Governing Law and Jurisdiction</h2>
      <p>This Agreement is governed by and is to be construed in accordance with the laws of England and Wales. The parties to this Agreement hereby irrevocably and unconditionally attorn to the exclusive jurisdiction of the courts of England Wales and all courts competent to hear appeals therefrom.</p>

      <h2>9. Age of Majority</h2>
      <p>If you are under 18 or under the age of majority in your state/province, you will need a parental consent form in order to enroll with QC. Please contact the School for further details.</p>

      <h2>10. Contact Information</h2>
      <p>QC Quality of Course Ltd.<br />Company Registration Number: 6766876</p>
      <p>Email: {emailAddress}<br />Phone: 0800&nbsp;066&nbsp;4734</p>
      <h3>Shipping</h3>
      <p>38 McArthur Ave<br />Ottawa ON&nbsp; K1L 6R2<br />Canada</p>
      <h3>Registered Office</h3>
      <p>R+<br />2 Blagrave Street<br />READING<br />RG1 1AZ<br />npm United Kingdom</p>
    </>
  );
};

AgreementGBPage.getLayout = page => <TextLayout>{page}</TextLayout>;

export default AgreementGBPage;