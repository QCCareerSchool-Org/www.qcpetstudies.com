/* eslint-disable @typescript-eslint/ban-types */
import type { FC, ReactNode } from 'react';

type PageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

type LayoutProps = {
  children: ReactNode;
};

export type PageComponent = FC<PageProps>;

export type LayoutComponent = FC<LayoutProps>;
