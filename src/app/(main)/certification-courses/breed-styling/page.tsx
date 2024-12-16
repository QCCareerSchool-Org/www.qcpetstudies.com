import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from './outlineSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import StylingBackground from '@/images/backgrounds/black-medium-size-poodle.jpg';
import BreedStylingCertificateImage from '@/images/breed-styling-certificate.png';
import CourseIconBadge from '@/images/course-icon-badge.svg';
import CourseMaterials from '@/images/course-materials-breed-styling.jpg';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

const courseCodes = [ 'ds' ];

export const metadata: Metadata = {
  title: 'Breed Styling Workshop',
  description: 'If you\'re already a professional dog groomer, the breed styling workshop will take your grooming skills to the next level. Start today!',
  alternates: { canonical: '/certification-courses/breed-styling' },
};

const BreedStylingPage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return <>

    <section className="bg-dark">
      <BackgroundImage src={StylingBackground} priority />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <CourseIconBadge alt="Breed Styling Course badge" className="mb-2" style={{ maxWidth: '100%', height: 'auto' }} />
        <h1>Breed Styling Workshop</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <p>Do you already have some grooming experience? If you want to upgrade your professional skillset and learn how to groom every breed, the Breed Styling Workshop is an excellent fit for you. Learn advanced styling techniques for purebred breeds without having to relearn the basics like grooming preparation, and scissor and clipper techniques.</p>
            <p>The Breed Styling Workshop starts with the fundamentals of dog anatomy and behavior. You'll learn professional grooming practices before moving on to your practical units where you'll groom a terrier, a non-sporting breed, a mixed breed, and a breed of your choice!</p>
            <p>Learn from certified master groomers who have over five decades of combined grooming experience. Our expert tutors will give you professional insight and feedback on your work to ensure your success in the workshop. Upon graduation, you'll receive the Breed Styling Workshop certificate of completion as well as the International Dog Grooming Professional&trade; (IDGP&trade;) designation. Your qualifications prove to clients and employers that you've completed professional training.</p>
            <p className="mb-0">This workshop prepares students to take the optional NDGAA or Canadian Pet Stylists certification exams. Earn additional accreditations and advance your career!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row align-items-xl-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-start">
            <h2>QC's Breed Styling Workshop Includes</h2>
            <ul>
              <li>9 online course texts covering essential information regarding dog anatomy and grooming procedures</li>
              <li>5 hours of video tutorials featuring certified master groomers working on numerous breeds</li>
              <li>4 practicum units that enable you to complete a number of breed cuts from start to finish</li>
              <li>Free first aid training that provides you with the knowledge to prevent and respond to emergency situations</li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={CourseMaterials} alt="Breed Standards course text" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-start">
            <h2 className="mb-3">Who Will Benefit from This Workshop?</h2>
            <ul>
              <li>Grooming assistants who want to expand their skillset into styling services</li>
              <li>Dog groomers who are comfortable with basic services but want to enter conformation grooming competitions</li>
              <li>Experienced dog groomers who have never received professional education on interpreting and implementing breed standards</li>
            </ul>
            <p className="mb-0">Fundamental pet service knowledge is a prerequisite for this workshop. You won't spend time reviewing grooming tools, hair clipping, bathing, drying, and brushing. Instead, skip right to grooming techniques for a variety of breeds. If you'd like a refresher in these areas, we recommend the <Link href="/certification-courses/dog-grooming">Dog Grooming Course</Link> which covers the fundamentals and everything included in the Breed Styling Workshop.</p>
          </div>
        </div>
      </div>
    </section>

    <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

    <GuaranteeSection />

    <section className="bg-gray pb-0">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-2">Your Certificate of Completion</h2>
            <p className="mb-4">Upon graduation, you'll receive your Breed Styling Workshop certificate. You'll also receive the International Dog Grooming Professional (IDGP) designation. These qualifications attest to your success in learning how to expertly groom a dog of any breed.</p>
          </div>
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <Image src={BreedStylingCertificateImage} alt="Breed Styling Workshop certificate" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <h2>Tools to succeed</h2>
            <p>To complete the assignments in the course, you'll need the following tools:</p>
          </div>
          <div className="col-12 col-sm-9 col-md-7 col-lg-4">
            <ul className="mb-0">
              <li>A selection of grooming brushes and combs</li>
              <li>Dematting tools</li>
              <li>Nail clippers</li>
              <li>Styptic product</li>
              <li>Hemostats</li>
              <li>A selection of professional scissors</li>
              <li>Professional clippers with a selection of blades or blade settings</li>
            </ul>
          </div>
          <div className="col-12 col-sm-9 col-md-7 col-lg-4 mb-4">
            <ul className="mb-0">
              <li>Shampoos and conditioners</li>
              <li>Ear powder</li>
              <li>Restraints</li>
              <li>Grooming table</li>
              <li>Bathing setup</li>
              <li>High-velocity dryer and/or stand dryer</li>
              <li>Towels</li>
              <li>Face mask</li>
              <li>Ear protection</li>
            </ul>
          </div>
          <div className="col-12 col-lg-10 text-center">
            <p className="fst-italic">Please note that you'll need to purchase these tools yourself if you don't already own them. As a student of QC Pet Studies, take advantage of discounts from established dog grooming brands.</p>
            <Link href="/about/student-discounts">See the list here!</Link>
          </div>
        </div>
      </div>
    </section>

    <OutlineSection />
  </>;
};

export default BreedStylingPage;
