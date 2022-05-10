import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
import { FaBriefcase, FaClipboard, FaRegFileAlt, FaRss, FaTags } from 'react-icons/fa';

import { SEO } from '../../components/SEO';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import ReviewDogGroomingCourse from '../../images/a-review-of-dog-grooming-course.jpg';
import AssociationLogo from '../../images/association-logo.png';
import CareerBackground from '../../images/backgrounds/your-dog-grooming-carrer.jpg';
import MobileGroomerImage from '../../images/become-a-mobile-dog-groomer.jpg';
import CompassIcon from '../../images/compass.svg';
import DogGroomingAssociations from '../../images/dog-grooming-associations.jpg';
import ExploreDogIndustryImage from '../../images/explore-the-dog-industry.jpg';
import OwnDogGroomingSaloon from '../../images/run-your-own-dog-grooming-salon.jpg';
import WorkFromHomeImage from '../../images/work-as-a-dog-groomer-from-home.jpg';
import WorkSaloonImage from '../../images/work-for-a-grooming-salon-or-pet-retailer.jpg';

const DogGroomingCareerPage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <>
      <SEO
        title="Your Dog Grooming Career"
        description="There are different career paths a professional dog groomer can take. Choose the path that's right for you!"
        canonical="/resources/your-dog-grooming-career"
      />

      <section id="top" className="bg-dark">
        <Image src={CareerBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="groomer trimming a dog's hair" priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="mb-4"><Image src={CompassIcon as StaticImageData} alt="Compass Icon" /></div>
              <h1>Your Dog Grooming Career</h1>
              <p className="lead mb-4">Career Paths for Professional Dog Groomers</p>
              <p className="mb-0">Dog grooming is a diverse industry with a variety of exciting career possibilities. Whether you enjoy working from home or aspire to open your own business, you're sure to find a career path that works for you.</p>
            </div>
          </div>
        </div>
      </section>

      <CareerSection
        title="Run Your Own Dog Grooming Salon"
        subtitle="Be Your Own Boss!"
        imgSrc={OwnDogGroomingSaloon}
        imgAlt="groomer bathing a dog"
        text="Dog grooming is a great industry for aspiring entrepreneurs who want to run the show. When you enroll in the Dog Grooming course, you’ll also be trained in the essentials of running a dog grooming business. This optional training prepares you to launch your own business and grow your clientele."
      />

      <CareerSection
        title="Work for a Grooming Salon or Pet Retailer"
        imgSrc={WorkSaloonImage}
        imgAlt="groomer cutting a dog's hair"
        text="From independent salons to major pet retailers, a skilled dog groomer is always in demand. If your goal is to work for an established grooming salon or as an in-house groomer at a retailer, a solid dog grooming education will be a huge asset. You’ll stand out as a candidate who has the skills and dedication to get the job done properly and safely."
        className="bg-light"
      />

      <CareerSection
        title="Work as a Dog Groomer from Home"
        subtitle="Want to cut the commute?"
        imgSrc={WorkFromHomeImage}
        imgAlt="dog having its nails trimmed"
        text="QC Pet Studies prepares you to start a grooming business in the comfort of your home. You’ll be able to run your own business and set your own hours without worrying about additional retail and location costs. Work part-time or full-time, the choice is completely up to you!"
      />

      <CareerSection
        title="Become a Mobile Dog Groomer"
        imgSrc={MobileGroomerImage}
        imgAlt="back of a cargo van"
        text="In today’s fast-paced world, mobile dog groomers are in extremely high demand, so you can charge a premium for your services! You may choose to invest in a mobile grooming van or work out of your clients’ homes. Your clients will be looking for a credible professional groomer, and that’s where a solid dog grooming education will come in handy!"
        className="bg-light"
      />

      <CareerSection
        title="Explore the Dog Industry"
        imgSrc={ExploreDogIndustryImage}
        imgAlt="woman playing fetch with two dogs"
        text="Once you have an education and experience in dog grooming, you can always branch out into other areas of the animal care industry. Many dog groomers try their hand at teaching, obedience training, or even competition dog grooming!"
        extraText="Regardless of your career aspirations, QC Pet Studies will provide you with the skills and support you need to succeed."
      />

      <section className="bg-dark py-0">{/* override padding */}
        <div className="container-fluid">
          <div className="row justify-content-center justify-content-lg-end">
            <div className="col-12 col-lg-8 col-xl-9 col-fluid col-fluid-lg-8 col-fluid-xl-9">
              <div className="section pe-lg-5">{/* re-add section padding, and add right padding on lg or greater */}
                <div id="quoteWrapper" className="d-flex align-items-center">
                  <div>
                    <p className="lead mb-4">I'm 2 units [into the Dog Grooming Course] and love it! It has a great background, written learning, supplies, and more! I came from a vet assisting background and wanted to open up my own grooming salon, but I have two kids, so I needed to do distance [training]. I love this course so much! I highly recommend this course and the First Aid for Groomers Course. With my background knowledge, I could tell the topics were well-researched. By far, blew me away!</p>
                    <div className="d-flex mb-4">
                      <p>Mackenzie Lafleur<br /><span className="text-muted">QC Graduate</span></p>
                    </div>
                    <p className="lead mb-0"><Link href="/category/student-features/"><a className="link-primary">Read other reviews like this one by checking out our Student &amp; Graduate Features!</a></Link></p>
                  </div>
                </div>
              </div>
            </div>
            {lgOrGreater && (
              <div className="col-lg-4 col-xl-3" style={{ position: 'relative' }}>
                <Image src={ReviewDogGroomingCourse} layout="fill" objectFit="cover" objectPosition="center" alt="a review of dog grooming course" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <FaClipboard className="h2 text-primary mb-3" />
          <h2>Career Resources for<br />Grooming Students and Graduates</h2>
          <p className="lead">As a student of QC Pet Studies, you'll be provided with resources to build a profitable and<br />enjoyable career as a professional dog groomer.</p>
          <CareerResources title="Free Business Training" icon={<FaBriefcase />}>
            <p className="mb-0">QC's comprehensive <Link href="/dog-grooming-courses/dog-grooming/"><a className="link-primary">Online Dog Grooming Class</a></Link> comes with complete business training at no extra cost! This training will teach you the skills you'll need to start a successful dog grooming business!</p>
          </CareerResources>
          <CareerResources title="A Blog for Groomers" icon={<FaRss />}>
            <p className="mb-0">The Sniffin'Around <Link href="/blog/sniffin-around-blog/"><a className="link-primary">dog grooming blog</a></Link> is full of articles that will help you thrive in your chosen career path. From adding accessories to setting your grooming prices to designing your business logo, the blog content aims to help you succeed as a professional dog groomer and business owner.</p>
          </CareerResources>
          <CareerResources title="Exclusive Discounts from Vendors" icon={<FaTags />}>
            <p className="mb-0">Investing in professional-grade dog grooming tools and materials enables you to do your best work. Students of QC Pet Studies receive <Link href="/about/student-discounts/"><a className="link-primary">exclusive discounts to some of the best pet retailers.</a></Link> You'll be able to build your grooming toolkit with quality products and equipment at a fraction of the cost!</p>
          </CareerResources>
          <CareerResources title="Dog Grooming Business Resources" icon={<FaRegFileAlt />}>
            <p>QC Students are provided with templates and reference sheets to help them write business plans, manage client information, and make quick and accurate decisions in the grooming environment. You'll be able to download all of the following from the Online Student Center:</p>
            <ul className="mb-0">
              <li>Business plan template</li>
              <li>Service pricing guide</li>
              <li>Client card template</li>
              <li>Brushes and coat types chart</li>
              <li>Snap-on comb chart</li>
              <li>Clipper blades chart</li>
              <li>Needs analysis reference sheet</li>
              <li>Tiered emergency plan</li>
            </ul>
          </CareerResources>
        </div>
      </section>

      <section className="bg-dark">
        <Image src={DogGroomingAssociations} layout="fill" objectFit="cover" objectPosition="center" alt="dog grooming associations" />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <Image className="text-secondary" src={AssociationLogo} alt="associations logo" />
              <h2 className="mb-4">Dog Grooming Associations</h2>
              <p>As you progress in your dog grooming career, you may decide to become a registered and/or certified member of a dog grooming association. These associations are entirely optional and joining them is not mandatory to work or succeed as a dog groomer. However, you may decide that joining an association will help you grow your network and stand out from the competition.</p>
              <p className="mb-0">The National Dog Grooming Association of America (NDGAA) and the Canadian Professional Pet Stylists (CPPS) associations have standardized exams they use to certify members. QC's Dog Grooming course prepares you to take these exams.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DogGroomingCareerPage;

type CareerSectionProps = {
  title: string;
  subtitle?: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  text: string;
  extraText?: string;
  className?: string;
};

const CareerSection = ({ title, subtitle, imgSrc, imgAlt, text, extraText, className }: CareerSectionProps): ReactElement => (
  <section className={className}>
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <Image src={imgSrc} alt={imgAlt} width="500" height="320" />
        </div>
        <div className="col-12 col-lg-6 text-lg-start">
          <h2>{title}</h2>
          {subtitle && <h4>{subtitle}</h4>}
          <p>{text}</p>
          {extraText && <p className="lead">{extraText}</p>}
        </div>
      </div>
    </div>
  </section>
);

type CareerResourcesProps = {
  title: string;
  icon: ReactElement;
  children: ReactNode;
};

const CareerResources = ({ title, icon, children }: CareerResourcesProps): ReactElement => (
  <div className="row justify-content-center align-items-center mt-5">
    <div className="col-12 col-lg-2">
      <div className="h2 text-secondary mb-3">
        {icon}
      </div>
    </div>
    <div className="col-12 col-lg-8 text-lg-start">
      <h3>{title}</h3>
      {children}
    </div>
  </div>
);
