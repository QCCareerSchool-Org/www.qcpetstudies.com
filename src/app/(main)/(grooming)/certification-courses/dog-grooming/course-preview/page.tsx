import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BsBook } from 'react-icons/bs';

import { CourseSyllabusSection } from './CouseSyllabusSection';
import { DGTutorSection } from '@/components/DGTutorSection';
import { PriceSectionWithDiscount } from '@/components/PriceSectionWithDiscount';
import AssignmentBackground from '@/images/backgrounds/your-career-bg.jpg';
import IDGPCertificationLogo from '@/images/IDGP-certification-gold.svg';
import { lookupPrices } from '@/lib/lookupPrices';

export const courseCodes = [ 'dg' ];

export type Props = {
  enrollPath: string;
};

export const metadata: Metadata = {
  title: 'Dog Grooming Certification Course',
  alternates: { canonical: '/certification-courses/dog-grooming/course-preview' },
};

const GroomingCoursePreviewPage: FC<Props> = async ({ enrollPath }) => {
  const price = await lookupPrices(courseCodes);
  return <>

    <section id="top" className="bg-dark">
      <Image
        src={AssignmentBackground}
        placeholder="blur"
        alt="dog getting a haircut"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <BsBook className="h1 mb-3" />
            <h1 className="mb-4">Dog Grooming Certification Course</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2>Congratulations on Choosing to Explore a Career as a <strong>Dog Groomer</strong>!</h2>
            <p>Becoming a dog groomer is not for everyone! But if you have the right set of passion and skills, it can be an extremely rewarding and profitable career! Does this sound like you?</p>
            <ul>
              <li>You love all dogs, big and small</li>
              <li>You're able to interact with all types of dogs calmly and carefully</li>
              <li>You're good with your hands and are able to stand on your feet for hours at a time</li>
              <li>You have good people skills</li>
              <li>You're driven and ambitious</li>
              <li>You're willing to continue learning throughout your career</li>
            </ul>
            <p className="lead mb-0">If this list describes your personality, then you're in the right place!</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="card bg-lighter border-lighter">
              <div className="card-body">
                <p className="card-text">QC's online dog grooming course will prepare you in every way for a successful dog grooming career. You will learn everything from dog behavior and safety practices to tools of the trade, to specific grooming techniques and the most popular cuts.</p>
                <p className="card-text">Whether your goal is to launch your own grooming business, work in a grooming salon, or just groom your own dog, you'll gain all the skills to achieve your goals.</p>
                <p className="card-text">Even though you're learning online, you'll get plenty of hands-on experience every step of the way! You'll complete tons of hands-on assignments designed to enhance your grooming skills, and will have support from your own personal tutor, a Certified Master Groomer!</p>
                <p className="card-text">Don't miss out on this amazing opportunity to work with an expert to develop your skills!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-contents-center align-items-center">
          <div className="flex-shrink-0 mb-4 mb-md-0 me-md-4">
            <Image
              src={IDGPCertificationLogo as StaticImageData}
              width={200}
              height={200}
              alt="IDGP International Dog Grooming Professional logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-center text-md-start">
            <h2>Your <strong>Certification</strong></h2>
            <p className="lead mb-0">Upon graduation, you'll receive the International Dog Grooming Professional&trade; (IDGP&trade;) Certification. With your certification and professional title, you'll be ready to start your own business or work for an established grooming salon right away!</p>
          </div>
        </div>
      </div>
    </section>

    <CourseSyllabusSection />

    <PriceSectionWithDiscount courses={courseCodes} price={price} doubleGuarantee={true} enrollPath={enrollPath} />

    <DGTutorSection className="bg-light" />

    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 text-center">
            <h2>New: <strong>Grooming Technician Course</strong></h2>
            <p>Would you like to start out with the basics? The Grooming Technician course offers training in preparing dogs for clipper and scissor work. Discover how to expertly trim nails, brush, bathe, and efficiently dry dogs.</p>
            <p>Once you graduate you&apos;ll have the option to upskill your training with QC and get certified as a Professional Dog Groomer.</p>
            <Link href="/certification-courses/grooming-technician" className="btn btn-primary btn-lg">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
};

// GroomingCoursePreviewPage.getLayout = page => (
//   <LandingPageLayout link={true} nav="enroll">{page}</LandingPageLayout>
// );

export default GroomingCoursePreviewPage;
