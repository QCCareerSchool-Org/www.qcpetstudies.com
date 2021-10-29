import { NextPage } from 'next';
import Image from 'next/image';
import { FaBookOpen, FaHeadphones, FaLightbulb, FaStar } from 'react-icons/fa';
import { DefaultLayout } from '../../components/DefaultLayout';
import Qc35Year from '../../images/35-year-emblem.svg';
import QcBackground from '../../images/backgrounds/about-qc-background.jpg';
import QcGuarantee from '../../images/double-guarantee.svg';
import SPCALogo from '../../images/spca-full-color-logo.jpg';

const AboutPage: NextPage = () => {

  return (
    <DefaultLayout>
      <section id="firstSection" className="bg-dark text-light">
        <Image src={QcBackground} layout="fill" objectFit="cover" objectPosition="center" alt="qc pet studies backgrpund image" />
        <div className="container">
          <h1>About QC <br />Pet Studies</h1>
        </div>
      </section>

      <section>
        <div className="container px-lg-5">
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-2">
              <Image src={Qc35Year} alt="qc 35 year" width="120" height="120" />
            </div>
            <div className="col-12 col-lg-10">
              <h3>Were an online, international school that s been offering distance education courses since 1984, and in this time weve mastered the art of delivering quality course content online.</h3>
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-12">
              <p>QC Pet Studies offers the most comprehensive online dog grooming course available. Through lesson texts, video tutorials, hands on assignments, and personalized feedback from grooming professionals, our students receive the skills and resources they need to build a successful dog grooming career.</p>
              <p>We combine our premium course content with our outstanding student support system. You can contact us anytime via phone, email, or Live Chat whichever you prefer. We are here to ensure that your course runs smoothly and that all of your needs are met with great care. Even after you graduate, we encourage you to stay in touch with us. We want to hear how you&apos;re doing and are always happy to provide you with career advice. When you enroll with QC Pet Studies, you join a supportive and ongoing community that is dedicated to helping you reach your goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container text-center">
          <h2>BBB <strong>Accreditation</strong></h2>
          <div className="row mb-3 justify-content-center">
            <div className="col-12 col-lg-8">
              <h3 className="mb-3">QC is happy to celebrate 15 years of accreditation <br />with the Better Business Bureau.</h3>
              <p>Since 1984, QC has had thousands of satisfied students who have taken our courses and launched successful careers in their chosen fields. QC Pet Studies, a subsidiary of QC Career School, has an A+ rating with the Better Business Bureau the highest possible consumer satisfaction rating. You can rest assured that you are receiving high quality course materials and a premium educational experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <Image src={QcGuarantee} alt="qc guarantee" width="140" height="140" />
          <div className="mb-4">
            <h2>QC Pet Studies&apos; <strong>Guarantees</strong></h2>
          </div>
          <div className="mb-4">
            <p>QC means Quality of Course, and we stand behind that promise. That&apos;s why QC Pet Studies offers a money back DOUBLE guarantee.</p>
          </div>
          <div className="row ">
            <div className="col-12 col-lg-6 mb-4 d-flex align-items-strech">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <h3>The 21-Day Money-Back Guarantee</h3>
                  </div>
                  <div>
                    <p>Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you. If you decide it s not a good fit, simply contact QC to arrange a return of your course materials for a refund. It s that easy! Note: For sanitary reasons, the clippers and attachment combs provided with the course cannot be refunded (value $200 US)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4 d-flex align-items-strech">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <h3>The 1Year Money-Back Guarantee</h3>
                  </div>
                  <div>
                    <p>This course will pay for itself within two years, that s a promise. That s right. If after two years of receiving your certificate of completion, you haven t earned the equivalent of your tuition fees in dog grooming fees or salary, your dog grooming course tuition will be refunded in full.</p>
                  </div>
                  <p>All you have to do is provide proof that you ve made a reasonable effort to find work as a dog groomer.</p>
                </div>
              </div>
            </div>
            <div>
              <h4 style={{ color: 'red' }}><u>Questions? Contact Us</u></h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="mb-4 text-center">QC Pet Studies&apos; <strong>Core Values</strong></h2>
          <div className="row col-10 mb-5 align-items-center text-lg-start text-center">
            <div className="col-12 col-lg-1">
              <FaStar className="h2 text-primary mb-3" />
            </div>
            <div className="col-12 col-lg-11">
              <div className="mb-3">
                <p className="lead mb-3"><strong>Quality</strong></p>
              </div>
              <p>QC offers the highest quality dog grooming course materials and student services available. From lesson texts to video tutorials to grooming tools, you&apos;ll see quality in every aspect of your course.</p>
            </div>
          </div>

          <div className="row mb-5 align-items-center text-lg-start text-center">
            <div className="col-12 col-lg-1">
              <FaHeadphones className="h2 text-primary mb-3" />
            </div>
            <div className="col-12 col-lg-11">
              <div className="mb-3">
                <p className="lead"><strong>Student Support</strong></p>
              </div>
              <p>Student Support Specialists are here to answer any questions you have about the course, the grooming industry or your career. We take pride in providing you with unparalleled service before and during your course. and even after you graduate.</p>
            </div>
          </div>

          <div className="row align-items-center text-lg-start text-center mb-5">
            <div className="col-12 col-lg-1">
              <FaLightbulb className="h2 text-primary mb-3" />
            </div>
            <div className="col-12 col-lg-11">
              <div className="mb-3">
                <p className="lead"><strong>Online Course Innovation</strong></p>
              </div>
              <p>QC offers the highest quality dog grooming course materials and student services available. From lesson texts to video tutorials to grooming tools, you&apos;ll see quality in every aspect of your course.</p>
            </div>
          </div>
          <div className="row align-items-center text-lg-start text-center mb-5">
            <div className="col-12 col-lg-1">
              <FaBookOpen className="h2 text-primary mb-3" />
            </div>
            <div className="col-12 col-lg-11">
              <div className="mb-3">
                <p className="lead"><strong>Student Experience</strong></p>
              </div>
              <p>QC offers the highest quality dog grooming course materials and student services available. From lesson texts to video tutorials to grooming tools, you&apos;ll see quality in every aspect of your course.</p>
            </div>
          </div>
          <div className="row align-items-center text-lg-start text-center mb-5">
            <div className="col-12 col-lg-4">
              <Image src={SPCALogo} alt="student experience" width="340" height="120" />
              <p><strong>In partnership with SPCA International</strong></p>
            </div>
            <div className="col-12 col-lg-8">
              <p>Society for the Prevention of Cruelty to Animals (S.P.C.A.)<br />International&apos;s mission is to advance the safety and well being of animals. From distributing veterinary medical supplies to<br /> delivering education initiatives, SCPAI&apos;s innovative programs<br /> work to stop the suffering of animals around the world.</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default AboutPage;
