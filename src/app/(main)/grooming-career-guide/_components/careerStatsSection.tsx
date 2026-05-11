import type { ReactNode } from 'react';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
import { BiCertification, BiLineChart, BiStar, BiWallet } from 'react-icons/bi';

import { SectionHeader } from '@/components/sectionHeader';

interface CareerStat {
  icon: IconType;
  title: string;
  text: ReactNode;
}

export const CareerStatsSection: FC = () => (
  <section>
    <div className="container">
      <SectionHeader title="Your Career at a Glance" />
      <div className="row g-4">
        {careerStats.map(item => (
          <div className="col-12 col-md-6 col-xl-3 d-flex" key={item.title}>
            <div className="card h-100 w-100 shadow">
              <div className="card-body">
                <item.icon aria-hidden="true" className="text-primary display-6 mb-4" />
                <h2 className="h5 mb-3">{item.title}</h2>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const careerStats: CareerStat[] = [
  {
    icon: BiCertification,
    title: 'Entry Requirements:',
    text: ' A professional certification and practical experience—the modern standards for building pet-owner trust.',
  },
  {
    icon: BiLineChart,
    title: 'Average Salary:',
    text: 'From a median of $41,200 to over $65,000+ for specialized pet stylists. High-end groomers can exceed $85,000.',
  },
  {
    icon: BiStar,
    title: 'Top Skills:',
    text: 'Brushing and bathing, pet cuts, breed-standard styling, fear-free handling, skin & coat wellness.',
  },
  {
    icon: BiWallet,
    title: 'Fastest Path to Revenue:',
    text: 'Professional Online Certification with mentored practical training.',
  },
];
