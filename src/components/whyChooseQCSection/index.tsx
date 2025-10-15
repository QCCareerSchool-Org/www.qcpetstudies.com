import type { FC } from 'react';
import { FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaLaptopHouse, FaRegCalendarCheck } from 'react-icons/fa';

type Props = {
  className?: string;
};

export const WhyChooseQCSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
          <h2 className="mb-4">Why Choose <strong>QC</strong></h2>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaRegCalendarCheck className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>Proven Track Record</h3>
          <p>Enroll in a school with over 40 years of experience providing top-quality education, an A+ rating from the Better Business Bureau, and thousands of graduates working in careers they love!</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaLaptopHouse className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>Courses Designed for You</h3>
          <p>QC's online programs are designed to fit your life. There are no assignment deadlines or rigid exam schedules. You'll complete your coursework when it works best for you, and get support from your grooming mentor and our student advisors every step of the way.</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaChalkboardTeacher className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>Expert Mentors to Guide You</h3>
          <p>Your grooming mentor will follow your progress through your online course, grade your assignments, and provide you with individualized feedback to help you grow your skills. QC's mentors are career professionals excelling in the pet industry, and they're focused on your success!</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaBriefcase className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>Business Training You Can Use</h3>
          <p>Graduate with professional designations that showcase your expertise and set you apart in the booming pet care industry. These credentials prove your skills to clients and employers, opening the door to exciting career opportunities, including launching your own successful pet-care business.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaHandHoldingUsd className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>Industry-Recognized Certifications</h3>
          <p>When you graduate from QC your certificate is yours forever, and you&apos;ll have continued access to your student center at no additional cost. You'll never be asked to pay subscription fees, membership fees, or any other fees to keep your certification current.</p>
        </div>
      </div>
    </div>
  </section>
);
