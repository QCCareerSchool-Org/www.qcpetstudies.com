import type { FC } from 'react';
import type { HowTo, WithContext } from 'schema-dts';

import { JourneyCard } from './journeyCard';
import { SectionHeader } from '@/components/sectionHeader';

export const JourneySection: FC = () => (
  <section id="career-pathways">
    <div className="container">
      <SectionHeader
        eyebrow="Your Journey to Success"
        title="4-Steps to Becoming a Dog Groomer"
        text="You don't need years of apprenticeship or traditional, advanced credentials to start your grooming career. Follow a proven path to turn your passion for working with dogs into a successful career."
      />
      <div className="row g-5 g-xl-4">
        {journeySteps.map((step, index) => (
          <div className="col-12 col-md-6 col-xl-3 d-flex" key={step.title}>
            <JourneyCard number={index + 1} title={step.title} text={step.text} />
          </div>
        ))}
      </div>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
  </section>
);

interface JourneyStep {
  title: string;
  text: string;
}

const journeySteps: JourneyStep[] = [
  {
    title: 'Obtain Professional Certification',
    text: 'Study the fundamentals of grooming and gain practical skills in essential areas, including nail trims, bathing, brushing, pet cuts and breed standards. Professional training and experience are the top factors pet parents look for when choosing a dog groomer.',
  },
  {
    title: 'Gain Hands-on Grooming Skills',
    text: 'Build your confidence and grooming instincts with mentorship, practical assignments through your professional training, and gaining experience working with dogs and assisting local groomers.',
  },
  {
    title: 'Showcase your Grooms',
    text: 'Create a “Before & After” gallery on your website or social media to showcase your grooming work. A strong portfolio featuring a range of breeds and grooming styles helps demonstrate your skill level and gives pet parents confidence to book your services.',
  },
  {
    title: 'Choose Your Career Path',
    text: 'You\'ll have a variety of career paths open to you as a professional groomer. You can launch a mobile grooming service, work from a home-based setup, join a salon team, or advance in a boutique grooming studio. ',
  },
];

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://www.qceventplanning.com/how-it-works#how-to-become-an-event-planner',
  'url': 'https://www.qceventplanning.com/how-it-works#career-pathways',
  'name': 'How to Become an Event Planner',
  'description': 'Follow this proven path to transform your passion into a professional event planning brand.',
  'step': journeySteps.map((step, i) => ({
    '@type': 'HowToStep',
    'position': i + 1,
    'name': step.title,
    'text': step.text,
  })),
};
