import { subnavLinks as FAQLinks } from '@/app/(main)/(default-footer)/about/faq/page';

export type SubnavLink = {
  title: string;
  href: string;
};

export type Subnav = {
  pathname: string;
  includeChildren?: boolean;
  title: string;
  links: SubnavLink[];
};

export const subnavs: Subnav[] = [
  {
    pathname: '/about/faq',
    title: 'FAQ',
    links: FAQLinks,
  },
];
