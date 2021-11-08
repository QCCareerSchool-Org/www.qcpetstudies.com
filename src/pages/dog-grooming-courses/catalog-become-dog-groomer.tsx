import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import TestiminialBackground from '../../images/backgrounds/testimonials-bg.jpg';
import ProfileImage from '../../images/casey-bechard.png';
import FirstAidLogo from '../../images/first-aid-logo.svg';
import GroomingKitImage from '../../images/Full-Kit-Pro-Scissors.jpg';
import Step1EnrollImage from '../../images/step-1-enroll.svg';
import Step2SubmitImage from '../../images/step-2-submit.svg';
import Step3CertificateImage from '../../images/step-3-certificate.svg';
import CatalogImage from '../../images/tablet-small.jpg';

const DogGroomingCatalogPage: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="Catalog of Become A Dog Groomer"
        description="This is a Catalog of Become a Dog Groomer"
        canonical="/dog-grooming-courses/catalog-dog-groomer"
      />

      <section id="firstSection" className="">
        <div className="container ">
          <h2 className="mb-5 text-center">Become a Professional Dog Groomer</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <div className="w-100 bg-light">
                <div className="card-body">
                  <h3 className="text-center lead">Get Started with a<br /><strong>Free Course Catalog</strong></h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fname" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="fname" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lname" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lname" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label mb-2" htmlFor="condition">I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!</label>
                    </div>
                    <button type="submit" className="btn btn-primary text-uppercase">Get The Catalog</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-lg-6">
              <div className="row px-5 justify-content-center">
                <Image src={CatalogImage} alt="tablet with dog image" objectFit="contain" />
                <p className="lead"><strong>Download a Free Course Catalog To</strong></p>
                <ul>
                  <li>Find out if a career in dog grooming is right for you</li>
                  <li>Learn about the many careers you can pursue as a dog groomer</li>
                  <li>View the course curriculum, course videos, and sample assignments</li>
                  <li>Find out about tuition information and choose a payment plan</li>
                  <li>Learn how you can&apos;t go wrong with QC&apos;s money back guarantee!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2 className="text-uppercase mb-3">How the Courses Work</h2>
          <div className="row">
            <div className="col-12 col-lg-4">
              <Image src={Step1EnrollImage} alt="Enroll today" />
              <p className="lead">Enroll Today &amp; Access Your Course Materials</p>
              <p>Receive online access to a course within 48 hours. Receive your physical course books and grooming kit in 5-10 business days.</p>
            </div>
            <div className="col-12 col-lg-4">
              <Image src={Step2SubmitImage} alt="Complete assignment and submit" />
              <p className="lead">Complete Assignments &amp; Review Feedback</p>
              <p>Complete your theoretical and practical assignments. Receive advice and detailed feedback from your tutor after every unit you complete. Review your tutor&apos;s advice to improve your skills for the next unit.</p>
            </div>
            <div className="col-12 col-lg-4">
              <Image src={Step3CertificateImage} alt="Get your certificate" />
              <p className="lead">Graduate as an International Dog Grooming Professional™ (IDGP™)</p>
              <p>Receive your certification and your career as a professional dog groomer. Enjoy lifetime access to your course materials. Be protected by our 1-Year Money Back Guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <Image src={TestiminialBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dog looking background" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-5">
              <BsStarFill className="h2 text-primary mx-2" />
              <BsStarFill className="h2 text-primary mx-2" />
              <BsStarFill className="h2 text-primary mx-2" />
              <BsStarFill className="h2 text-primary mx-2" />
              <BsStarFill className="h2 text-primary mx-2" />
            </div>
            <div className="col-12 col-lg-8">
              <p>&quot;Loved having the opportunity to learn dog grooming and dog first aid through this program. It&apos;s awesome being able to work at my own pace and taking the time to practice and use my assignments in my everyday job. Highly recommend!&quot;</p>
              <Image src={ProfileImage} alt="Casey bechard profile image" height="85" width="86" />
              <div className="lead"><strong>Casey Bechard</strong></div>
              <p>QC Pet Studies Graduate</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <Image src={FirstAidLogo} alt="First aid logo" />
          <h2>Free First Aid Course</h2>
          <p className="lead">Enroll in Dog Grooming and receive the First Aid for Dog Groomers course for <strong>FREE! ($348 Value)</strong></p>
          <p>Being trained in Pet First Aid prepares you to respond to emergencies and to maintain a safe grooming environment. In this course, you&apos;ll learn how to prevent injuries and how to respond to emergency situations in your grooming salon.</p>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2>Dog Grooming Kit</h2>
          <p className="lead">Included With Your Course <strong>(Valued at $200!)</strong></p>
          <p className="mb-4">Receive a dog grooming starter kit when you enroll. It contains some of the key tools and equipment you&apos;ll need to groom dogs professionally.</p>
          <Image src={GroomingKitImage} alt="Dog grooming kit" />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container text-center">
          <h2 className="text-white">Take the First Step Towards a New and Exciting Career</h2>
          <a href=""><button className="btn btn-outline-light text-uppercase mt-4">Download The Free Catalog</button></a>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container text-center">
          <h2>Have questions?</h2>
          <h2>Give us a call.</h2>
          <div className="mb-3">
            <Link href=""><a className="link-primary">+1 613 749 8248</a></Link>
          </div>
          <p>© 2019 QC Pet Studies</p>
          <Link href=""><a className="link-primary">Privacy Policy</a></Link>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default DogGroomingCatalogPage;
