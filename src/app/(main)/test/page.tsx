import type { FC } from 'react';

import type { PageComponent } from '@/app/serverComponent';
import { withSuspense } from '@/withSuspense';
import { Counter } from './counter';

const TestPage: PageComponent = () => {
  return (
    <div className="container">
      <h1>Test</h1>
      <AsyncComponent wait={2000} />
      <AsyncComponent wait={3000} />
      <AsyncComponent wait={5000} suspenseFallback={<>This one might take a while...</>} />
      <Counter />
      <Counter initialCount={9} increment={3} />
    </div>
  );
};

export default TestPage;

const delay = async (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms));

interface AsyncComponentProps {
  wait: number;
}

const AsyncComponentBase: FC<AsyncComponentProps> = async ({ wait }) => {
  await delay(wait);

  return (
    <div>
      waited for {wait} ms
    </div>
  );
};

const AsyncComponent = withSuspense(AsyncComponentBase, <div>waiting...</div>);
