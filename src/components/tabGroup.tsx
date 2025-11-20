'use client';

import type { FC, ReactNode } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

interface Props {
  videoContent: ReactNode;
  assignmentContent: ReactNode;
}

export const TabGroup: FC<Props> = ({ videoContent, assignmentContent }) => (
  <>
    <Tabs defaultActiveKey="video">
      <Tab key="video" eventKey="video" title="Preview">
        <div className="my-4">
          {videoContent}
        </div>
      </Tab>
      <Tab key="assignment" eventKey="assignment" title="Example Assignment">
        <div className="my-4">
          {assignmentContent}
        </div>
      </Tab>
    </Tabs>
  </>
);
