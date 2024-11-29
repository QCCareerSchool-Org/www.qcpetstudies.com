import Image, { StaticImageData } from 'next/image';
import { ContactLinkSection } from './ContactLinkSection';
import { PageComponent } from '@/app/serverComponent';

import { SEO } from '@/components/SEO';
import ContactUsBackground from '@/images/backgrounds/contact-us-bg.jpg';
import ScheduleCallImage from '@/images/schedule-call-contact.png';

const ContactUsPage: PageComponent = () => {

  return <>
    <SEO
      title="Contact Us"
      description="How to contact QC Pet Studies"
      canonical="/contact-us"
    />

    <section id="top" className="bg-dark text-light">
      <Image
        src={ContactUsBackground as StaticImageData}
        placeholder="blur"
        alt="happy dog"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container">
        <h1 className="fw-normal"><strong>Contact</strong><br />QC Pet Studies</h1>
      </div>
    </section>

    <ContactLinkSection />

    <section className="bg-light">
      <div className="container text-center text-lg-start">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xl-7 mb-4 mb-lg-0">
            <h2><strong>Schedule a Call</strong> with a Student Advisor</h2>
            <p className="lead">Would you like to speak to a student advisor about your options with QC Pet Studies?</p>
            <p>Please note: QC's offices are not open 24/7. We'll do our best to call you at the specific times you request, but if our offices will be closed at the time you request, we'll contact you via email to reschedule!</p>
            <a href=""><button className="btn btn-outline-secondary mb-4 mb-lg-0">Schedule a Call</button></a>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <Image src={ScheduleCallImage as StaticImageData} layout="responsive" alt="dog looking at a phone" />
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default ContactUsPage;
