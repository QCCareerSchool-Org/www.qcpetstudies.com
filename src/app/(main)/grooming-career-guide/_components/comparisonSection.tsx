import Link from 'next/link';
import type { FC } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

import { PetStudiesEducationComparisonTable } from '@/components/comparisonTable/petStudiesEducation';
import { SectionHeader } from '@/components/sectionHeader';

export const ComparisonSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <SectionHeader
        title="Choosing Your Path: Pet Studies School Comparison Chart"
        text="Your journey to becoming a professional groomer is unique. Whether you want to run your own grooming business or secure a position in a salon, your training should fit your life, your timeline and your goals."
      />
      <PetStudiesEducationComparisonTable />
      <div className="card shadow mt-5">
        <div className="card-body">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg">
              <h3 className="h4 mb-2">Have Questions? Speak with a Career Advisor.</h3>
              <p className="mb-0">Our dedicated team is here to provide the guidance you need to launch your firm. Your professional success is our priority—reach out today.</p>
            </div>
            <div className="col-12 col-lg-auto d-flex flex-column flex-sm-row gap-3">
              <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
              <Link href="/certification-courses/dog-grooming" className="btn btn-primary d-inline-flex align-items-center justify-content-center gap-2">View Grooming Course <BiRightArrowAlt aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
