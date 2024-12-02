import { Metadata } from 'next';
import Image from 'next/image';
import { QuestionsSections } from './QuestionsSection';
import { PageComponent } from '@/app/serverComponent';

import DogInBedWithStick from '@/images/backgrounds/dog-in-bed-with-stick.jpg';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'If you have any questions about QC\'s online programs in dog grooming or dog training, find your answers here!',
  alternates: {
    canonical: '/about/faq',
  },
};

const FAQPage: PageComponent = () => {

  return <>

    <section id="top" className="bg-dark">
      <Image
        src={DogInBedWithStick}
        placeholder="blur"
        alt="dog in a dog bed, holding a stick"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'right' }}
      />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-white">
            <h1 className="fw-normal mb-0"><strong>Frequently Asked Questions</strong> about QC Pet Studies</h1>
          </div>
        </div>
      </div>
    </section>

    <QuestionsSections />

  </>;
};

export default FAQPage;
