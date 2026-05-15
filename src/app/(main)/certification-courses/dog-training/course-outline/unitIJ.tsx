'use client';

import Image from 'next/image';
import type { FC } from 'react';

import UnitIJImage from './_images/unit-ij.jpg';

export const UnitIJ: FC = () => {

  return (
    <div className="row">
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="alert alert-primary mb-4" />
        <p>In the Externship Track, you'll apply everything you've learned from the Online Track by completing your externship application and starting your in-person placement in a professional dog training environment. Here is a detailed breakdown of how the externship track course works.</p>
        <p className="mb-0"><strong>1. Submit Your Externship Application</strong></p>
        <p> After completing the online training with a grade of A- or higher in your practical units (Units D-G) and paying your course fees in full, you'll fill out an externship application. This is your opportunity to share your preferences with your facilitator, such as location or type of training facility.</p>
        <p className="mb-0"><strong>2. Placement Matching</strong></p>
        <p>Your Externship Facilitator will review your application and work with you to secure the best placement for your hands-on training alongside a professional trainer.</p>
        <p className="mb-0"><strong>3. Receive Your Placement & Sign Documentation</strong></p>
        <p>Within 14 days of application approval, you'll receive your placement details. Your facilitator will provide all required documentation, which you must sign before starting your externship.</p>
        <p className="mb-0"><strong>4. Begin Your Externship</strong></p>
        <p>You'll complete 40 hours of unpaid, hands-on training in a professional dog training environment, gaining practical experience and confidence in your skills.</p>
        <p className="mb-0"><strong>5. Track Your Hours & Get Evaluated</strong></p>
        <p>During your externship, you'll log your hours and complete an evaluation of your experience. Your dog training supervisor will also submit a final evaluation of your performance and skills.</p>
        <p className="mb-0"><strong>6. Receive Your Certificate of Completion</strong></p>
        <p>Once all externship requirements are met—including your hours log and evaluations—you'll receive your official QC Certificate of Completion, recognizing both your coursework and real-world training.</p>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
        <Image src={UnitIJImage} alt="dog and a trainer shaking hands" sizes="100vw" style={{ width: '100%', height: 'auto' }} className="mb-3" />
        <p><strong>Meet Ashli, Your Externship Facilitator</strong></p>
        <p>Ashli is dedicated to ensuring every student has a smooth and successful externship experience. She'll personally guide you through the placement process, help match you with a professional dog trainer, and provide ongoing support until your training is complete. With Ashli's expertise and commitment to student success, you can feel confident knowing you'll have guidance every step of the way as you transition from online learning to hands-on experience.</p>
      </div>
    </div>
  );
};
