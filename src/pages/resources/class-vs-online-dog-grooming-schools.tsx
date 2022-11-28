import { NextPage } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';
import { FaGraduationCap, FaLaptop, FaUniversity } from 'react-icons/fa';

import { SEO } from '../../components/SEO';
import FirstSectionBackground from '../../images/backgrounds/inclass_vs_online_bg.jpg';

const ClassVsOnlineLearning: NextPage = () => {

  return <>
    <SEO
      title="In-Class vs. Online Dog Grooming Schools"
      description="In-Class vs. Online Dog Grooming Schools"
      canonical="/resources/class-vs-online-dog-grooming-schools"
    />

    <section id="top" className="bg-dark">
      <Image
        src={FirstSectionBackground}
        placeholder="blur"
        alt="happy Yorkie"
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <FaGraduationCap className="h1 text-primary mb-3" />
            <h1>In-Class vs. Online Dog Grooming Schools</h1>
            <p>Learning dog grooming online can be a difficult concept to wrap your head around. After all, dog grooming is a very &quot;hands-on&quot; profession. Surely it needs to be taught in-class by an instructor, no?</p>
            <p>Definitely not. With the advancement of online learning in recent years, online dog grooming schools can be just as effective (if not more!) than in-class training. No one can dispute that online learning is far more convenient than in class. The key is to find an online dog grooming school that allows you the same (if not more!) hands-on practice that a classroom curriculum would.</p>
            <p className="lead mb-0">Below is a comparison of a typical in-class dog grooming school vs. an online grooming school like QC Pet Studies.</p>
          </div>
        </div>
      </div>
    </section>

    <ComparisonSection
      title="Admissions"
      inClass="Enroll by a specific date for the next year's classes"
      online={<><strong>Enroll at any time.</strong> No admission dates or class schedules.</>}
    />

    <ComparisonSection
      title="Location"
      inClass="Specific campuses that are equipped with dog grooming facilities."
      online={<><strong>Study from anywhere;</strong> groom dogs at home or go to self-serve grooming areas.</>}
      className="bg-light"
    />

    <ComparisonSection
      title="Instruction"
      inClass="Teacher gives in-person lectures on a strict schedule, and students read/study course books as homework."
      online={<>Students watch instructors on video (DVD or online) and read course books <strong>whenever it's convenient</strong>.</>}
    />

    <ComparisonSection
      title="Practice"
      inClass="Students work on dogs in a classroom environment with other students."
      online={<>Student <strong>practices from home</strong> as often as he/she feels appropriate to master skills.</>}
      className="bg-light"
    />

    <ComparisonSection
      title="Finding Dogs"
      inClass="Students are provided with a &quot;class dog&quot; or are asked to find/bring their own dog to class."
      online={<>Student are asked to find <strong>their own dogs</strong> to groom.</>}
    />

    <ComparisonSection
      title="Theory Assignments"
      inClass="Students complete written assignments with strict deadlines. Tutor marks assignments &amp; occasionally discusses results with students."
      online={<>Students complete written assignments at their leisure with <strong>no assignment deadlines.</strong> Tutor grades assignments &amp; provides <strong>detailed audio feedback</strong> to each student.</>}
      className="bg-light"
    />

    <ComparisonSection
      title="Practical Assignments"
      inClass="Students complete full grooming assignments in-class. Tutor provides grade and feedback."
      online={<>Students complete<strong> full grooming assignments</strong> from home, submitting photos/videos of their work. Tutor provides grade and feedback.</>}
    />

    <ComparisonSection
      title="Program Completion"
      inClass="6 months to 2 years (depends on the program)"
      online={<>Flexible&mdash;<strong>Complete the program at your own pace.</strong> (average 6 months to 1 year)</>}
      className="bg-light"
    />

    <ComparisonSection
      title="Business Training"
      inClass="Not usually included"
      online={<><strong>Business Training</strong></>}
    />

    <ComparisonSection
      title="Tuition Cost"
      inClass={<>$3,000 to $5,000<br />(average)</>}
      online={<>$1,000 to $3,000<br />(average)</>}
      className="bg-light"
    />

    <ComparisonSection
      title="Certification"
      inClass="Industry-Recognized Certificate of Completion"
      online={<strong>Industry-Recognized Certificate of Completion</strong>}
    />
  </>;
};

export default ClassVsOnlineLearning;

type ComparisonSectionProps = {
  title: string;
  inClass: string | ReactElement;
  online: string | ReactElement;
  className?: string;
};

const ComparisonSection = ({ title, inClass, online, className }: ComparisonSectionProps): ReactElement => (
  <section className={className}>
    <div className="container text-center">
      <h2 className="mb-4">{title}</h2>
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 mb-4 mb-md-0 d-flex align-items-strech">
          <div className="card w-100">
            <div className="card-body py-5">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p className="card-text">{inClass}</p>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 mb-4 mb-md-0 d-flex align-items-strech">
          <div className="card w-100">
            <div className="card-body py-5">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p className="card-text">{online}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
