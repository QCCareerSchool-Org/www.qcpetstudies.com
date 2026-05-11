import type { FC } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  text?: string;
}

export const SectionHeader: FC<Props> = ({ eyebrow, title, text }) => (
  <div className="row justify-content-center mb-5">
    <div className="col-12 col-lg-9 col-xl-8 text-center">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="mb-3">{title}</h2>
      {text && <p className="lead mb-0">{text}</p>}
    </div>
  </div>
);
