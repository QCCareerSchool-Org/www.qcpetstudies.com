import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import CatalogBackground from '../images/backgrounds/CC-Thankyou-bg.jpg';

const ThankYouCatalogPage: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="Here's Your Course Catalog"
        description="Here's Your Course Catalog"
        canonical="/thank-you-catalog"
      />

      <section id="firstSection" className="bg-dark text-light">
        <Image src={CatalogBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Dog looking at you" />
        <div className="container text-center">
          <h1 className="mb-4">Your course catalog</h1>
          <h2>Thank You For Your Interest!</h2>
          <p className="lead"><strong>Find out what a career in dog grooming can do for you, and how <br /> you can get started with QC&apos;s Dog Grooming course.</strong></p>
          <div className="row justify-content-center">
            <h4 className="my-4">Download your course catalog here:</h4>
            <a href="">
              <button className="btn btn-outline-secondary btn-lg text-center text-white">Download&nbsp;&nbsp;
                <FaPaw />
              </button>
            </a>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default ThankYouCatalogPage;
