import { NextPage } from 'next';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';

import { SEO } from '../../components/SEO';
import StudentDiscountBackground from '../../images/backgrounds/student-discounts-bg.jpg';
import DaySmartPetLogo from '../../images/logos/day-smart-pet.svg';
import DirectLogo from '../../images/logos/direct-animal-products.jpg';
import EpiPetLogo from '../../images/logos/epi-pet.jpg';
import MasonCompanyLogo from '../../images/logos/mason-company.jpg';
import MyTimeLogo from '../../images/logos/mytime.svg';
import SenseiLogo from '../../images/logos/sensei-shear-systems.jpg';
import SharkFinLogo from '../../images/logos/shark-fin.jpg';
import ZenDogLogo from '../../images/logos/zen-dog.jpg';

const StudentDiscountsPage: NextPage = () => (
  <>
    <SEO
      title="Student Discounts"
      description="This is Student Discount page"
      canonical="/about/student-discounts"
    />

    <section id="top" className="bg-dark">
      <Image src={StudentDiscountBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="Yorkie sticking out its tongue" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1>QC Student Discounts</h1>
            <p className="lead">QC partners with top quality vendors to provide amazing discounts for our students.</p>
            <p className="mb-0">Below you'll find a list of QC's preferred partners who offer special discounts to QC Pet Studies' students and graduates. In most cases, these offers are available to you as soon as you enroll!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-4">Pet Business <strong>Discounts</strong></h2>
            <Supplier imageSrc={DaySmartPetLogo} imageWidth={170} imageHeight={46} imageAlt="DaySmart Pet" className="mb-5">
              <h3>DaySmart Pet</h3>
              <p>DaySmart Pet develops, delivers, and supports powerful business management software that runs thousands of pet businesses around the world. You'll be able to run your dog grooming business efficiently and grow your business with unique software features!</p>
              <p className="mb-0"><em>QC Pet Studies students receive a 50% off discount for 2 months</em></p>
            </Supplier>
            <Supplier imageSrc={MyTimeLogo} imageWidth={170} imageHeight={69} imageAlt="MyTime" className="mb-5">
              <h3>MyTime</h3>
              <p>MyTime is the leading cloud based scheduling and marketing application for local businesses. Features include online booking, automated email and SMS marketing, full point of sale, reputation management, reports and analytics, and real time messaging with clients. Use MyTime to engage and retain customers, drive operational efficiency and grow your business!</p>
              <p className="mb-0"><em>QC Pet Studies students receive 30% off their purchase</em></p>
            </Supplier>
            <Supplier imageSrc={MasonCompanyLogo} imageWidth={170} imageHeight={51} imageAlt="Mason Company" className="mb-5">
              <h3>Mason Company</h3>
              <p>Mason Company is unique in its ability to design and build any size animal housing solution for dogs, cats and other animals. Their exclusive focus on animal enclosure solutions since 1892 means they deliver high quality animal enclosure solutions for even the toughest environments. They have installed more kennel systems than any other company in the world!</p>
              <p className="mb-0"><em>QC Pet Studies students and graduates receive 15% off their purchase</em></p>
            </Supplier>
            <h2 className="mb-4">Grooming Tool <strong>Discounts</strong></h2>
            <Supplier imageSrc={SharkFinLogo} imageWidth={170} imageHeight={65} imageAlt="Shark Fin" className="mb-5">
              <h3>Shark Fin</h3>
              <p>The Shark Fin Shear Company aims to offer you the most technologically advanced shears in the world. Their patented technology has been tested for over 17 years throughout the world and is proven to dramatically help you with your scissor work.</p>
              <p className="mb-0"><em>QC Pet Studies students receive a 20% off discount on shears</em></p>
            </Supplier>
            <Supplier imageSrc={SenseiLogo} imageWidth={170} imageHeight={42} imageAlt="Sensei" className="mb-5">
              <h3>Sensei</h3>
              <p>Sensei consistently designs and manufactures extremely ergonomic professional shears. With over thirty years of high performance blade technology, Sensei continues to strive to be an innovative force in the industry. They offer a vast collection of high quality Japanese shears including neutral grip crane handle shears, swivel shears, texture thinning shears and seamless blending shears that leave no line and comb out with zero drag.</p>
              <p className="mb-0"><em>QC Pet Studies students receive $25 or 10-15% (whichever is greater) off any shears purchased online, as well as free shipping within the USA. Students also receive an additional discount if they purchase multiple shears</em></p>
            </Supplier>
            <Supplier imageSrc={EpiPetLogo} imageWidth={170} imageHeight={81} imageAlt="Epi-Pet" className="mb-5">
              <h3>Epi-Pet</h3>
              <p>Epi-Pet offers a variety of products that can help the professional groomer provide a complete and healthy groom and promote overall health for their clients' pets. The Epi Pet Shampoo is multifunctional and promotes healthy skin and coat. The Epi Pet Ear Cleaner cleanses, enriches and refreshes the ear by gently removing dirt, grime and wax.</p>
              <p className="mb-0"><em>QC Pet Studies students receive 50% off products purchased on the Epi-Pet website</em></p>
            </Supplier>
            <Supplier imageSrc={DirectLogo} imageWidth={170} imageHeight={49} imageAlt="Direct Animal Products" className="mb-5">
              <h3>Direct Animal Products</h3>
              <p>Direct Animal Products supplies tubs, grooming tables and cages that minimize back, neck and shoulder strain. They understand that proper body mechanics along with ergonomic grooming equipment is absolutely essential to the longevity of a pet stylist. Their equipment promises to perform well and is designed with your comfort in mind.</p>
              <p className="mb-0"><em>QC Pet Studies students receive 10% off their online purchase</em></p>
            </Supplier>
            <Supplier imageSrc={ZenDogLogo} imageWidth={170} imageHeight={174} imageAlt="Zen Dog">
              <h3>ZenDog</h3>
              <p>ZenDog sells earthly inspired aromatherapy shampoos, sprays, and gels that never contain synthetic fragrances, colors, bleaches, or dyes. They're formulated exclusively with 100% pure, therapeutic class essential oils. Their products are created by professional groomers for professional groomers.</p>
              <p className="mb-0"><em>QC Pet Studies students receive an Aromatherapy Package worth $160 for only $99. The package includes 10 different aromatherapy healing shampoos, sprays and gels</em></p>
            </Supplier>
          </div>
        </div>
      </div>
    </section>
  </>
);

type SupplierProps = {
  className?: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  children: ReactNode;
};

const Supplier = ({ className, imageSrc, imageWidth, imageHeight, imageAlt, children }: SupplierProps): ReactElement => (
  <div className={`d-flex flex-column flex-lg-row align-items-center ${className ? className : ''}`}>
    <div className="mb-2 mb-lg-0 me-lg-5 flex-shrink-0">
      <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />
    </div>
    <div className="text-lg-start">
      {children}
    </div>
  </div>
);

export default StudentDiscountsPage;
