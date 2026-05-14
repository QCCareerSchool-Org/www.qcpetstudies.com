import type { FC } from 'react';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { Client } from './client';
import DTBackgroundImage from './hero-lrg.jpg';
import { OntarioOnlySection } from './ontarioOnlySection';
import { CourseOutlineSection } from './outlineSection';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseSchema } from '@/components/courseSchema';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import { TestimonialAlexaAnnCesari } from '@/components/testimonials/alexaAnnCesari';
import { TestimonialCherylLovette } from '@/components/testimonials/cherylLovette';
import { TestimonialLorisTiede } from '@/components/testimonials/lorisTiede';
import { TutorSectionDT } from '@/components/tutorSectionDT';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { externship } from '@/lib/externship';
interface Props {
  price: Price;
  enrollPath: string;
  courseCodes: CourseCode[];
  countryCode: string;
  provinceCode: string | null;
  dtPrice: Price;
  dePrice: Price;
}

const iconSize = 36;
let eventKey = 0;

export const DogTrainingBase: FC<Props> = ({ price, enrollPath, courseCodes, countryCode, provinceCode, dtPrice, dePrice }) => (
  <>
    <CourseSchema courseCode={courseCodes[0]} showPrice />
    {externship(countryCode, provinceCode) && (
      <div style={{ background: 'red', color: 'white', width: '100%', padding: '0.5rem' }}>
        <div className="container text-center">
          <p className="lead fw-normal mb-0">NEW: Now Available with an In-Person Externship!</p>
        </div>
      </div>
    )}
    <section className="bg-dark">
      <BackgroundImage src={DTBackgroundImage} priority />
      <div className="container text-start">
        <div className="row">
          <h1>Dog Training</h1>
          <h2 className="h1 mb-5">Course</h2>
          <h3 className="mb-5">Become a Certified Dog Trainer</h3>
          <div className="d-flex gap-1">
            <a href={`https://enroll.qcpetstudies.com${enrollPath}`}><button className="btn btn-primary me-3 btn-lg">Enroll Now</button></a>
            <a href="#tuition"><button className="btn btn-outline-light btn-lg">Tuition & Payment Plans</button></a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <Client countryCode={countryCode} provinceCode={provinceCode} dtPrice={dtPrice} dePrice={dePrice} enrollPath={enrollPath} />
        </div>
      </div>
    </section>

    {price.promoDiscount > 0
      ? <PriceSectionWithDiscount courses={courseCodes} price={price} doubleGuarantee enrollPath={enrollPath} />
      : <PriceSection courses={courseCodes} price={price} doubleGuarantee enrollPath={enrollPath} />
    }

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
            <h3>Newest <br className="d-none d-md-inline d-lg-none" />Course Materials</h3>
            <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
            <h3>Personalized <br className="d-none d-md-inline d-lg-none" />Feedback</h3>
            <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
            <h3>Lifetime <br className="d-none d-md-inline d-lg-none" />Access</h3>
            <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-lighter">
      <div className="container text-center">
        <h2 className="text-center mb-4">QC Success Stories</h2>
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-9 col-lg-6 col-xl-4">
            <TestimonialAlexaAnnCesari />
          </div>
          <div className="col-12 col-md-9 col-lg-6 col-xl-4">
            <TestimonialCherylLovette />
          </div>
          <div className="col-12 col-md-9 col-lg-6 col-xl-4">
            <TestimonialLorisTiede />
          </div>
        </div>
      </div>
    </section>

    <div id="outline" className="sectionAnchor" />
    <CourseOutlineSection className="bg-white" />

    <TutorSectionDT className="bg-lighter" />

    {countryCode === 'CA' && provinceCode === 'ON' && <OntarioOnlySection />}

    <GuaranteeSection className="bg-light" />

    <VirtualCommunitySection />

    <section>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="How can I learn dog training online?" isFAQ={true}>
                  <div className="row text-left">
                    <p>QC Pet Studies makes it easy to learn dog training from home with a flexible, self-paced online program. You&apos;ll study through:</p>
                    <ul className="ps-5">
                      <li>Step-by-step video tutorials</li>
                      <li>Interactive reading materials</li>
                      <li>Hands-on assignments with real dogs</li>
                    </ul>
                    <p>Students upload assignment videos that demonstrate their dog training skills, and receive personalized feedback from professional dog trainers. The course covers everything from canine behavior to obedience training, correcting behavior and using positive reinforcement techniques.</p>
                    <p>When you graduate, you&apos;ll earn a professional Dog Trainer certificate that demonstrates your skills and prepares you for a career in the pet industry.</p>
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="Do I need prior training or experience as a dog trainer before taking this course?" isFAQ={true}>
                  <div className="row text-left">
                    <p>No prior professional experience is required! QC&apos;s online Dog Trainer course teaches everything you need to know from the ground up. While having experience with your own dog(s) can be helpful, it&apos;s not necessary to succeed.</p>
                    <p>You&apos;ll learn science-based training methods, canine behavior, and techniques to teach dogs effectively and humanely.</p>
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="How long will it take to complete my online dog training class?" isFAQ={true}>
                  <div className="row text-left">
                    <p>With QC's online courses, you work at your own pace. You decide how much time per week you want to spend developing your training skills. You can complete your dog trainer course and begin booking clients within three months. If you prefer to take your time, you have a full year to complete the course.</p>
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="What methods will I learn in QC's online dog trainer course?" isFAQ={true}>
                  <div className="row text-left">
                    <p>QC&apos;s dog training program is based on science-backed, humane training techniques. You&apos;ll learn to:</p>
                    <ul className="ps-5">
                      <li>Analyze canine behavior and teach dogs effectively</li>
                      <li>Train with positive reinforcement</li>
                      <li>Build trust and respect between handler and dog</li>
                    </ul>
                  </div>
                </AccordionItem>
              </Accordion>
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="Where can I work as a dog trainer after I finish this course?" isFAQ={true}>
                  <div className="row text-left">
                    <p>QC&apos;s Dog Trainer course prepares you for success in various career paths, including:</p>
                    <ul className="ps-5">
                      <li>Working alongside experienced trainers</li>
                      <li>Establishing an independent dog training business</li>
                      <li>Teaching obedience or puppy classes</li>
                      <li>Contributing to dog daycares, boarding facilities, or animal shelters</li>
                    </ul>
                    <p>According to the Bureau of Labor Statistics, the average annual salary for a dog trainer is approximately $45,000, with experienced trainers earning more than $65,000 per year.</p>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
