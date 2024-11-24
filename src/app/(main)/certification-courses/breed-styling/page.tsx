import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { ToolsToSucceedSection } from './ToolsToSucceedSection';
import { PageComponent } from '@/app/serverComponent';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { PriceSection } from '@/components/PriceSection';
import { SEO } from '@/components/SEO';
import StylingBackground from '@/images/backgrounds/black-medium-size-poodle.jpg';
import BreedStylingCertificateImage from '@/images/breed-styling-certificate.png';
import CourseIconBadge from '@/images/course-icon-badge.svg';
import CourseMaterials from '@/images/course-materials-breed-styling.jpg';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'ds' ];

const BreedStylingPage: PageComponent = async () => {

  const price = await lookupPrices(courseCodes);

  return <>
    <SEO
      title="Breed Styling Workshop"
      description="If you're already a professional dog groomer, the breed styling workshop will take your grooming skills to the next level. Start today!"
      canonical="/certification-courses/breed-styling"
    />

    <section id="top" className="bg-dark">
      <Image
        src={StylingBackground}
        placeholder="blur"
        alt="dog getting a haircut"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <Image
          src={CourseIconBadge as StaticImageData}
          alt="Breed Styling Course badge"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
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
            <Image
              src={CourseMaterials}
              alt="Breed Standards course text"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
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
            <p className="mb-0">Fundamental pet service knowledge is a prerequisite for this workshop. You won't spend time reviewing grooming tools, hair clipping, bathing, drying, and brushing. Instead, skip right to grooming techniques for a variety of breeds. If you'd like a refresher in these areas, we recommend the <Link href="/certification-courses/dog-grooming" className="link-primary">Dog Grooming Course</Link> which covers the fundamentals and everything included in the Breed Styling Workshop.</p>
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
            <Image
              src={BreedStylingCertificateImage}
              alt="Breed Styling Workshop certificate"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>

    <ToolsToSucceedSection />

  </>;
};

// BreedStylingPage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export default BreedStylingPage;
