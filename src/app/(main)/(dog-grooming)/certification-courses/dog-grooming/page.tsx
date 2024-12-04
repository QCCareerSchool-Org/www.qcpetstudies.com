import type { Metadata } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

import { CertificationSection } from './CertificationSection';
import { IncludedSection } from './IncludedSection';
import { TestimonialsSection } from './TestimonialsSection';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import CertificationGoldImage from '@/components/certifications/IDGP-certification-gold.svg';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import { TutorSectionDG } from '@/components/tutorSectionDG';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import DogGroomingBackground from '@/images/backgrounds/bichon-frise-getting-haircut.jpg';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { formatPrice } from '@/lib/formatPrice';
import { getData } from '@/lib/getData';

const headerIconSize = 20;

const courseCodes = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Dog Grooming Course',
  description: 'Become a Certified Dog Groomer with Interactive Online Training!',
  alternates: { canonical: '/certification-courses/dog-grooming' },
};

const DogGroomingPage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  let eventKey = 0;

  return (
    <>
      <section id="top" className="bg-dark">
        <BackgroundImage src={DogGroomingBackground} priority objectPosition="right" />
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
            <h1>Dog Grooming Course</h1>
            {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c=dg"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
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

      <CertificationSection />

      <PriceSection courses={courseCodes} price={price} doubleGuarantee />

      <IncludedSection />

      <TestimonialsSection className="bg-lighter" />

      <div id="outline" className="sectionAnchor" />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4 text-center">
              <h2>Course <strong>Outline</strong></h2>
              <p className="lead">The Dog Grooming Course is split into 5 parts, each containing individual training units.</p>
              <p>You must complete a unit with a satisfactory grade before you can submit assignments for the next unit.</p>
            </div>
          </div>
          <Accordion defaultActiveKey={0}>
            <AccordionItem eventKey={eventKey++} heading="Introduction to Professional Grooming">
              <p>The first units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you'll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
              <p>While you complete these units we recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
              <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Dog First Aid Course">
              <p>In order to provide you with the resources to learn your craft safely, your grooming course also comes with complimentary training on dog first aid. You'll learn about emergency situations that may occur in a grooming environment so that you'll be prepared to respond calmly and effectively in any emergency.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Bathing and Brushing">
              <p>Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved preparing for a groom. In these units, you'll cover essential tasks, including nail trimming, ear cleaning, brushing, de-matting, bathing, and drying. You'll study coat types and learn how to work with different dog breeds to keep each and every dog looking and feeling their best. You'll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Pet Cuts and Advanced Breed Styling">
              <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs. You'll learn to complete the most popular pet cuts and advanced breed styles through a series of detailed instructional videos with certified Master Groomers.</p>
              <p>You'll complete practicum units designed to help you hone your technique and receive feedback on these essential skills. The units within the practicum involve practical assignments that draw on the content you've mastered throughout the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Dog Grooming Business Essentials">
              <h4>(Optional Unit)</h4>
              <p>After completing your practicum you can choose to complete the optional Business Essentials unit. This unit will help you develop the skills you need to run your own successful dog grooming business, from building your brand to constructing a business plan to setting your prices.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <GuaranteeSection className="bg-light" double />

      <VirtualCommunitySection />

      <TutorSectionDG />
    </>
  );
};

export default DogGroomingPage;
