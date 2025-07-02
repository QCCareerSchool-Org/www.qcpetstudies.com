import type { FC } from 'react';
import { FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaLaptopHouse, FaRegCalendarCheck } from 'react-icons/fa';

export const WhyChooseQCSection: FC = () => (
  <section>
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
          <h3>A Fully Online Learning Experience</h3>
          <p>QC offers 100% online learning! There are no assignment deadlines or inconvenient classroom sessions. You work at your own pace with one-on-one guidance and support from your personal tutor and teaching assistant.</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaChalkboardTeacher className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>Expert Tutors to Guide You</h3>
          <p>Your personal tutor will follow your progress through your online course, grade your assignments, and provide you with individualized feedback after you've completed each unit. QC's tutors are career professionals excelling in the pet industry, and they're focused on your success!</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaBriefcase className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>Business Training You Can Use</h3>
          <p>Each course comes complete with optional business training where you&apos;ll work with your tutor to come up with a business name, create a marketing strategy, start building your website, and get access to templates that will help get your career off to a great start from day one!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaHandHoldingUsd className="h1 text-secondary mb-3" />
        </div>
        <div className="col-9">
          <h3>No Additional or Hidden Fees</h3>
          <p>When you graduate from QC your certificate is yours forever, and you&apos;ll have continued access to your student center at no additional cost. You'll never be asked to pay subscription fees, membership fees, or any other fees to keep your certification current.</p>
        </div>
      </div>
    </div>
  </section>
);
