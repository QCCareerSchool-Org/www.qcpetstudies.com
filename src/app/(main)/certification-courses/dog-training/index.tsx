import Image from 'next/image';
import type { FC } from 'react';

import CertificationBgImage from './cert-bg.jpg';
import { Client } from './client';
import DTBackgroundImage from './hero-lrg.jpg';
import CertificationLogo from './IDGP-certification-gold.svg';
import { KimSection } from './kimSection';
import { OntarioOnlySection } from './ontarioOnlySection';
import { CourseOutlineSection } from './outlineSection';
import WhyQCImage from './why-choose-qc.jpg';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseSchema } from '@/components/courseSchema';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { Overlay } from '@/components/overlay';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { TutorSectionDT } from '@/components/tutorSectionDT';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  price: Price;
  enrollPath: string;
  courseCodes: CourseCode[];
  countryCode: string;
  provinceCode: string | null;
  dtPrice: Price;
  dePrice: Price;
}

let eventKey = 0;
const testimonialIds = [ 'TD-0001', 'TD-0002', 'TD-0003', 'TD-0011', 'TD-0012', 'TD-0013' ];

export const DogTrainingBase: FC<Props> = ({ enrollPath, courseCodes, dtPrice, dePrice, countryCode, provinceCode }) => (
  <>
    <CourseSchema courseCode={courseCodes[0]} showPrice />
    <div style={{ background: 'red', color: 'white', width: '100%', padding: '0.5rem' }}>
      <div className="container text-center">
        <p className="lead fw-normal mb-0">NEW: Now Available with an In-Person Externship!</p>
      </div>
    </div>
    <section id="#top" className="bg-dark">
      <BackgroundImage src={DTBackgroundImage} priority />
      <Overlay backgroundColor="rgba(0,0,0,0.4)" className="d-md-none" />
      <div className="container text-center text-md-start">
        <div className="row mb-4">
          <div className="col-12 col-md-8 col-lg-6 offset-lg-1">
            <h1 className="mb-4 text-shadow">Dog Training Course</h1>
            {dtPrice.plans.part.deposit > 0 && <h4 className="mb-5">Get Started for Only <strong>{dtPrice.currency.symbol}{formatPrice(dtPrice.plans.part.deposit)}</strong></h4>}
            <div className="d-flex flex-column flex-sm-row gap-2">
              <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="btn btn-primary">Enroll Now</a>
              <a href="#tuition" className="btn btn-light">Tuition & Payment Plans</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Client countryCode={countryCode} dtPrice={dtPrice} dePrice={dePrice} />
    <section>
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-6 text-center">
            <Image src={WhyQCImage} className="img-fluid" style={{ width: 480, marginTop: '-10%' }} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-3">Why Choose QC Pet Studies</h2>
            <h3>Master a Science-Backed Approach to Training</h3>
            <p>Develop professional-level skills with comprehensive, expert-designed training that teaches proven, science-backed dog training methods you can confidently apply in real-world situations.</p>
            <h3>Personalized Learn with One-on-One Mentorship</h3>
            <p>At QC, you'll never learn alone. Your professional dog training mentor will provide personalized audio feedback and guidance on your assignments to help you build confidence and refine your skills.</p>
            <h3>Lifetime Enjoy Lifetime Access to Your Course</h3>
            <p>Revisit your training whenever you need it. As a QC student, you'll receive lifetime access to your course materials, business templates, student resources, and exclusive industry discounts.</p>
            <h3>Choose a Payment Plan that Works for You</h3>
            <p className="mb-0">With affordable tuition and flexible payment options, QC makes it easy to pursue your dog training education on a schedule and budget that work for you.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <BackgroundImage src={CertificationBgImage} />
      <div className="container text-white text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="mb-4">
              <Image src={CertificationLogo} alt="IDGP Certification Logo" />
            </div>
            <h2 className="text-white">Your International Dog Training Professional Certification</h2>
            <p>Once you graduate from your online dog training course, you'll earn your International Dog Training Professional (IDTP) certification — a professional credential that demonstrates your training, knowledge, and ability to safely work with dogs and deliver effective, professional training services. Your certification never expires, and you'll have lifetime access with no renewal fees or annual dues required.</p>
            <p>If you complete the <strong>Externship Track</strong>, you'll also receive an <strong>additional certificate of completion</strong> recognizing your additional hands-on training and real-world salon experience!</p>
            <p className="text-warning mt-4"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} />
    <div id="outline" className="sectionAnchor" />
    <CourseOutlineSection className="bg-light" />
    <KimSection />
    <TutorSectionDT className="bg-lighter" />

    <GuaranteeSection className="bg-light" />
    {countryCode === 'CA' && provinceCode === 'ON' && <OntarioOnlySection />}
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
                    <p>Now, QC Pet Studies offers two flexible ways to learn dog training, so you can customize your training to fit your needs:</p>
                    <ol className="ms-3">
                      <li><strong>Online Track:</strong> Learn from home through step-by-step video tutorials, reading materials, and hands-on assignments working with dogs. Practice techniques on real dogs, upload photos or videos of your work, and receive personalized feedback from professional groomers.</li>
                      <li><strong>Externship Track:</strong> Gain real-world experience by completing part of your training working in a professional setting and gaining practical experience under the guidance of experienced trainers, while still completing your online coursework.</li>
                    </ol>
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
