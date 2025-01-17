import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLaptop, FaMedkit, FaPaw, FaPencilAlt, FaTruck } from 'react-icons/fa';

import HeroBackgroundImage from './hero-bg.jpg';
import TipsCardBackground from './pet-covid-bg-light-gray.jpg';
import PetWithMaskImage from './pet-covid-image.jpg';
import CovidCareTools from './pet-covid-img-wide.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';

export const metadata: Metadata = {
  title: 'Learning & Working During COVID-19',
  description: 'Starting a new career during a pandemic can be challenging! Find out how online training can help.',
  alternates: { canonical: '/resources/learning-and-working-during-covid' },
};

const LearningDuringCovidPage: PageComponent = () => (
  <>
    <section id="top" className="bg-dark">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1>Learning &amp; Working During COVID</h1>
            <h2 className="mb-4">Dog Grooming in a Pandemic</h2>
            <p className="lead">See how you can earn your certification and run your dog grooming business during COVID-19!</p>
            <p className="mb-0">Learn from the safety of home with QC&apos;s online dog grooming courses</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-7">
            <h2 className="mb-4">How to Learn Dog Grooming During a Pandemic</h2>
            <p className="lead mb-4">QC&apos;s courses are very flexible! Train at your own pace, from the comfort of your own home.</p>
            <h3>How QC Sets You Up to Succeed</h3>
            <ul className="mb-4">
              <li>Study from wherever you are most comfortable with a fully online course</li>
              <li>Receive virtual one-on-one support from your tutor</li>
              <li>Reach out to the <Link href="/contact-us">Student Support Team</Link> 7 days a week for assistance</li>
              <li>Complete hands-on grooming assignments to gain real-world experience</li>
              <li>Get personalized, audio feedback from your tutor directly sent to you after each unit</li>
              <li>Learn First Aid for dogs</li>
              <li>Receive informative business training that will allow you to implement best practices both in person and online</li>
            </ul>
            <Link href="/certification-courses/dog-grooming/">Discover Everything You&apos;ll Learn in the Dog Grooming Course!</Link>
          </div>
          <div className="col-6 col-xl-5 d-none d-lg-block">
            <Image src={CovidCareTools} alt="Covid care" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="d-none d-xl-block">
        <Image src={PetWithMaskImage} alt="" fill sizes="100vw" style={{ objectFit: 'contain', objectPosition: 'left' }} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8 offset-xl-4 offset-xxl-3">
            <p className="lead mb-4">&quot;I&apos;m 2 units [into the Dog Grooming Course] and love it! It has a great background, written learning, supplies, and more! I came from a vet assisting background and wanted to open up my own grooming salon, but I have two kids, so I needed to do distance [training]. I love this course so much! I highly recommend this course and the First Aid for Groomers Course. With my background knowledge, I could tell the topics were well-researched. By far, blew me away!&quot; </p>
            <p className="mb-4">Mackenzie Lafleur<br /><span className="text-muted">QC Student</span></p>
            <p>Read other reviews like this one by checking out our <Link href="/category/student-features/" className="link-secondary">Student &amp; Graduate Features</Link>!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <h2 className="mb-4">You Can Still Earn an Income for Your Dog Grooming Business During COVID-19</h2>
            <p className="lead mb-5">Continue to book clients and make a profit by adding any of the following services to your business</p>
          </div>
        </div>
        <div className="row justify-content-around mb-4">
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaTruck className="h2 text-secondary mb-3" />
            <h4>Mobile Grooming</h4>
            <p>Consider launching a <Link href="/2020/10/dog-grooming-career-pros-and-cons-of-mobile-grooming">mobile grooming</Link> service</p>
          </div>
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaLaptop className="h2 text-secondary mb-3" />
            <h4>Virtual Services</h4>
            <p>Introduce virtual services to your business, such as consultations and at-home grooming lessons</p>
          </div>
          <div className="col-10 col-lg-3 p-5 border border-light">
            <FaMedkit className="h2 text-secondary mb-3" />
            <h4>Protection</h4>
            <p>Insist that everyone (staff and clients) wear masks at all times</p>
          </div>
        </div>

        <div className="row justify-content-around mb-4">
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaPencilAlt className="h2 text-secondary mb-3" />
            <h4>Blogging</h4>
            <p>Write for a dog grooming blog/vlog or start your own</p>
          </div>
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaInstagram className="h2 text-secondary mb-3" />
            <h4>Social Media</h4>
            <p>Become an authority on dog grooming on social media</p>
          </div>
          <div className="col-10 col-lg-3 p-5 border border-light bg-primary text-white">
            <FaPaw className="h2 text-secondary mb-3" />
            <h4 className="text-white">Sniffin&apos; Around</h4>
            <p>Visit QC&apos;s blog for articles and tips for working and expanding business in 2021</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="d-none d-lg-block"><BackgroundImage src={TipsCardBackground} /></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-1">
            <h2>Tips for Keeping Yourself and Clients Safe</h2>
            <p className="lead">When working with clients in person, you should follow strict practices to keep everyone safe.</p>
            <h3>COVID-19 Safety Protocols for Dog Groomers</h3>
            <ul>
              <li>Reschedule or cancel appointments if you or your client is feeling ill or have been recently exposed to someone who has tested positive for COVID-19</li>
              <li>Ensure that you&apos;re always wearing a mask when working with clients</li>
              <li>Insist that clients also wear masks</li>
              <li>Consider reducing your overall grooming capacity to ensure a limited amount of people in your workspace</li>
              <li>Do not permit clients to wait for their dog on the premises. Consider meeting clients out in the parking lot to collect/deliver their dog</li>
              <li>Implement an online payment system so clients aren&apos;t required to linger in the salon for payment</li>
              <li>Socially distance whenever possible and enforce a maximum occupancy limit</li>
              <li>Wash your hands before and after working with a client, grooming their dog, or touching communal surfaces</li>
              <li>Disinfect all <Link href="/2018/08/learning-about-your-dog-grooming-kit-brushes-combs-and-dematting-tools">grooming tools</Link> before and after use</li>
              <li>Work in a sanitized space and use air purifiers to keep the air clean</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LearningDuringCovidPage;
