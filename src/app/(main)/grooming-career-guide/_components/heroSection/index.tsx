import type { FC } from 'react';

import HeroImage from './hero.jpg';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { Overlay } from '@/components/overlay';

export const HeroSection: FC = () => (
  <section className={`${styles.hero} bg-dark text-white`}>
    <BackgroundImage src={HeroImage} objectPosition="62% center" mobile={{ src: HeroImage, breakpoint: 'md', objectPosition: '58% center' }} priority />
    <Overlay backgroundColor="rgba(1, 0, 37, 0.25)" className={styles.overlay} />
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-7">
          <h1 className="mb-4">How to Become a Professional Dog Groomer</h1>
          <p className="lead text-shadow mb-0">Launch your career with the professional <strong>dog grooming certification</strong> and industry standards required to maximize your earning potential in the booming pet care market. Discover the <strong>2026 benchmarks</strong> for salary, required training and paths to career growth, including salon ownership, mobile grooming and lead grooming roles. </p>
        </div>
      </div>
    </div>
  </section>
);
