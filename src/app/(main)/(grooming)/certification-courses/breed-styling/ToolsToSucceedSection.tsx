'use client';

import Link from 'next/link';
import { FC } from 'react';

import { useScreenWidth } from '@/hooks/useScreenWidth';

export const ToolsToSucceedSection: FC = () => {

  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return(
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Tools to succeed</h2>
            <p>To complete the assignments in the course, you'll need the following tools:</p>
          </div>
          {lgOrGreater
            ? ( // display in two columns in cards
              <>
                <div className="col-12 col-lg-4 text-start mb-4 d-flex">
                  <div className="card">
                    <div className="card-body">
                      <ul className="no-indent mb-0">
                        <li>A selection of grooming brushes and combs</li>
                        <li>Dematting tools</li>
                        <li>Nail clippers</li>
                        <li>Styptic product</li>
                        <li>Hemostats</li>
                        <li>A selection of professional scissors</li>
                        <li>Professional clippers with a selection of blades or blade settings</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 text-start mb-4 d-flex">
                  <div className="card">
                    <div className="card-body">
                      <ul className="no-indent mb-0">
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
                  </div>
                </div>
              </>
            )
            : ( // display in a single column
              <div className="col-10 col-sm-8 text-start mb-4">
                <ul className="mb-0">
                  <li>A selection of grooming brushes and combs</li>
                  <li>Dematting tools</li>
                  <li>Nail clippers</li>
                  <li>Styptic product</li>
                  <li>Hemostats</li>
                  <li>A selection of professional scissors</li>
                  <li>Professional clippers with a selection of blades or blade settings</li>
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
            )
          }
          <div className="col-12 col-lg-10">
            <p className="fst-italic">Please note that you'll need to purchase these tools yourself if you don't already own them. As a student of QC Pet Studies, take advantage of discounts from established dog grooming brands.</p>
            <Link href="/about/student-discounts" className="link-primary">See the list here!</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
