import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

export interface Props {
  title: string;
  subtitle?: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  text: string;
  extraText?: string;
  className?: string;
}

export const CareerSection: FC<Props> = ({ title, subtitle, imgSrc, imgAlt, text, extraText, className }) => (
  <section className={className}>
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <Image src={imgSrc} alt={imgAlt} width="500" height="320" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-12 col-lg-6 text-lg-start">
          <h2>{title}</h2>
          {subtitle && <h4>{subtitle}</h4>}
          <p>{text}</p>
          {extraText && <p className="lead">{extraText}</p>}
        </div>
      </div>
    </div>
  </section>
);
