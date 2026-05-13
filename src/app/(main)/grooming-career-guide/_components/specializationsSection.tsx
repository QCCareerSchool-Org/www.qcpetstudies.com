import type { FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { BiBriefcase, BiParty, BiWine } from 'react-icons/bi';

import { SectionHeader } from '@/components/sectionHeader';

interface Specialization {
  icon: IconType;
  title: string;
  text: ReactNode;
}

export const SpecializationsSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <SectionHeader
        eyebrow="Expand Your Skills"
        title="Grooming Specializations & Income Potential"
      />
      <div className="row g-4">
        {specializations.map(item => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={item.title}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <item.icon aria-hidden="true" className="text-primary display-6 mb-4" />
                <h3 className="h5 mb-3">{item.title}</h3>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const specializations: Specialization[] = [
  {
    icon: BiBriefcase,
    title: 'Mobile Grooming Entrepreneur ($60k - $110k+):',
    text: 'Command premium fees by offering the convenience of door-to-door service in a fully equipped mobile unit.',
  },
  {
    icon: BiWine,
    title: 'Luxury & Boutique Styling ($55k - $95k+):',
    text: 'Master breed standards and styling for high-end clients and show-quality results.',
  },
  {
    icon: BiParty,
    title: 'Competitive Groomer & Creative Stylist ($55,000 - $100,000+):',
    text: 'Gain industry-wide recognition through competitions, advanced specializations, sponsorships and workshops.  ',
  },
];
