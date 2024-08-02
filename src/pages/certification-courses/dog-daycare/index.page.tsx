import { GetServerSideProps } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { Accordion } from '../../../components/accordion';
import { AccordionItem } from '../../../components/accordion/AccordionItem';
import { DDTutorSection } from '../../../components/DDTutorSection';
import { GuaranteeSection } from '../../../components/GuaranteeSection';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import DogCareBackground from '../../../images/backgrounds/jack-russel-terrier-in-handbag.jpg';
import GuaranteeIcon from '../../../images/course-overview-icons/guarantee.svg';
import OutlineIcon from '../../../images/course-overview-icons/outline.svg';
import TutorIcon from '../../../images/course-overview-icons/tutor.svg';
import IntroductoryUnitsImage from '../../../images/dd-outline-part-1.jpg';
import ActivitiesImage from '../../../images/dd-outline-part-2.jpg';
import ServicesImage from '../../../images/dd-outline-part-3.jpg';
import DogCareBusinessImage from '../../../images/dd-outline-part-4.jpg';
import CertificationGoldImage from '../../../images/IDCP-certification-yellow.svg';
import { formatPrice } from '../../../lib/formatPrice';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import type { Location } from '../../../models/location';
import type { Price } from '../../../models/price';
import type { NextPageWithLayout } from '../../_app.page';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dd' ];

type Props = {
  location: Location;
  price: Price;
};

