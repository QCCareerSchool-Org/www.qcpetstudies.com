import type { Metadata } from 'next';
import { BsBook } from 'react-icons/bs';

import { OutlineSection } from '../outlineSection';
import AssignmentBackground from './your-career-bg.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import IDGPCertificationLogo from '@/components/certifications/IDGP-certification-gold.svg';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

const courseCodes = [ 'dc' ];

export const metadata: Metadata = {
  title: 'Dog Behavior Certification Course',
  alternates: { canonical: '/certification-courses/dog-behavior/course-preview' },
};

const BehaviorCoursePreviewPage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return (
    <>
      <section className="bg-dark">
        <BackgroundImage src={AssignmentBackground} />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <BsBook className="h1 mb-3" />
              <h1 className="mb-4">Dog Behavior Certification Course</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2>Congratulations on Choosing to Explore a Career as a <strong>Dog Behavior Specialist!</strong></h2>
              <p>There's never been a better time to become a behavior specialist and help dogs conquer some of their most troubling behaviors! Pet parents are desperate for specialized trainers who can <strong>use dog behavior modification strategies to</strong> help them overcome specific challenges and concerns with their pups. Whether it's helping a pup with separation anxiety or curbing leash reactivity on walks, you can be the specialist that helps dogs transition into the happy, fun loving family members they were meant to be!</p>
              <p>Are you ready to take your dog training skills to the next level? Does this sound like you?</p>
              <ul>
                <li>You love all dogs and already have some experience in training</li>
                <li>You're patient and work confidently under pressure</li>
                <li>You're able to interact with all types of dogs calmly and carefully</li>
                <li>You understand that dogs are individuals with their own needs and wants, and are willing to learn how to work with them</li>
                <li>You're good with people too, and are eager to teach people how to communicate with their dogs</li>
              </ul>
              <p className="lead mb-0">If this list describes you in a nutshell, then you're in the right place!</p>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <p className="card-text">QC's online <strong>dog behavior course</strong> will help you develop the <strong>specialized behavior modification and consultation</strong> skills you need to identify and change some of your pup clients' most disruptive behaviors. Developing your skills beyond dog training, you'll learn the entire behavior modification process from start to finish including how to deal with common concerns like anxiety, phobias, reactivity, and even aggression.</p>
                  <p className="card-text">Even though this is an online course, you'll complete tons of hands-on assignments designed to enhance your training experience. You'll take the time to learn and develop a deep understanding of dog communication so you can then decipher the best methods to help any dog overcome their problem behaviors.</p>
                  <p className="card-text">Whether your goal is to launch your own specialized dog training business or work for an established training school, you'll gain all the skills and knowledge you need to feel confident in your new career! QC's online dog training course will prepare you in every way for a successful career as a professional dog behavior specialist.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-contents-center align-items-center">
            <div className="flex-shrink-0 mb-4 mb-md-0 me-md-4">
              <IDGPCertificationLogo width={200} height={200} alt="IDGP International Dog Grooming Professional logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="text-center text-md-start">
              <h2>Your <strong>Certification</strong></h2>
              <p className="lead mb-0">Upon graduation, you'll receive the International Dog Behavior Specialist™ (IDBS™) Certification. With your certification and professional title, you'll be ready to start your own business working in specialized training and behavior management!</p>
            </div>
          </div>
        </div>
      </section>

      <OutlineSection />

      <PriceSectionWithDiscount courses={courseCodes} price={price} doubleGuarantee={true} />

      <section>
        <div className="container">
          <h2>Learn from Dog Training Experts</h2>
          <p>QC's behavior modification course was developed with the assistance of Kim Cooper.</p>
          <p>Kim Cooper is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in aerospace engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs&mdash;all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search-and-rescue dogs. Kim and her dogs have earned many search-and-rescue certifications as well as obedience and agility titles.</p>
        </div>
      </section>
    </>
  );
};

export default BehaviorCoursePreviewPage;
