import { FC } from 'react';

export type CTAType = 'grooming' | 'training' | 'care' | 'behavior' | 'grooming tech';

type Props = {
  type?: CTAType;
}

export const CTA: FC<Props> = ({ type }) => {
  const enrollmentUrl = getEnrollUrl(type);

  return (
    <div className="row align-items-center">
      <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
        <h2><Heading type={type} /></h2>
        <p className="lead mb-0">Take the first step towards a new career in the booming {type === 'grooming' ? 'dog grooming ' : type === 'training' ? 'dog training ' : type === 'behavior' ? 'behavior' : type === 'care' ? ' dog care' : 'pet'} industry.</p>
      </div>
      <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
        <a href={enrollmentUrl}><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
      </div>
    </div>
  );
};

const Heading: FC<Props> = ({ type }) => {
  switch (type) {
    case 'grooming tech':
      return <>Ready to Launch Your Career as a <strong>Grooming Technician?</strong></>;
    case 'grooming':
      return <>Ready to Launch Your<br /><strong>Grooming Career?</strong></>;
    case 'training':
      return <>Ready to Launch Your<br /><strong>Training Career?</strong></>;
    case 'care':
      return <>Ready to Launch Your<br /><strong>Dog Care Career?</strong></>;
    default:
      return <>Ready to Launch Your <strong>Career?</strong></>;
  };
};


const getEnrollUrl = (type?: CTAType): string => {
  switch (type) {
    case 'grooming':
      return `https://enroll.qcpetstudies.com?c=dg`;
    case 'training':
      return `https://enroll.qcpetstudies.com?c=dt`;
    case 'behavior':
      return `https://enroll.qcpetstudies.com?c=dt&c=dc`;
    case 'care':
      return `https://enroll.qcpetstudies.com?c=dd`;
    case 'grooming tech':
      return `https://enroll.qcpetstudies.com?c=gt`;
    default:
      return `https://enroll.qcpetstudies.com`;
  }
};
