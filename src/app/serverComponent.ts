import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

type EmptyRecord = Record<never, string>;

type PageProps<RouteParams extends Record<string, string> = EmptyRecord> = {
  params: Promise<RouteParams>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type LayoutProps = {
  children: ReactNode;
};

export type PageComponent<RouteParams extends Record<string, string> = EmptyRecord> = FC<PageProps<RouteParams>>;

export type LayoutComponent = FC<LayoutProps>;

export type GenerateMetadata<RouteParams extends Record<string, string> = EmptyRecord> = (props: PageProps<RouteParams>, parent: ResolvingMetadata) => Metadata | Promise<Metadata>;
