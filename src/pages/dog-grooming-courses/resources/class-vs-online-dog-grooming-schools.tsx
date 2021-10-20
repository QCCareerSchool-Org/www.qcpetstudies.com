import { NextPage } from 'next';
import Image from 'next/image';
import { FaGraduationCap, FaLaptop, FaUniversity } from 'react-icons/fa';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import FirstSectionBackground from '../../../images/backgrounds/inclass_vs_online_bg.jpg';

const ClassVsOnlineLearning: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="In-Class vs. Online Dog Grooming Schools"
        description="In-Class vs. Online Dog Grooming Schools"
        canonical="dog-grooming-courses/resources/class-vs-online-dog-grooming-schools"
      />

      <section id="firstSection">
        <Image src={FirstSectionBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Learning during covid" />
        <div className="image-overlay-gradient"></div>
        <div className="container text-center">
          <div className="row text-white">
            <div className="col-12 col-md-10 offset-md-1">
              <FaGraduationCap className="h1 text-primary mb-3" />
              <h1 className="text-white">In-Class vs. Online Dog Grooming Schools</h1>
              <p>Learning dog grooming online can be a difficult concept to wrap your head around. After all, dog grooming is a very &quot;hands-on&quot; profession. Surely it needs to be taught in-class by an instructor, no?</p>
              <p>Definitely not. With the advancement of online learning in recent years, online dog grooming schools can be just as effective (if not more!) than in-class training. No one can dispute that online learning is far more convenient than in class.
                The key is to find an online dog grooming school that allows you the same (if not more!) hands-on practice that a classroom curriculum would.</p>
              <h4 className="text-white">Below is a comparison of a typical in-class dog grooming school vs. an online grooming school like QC Pet Studies.</h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Admissions</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 border border-light ">
              <h3 className="d-flex align-items-center justify-content-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Enroll by a specific date for the next year&apos;s classes</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p><strong>Enroll at any time.</strong> No admission dates or class schedules.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Location</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Specific campuses that are equipped with dog grooming facilities.</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p><strong>Study from anywhere;</strong> groom dogs at home or go to self-serve grooming areas.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Instruction</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Teacher gives in-person lectures on a strict schedule, and students read/study course books as homework.</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p>Students watch instructors on video (DVD or online) and read course books <strong>whenever it&apos;s convenient</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Practice</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Students work on dogs in a classroom environment with other students.</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p>Student <strong>practices from home</strong> as often as he/she feels appropriate to master skills.</p>            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Finding Dogs</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Students are provided with a &quot;class dog&quot; or are asked to find/bring their own dog to class.</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p>Student are asked to find <strong>their own dogs</strong> to groom.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Theory Assignments</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Students complete written assignments with strict deadlines. Tutor marks assignments &amp; occasionally discusses results with students.</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p>Students complete written assignments at their leisure with <strong>no assignment deadlines.</strong>
              &nbsp;Tutor grades assignments &amp; provides <strong>detailed audio feedback</strong> to each student.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Practical Assignments</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Students complete full grooming assignments in-class. Tutor provides grade and feedback.</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p>Students complete<strong> full grooming assignments</strong> from home, submitting photos/videos of their work. Tutor provides grade and feedback.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Program Completion</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>6 months – 2 years (depends on the program)</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p>Flexible – <strong>Complete the program at your own pace.</strong> (average 6 months – 1 year)</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Business Training</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Not usually included</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p><strong> Business Training</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Tuition Cost</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>$3,000 – $5,000</p>
              <p>(average)</p>
            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 bg-white">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p><strong>$1,000 – $3,000</strong></p>
              <p>(average)</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center d-flex justify-content-around">
            <div className="col-12 col-md-10 offset-md-1 mb-4">
              <h2>Certification</h2>
            </div>
            <div className="col-10 col-lg-5 mb-4 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaUniversity className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;In-Class</h3>
              <p>Industry-Recognized Certificate of Completion</p>            </div>
            <div className="col-10 col-lg-5 mb-lg-0 p-5 border border-light">
              <h3 className="d-flex justify-content-center align-items-center"><FaLaptop className="text-white bg-primary p-1 rounded-circle" />&nbsp;&nbsp;Online</h3>
              <p><strong>Industry-Recognized Certificate of Completion</strong></p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ClassVsOnlineLearning;
