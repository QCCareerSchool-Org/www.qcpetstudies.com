import { NextPage } from 'next';
import Image from 'next/image';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import dogLooking from '../../../images/dog-looking.jpg';
import faCertificate from '../../../images/fa-certificate-desktop.jpg';
import firstAidBook from '../../../images/first-aid-book-white.jpg';
import firstAidLogo from '../../../images/first-aid-logo.svg';
import viewPaymentPlan from '../../../images/view-payment-plans.svg';


const DogGroomingPage: NextPage = () => {
  return (
    <DefaultLayout secondaryTitle="First Aid for Groomers Course">
      <SEO
        title="First Aid for Groomers Course"
        description=""
        canonical="/dog-grooming-courses/first-aid"
      />

      <section id="firstAidSection">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 pt-4">
              <Image src={firstAidLogo} alt="First Aid Course logo" width={60} height={60} />
              <h1><strong>First Aid</strong> Course for Groomers</h1>
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
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
            <div className="col-12 col-lg-6">
              <Image src={firstAidBook} alt="First Aid book" width={504} height={385} />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 mb-2 mb-lg-0 text-lg-start">
              <div className="nectar-fancy-ul">
                <h4>You should take this course if you:</h4>
                <ul>
                  <li> Aspire to become a dog groomer or currently work as a professional dog groomer.</li>
                  <li> Are motivated to create a safer grooming environment for dogs and people.</li>
                  <li> Want to maintain your own safety to enjoy a long, healthy dog grooming career.</li>
                  <li> Are a dog owner or animal-care professional and want to be prepared in the event of an emergency.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="firstAidSection " className="red-grad">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-white">
              <h3 className="text-white">Tuition</h3>
              <div className="wpb_wrapper">
                <h6 id="priceText" className="course-price text-white">$348 or $50/mo</h6>
              </div>
              <div className="wpb_wrapper ">
                <p><em>(incl. taxes, shipping, and materials!)</em></p>
              </div>
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 mb-2 mb-lg-0 ">
              <Image src={viewPaymentPlan} objectFit="cover" objectPosition="center" alt="payment plan" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h3>QC&apos;s First Aid Course Includes:</h3>
              <div className="nectar-fancy-ul" data-list-icon="icon-ok" data-animation="false" data-animation-delay="0" data-color="extra-color-2" data-alignment="left">
                <ul>
                  <li> Course texts that provide in-depth information on preventing and responding to dog grooming emergencies.</li>
                  <li> Video tutorials featuring your course tutors (including a Certified Master Groomer and a Pet First Aid instructor).</li>
                  <li> Multiple choice quizzes to test your knowledge.</li>
                  <li> Self-study assignments are designed to develop your skills, including your ability to work hands-on with dogs. To complete these assignments, you will need to begin building your first aid kit with a few essential items.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 mb-2 mb-lg-0 text-lg-start">
              <Image src={dogLooking} alt="First Aid book" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-shade">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 pt-4">
              <h2 className="text-white">Your Professional Certification</h2>
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-white">
              <p>Once you&apos;ve completed your Dog First Aid course, you&apos;ll graduate with the First Aid for Groomers certificate of completion. This certificate attests to your success in learning how to maintain a safe grooming environment for dogs and people.</p>
            </div>
          </div>
          <Image src={faCertificate} objectFit="cover" alt="First Aid certification" />
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Course Outline</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-4 text-lg-start">
              <h3>Unit A</h3>
              <ul>
                <li> Introduction to first aid</li>
                <li> Building your first aid kit</li>
                <li> Setting up your workspace</li>
                <li> Preventing accidents and injuries</li>
                <li> Assessing a dog&apos;s health</li>
                <li> Responding to emergency situations</li>
                <li> Addressing injuries to the groomer</li>
                <li> Preventing bites and scratches</li>
                <li> Assessing the severity of a wound</li>
                <li> Checking a dog&apos;s vitals</li>
              </ul>
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 offset-lg-0 mb-2 mb-lg-0 text-lg-start">
              <h3>Unit B</h3>
              <ul>
                <li> Creating an emergency plan</li>
                <li> Rescue breathing techniques</li>
                <li> Performing CPR</li>
                <li> Artificial respiration</li>
                <li> Helping a choking dog</li>
                <li> Wound care</li>
                <li> Dehydration and heatstroke</li>
                <li> Heart attacks and seizures</li>
                <li> Cysts and parasites</li>
                <li> Burns and bruises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="enroll-banner">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12">
              <h1 className="text-white">Receive First Aid Training <strong>FREE</strong></h1>
              <h3 className="text-white">When You Enroll in the <a href="/online-courses/dog-grooming/">Online Dog Grooming Course</a></h3>
              <a className="nectar-button jumbo regular regular-button" href="https://enroll.doggroomingcourse.com/course.php?c%5B%5D=dg&amp;c%5B%5D=fa" data-color-override="#57c3d7" data-hover-color-override="false" data-hover-text-color-override="#fff"><span>ENROLL NOW</span></a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
      .red-grad{
        background: linear-gradient(to bottom,#f0106d 0%,#a50832 100%);
      }
      .bg-dark-shade{
        background-color: #999999;
      }
      .enroll-banner{
        background-color: #00062b;
      }
      .nectar-button {
        font-size: 14px;
        padding: 15px 22px;
        background-color: #57c3d7!important;
        color:#fff;
        font-size: 18px;
        padding: 25px 40px;
   }`}</style>
    </DefaultLayout>
  );
};

export default DogGroomingPage;
