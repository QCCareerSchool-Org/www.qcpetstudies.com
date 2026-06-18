import type { FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { BiGlobe, BiMedal, BiMessageSquareEdit, BiRocket } from 'react-icons/bi';
import styles from '../../index.module.scss';

import { Pillar } from './pillar';
import Link from 'next/link';

interface PillarItem {
  icon: IconType;
  title: string;
  text: ReactNode;
}

interface Props {
  buttonText?: string;
  href?: string;
}

export const WhyQCSection: FC<Props> = ({ buttonText, href }) => (
  <section>
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-5">
          <h2 className="mb-4">Why Aspiring Professionals Choose QC</h2>
          <p className="lead mb-0">QC offers a professional roadmap for mastering both the hands-on skills and business fundamentals needed to succeed in the grooming industry. You'll learn every stage of the grooming process—from understanding dog behavior and health to bathing, brushing, and executing professional pet trims and building your grooming career.</p>
          { buttonText && href && (
             <Link href={href} className={`btn btn-lg btn-primary ${styles.button}`}>{buttonText}</Link>
          )}
        </div>
        <div className="col-12 col-lg-7">
          <div className="row g-4">
            {whyQCPillars.map(item => (
              <div className="col-12 col-md-6 d-flex" key={item.title}>
                <Pillar icon={item.icon} title={item.title} text={item.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const whyQCPillars: PillarItem[] = [
  {
    icon: BiMessageSquareEdit,
    title: 'Personalized 1-on-1 Mentorship:',
    text: 'You are never alone. Every assignment is reviewed by a professional groomer, with clear, actionable feedback to help you improve your technique and build confidence.',
  },
  {
    icon: BiRocket,
    title: 'Dog-First Curriculum:',
    text: 'Learn low-stress, fear-free grooming techniques that prioritize each dog\'s comfort, safety, and well-being—an approach today\'s pet owners actively look for.',
  },
  {
    icon: BiMedal,
    title: 'Business Training for Groomers:',
    text: 'Get essential tools like client intake forms, pricing guidance, and service strategies to help you run a professional, profitable grooming business.',
  },
  {
    icon: BiGlobe,
    title: 'Global Grooming Community:',
    text: ' Connect with a network of groomers worldwide for ongoing support, inspiration, and career opportunities after graduation.',
  },
];
