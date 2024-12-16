import type { Metadata } from 'next';

import ContactByChatImage from './contact-chat.svg';
import ContactByEmailImage from './contact-email.svg';
import ContactByPhoneImage from './contact-headset.svg';
import ContactUsBackground from './hero-bg.jpg';
// import ScheduleCallImage from './schedule-call-contact.png';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { EmailLink } from '@/components/emailLink';
import { LivechatLink } from '@/components/livechatLink';
import { TelephoneLink } from '@/components/telephoneLink';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'How to contact QC Pet Studies',
  alternates: { canonical: '/contact-us' },
};

const ContactUsPage: PageComponent = () => {
  const { countryCode } = getData();

  return (
    <>
      <section className="bg-dark text-light">
        <BackgroundImage src={ContactUsBackground} priority />
        <div className="container">
          <h1 className="fw-normal"><strong>Contact</strong><br />QC Pet Studies</h1>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2>We Want to Hear From You</h2>
              <p className="mb-0">Whether you are a prospective student wondering about QC's courses or tuition, or a current student with questions about an assignment, we're here to help you in any way we can. Contact QC's student support specialists by phone, email, or live chat!</p>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
              <div className="px-lg-4">
                <ContactByPhoneImage height="80" width="64" alt="telephone icon" style={{ maxWidth: '100%' }} />
                <h3>By Phone</h3>
                <p className="mb-lg-4"><TelephoneLink countryCode={countryCode} /></p>
                <p className="mb-0">Speak with a student advisor about enrolling with QC or for assistance with your courses and assignments.</p>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
              <div className="px-lg-4">
                <ContactByEmailImage height="80" width="64" alt="email icon" style={{ maxWidth: '100%' }} />
                <h3>By Email</h3>
                <p className="mb-lg-4"><EmailLink /></p>
                <p className="mb-0">Send us an email at any time and we'll get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4">
              <div className="px-lg-4">
                <ContactByChatImage height="80" width="64" alt="chat icon" style={{ maxWidth: '100%' }} />
                <h3>By Live Chat</h3>
                <p className="mb-lg-4"><LivechatLink>Click here to chat</LivechatLink></p>
                <p className="mb-0">Do you have a question you want to be answered right away? Our student support specialists are ready to chat!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-light">
        <div className="container text-center text-lg-start">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-xl-7 mb-4 mb-lg-0">
              <h2><strong>Schedule a Call</strong> with a Student Advisor</h2>
              <p className="lead">Would you like to speak to a student advisor about your options with QC Pet Studies?</p>
              <p>Please note: QC's offices are not open 24/7. We'll do our best to call you at the specific times you request, but if our offices will be closed at the time you request, we'll contact you via email to reschedule!</p>
              <a href=""><button className="btn btn-outline-secondary mb-4 mb-lg-0">Schedule a Call</button></a>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <Image src={ScheduleCallImage} layout="responsive" alt="dog looking at a phone" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ContactUsPage;
