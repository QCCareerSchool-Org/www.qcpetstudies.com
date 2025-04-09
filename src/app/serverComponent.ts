import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

type LayoutProps = {
  children: ReactNode;
};

export type PageComponent = FC<PageProps>;

export type LayoutComponent = FC<LayoutProps>;

export type GenerateMetadata = (props: PageProps, parent: ResolvingMetadata) => Promise<Metadata>;
