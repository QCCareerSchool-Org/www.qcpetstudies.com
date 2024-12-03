import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import { FaBars } from 'react-icons/fa';

import { UnitSection } from './UnitSection';
import type { PageComponent } from '@/app/serverComponent';
import CourseOutlineBackground from '@/images/backgrounds/aki-with-man.jpg';
import calendarIcon from '@/images/calendar.svg';
import IconTime from '@/images/clock.svg';

const iconSize = 50;

export const metadata: Metadata = {
  title: 'Dog Daycare Course Outline',
  description: '',
  alternates: { canonical: '/certification-courses/dog-daycare/course-outline' },
};

const DDCourseOutlinePage: PageComponent = () => {
  return <>

    <section id="top" className="bg-dark">
      <Image
        src={CourseOutlineBackground}
        placeholder="blur"
        alt="Dog with man"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <FaBars size={iconSize} className="mb-2" />
            <h1 className="fw-normal">Dog Care<br /><strong>Course Outline</strong></h1>
            <p className="lead mb-0">Here&apos;s a detailed outline of the entire online dog care course offered by QC Pet Studies, including the length of each unit and any special considerations you&apos;ll need to complete each unit&apos;s assignments.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex mb-4 mb-lg-0">
            <div className="card">
              <div className="card-body">
                <div className="mb-2">
                  <Image
                    src={IconTime as StaticImageData}
                    width={iconSize}
                    height={iconSize}
                    alt="Clock Icon"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <p className="card-text">The course should take about <strong>20 hours</strong> to study and complete assignments from start to finish. This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
            <div className="card">
              <div className="card-body">
                <div className="mb-2">
                  <Image
                    src={calendarIcon as StaticImageData}
                    width={iconSize}
                    height={iconSize}
                    alt="Calendar Icon"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <p className="card-text">On average, most QC Students work on their course for a few hours per week, and complete the online dog training course within <strong>three to six months</strong>. You&apos;ll have up to two years to complete the program&mdash;lots of time!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UnitSection />

  </>;
};

export default DDCourseOutlinePage;
