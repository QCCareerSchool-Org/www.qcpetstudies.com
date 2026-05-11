import type { FC } from 'react';

import { AccordionFAQ } from '@/components/accordionFAQ';

export const FAQSection: FC = () => (
  <section>
    <div itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-3 text-center">FAQ: Becoming a Dog Groomer</h2>
            {faqItems.map(item => (
              <AccordionFAQ heading={item.question} className="mb-3" key={item.question}>
                {item.answer}
              </AccordionFAQ>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const faqItems = [
  {
    question: 'Do I need an advanced credential to become a groomer?',
    answer: 'No. In the professional pet world, your professional certificate, practical skills, and grooming work carry the most weight. Employers and clients prioritize your ability to safely style a dog over titles.',
  },
  {
    question: 'What is the best dog grooming school?',
    answer: 'The best program balances technical skill with business education. QC Pet Studies is a leader because we bridge the gap between technical grooming skills and the entrepreneurial tools needed to launch a profitable practice.',
  },
  {
    question: 'How much do dog groomers make?',
    answer: <p>Groomers today typically earn between <strong>$50,000 and $65,000</strong> annually, while specialized mobile or boutique owners often net between <strong>$70,000 and $95,000</strong>. Top-tier experts in high-demand niches like hand-stripping or competitive styling increase their income by charging premium service fees.</p>,
  },
  {
    question: 'How long does it take to get certified?',
    answer: <p>Our program is designed to be completed in <strong>3 to 6 months</strong>. This allows you to enter the professional market and start earning an income much faster than traditional vocational schools. If you need more time, you have a full year to complete the program. </p>,
  },
];
