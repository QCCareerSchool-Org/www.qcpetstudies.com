import { NextPage } from 'next';
import Image from 'next/image';

import { DefaultLayout } from '../../components/DefaultLayout';
import tutorBackground from '../../images/backgrounds/tutor-background.jpg';

const AboutPage: NextPage = () => (
  <DefaultLayout>
    <section id="firstSection" className="bg-dark text-light">
      <Image src={tutorBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dddd" />
      <div className="container">
        <h1>About QC Pet Studies</h1>
      </div>
    </section>
  </DefaultLayout>
);

export default AboutPage;
