import type { FC } from 'react';

import type { Tutor } from './tutors';
import { ImageCircle } from '../ImageCircle';

type Props = Tutor;

export const MasterIcon: FC<Props> = props => (
  <div className="text-center">
    <div className="d-flex justify-content-center mb-3">
      <ImageCircle src={props.image} alt="" size={200} />
    </div>
    <div className="mt-4">
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
      <p className="my-0"><i>{props.yearsExperience}+ Years of Experience</i></p>
      <p>{props.description}</p>
    </div>
  </div>
);
