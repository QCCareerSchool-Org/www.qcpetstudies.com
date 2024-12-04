import type { FC, ReactElement } from 'react';

type Props = {
  defaultTab?: number;
  data: { tab: ReactElement; content: ReactElement }[];
};

// TODO: Replace this or remove it

export const TabGroup: FC<Props> = ({ data }) => {

  return (
    <div>
      {data.map(({ tab, content }) => (
        <>
          <div>{tab}</div>
          <div>{content}</div>
        </>
      ))}
    </div>
  );
};
