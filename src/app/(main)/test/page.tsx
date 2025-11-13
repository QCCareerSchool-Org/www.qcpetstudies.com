import type { FC } from 'react';

import type { PageComponent } from '@/app/serverComponent';
import { withSuspense } from '@/withSuspense';

const TestPage: PageComponent = () => {
  return (
    <div className="container">
      <h1>Test</h1>
      <AsyncComponent wait={2000} />
      <AsyncComponent wait={3000} />
      <AsyncComponent wait={5000} suspenseFallback={<>This one might take a while...</>} />
    </div>
  );
};

export default TestPage;

const delay = async (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms));

type AsyncComponentProps = {
  wait: number;
};

const AsyncComponentBase: FC<AsyncComponentProps> = async ({ wait }) => {
  await delay(wait);

  return (
    <div>
      waited for {wait} ms
    </div>
  );
};

const AsyncComponent = withSuspense(AsyncComponentBase, <div>waiting...</div>);
