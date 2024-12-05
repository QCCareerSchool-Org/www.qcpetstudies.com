'use client';

import type { FC, ReactElement } from 'react';
import { BsBookHalf, BsPencilSquare, BsPlayCircle } from 'react-icons/bs';

const AssignmentsIcon = (): ReactElement => (
  <div className="me-2"><BsPencilSquare title="Assignments" /></div>
);

const ReadingsIcon = (): ReactElement => (
  <div className="me-2"><BsBookHalf title="Readings" /></div>
);

const VideosIcon = (): ReactElement => (
  <div className="me-2"><BsPlayCircle title="Videos" /></div>
);

type Props = {
  assignmentsCount?: number;
  assignmentsTime?: string;
  readingsTime?: string;
  videosCount?: number;
  videosTime?: string;
};

export const UnitStats: FC<Props> = props => (
  <div className="d-flex flex-column flex-sm-row mb-3">
    {props.assignmentsCount && <div className="d-flex mb-2 mb-sm-0 me-sm-4"><AssignmentsIcon />{props.assignmentsCount}{props.assignmentsTime && <> ({props.assignmentsTime})</>}</div>}
    {props.readingsTime && <div className="d-flex mb-2 mb-sm-0 me-sm-4"><ReadingsIcon />{props.readingsTime}</div>}
    {props.videosCount && <div className="d-flex"><VideosIcon />{props.videosCount}{props.videosTime && <> ({props.videosTime})</>}</div>}
  </div>
);
