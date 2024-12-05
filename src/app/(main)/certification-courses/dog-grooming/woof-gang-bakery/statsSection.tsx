'use client';

import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaBook, FaFilm, FaLaptop } from 'react-icons/fa';
import { useCountUp } from 'react-use-count-up';

import { Bar } from '@/components/bar';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const countUpDuration = 3000;
const easingFunction = 'easeOutQuad';

export const StatsSection: FC = () => {
  const videosRef = useRef(null);
  const videosIntersection = useIntersectionObserver(videosRef);
  const [ videosStarted, setVideosStarted ] = useState(false);

  useEffect(() => {
    if (videosIntersection) {
      setVideosStarted(true);
    }
  }, [ videosIntersection ]);

  const videosCount = useCountUp({ start: 0, end: 43, duration: countUpDuration, started: videosStarted, easingFunction });

  const lessonsRef = useRef(null);
  const lessonsIntersection = useIntersectionObserver(videosRef);
  const [ lessonsStarted, setLessonsStarted ] = useState(false);

  useEffect(() => {
    if (lessonsIntersection) {
      setLessonsStarted(true);
    }
  }, [ lessonsIntersection ]);

  const lessonsCount = useCountUp({ start: 0, end: 25, duration: countUpDuration, started: lessonsStarted, easingFunction });

  const assignmentsRef = useRef(null);
  const assignmentsIntersection = useIntersectionObserver(videosRef);
  const [ assignmentsStarted, setAssignmentsStarted ] = useState(false);

  useEffect(() => {
    if (assignmentsIntersection) {
      setAssignmentsStarted(true);
    }
  }, [ assignmentsIntersection ]);

  const assignmentsCount = useCountUp({ start: 0, end: 34, duration: countUpDuration, started: assignmentsStarted, easingFunction });

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <div className="row text-center justify-content-center mb-5">
            <div className="col-12 col-sm-4 col-lg-3 mb-5 mb-sm-0">
              <div className="mb-2">
                <FaFilm size="54" color="#bbb" />
              </div>
              <div className="h3" ref={videosRef}><div className="h1 mb-2">{videosCount}</div>Video<br />Demonstrations</div>
            </div>
            <div className="col-12 col-sm-4 col-lg-3 mb-5 mb-sm-0">
              <div className="mb-2">
                <FaBook size="54" color="#bbb" />
              </div>
              <div className="h3" ref={lessonsRef}><div className="h1 mb-2">{lessonsCount}</div>Interactive<br />Lessons</div>
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <div className="mb-2">
                <FaLaptop size="54" color="#bbb" />
              </div>
              <div className="h3" ref={assignmentsRef}><div className="h1 mb-2">{assignmentsCount}</div>Practical<br />Assignments</div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex mb-4 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-3">Work at Your Own Pace</h3>
                  <Bar variant="secondary" />
                  <p className="mb-0">The course has no deadlines or due dates. You can work through the units at completely your own pace. Re-read your course lessons and re-watch your instructional videos as often as you like. Take your time or graduate quickly&mdash;the choice is yours!</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-3">Average Completion Time</h3>
                  <Bar variant="secondary" />
                  <p className="mb-0">On average, most QC students complete the self-paced course in 6 months to a year. The course will take between 80 and 130 hours to complete. You have up to two years to complete the program.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
