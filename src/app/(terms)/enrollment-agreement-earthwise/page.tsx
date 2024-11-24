import { useEffect, useState } from 'react';

import { PageComponent } from '@/app/serverComponent';
import { SEO } from '@/components/SEO';

const AgreementPage: PageComponent = () => {
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
      <p>EarthWise franchise owners are eligible to take the &ldquo;EarthWise Accelerated Grooming Course&rdquo; owned by QC Quality of Course Inc. (&ldquo;the School&rdquo;). Individuals associated with the management of EarthWise franchise stores may also be eligible to take the &ldquo;EarthWise Accelerated Grooming Course&rdquo; according to the School's discretion. Alternative course options are available for other student groups. Please contact the School at 1-833-600-3751 for more information.</p>
      <h2>2. Course Deadline</h2>
      <p>Students have 12 weeks from the date of enrollment to complete the &ldquo;EarthWise Accelerated Grooming Course&rdquo;. QC is happy to offer an extension to students who need more time. Students will simply contact the School to arrange an extension before the 12-week deadline. The student will be responsible for paying a $100 USD administration fee to the School to extend the course by eight weeks.</p>
      <h2>3. Final Test &amp; Grading</h2>
      <p>There is no deadline for completing course lessons or submitting the final test provided the course is completed within the 12-week course deadline.</p>
      <p>A grade of B or higher is required to pass the final test and graduate from the course. Failing the final test will require students to redo the test until a passing grade has been achieved. There is currently no charge to redo the final test.</p>
      <p>Upon successfully completing the final test, students will automatically graduate from the &ldquo;EarthWise Accelerated Grooming Course&rdquo;. Students will be required to complete an application form to receive a certificate of completion.</p>
      <h2>4. Single User Access and Copyright</h2>
      <p>The &ldquo;EarthWise Accelerated Grooming Course&rdquo; is designed to be completed by one user only. Similarly, the course auditor role should belong to one user only. Login details and course materials are not to be viewed by or distributed to other users or entities.</p>
      <p>Copyright for the &ldquo;EarthWise Accelerated Grooming Course&rdquo; is wholly owned by 7904215 Canada Inc. No parts of this course may be reproduced without written permission from 7904215 Canada Inc.</p>
      <h2>5. Errors and Omissions Policies</h2>
      <p>QC Quality of Course Inc. has used its best efforts in collecting and preparing material for inclusion in this course. It does not assume and hereby disclaims any liability to any party for any loss or damages caused by errors or omissions in the course, whether such errors or omissions result from negligence, accident, or any other cause.</p>
      <h2>6. Refund Policy</h2>
      <p>The &ldquo;EarthWise Accelerated Grooming Course&rdquo; is non-refundable and non-transferable.</p>
      <h2>7. Code of Conduct</h2>
      <p>The staff at QC are dedicated to providing a top-quality experience to all students. When you communicate with the QC Team, you will be greeted in a courteous, friendly and respectful manner.</p>
      <p>Students who exhibit abusive, threatening or offensive behavior when communicating with any member of the QC team may be placed on academic probation or expelled from the School without a tuition refund.</p>
      <p>QC considers cyber-bullying to be a serious and dangerous situation for all. Any individual who is identifiable as a QC student who is found to exhibit threatening, harassing, abusive or offensive behavior online may be placed on academic probation or expelled from the School without a tuition refund.</p>
      <h3>Cheating &amp; Plagiarism</h3>
      <p>Students are expected to put in their best effort to complete their coursework. Cheating, plagiarism, tampering, or falsification of work in any way is not permitted.</p>
      <h2>8. Governing Law and Jurisdiction</h2>
      <p>This Agreement is governed by and is to be construed in accordance with the laws of the Province of Ontario and the laws of Canada applicable therein and treated in all respects as an Ontario contract. The parties to this Agreement hereby irrevocably and unconditionally attorn to the exclusive jurisdiction of the courts of the Province of Ontario and all courts competent to hear appeals therefrom.</p>
      <h2>9. Age of Majority</h2>
      <p>If you are under 18 or under the age of majority in your state/province, you will need a parental consent form in order to enroll with QC. Please contact the School for further details.</p>
      <h2>10. Contact Information</h2>
      <p>QC Quality of Course Inc.<br />Corporation Number: 208502-0<br />Business Number (BN): 105927339RC0001</p>
      <p>Email: {emailAddress}<br />Phone: 1-613-749-8248</p>
      <h3>Shipping</h3>
      <p>38 McArthur Ave<br />Ottawa ON&nbsp; K1L 6R2<br />Canada</p>
      <h3>Registered Office</h3>
      <p>2026 Delmar Crt<br />Ottawa ON&nbsp;  K1H 5R6<br />Canada</p>
    </>
  );
};

export default AgreementPage;
