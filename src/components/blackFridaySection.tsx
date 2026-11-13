import Link from 'next/link';
import type { FC } from 'react';

export const BlackFridaySection: FC = () => (
  <section className="bg-danger text-white py-4">
    <div className="container">
      <h2 className="h4 text-center mb-0">The Black Friday Offer is Live:&nbsp; <Link className="text-white" href="https://enroll.qcpetstudies.com">View Details</Link></h2>
    </div>
  </section>
);
