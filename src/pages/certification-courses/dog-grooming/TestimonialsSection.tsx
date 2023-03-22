import Image, { StaticImageData } from 'next/image';
import type { FC, PropsWithChildren } from 'react';

import AprilCostigan from './images/april-costigan.jpg';
import CaseyBechard from './images/casey-bechard.jpg';
import HailieSavage from './images/hailie-savage.jpg';
import KaylaTorraville from './images/kayla-torraville.jpg';
import MelodyMason from './images/melody-mason.jpg';
import NickiHughes from './images/nicki-hughes.jpg';

type Props = {
  className?: string;
};

const imageWidth = 256;
const imageHeight = 144;

export const TestimonialsSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container text-center">
      <h2 className="text-center mb-4">QC Success Stories</h2>
      <div className="row justify-content-center">
        <Col className="mb-4">
          <TestimonialImage src={KaylaTorraville} alt="Kayla Torraville" />
          <p>QC Pet Studies allowed me to pursue my dream while at home. I learned a lot of new skills and techniques. My tutor was great and very knowledgeable. The course material was very detailed as well and easy to learn from despite it being all virtual. I would recommend it to everyone.</p>
          <Attributation name="Kayla Torraville" />
        </Col>
        <Col className="mb-4">
          <TestimonialImage src={AprilCostigan} alt="April Costigan" />
          <p>The Dog Grooming and First Aid courses are fantastic. I learned so much from Lisa and Paddy. I've officially started my own business, Sparkling Dog Grooming. I've constructed an entire professional grooming studio in my basement and have started building a very nice client list.</p>
          <Attributation name="April Costigan" />
        </Col>
        <Col className="mb-4">
          <TestimonialImage src={HailieSavage} alt="Hailie Savage" />
          <p>The tutors were extremely helpful and the course materials were very well put together and extremely helpful! The critique was fantastic. I highly recommend the program!</p>
          <Attributation name="Hailie Savage" />
        </Col>
        <Col className="mb-4 mb-xl-0">
          <TestimonialImage src={MelodyMason} alt="Melody Mason" />
          <p>The Dog Grooming course was extremely helpful. The video tutorials were very well done, and they made learning to groom a dog very clear. The tutor&apos;s notes were also very helpful. I feel very confident in my skills after finishing the course and starting my career.</p>
          <Attributation name="Melody Mason" />
        </Col>
        <Col className="mb-4 mb-lg-0 mb-xl-0">
          <TestimonialImage src={CaseyBechard} alt="Casey Bechard" />
          <p>The tutors were very well-spoken and gave great instructions. There was never a time when I was confused. The hands-on videos had lots of visual content and showed you just about everything you needed to know for your assignments.</p>
          <Attributation name="Casey Bechard" />
        </Col>
        <Col className="mb-4 mb-lg-0 mb-xl-0">
          <TestimonialImage src={NickiHughes} alt="NickiHughes" />
          <p>I was concerned about how much one could actually learn about a hands-on profession online; however, as I got further in and watched the videos, I saw how in-depth they are and how they really take the time to show you the skills you need to know to complete the course.</p>
          <Attributation name="Nicki Hughes" />
        </Col>
      </div>
    </div>
  </section>
);

const Col: FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <div className={`col-12 col-md-9 col-lg-6 col-xl-4 ${className ?? ''}`}>{children}</div>
);

const TestimonialImage: FC<{ src: StaticImageData; alt: string }> = ({ src, alt }) => (
  <div className="mb-3">
    <Image src={src} width={imageWidth} height={imageHeight} alt={alt} />
  </div>
);

const Attributation: FC<{ name: string }> = ({ name }) => (
  <p className="lead"><strong>{name}, <span className="gold">IDGP&trade;</span></strong></p>
);