const DogCarePage: NextPageWithLayout<Props> = ({ price }) => {
  const screenWidth = useScreenWidth();

  const mdOrGreater = screenWidth >= 768;
  const lgOrGreater = screenWidth >= 992;
  const xlOrGreater = screenWidth >= 1200;

  const md = mdOrGreater && !lgOrGreater;

  return <>
    <SEO
      title="Dog Daycare Course"
      description="Become a certified dog care professional with interactive online training!"
      canonical="/certification-courses/dog-daycare"
    />

    <section id="top" className="bg-dark">
      <Image
        src={DogCareBackground}
        placeholder="blur"
        alt="Jack Russel Terrier in a handbag"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'right' }}
      />
      <div className="container text-center">
        <div className="row mb-4">
          <div className="mb-4">
            <Image
              src={CertificationGoldImage as StaticImageData}
              alt="International Dog Grooming Professional IDGP certification"
              height="125"
              width="125"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <h1>Dog Daycare Course</h1>
          {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href="https://enroll.qcpetstudies.com?c=dd"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex">
            <div className="col text-uppercase">
              <a href="#outline"><Image
                src={OutlineIcon as StaticImageData}
                alt="outline"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Outline</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#guarantee"><Image
                src={GuaranteeIcon as StaticImageData}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Guarantee</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#tutors"><Image
                src={TutorIcon as StaticImageData}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
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
            <h2>Become a <strong>Certified Dog Care Professional</strong></h2>
            <p className="lead"><strong>International Dog Care Professional&trade;</strong> | <i>IDCP&trade;</i></p>
            <p>There's never been a better time to start a career as a dog care professional. Pup parents are always looking for pet care they can trust, and dog walkers and daycare facilities all over the country are booked solid! What an amazing opportunity to start a new and lucrative career!</p>
            <p>Get your International Dog Care Certification in less than a year with QC's interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to grow your dog care skills. Graduate with all the knowledge and skills you need to succeed in the dog daycare industry!</p>
            <p className="mb-0">Are you ready to jump into an amazing career?</p>
          </div>
        </div>
      </div>
    </section>

    <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
            <h3>Newest{md ? <br /> : ' '}Course Materials</h3>
            <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
            <h3>Personalized{md ? <br /> : ' '}Feedback</h3>
            <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
            <h3>Lifetime{md ? <br /> : ' '}Access</h3>
            <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
          </div>
        </div>
      </div>
    </section>

    <div id="outline" className="sectionAnchor" />
    <section className="bg-lighter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4 text-center">
            <h2>Course <strong>Outline</strong></h2>
            <p className="lead">The Dog Daycare course is split into four main parts, each with individual training units designed to build your skills and confidence as a dog care provider.</p>
          </div>
        </div>
        <Accordion>
          <AccordionItem heading="Part 1: Introductory Units">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>In the first part of your course, you&apos;ll build a foundation for your career in the pet industry. You&apos;ll discover the many opportunities available to you as a dog daycare provider. You might open a doggy daycare facility, offer dog-walking services or board dogs over night. You&apos;ll also learn all about the tools and supplies you&apos;ll need to safely provide these services. Of course, a strong understanding of the dogs themselves will be essential to your career as a dog daycare provider. In the introductory units of your course, you&apos;ll learn all about dog behavior and communication. You&apos;ll discover how a dog&apos;s breed, age and health can impact its behavior.</p>
                <p>With all this information, you&apos;ll feel confident and prepared when you care for dogs.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {xlOrGreater && <div className="col-4"><Image
                src={IntroductoryUnitsImage}
                alt="two dogs sniffing each other in a park"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              /></div>}
            </div>
          </AccordionItem>
          <AccordionItem heading="Part 2: Activities with Dogs">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>Although caring for dogs is a big responsibility, it&apos;s also a lot of fun! You&apos;ll learn all about the activities you can perform with dogs to ensure they receive social, physical, emotional and cognitive stimulation at daycare. You&apos;ll study essential topics, from collection and drop-off services to the best locations to exercise dogs. You&apos;ll also learn how to plan fun activities that will engage your furry friends!</p>
                <p>At QC Pet Studies, the safety of dogs is of the utmost importance. You&apos;ll study the essential precautions you&apos;ll take to keep dogs safe. You&apos;ll be well prepared to provide every dog with an exciting, stimulating and safe experience as a dog daycare provider.</p>
                <p>Your clients will rest assured knowing their beloved pets will be returned happy and safe at the end of their stay with you.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {xlOrGreater && <div className="col-4"><Image
                src={ActivitiesImage}
                alt="lady walking three dogs"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              /></div>}
            </div>
          </AccordionItem>
          <AccordionItem heading="Part 3: Developing Your Services">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>As a dog-care provider, you can offer a huge range of valuable services to pet owners. In this part of your course, you&apos;ll learn how to develop standard operating procedures to ensure that you are always providing the best care possible for your furry friends. With detailed procedures in place, you&apos;ll be prepared to handle any situation you might encounter. Every detail is important when you&apos;re caring for someone&apos;s pet. You&apos;ll also discover how you can enrich the dog daycare experience by offering supplementary services, including transportation, training or grooming.</p>
                <p>You&apos;ll stand out as the best dog daycare in town if dog owners know you can take care of all of their pets&apos; needs.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {xlOrGreater && <div className="col-4"><Image
                src={ServicesImage}
                alt="lady removing a dog's collar at the beach"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              /></div>}
            </div>
          </AccordionItem>
          <AccordionItem heading="Part 4: Dog Daycare Business Training">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>Once you&apos;ve learned and practiced the skills you&apos;ll need to take care of dogs, you&apos;ll focus on developing your dog daycare business. In this optional part of your course, you&apos;ll learn how to turn your passion for working with dogs into a thriving career. You&apos;ll discover what it takes to start a business, from naming and registering your business, to selling your services. Honing these important business skills will help you to jumpstart your career and launch a successful business.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {xlOrGreater && <div className="col-4"><Image
                src={DogCareBusinessImage}
                alt="man writing at a desk with a Jack Russel Terrier on his lap"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              /></div>}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <GuaranteeSection className="bg-light" />

    <DDTutorSection />

    <style jsx>{`
      .courseContentIcon { color: #ccc; margin-bottom: 0.5rem; }
    `}</style>
  </>;
};

DogCarePage.getLayout = page => <DefaultLayout footerCTAType="care">{page}</DefaultLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices(courseCodes, location.countryCode, location.provinceCode);
  return { props: { location, price } };
};

export default DogCarePage;
