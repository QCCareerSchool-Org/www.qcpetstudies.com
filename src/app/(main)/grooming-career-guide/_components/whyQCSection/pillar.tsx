import type { FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  title: string;
  text: ReactNode;
}

export const Pillar: FC<Props> = ({ icon: Icon, title, text }) => (
  <div className="card h-100 border-0 shadow">
    <div className="card-body">
      <Icon aria-hidden="true" className="text-primary display-6 mb-4" />
      <h3 className="h5 mb-3">{title}</h3>
      <p className="mb-0">{text}</p>
    </div>
  </div>
);
