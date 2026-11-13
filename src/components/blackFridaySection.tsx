import Link from 'next/link';
import type { FC } from 'react';

export const BlackFridaySection: FC = () => (
  <section className="py-4" style={{ backgroundColor: 'red', color: 'white' }}>
    <div className="container">
      <h2 className="h4 text-center mb-0">The Black Friday Offer is Live:&nbsp; <Link style={{ color: 'white' }} href="https://enroll.qcpetstudies.com">View Details</Link></h2>
    </div>
  </section>
);
