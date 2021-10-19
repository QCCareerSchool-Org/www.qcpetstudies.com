import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { DefaultLayout } from '../../../components/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';

import dogLooking from '../../../images/dog-looking.jpg';
import faCertificate from '../../../images/fa-certificate-desktop.jpg';
import firstAidBook from '../../../images/first-aid-book-white.jpg';
import firstAidLogo from '../../../images/first-aid-logo.svg';

const DogGroomingPage: NextPage = () => {
  return (
    <DefaultLayout secondaryTitle="First Aid for Groomers Course">
      <SEO
        title="First Aid for Groomers Course"
        description="Learn how to create a safe environment and how to respond to emergencies. The First Aid for Groomers course is for new and experienced groomers alike!"
        canonical="/dog-grooming-courses/first-aid"
      />

      <section id="firstSection" className="bg-dark">
        <div className="container text-center">
          <Image src={firstAidLogo} alt="First Aid Course logo" width={60} height={60} />
          <h1><strong>First Aid</strong> Course for Groomers</h1>
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <p>When clients entrust you with their beloved pet, they rightfully expect their dog to be kept safe! That&apos;s why being diligent about health and safety is essential to your success as a dog groomer. This First Aid for Dog Groomers course will help you ensure your own safety as well as the safety of the dogs you work with.</p>
              <p>Through detailed course texts and video demonstrations, you&apos;ll learn how to prevent injuries and how to respond to emergency situations in your grooming salon. Completing the first aid course will boost your confidence. You&apos;ll learn how to create a safe grooming environment for your furry friends and fellow groomers. Your First Aid for Dog Groomers Certificate will also help increase your credibility and marketability by providing your clients with peace of mind.</p>
              <p>The First Aid for Dog Groomers course consists of two core units that include course texts, video tutorials, and self-study assignments. The entire course is completed online and at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <Image src={firstAidBook} alt="First Aid book" />
            </div>
            <div className="col-12 col-lg-6 text-start">
              <p className="lead">You should take this course if you</p>
              <ul>
                <li>Aspire to become a dog groomer or currently work as a professional dog groomer.</li>
                <li>Are motivated to create a safer grooming environment for dogs and people.</li>
                <li>Want to maintain your own safety to enjoy a long, healthy dog grooming career.</li>
                <li>Are a dog owner or animal-care professional and want to be prepared in the event of an emergency.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={[ 'fa' ]} doubleGuarantee={false} />

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-start">
              <h2>QC&apos;s First Aid Course Includes</h2>
              <ul>
                <li>Course texts that provide in-depth information on preventing and responding to dog grooming emergencies.</li>
                <li>Video tutorials featuring your course tutors (including a Certified Master Groomer and a Pet First Aid instructor).</li>
                <li>Multiple choice quizzes to test your knowledge.</li>
                <li>Self-study assignments are designed to develop your skills, including your ability to work hands-on with dogs. To complete these assignments, you will need to begin building your first aid kit with a few essential items.</li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <Image src={dogLooking} alt="dog looking to the left" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray pb-0">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2>Your Professional Certification</h2>
              <p>Once you&apos;ve completed your Dog First Aid course, you&apos;ll graduate with the First Aid for Groomers certificate of completion. This certificate attests to your success in learning how to maintain a safe grooming environment for dogs and people.</p>
            </div>
          </div>
        </div>
      </section>
      <Image src={faCertificate} layout="responsive" alt="First Aid certification" />

      <section>
        <div className="container text-center">
          <h2 className="mb-4">Course Outline</h2>
          <div className="row text-start">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2 mb-4 mb-md-0">

              <div className="card">
                <div className="card-body">
                  <h3>Unit A</h3>
                  <ul className="no-indent card-text">
                    <li>Introduction to first aid</li>
                    <li>Building your first aid kit</li>
                    <li>Setting up your workspace</li>
                    <li>Preventing accidents and injuries</li>
                    <li>Assessing a dog&apos;s health</li>
                    <li>Responding to emergency situations</li>
                    <li>Addressing injuries to the groomer</li>
                    <li>Preventing bites and scratches</li>
                    <li>Assessing the severity of a wound</li>
                    <li>Checking a dog&apos;s vitals</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-5 col-xl-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <h3>Unit B</h3>
                  <ul className="no-indent card-text">
                    <li>Creating an emergency plan</li>
                    <li>Rescue breathing techniques</li>
                    <li>Performing CPR</li>
                    <li>Artificial respiration</li>
                    <li>Helping a choking dog</li>
                    <li>Wound care</li>
                    <li>Dehydration and heatstroke</li>
                    <li>Heart attacks and seizures</li>
                    <li>Cysts and parasites</li>
                    <li>Burns and bruises</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12">
              <h2>Receive First Aid Training <strong>FREE</strong></h2>
              <p className="lead mb-4">When You Enroll in the <Link href="/dog-grooming-courses/dog-grooming"><a className="link-primary">Online Dog Grooming Course</a></Link></p>
              <a className="btn btn-primary" href="https://enroll.qcpetstudies.com/?c[]=dg&c[]=fa"><span>ENROLL NOW</span></a>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default DogGroomingPage;
