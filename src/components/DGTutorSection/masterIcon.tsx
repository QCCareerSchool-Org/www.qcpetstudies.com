import { FC } from 'react';

import { ImageCircle } from '../ImageCircle';
import { Tutor } from './tutors';

type Props = Tutor;

export const MasterIcon: FC<Props> = props => (
  <div className="col-12 col-lg-4">
    <ImageCircle src={props.image} alt="" size={200} />
    <div className="mt-4">
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
      <p className="my-0"><i>{props.yearsExperience}+ Years of Experience</i></p>
      <p>{props.description}</p>
    </div>
  </div>
);
