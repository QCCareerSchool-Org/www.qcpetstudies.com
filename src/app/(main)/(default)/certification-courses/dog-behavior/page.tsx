import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import DCBackgroundImage from './hero.jpg';
import { OutlineSection } from './outlineSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import CertificationGoldImage from '@/components/certifications/IDBS-certification-gold.svg';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/PriceSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import ShannonNoonanImage from '@/images/shannon-noonan.jpg';
import SusanReadImage from '@/images/susan-read.jpg';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { formatPrice } from '@/lib/formatPrice';
import { getData } from '@/lib/getData';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dc' ];
const linkCourseCodes = [ 'dt', 'dc' ];

export const metadata: Metadata = {
  title: 'Dog Behavior Course',
  description: 'Become a Professional Dog Behavior Specialist with QC\'s online dog behavior course. Study online with hands-on learning!',
  alternates: { canonical: '/certification-courses/dog-behavior' },
};

const DogBehaviorPage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return (
    <>
      <section className="bg-dark">
        <BackgroundImage src={DCBackgroundImage} priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <CertificationGoldImage alt="International Dog Behavior Specialist IDBS Certification" height="125" width="125" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h1>Dog Behavior Course</h1>
            {price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c=dt&c=dc"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 d-flex">
              <div className="col text-uppercase">
                <a href="#outline"><OutlineIcon alt="outline" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Outline</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#guarantee"><GuaranteeIcon alt="play button" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Guarantee</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#tutors"><TutorIcon alt="play button" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Tutors</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Become a <strong>Certified Dog Behavior Specialist</strong></h2>
              <p className="lead"><strong>International Dog Behavior Specialist&trade;</strong> | <i>IDBS&trade;</i></p>
              <p>There's never been a better time to become a behavior specialist and help dogs conquer some of their most troubling behaviors! Pet parents are desperate for specialized trainers who can help them overcome specific challenges and concerns with their pups. Whether it's helping a pup with separation anxiety or curbing leash reactivity on walks, you can be the specialist that helps dogs transition into the happy, fun loving family members they were meant to be!</p>
              <p>Get your International Dog Behavior Specialist Certification in less than a year with QC's interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to hone your behavior modification skills. Graduate with all the knowledge and skills you need to succeed in the pet industry!</p>
              <p>Please note, Dog Behavior is an advanced certification program and requires students to have successfully completed <Link className="link-primary" href="/certification-courses/dog-training">QC's Dog Training course</Link> or similar training as a prerequisite. </p>
              <p className="lead mb-0">Are you ready to start an amazing career?</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={linkCourseCodes} price={price} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
              <h3>Newest Course Materials</h3>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized Feedback</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog behavior assignment you submit. Use this feedback to improve and succeed!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime Access</h3>
              <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
      </section>

      <div id="outline" className="sectionAnchor" />
      <OutlineSection className="bg-lighter" />

      <div id="tutors" className="sectionAnchor" />
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Learn from <strong>Dog Behavior Experts</strong></h2>
              <p className="lead">QC's dog behavior course was developed with the assistance of Kim Cooper.</p>
              <p className="mb-5">With over 30 prestigious accomplishments and accreditations under her belt, Kim Cooper is the owner and senior instructor at Best Friends Dog Training. With 35 years of experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs and specializes in training search-and-rescue dogs. Kim loves to foster the special bond that exists between a dog and its owner. Her goal is to use reward-based techniques and behavior modification strategies to teach owners to help their dogs become happy, well-behaved members of the family.</p>
              <h3 className="mb-4">Your Dog Behavior Tutors</h3>
            </div>
            <div className="col-12 col-lg-6 text-lg-start align-item-center mb-2">
              <div className="mb-2">
                <Image src={ShannonNoonanImage} placeholder="blur" alt="dog-training expert, Shannon Noonan" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p className="lead"><strong>Shannon Noonan</strong></p>
              <p>Certified Dog Trainer (KPA-CTP, CPDT-KA)<br /><em>10 Years of Experience</em></p>
              <p className="mb-0">Shannon first started working with dogs when she started fostering with Ottawa Dog Rescue. Through this organization, Shannon adopted her first dog, Blue, a Great Dane/pointer mix. Shannon and Blue learned about formal dog training together. This pair went on to found the first official Therapy Dog program at Carleton University, a program that remains popular today. Now, Shannon is a Certified Professional Dog Trainer-Knowledge Assessed, and owns her own dog training business with her Dalmatian, Elroy. Shannon and Elroy share a passion for teaching other humans and dogs about training, and how to overcome canine behavioral issues. Shannon is excited to ignite this same passion for working with dogs in QC's dog training and behavior students.</p>
            </div>
            <div className="col-12 col-lg-6 text-lg-start">
              <div className="mb-2">
                <Image src={SusanReadImage} placeholder="blur" alt="dog-training expert, Susan Read" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p className="lead"><strong>Susan Read</strong></p>
              <p>Certified Dog Trainer<br /><em>35 Years of Experience</em></p>
              <p className="mb-0">Susan has been training dogs for over 35 years. She specializes in Search and Rescue (SAR) work, but Susan's experience extends to consultations, competitive obedience, rally and agility training as well. Susan has been teaching tracking for many years, and conducts workshops across Ontario. She has been involved with K9 SAR since 2000, and is now the head K9 trainer and handler with Georgian Bay SAR. Susan is also the Provincial K9 Coordinator and sits on the Ontario Search and Rescue Volunteer Association (OSARVA) Board of Directors. Susan is currently the only OPP/OSARVA certified dog handler in Central Ontario with her live find dog, Zena. She has also worked with Human Remains Detection K9 with her dog, Zappa, since 2014. As a former school teacher and a highly experienced dog training instructor, Susan looks forward to using her significant teaching experience to benefit QC's dog training and behavior students.</p>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection className="bg-light" />

      <VirtualCommunitySection />
    </>
  );
};

export default DogBehaviorPage;
