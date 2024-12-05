import Link from 'next/link';
import type { FC } from 'react';

import MapleLeaf from '@/images/maple-leaf.svg';

export const CAPriceMessage: FC = () => (
  <div>
    <p className="lead mb-0"><strong><MapleLeaf width={600} height={650} alt="Maple Leaf" style={{ width: 'auto', height: 20 }} /> Canadian Students Save!</strong></p>
    <p className="mb-0">You could save more than 50% on your course fees. <Link className="link-light" style={{ textDecoration: 'underline' }} href="/canadian-tax-credits">Learn more</Link></p>
  </div>
);
