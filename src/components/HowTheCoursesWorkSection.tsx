import Image from 'next/image';
import { ReactElement } from 'react';
import { BsCalendarCheck, BsCheckCircle, BsFillCloudArrowDownFill } from 'react-icons/bs';

import { useScreenWidth } from '../hooks/useScreenWidth';
import MagnifyingGLassImage from '../images/icon-magnifying-glass-2.svg';

type Props = {
  className?: string;
};

export const HowTheCoursesWorkSection = ({ className }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <section className={className}>
      <div className="container text-center">
        <h2 className="mb-4">How the <strong>Courses</strong> Work</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <BsCalendarCheck className="h2 text-secondary mb-4" />
            <h3>Enroll{lgOrGreater ? <br /> : ' '}Online</h3>
            <p className="mb-0">Get online access to your course right away. Receive your books and grooming tools in sevent to ten days.</p>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <BsFillCloudArrowDownFill className="h2 text-secondary mb-4" />
            <h3>Submit Your{lgOrGreater ? <br /> : ' '}<strong>Assignments</strong></h3>
            <p className="mb-0">Use your computer, phone, or tablet to upload your work to QC's Online Student Center.</p>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4 mb-md-0">
            <div className="mb-3">
              <Image
                src={MagnifyingGLassImage}
                alt="Magnifying Glass Icon"
                height="50"
                width="50"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <h3>Review Your{lgOrGreater ? <br /> : ' '}<strong>Feedback</strong></h3>
            <p className="mb-0">Get audio feedback from your tutor, a professional dog groomer, after each unit you submit.</p>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-3">
            <BsCheckCircle className="h2 text-secondary mb-4" />
            <h3>Receive Your{lgOrGreater ? <br /> : ' '}<strong>Certificate</strong></h3>
            <p className="mb-0">Get your certificate of completion and begin your career as a professional dog groomer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
