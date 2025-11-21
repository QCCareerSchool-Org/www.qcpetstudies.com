/* eslint-disable camelcase */

export interface Video {
  /** unique identifier */
  slug: string;
  /** the pages this video appears on */
  pages: string[];
  title: string;
  thumbnail_loc: string;
  description: string;
  /** Direct URL to the video file */
  content_loc: string;
  /** URL to the player page (leave undefined for default) */
  player_loc: string;
  /** Duration in seconds */
  duration: number;
  expiration_date?: string | Date;
  rating?: number;
  view_count?: number;
  publication_date: string | Date;
  family_friendly: 'yes' | 'no';
  restriction?: {
    relationship: 'allow' | 'deny';
    content: string;
  };
  requires_subscription: 'yes' | 'no';
  uploader?: {
    info?: string | undefined;
    content?: string | undefined;
  };
  live?: 'yes' | 'no';
  tag?: string;
}

import KimCooperImage from '@/app/(main)/certification-courses/dog-training/kim-cooper.jpg';

const baseUrl = 'https://www.qcpetstudies.com';

export const siteVideos = ([
  {
    slug: 'dog-training',
    pages: [
      `${baseUrl}/certification-courses/dog-training`,
      `${baseUrl}/get-a-dog-training-course-preview`,
    ],
    title: 'Dog Training',
    thumbnail_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer-poster.png',
    description: 'Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you\'ll graduate with all the knowledge and skills you need to succeed in the dog training industry!',
    content_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer.mp4',
    duration: 111,
    publication_date: new Date(2021, 11, 13, 11, 5).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'dog-grooming',
    pages: [
      `${baseUrl}/certification-courses/dog-grooming`,
    ],
    title: 'Dog Grooming',
    thumbnail_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.jpg',
    description: 'There\'s never been a better time to start a career as a professional dog groomer. Across the country, grooming salons and pet stylists have waiting lists—or are turning away new clients entirely. It\'s the perfect opportunity to launch a rewarding and in-demand career you\'ll love. Get your International Dog Groomer Certification with QC\'s comprehensive online training.',
    content_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.mp4',
    duration: 66,
    publication_date: new Date(2023, 2, 13, 11, 49).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'behavior-modification',
    pages: [
      `${baseUrl}/certification-courses/dog-training/course-preview`,
      `${baseUrl}/certification-courses/dog-training/`,
    ],
    title: 'Behavior Modification',
    thumbnail_loc: KimCooperImage.src,
    description: 'There\'s never been a better time to start a career as a professional dog groomer. Across the country, grooming salons and pet stylists have waiting lists—or are turning away new clients entirely. It\'s the perfect opportunity to launch a rewarding and in-demand career you\'ll love. Get your International Dog Groomer Certification with QC\'s comprehensive online training.',
    content_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/why-should-students-study-training-and-behavior-modification.mp4',
    duration: 66,
    publication_date: new Date(2023, 2, 13, 11, 49).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'guiding-principles',
    pages: [
      `${baseUrl}/certification-courses/dog-training/course-preview`,
    ],
    title: 'Guiding Principles',
    thumbnail_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-preview/guiding-principles.jpg',
    description: 'The first part of the dog training course is largely theory-based. Before you start learning specific training methods and techniques, you must first become an expert in canine behavior, communication, and learning theory. In these first four units you\'ll build those foundations with your tutor.',
    content_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-preview/guiding-principles.mp4',
    duration: 66,
    publication_date: new Date(2021, 11, 13, 11, 44).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'luring',
    pages: [
      `${baseUrl}/certification-courses/dog-training/course-preview`,
    ],
    title: 'Luring',
    thumbnail_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-preview/luring.jpg',
    description: 'Now that you understand the fundamentals of dog communication and learning theory, you\'re ready to learn all about training principles  In this section of the course you\'ll learn the six core training methods used to create new behaviors: luring, targeting, shaping, modeling, capturing, and mimicry. You\'ll discover how different types of dogs can react to different methods, and how it\'ll be your job to utilize the best method to suit each dog.',
    content_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-preview/luring.mp4',
    duration: 66,
    publication_date: new Date(2021, 11, 13, 14, 29).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'dog-grooming-unit-a',
    pages: [
      `${baseUrl}/certification-courses/dog-grooming/course-preview`,
    ],
    title: 'Dog Grooming Unit A',
    thumbnail_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-screenshots-a.jpg',
    description: 'The first few units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you\'ll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade, and more.',
    content_loc: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-a.mp4',
    duration: 66,
    publication_date: new Date(2017, 1, 14, 9, 47).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
]).map(v => ({
  ...v,
  player_loc: 'player_loc' in v && v.player_loc ? v.player_loc : `${baseUrl}/videos/${v.slug}`,
})) as Readonly<Video>[] as readonly Readonly<Video>[];

console.log(siteVideos);

// check for duplicate slugs
const slugs: string[] = [];

for (const v of siteVideos) {
  if (slugs.includes(v.slug)) {
    throw Error(`duplicate slug ${v.slug}`);
  }
  slugs.push(v.slug);
}
