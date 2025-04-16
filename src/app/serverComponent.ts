import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type PageProps<RouteParams extends Record<string, string> = {}> = {
  params: Promise<RouteParams>;
  searchParams: { [key: string]: string | string[] | undefined };
};

type LayoutProps = {
  children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type PageComponent<RouteParams extends Record<string, string> = {}> = FC<PageProps<RouteParams>>;

export type LayoutComponent = FC<LayoutProps>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type GenerateMetadata<RouteParams extends Record<string, string> = {}> = (props: PageProps<RouteParams>, parent: ResolvingMetadata) => Promise<Metadata>;
