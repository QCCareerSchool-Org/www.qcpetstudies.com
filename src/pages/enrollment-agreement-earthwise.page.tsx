import { useEffect, useState } from 'react';

import { TextLayout } from '../components/layouts/TextLayout';
import { SEO } from '../components/SEO';
import type { NextPageWithLayout } from './_app.page';

const AgreementPage: NextPageWithLayout = () => {
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
        canonical="/enrollment-agreement"
      />

      <h1>Enrollment Agreement</h1>
      <h2>1. Admission Eligibility</h2>
      <p>EarthWise franchise owners are eligible to take the &quot;EarthWise Accelerated Grooming Course&quot;. Alternative course options are available for other student groups. Please contact the school at 1-833-600-3751 for more information.</p>
      <h2>2. Course Deadline</h2>
      <p>Students have 12 weeks from the date of enrollment to complete the &quot;EarthWise Accelerated Grooming Course&quot;. QC is happy to offer an extension to students who need more time. Simply contact the School to arrange an extension before the 12-week deadline. A $50 USD administration fee will be charged.</p>
      <h2>3. Single User Access</h2>
      <p>The &quot;EarthWise Accelerated Grooming Course&quot; is designed to be completed by one user only. Login details and course materials are not to be viewed by or distributed to other users or entities.</p>
      <h2>4. Refund Policy</h2>
      <p>The EarthWise Accelerated Grooming Course is non-refundable and non-transferable.</p>
      <h2>5. Code of Conduct</h2>
      <p>The staff at QC are dedicated to providing a top-quality experience to all students. When you communicate with the QC Team, you will be greeted in a courteous, friendly and respectful manner.</p>
      <p>Students who exhibit abusive, threatening or offensive behavior when communicating with any member of the QC team may be placed on academic probation or expelled from the School without a tuition refund.</p>
      <p>QC considers cyber-bullying to be a serious and dangerous situation for all. Any individual who is identifiable as a QC student who is found to exhibit threatening, harassing, abusive or offensive behavior online may be placed on academic probation or expelled from the School without a tuition refund.</p>
      <h2>6. Cheating &amp; Plagiarism</h2>
      <p>As a student of QC, you are expected to put in your best effort to complete your course work. Cheating, plagiarism, tampering, or falsification of your work in any way is not permitted.</p>
      <h2>7. Governing Law and Jurisdiction</h2>
      <p>This Agreement is governed by and is to be construed in accordance with the laws of the Province of Ontario and the laws of Canada applicable therein and treated in all respects as an Ontario contract. The parties to this Agreement hereby irrevocably and unconditionally attorn to the exclusive jurisdiction of the courts of the Province of Ontario and all courts competent to hear appeals therefrom.</p>
      <h2>8. Age of Majority</h2>
      <p>If you are under 18 or under the age of majority in your state/province, you will need a parental consent form in order to enroll with QC. Please contact the School for further details.</p>
      <h2>9. Contact Information</h2>
      <p>QC Quality of Course Inc.<br />Corporation Number: 208502-0<br />Business Number (BN): 105927339RC0001</p>
      <p>Email: {emailAddress}<br />Phone: 1-613-749-8248</p>
      <h3>Shipping</h3>
      <p>38 McArthur Ave<br />Ottawa ON&nbsp; K1L 6R2<br />Canada</p>
      <h3>Registered Office</h3>
      <p>2026 Delmar Crt<br />Ottawa ON&nbsp;  K1H 5R6<br />Canada</p>
    </>
  );
};

AgreementPage.getLayout = page => <TextLayout>{page}</TextLayout>;

export default AgreementPage;
