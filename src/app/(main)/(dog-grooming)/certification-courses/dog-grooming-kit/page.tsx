import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { PageComponent } from '@/app/serverComponent';
import { Bar } from '@/components/bar';
import GroomingKitBackground from '@/images/backgrounds/yorkie-on-a-grooming-table.jpg';
import ClipperCombsImage from '@/images/clippers-combs-kit-550.jpg';
import FullKitImage from '@/images/dog-grooming-kit.jpg';
import GroomingScissorsImage from '@/images/Pro-Grooming-Scissors-550x550.jpg';
import StarterKitImage from '@/images/starter-kit.jpg';

export const metadata: Metadata = {
  title: 'Dog Grooming Kit',
  description: 'Take a look at the grooming starter kit you\'ll receive when you enroll in QC\'s dog grooming course!',
  alternates: { canonical: '/certification-courses/dog-grooming-kit' },
};

const DogGroomingKitPage: PageComponent = () => (
  <>

    <section id="top" className="bg-dark">
      <Image
        src={GroomingKitBackground}
        placeholder="blur"
        alt="grooming kit"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container text-center">
        <h1>Dog grooming kit</h1>
        <p className="lead mb-0">Included with your online course!</p>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <p>When you enroll in QC's online <Link href="/certification-courses/dog-grooming/" className="link-primary">dog grooming course</Link>, you'll receive a toolkit with the essential items you need to get started. These items will be shipped to you when you successfully complete Unit B before you begin your practical work in Unit C.</p>
            <p>Your kit includes a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
            <p>This starter kit will go a long way not only to help you complete your online course but also to enter the industry as a fully equipped dog grooming professional!</p>
            <p className="lead mb-0">The dog grooming kit has an estimated value of over $200!</p>
          </div>
          <div className="col-12 col-lg-8">
            <Image
              src={FullKitImage}
              alt="Full Kit"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="text-center mb-4">
          <h2>What's in Your Dog Grooming Kit</h2>
          <Bar variant="secondary" />
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-10 col-md-6 mb-4 mb-md-0 d-flex">
            <div className="card">
              <Image
                src={ClipperCombsImage}
                className="card-img-top"
                alt="cipper combo"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="card-body">
                <h3 className="card-text">WAHL 5-in-1 Cordless Clippers &amp; Comb Attachments</h3>
                <p className="card-text">A good pair of clippers are a must for any professional dog groomer and most will tell you that WAHL makes the best clippers around. These convenient cordless clippers allow you the freedom to move around the dog and trim its fur comfortably, without having to worry about a pesky cord getting in the way.</p>
                <p className="card-text">The set comes with 9 attachment combs of varying lengths, so you can achieve almost any look with the handy toolkit!</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-6 d-flex">
            <div className="card">
              <Image
                src={GroomingScissorsImage}
                className="card-img-top"
                alt="grooming scissors"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="card-body">
                <h3 className="card-text">Professional Grooming Scissors</h3>
                <p className="card-text">Grooming scissors (or shears) are a groomer's best friend. With the right scissors, you can create just about any look on a dog&mdash;from the cutest teddy bear cut to the perfect golden retriever tail and everything in between. As part of your kit, you'll receive a set of three professional-grade grooming scissors and comb! The kit includes a straight blade, a curved blade, and thinning scissors, wrapped in a beautiful leather case for portability and convenience. (Product may vary based on the supplier.)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-4 mb-lg-0">
            <Image
              src={StarterKitImage}
              alt="dog gooming starter kit"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3>Grooming Tools Starter Kit</h3>
            <p>Some routine tools of the trade that all groomers need are provided in this starter kit. You'll learn to expertly use every one of these tools in your course, and you'll probably use them every day throughout your dog grooming career! This 11-piece set includes:</p>
            <ul>
              <li>2 Slicker Brushes (soft and hard)</li>
              <li>2 Nail Clippers (large and small)</li>
              <li>2 Mat Breakers (large and small)</li>
              <li>An undercoat rake</li>
              <li>A greyhound comb</li>
              <li>A fine-toothed comb</li>
              <li>A curry comb</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default DogGroomingKitPage;
