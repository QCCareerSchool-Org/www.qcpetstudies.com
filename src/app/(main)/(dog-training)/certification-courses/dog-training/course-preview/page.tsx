import { Metadata } from 'next';
import Link from 'next/link';

import KimCooperImage from '../kim-cooper.jpg';
import { CoursePreviewSections } from './CoursePreviewSections';
import { PageComponent } from '@/app/serverComponent';
import { DTTutorSection } from '@/components/DTTutorSection';
import { PriceSectionWithDiscount } from '@/components/PriceSectionWithDiscount';
import { getParam } from '@/lib/getParam';
import { lookupPrices } from '@/lib/lookupPrices';

export const courseCodes = [ 'dt' ];

export const metadata: Metadata = {
  title: 'Professional Dog Trainer Course',
  alternates: { canonical: '/certification-courses/dog-training/course-preview' },
};

const DogTrainingCoursePreviewPage: PageComponent = async ({ searchParams }) => {

  const price = await lookupPrices([ 'dt' ], { promoCode: getParam(searchParams.promoCode) });

  const enrollPath = getParam(searchParams.enrollPath);

  return <>

    <CoursePreviewSections />

    <PriceSectionWithDiscount courses={courseCodes} price={price} doubleGuarantee={true} enrollPath={enrollPath} />

    <DTTutorSection className="bg-light" />

    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="h1">Advanced Career Path</h2>
            <h3 className="h2">Dog Behavior Certification Course</h3>
            <p>Would you like to upgrade your dog training education? Learn the behavior modification and consultation skills you need to identify and change your pup clients' most disruptive behaviors. You'll build on your foundation in dog training and learn how to deal with advanced concerns like anxiety, phobias, reactivity, and even aggression.</p>
            <p>You'll complete loads of hands-on assignments designed to enhance your training experience. You'll take the time to learn and develop a deeper understanding of dog communication so you can effectively decipher the best methods to help any dog overcome their problem behaviors.</p>
            <p className="fw-bold">Hear why instructor Kim Cooper believes the Behavior Modification course is a great way to advance your dog-training career.</p>
            <video src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/why-should-students-study-training-and-behavior-modification.mp4" poster={KimCooperImage.src} controls className="w-100 img-fluid mb-3" />
            <p>Whether your goal is to launch your own business or work for an established training school, you'll gain all the skills and knowledge you need to feel confident in your new career!  QC's advanced online dog behavior course teaches specialized behavior modification skills so you'll be ready to help any dog that comes your way.</p>
            <p className="fst-italic">Please note, Dog Behavior is an advanced certification program and requires students to have successfully completed QC's Dog Training course as a prerequisite. <Link href="/certification-courses/dog-training#behaviorOutline">View the course outline for the Dog Behaviour Course</Link>.</p>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default DogTrainingCoursePreviewPage;
