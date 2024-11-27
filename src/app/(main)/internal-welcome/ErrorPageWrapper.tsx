'use client';

import ErrorPage from 'next/error';
import { FC } from 'react';

type Props = {
  errorCode: string;
};

export const ErrorPageWrapper: FC<Props> = ({ errorCode }) => {
  return (
    <ErrorPage statusCode={parseInt(errorCode, 10)} />
  );
};
