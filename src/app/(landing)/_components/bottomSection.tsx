'use client';

import Link from 'next/link';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface Props {
  className?: string;
  heading?: ReactNode | string;
  buttonHref?: string;
  buttonContent?: ReactNode | string;
  buttonClass?: string;
}

export const BottomSection: FC<PropsWithChildren<Props>> = ({ className = 'bg-secondary', heading = 'Take the First Step Towards a New and Exciting Career', buttonHref, buttonContent = 'Preview the Course', buttonClass = 'btn-outline-light', children }) => {
  return (
    <section className={className}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="text-white mb-4">{heading}</h2>
            {children}
            {buttonHref
              ? <Link href={buttonHref} className={`btn ${buttonClass}`}>{buttonContent}</Link>
              : <ScrollLink to="top" smooth duration={300} className={`btn ${buttonClass}`}>{buttonContent}</ScrollLink>
            }
          </div>
        </div>
      </div>
    </section>
  );
};
