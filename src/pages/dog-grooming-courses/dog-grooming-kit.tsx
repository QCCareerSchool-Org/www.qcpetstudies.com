import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Bar } from '../../components/Bar';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import GroomingKitBackground from '../../images/backgrounds/Pro-Grooming-Scissors-Blue-Overlay.jpg';
import ClipperCombsImage from '../../images/clippers-combs-kit-550.jpg';
import FullKitImage from '../../images/Full-Kit-Pro-Scissors.jpg';
import GroomingScissorsImage from '../../images/Pro-Grooming-Scissors-550x550.jpg';
import StarterKitImage from '../../images/starter-kit.jpg';

const DogGroomingKitPage: NextPage = () => {
  return (
    <DefaultLayout secondaryTitle="Dog Grooming Course">
      <SEO
        title="Dog Grooming Course"
        description=""
        canonical="/dog-grooming-courses/dog-grooming-kit"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={GroomingKitBackground} layout="fill" objectFit="cover" objectPosition="center" alt="grooming kit" />
        <div className="container text-center">
          <h1>DOG GROOMING KIT</h1>
          <p className="lead">INCLUDED WITH YOUR ONLINE COURSE!</p>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <p>When you enroll in QC&apos;s online
                <Link href="/online-courses/dog-grooming/"><a className="link-primary">&nbsp;dog grooming course</a></Link> , you&apos;ll receive a toolkit with the essential items you need to get started. These items will be shipped to you after you submit your Unit B before you begin your practical work in Unit C.</p>
              <p>Your kit includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
              <p>This starter kit will go a long way not only to help you complete your online course but also to enter the industry as a fully-equipped dog grooming professional!</p>
              <p className="lead">The dog grooming kit has an estimated value of over $200 USD!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-0">
        <Image src={FullKitImage} layout="responsive" objectFit="contain" alt="Full Kit" />
      </section>

      <section>
        <div className="container">
          <div className="text-center mb-5">
            <h2>What&apos;s in your dog grooming kit</h2>
            <Bar variant="secondary"></Bar>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-10  col-md-6 mb-4 mb-md-0 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body py-5 text-center">
                  <h3>WAHL 5-in-1 Cordless Clippers &amp; Comb Attachments</h3>
                  <Image className="mb-4" src={ClipperCombsImage} alt="cipper combo" />
                  <p>A good pair of clippers are a must for any professional dog groomer and most will tell you that WAHL makes the best clippers around. These convenient cordless clippers allow you the freedom to move around the dog and trim its fur comfortably, without having to worry about a pesky cord getting in the way.</p>
                  <p>The set comes with 9 attachment combs of varying lengths, so you can achieve almost any look with the handy toolkit!</p>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body py-5 text-center">
                  <h3>Professional Grooming<br /> Scissors</h3>
                  <Image className="mb-4" src={GroomingScissorsImage} alt="grooming scissors" />
                  <p>Grooming scissors (or shears) are a groomer&apos;s best friend. With the right scissors, you can create just about any look on a dog – from the cutest teddy bear cut to the perfect golden retriever tail and everything in between. As part of your kit, you’ll receive a set of three professional-grade grooming scissors and comb! The kit includes a straight blade, a curved blade, and thinning scissors, wrapped in a beautiful leather case for portability and convenience. (Product may vary based on the supplier.)</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-5" />
          <h3 className="text-center">Grooming Tools Starter Kit</h3>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <Image objectFit="contain" src={StarterKitImage} alt="Strater kit" />
            </div>
            <div className="col-12 col-lg-6">
              <p>Some routine tools of the trade that all groomers need are provided in this starter kit. &nbsp;You’ll learn to expertly use every one of these tools in your course, and you’ll probably use them every day throughout your dog grooming career! This 11-piece set includes:</p>
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

    </DefaultLayout>
  );
};
export default DogGroomingKitPage;
