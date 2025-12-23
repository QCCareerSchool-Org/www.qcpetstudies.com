import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import StudentSupportImage from './student-support.jpg';
import CalIcon from '@/components/icons/calendar-check.svg';
import ChatIcon from '@/components/icons/chat-white.svg';
import { PromotionPeriod } from '@/lib/promotionPeriod';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';

interface Props {
  showLink?: boolean;
  date: number;
}

const span = PromotionPeriod.span(endOfYear2025, newYear2026);

export const SupportSection: FC<Props> = ({ date, showLink }) => (
  <section className={`${styles.section} text-white`}>
    <div className="container">
      <div className="row align-items-center justify-content-center g-5 g-xl-s">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5 text-center">
          <Image src={StudentSupportImage} alt="" className={styles.image} />
        </div>
        <div className="col-12 col-lg-7">
          <h2 className="mb-4 text-white"><strong>Real Support &amp; Guidance, Every Step of the Way</strong></h2>
          <p className="lead mb-0">{span.contains(date)
            ? <>QC's dedicated team is here to help you take control of your future&mdash;guiding you toward the right course, navigating your materials, and staying on track with your goals. Available seven days a week by phone, email, or live chat, we make sure you always have the support you need to keep moving forward.</>
            : <>QC's dedicated team is here to help you select the right course, navigate your materials, and stay on track to reach your career goals. Available seven days a week by phone, email, or live chat, we are here to ensure you get the support you need&mdash;whether it's advice, troubleshooting, or planning your next step.</>
          }</p>
          <div className="d-flex gap-3 flex-wrap mt-3">
            {showLink && <Link href="/contact-us" className="btn btn-secondary mt-4"><Image src={ChatIcon} height="22" className="me-2" style={{ position: 'relative', top: -2 }} alt="" />Talk to Us Today</Link>}
            {showLink && <Link href="https://calendly.com/qccareerschool/pet" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mt-4" style={{ borderWidth: '2px' }}><Image src={CalIcon} height="22" className="me-2" style={{ position: 'relative', top: -3 }} alt="" />Book A Call</Link>}
          </div>
        </div>
      </div>
    </div>
  </section>
);
