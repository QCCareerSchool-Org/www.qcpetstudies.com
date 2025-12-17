import Link from 'next/link';
import type { FC } from 'react';

type Course = 'dg' | 'dt';

const copyByCourse: Record<Course, { heading: string; body: string; href: string }> = {
  dg: {
    heading: 'Ready To Start Your Dog Grooming Career?',
    body: "Take charge of your future and become professionally certified with QC's online dog grooming course today!",
    href: 'https://enroll.qcpetstudies.com/?c=dg',
  },
  dt: {
    heading: 'Ready To Start Your Dog Training Career?',
    body: "Take charge of your future and become professionally certified with QC's online dog training course today!",
    href: 'https://enroll.qcpetstudies.com/?c=dt',
  },
};

interface Props {
  course: Course;
}

export const BoxingDayFooter: FC<Props> = ({ course }) => {
  const copy = copyByCourse[course];

  return (
    <footer className="bg-light">
      <section>
        <div className="container text-center">
          <h2>{copy.heading}</h2>
          <p className="lead">{copy.body}</p>
          <Link href={copy.href} className="btn btn-secondary mt-3">Enroll Now</Link>
        </div>
      </section>
    </footer>
  );
};
