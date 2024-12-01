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
    links: [
      { title: 'About QC Pet Studies', href: '#about' },
      { title: 'Dog Grooming FAQ', href: '#grooming' },
      { title: 'Dog Training FAQ', href: '#training' },
    ],
  },
];
