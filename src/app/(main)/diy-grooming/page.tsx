import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import type { FC, PropsWithChildren } from 'react';

import BichonCut from './bichon-frise-cut.jpg';
import GabriellaDarin from './gabriella-darin.png';
import HeroImg from './hero-bg.jpg';
import HeroImgMobile from './hero-image-mobile.jpg';
import MeaghanAubin from './meaghan-aubin.png';
import styles from './page.module.scss';
import PPAImg from './ppa-image-2.jpg';
// import HowItWorks from './how-it-works.png';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
// import { getData } from '@/lib/getData';

// const iconSize = 145;

export const metadata: Metadata = {
  title: 'Groom Your Own Dog at Home',
  description: 'If your goal is to confidently care for your own dogs at home, you can find expert-led online training through QC Pet Studies\' trusted partner, Paw Parent Academy.',
  alternates: { canonical: '/' },
};

let eventKey = 0;

const HomePage: PageComponent = () => {
  // const { countryCode, provinceCode } = getData();
  return (
    <>
      <section className="bg-light w-full position-relative mb-5" style={{ height: '500px' }}>
        <BackgroundImage src={HeroImg} objectPosition="100% 50%" mobile={{ src: HeroImgMobile, breakpoint: 'lg', objectPosition: '50% 100%' }} />
        <div className={`container ${styles.hero} h-100`}>
          <div className="row h-100">
            <div className="col-12 col-lg-7 d-flex align-items-center">
              <h1 className="mb-4 mb-lg-5 text-white">Do You Want to Groom Your Own Dog?</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3">
          <div className="row justify-content-center g-s mb-4">
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">Meet Our Partner&mdash;<br />Paw Parent Academy</h2>
              <p className="lead mb-4">If your goal is to confidently care for your own dogs at home, you can find expert-led online training through QC Pet Studies&apos; trusted partner, Paw Parent Academy. While QC courses are designed for students pursuing professional careers, Paw Parent Academy was created specifically for pet parents. Their expert-led programs deliver breed- and coat-specific tutorials, complete with step-by-step videos and printable guides, so you can safely groom your dog at home with professional-level confidence.</p>
              <p className="lead mb-3" style={{ fontWeight: 500 }}>This option is perfect if you:</p>
              <ul style={{ listStyleType: '"✓"', paddingLeft: '1em' }}>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Want to master the right grooming techniques for your dog&apos;s specific coat</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Prefer detailed video lessons you can replay anytime</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Want to maintain your dog&apos;s health and hygiene</li>
                <li className="mb-5" style={{ paddingLeft: '0.8em' }}>Care about style and comfort, but not breed-standard show cuts</li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-2" style={{ marginTop: '140px' }}>
              <Image src={PPAImg} alt="" className={`img-fluid ${styles.PPAImg}`} style={{ borderRadius: '25px', height: '430px', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="row justify-content-center g-s mb-4 mt-5">
            <div className="col-12 col-lg-6">
              <Image src={BichonCut} alt="" className={`img-fluid ${styles.BichonCut}`} style={{ borderRadius: '25px', height: '315px', objectFit: 'cover' }} />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-2">
              <p className="lead mb-4">Whether you&apos;re brushing out tangles, trimming around the eyes and paws, or giving your dog a full bath and cut, Paw Parent Academy makes it simple to follow along and apply the techniques right away.</p>
              <ul style={{ listStyleType: '"✓"', paddingLeft: '1em' }}>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>    Learn through step-by-step video tutorials with an industry-leading groomer</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>    Access printable guides to refer to while you work</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>    Master practical &quot;pet cuts&quot; that are easy to maintain, safe to perform, and look great</li>
              </ul>
              <div className="text-left mt-5">
                <Link href="https://www.pawparentacademy.com/" target="blank" rel="noopener noreferrer"><button className="btn btn-primary btn-lg mb-5" style={{ borderRadius: '25px' }}>Learn More at Paw Parent Academy</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container text-center col-lg-6">
          <p className="lead mb-4" style={{ fontWeight: 600 }}>&quot;Grooming my dog at home doesn&apos;t feel like an overwhelming proposition anymore. I feel confident and equipped to give my dogs the care they need. I highly recommend this course!&quot;</p>
          <Image src={MeaghanAubin} alt="" className="img-fluid mb-3" style={{ borderRadius: '50%', maxWidth: '120px', height: 'auto' }} />
          <p className="mb-0" style={{ fontWeight: 700 }}>Meaghan Aubin</p>
          <p className="mb-0">Paw Parent</p>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">Do You Have More<br />Than One Dog?</h2>
              <p className="lead" style={{ marginBottom: '70px', marginRight: '30px' }}>If you have more than one dog at home, want to learn professional show cuts, or don&apos;t see your dog&apos;s breed covered at Paw Parent Academy, QC&apos;s Dog Grooming Certification Course could be the perfect fit. This professional-level program gives you the skills and confidence to groom any dog like a pro.</p>
              <ul style={{ listStyleType: '"✓"', paddingLeft: '1em' }}>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Master breed-standard cuts for a wide variety of dog breeds</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Work with a wide range of coat types and trimming methods</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Receive a bonus grooming kit with professional-grade grooming tools</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Learn step-by-step through comprehensive lessons, detailed video tutorials and hands-on assignments</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Get personalized feedback from certified groomers to refine your skills</li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-2" style={{ marginTop: '85px' }}>
              <p className="lead mb-4" style={{ fontWeight: 500 }}>This course is right for you if you:</p>
              <ul style={{ listStyleType: '"✓"', paddingLeft: '1em' }}>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Aim to learn coat-specific techniques and cuts for multiple dog breeds</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Are eager to learn breed-standard cuts and advanced styling</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Want to groom your own dogs with professional precision</li>
                <li className="mb-3" style={{ paddingLeft: '0.8em' }}>Plan to groom dogs beyond your own—friends, family, or clients</li>
              </ul>
              <div className="text-left mt-5">
                <Link href="https://www.qcpetstudies.com/certification-courses/dog-grooming" target="blank" rel="noopener noreferrer"><button className="btn btn-primary btn-lg mb-5" style={{ borderRadius: '25px' }}>Learn More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light mt-5">
        <div className="container text-center col-lg-6">
          <p className="lead mb-4" style={{ fontWeight: 600 }}>&quot;I loved everything about the course because it was affordable, the online format worked perfectly for me, and it included a grooming kit so I could start practicing right away.&quot;</p>
          <Image src={GabriellaDarin} alt="" className="img-fluid mb-3" style={{ borderRadius: '50%', maxWidth: '120px', height: 'auto' }} />
          <p className="mb-0" style={{ fontWeight: 700 }}>Gabriella Darin</p>
          <p className="mb-0">Dog Grooming Student</p>
        </div>
      </section>
      <section className="mb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem eventKey={eventKey++} heading="How do I know whether Paw Parent Academy or QC Pet Studies is right for me?">
                <div className="row text-left">
                  <p>If your goal is to safely and confidently groom your own dog at home, Paw Parent Academy is designed for you. Their DIY grooming courses are coat-specific, focused on practical &quot;pet cuts&quot; and easy-to-follow maintenance techniques.</p>
                  <p>If you&apos;d like to learn professional grooming skills, master breed-standard cuts, or plan to groom dogs beyond your own, QC Pet Studies&apos; Dog Grooming Certification Course is the better choice.</p>
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem eventKey={eventKey++} heading="Can I really learn dog grooming online?">
                <div className="row text-left">
                  <p>Absolutely. Both Paw Parent Academy and QC Pet Studies are designed with step-by-step video tutorials and detailed guides you can follow at your own pace. You&apos;ll learn by watching experienced groomers demonstrate techniques and then practicing them on your own dog. With QC Pet Studies, you&apos;ll also complete hands-on assignments and receive personalized feedback from certified groomers to refine your skills.</p>
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem eventKey={eventKey++} heading="Do I need grooming experience or special equipment to start?">
                <div className="row text-left">
                  <p>No prior experience is needed for either program. Paw Parent Academy will walk you through the basic tools and techniques you&apos;ll need for at-home care. QC Pet Studies also includes a bonus professional grooming kit to help you complete your coursework and start your career.</p>
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem eventKey={eventKey++} heading="What will I be able to do after completing the course?">
                <div className="row text-left">
                  <p>With Paw Parent Academy, you&apos;ll gain the skills and confidence to keep your own dog healthy, comfortable, and looking their best—whether that means regular brushing, trimming, or full pet cuts.</p>
                  <p>With QC Pet Studies, you&apos;ll graduate with professional-level expertise, ready to groom multiple breeds, perform advanced styles, and even launch a grooming career.</p>
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem eventKey={eventKey++} heading="What if I start with DIY grooming and later decide to make it my career?">
                <div className="row text-left">
                  <p>You can begin with Paw Parent Academy to build confidence grooming your own dog. If you later decide to pursue professional training, your Paw Parent Academy tuition can be applied toward QC Pet Studies&apos; Dog Grooming Certification Course. You won&apos;t lose your initial investment, and you&apos;ll have a smooth transition into career-level training.</p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
