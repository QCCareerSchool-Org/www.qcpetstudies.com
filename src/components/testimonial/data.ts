import type { StaticImageData } from 'next/image';

import * as Images from './images';
import type { CourseCode } from '@/domain/courseCode';

export type Testimonial = {
  name: string;
  courses: CourseCode[];
  short: string[];
  long: string[];
  image: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Record<string, Testimonial> = {
  'TD-0001': {
    name: 'Alexa-Ann Cesari',
    courses: [ 'dt' ],
    short: [ 'Since enrolling in the course, I have successfully acquired several new clients and have acquired some amazing skills. Thank you for this opportunity!' ],
    long: [ 'Since enrolling in the course, I have successfully acquired several new clients and have acquired some amazing skills. Thank you for this opportunity!' ],
    image: Images.Alexa,
    stars: 5,
  },
  'TD-0002': {
    name: 'Cheryl Lovette',
    courses: [ 'dt' ],
    short: [ 'I really enjoyed both courses and how easy the format was. Having everything in one place with no downloading needed, was very easy and convenient. I also appreciated the added touch of the interactive parts of the reading.' ],
    long: [ 'I really enjoyed both courses and how easy the format was. Having everything in one place with no downloading needed, was very easy and convenient. I also appreciated the added touch of the interactive parts of the reading.' ],
    image: Images.Cheryl,
    stars: 5,
  },
  'TD-0003': {
    name: 'Loris Tiede',
    courses: [ 'dt' ],
    short: [ 'My experience with QC Pet Studies was awesome! The dog trainer course was very well structured and organized. What was expected of me in my assignments were clear and they were graded very promptly. I would definitely recommend QC Career School!' ],
    long: [ 'My experience with QC Pet Studies was awesome! The dog trainer course was very well structured and organized. What was expected of me in my assignments were clear and they were graded very promptly. I would definitely recommend QC Career School!' ],
    image: Images.Loris,
    stars: 5,
  },
};
