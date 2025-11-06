import type { CourseCode } from '@/domain/courseCode';

export type Course = {
  name: string;
  position: number;
  url: string;
  description: string;
  certificate?: string;
  courseCode: CourseCode[];
};

export const courses: Record<string, Course> = {
  'dog-grooming': {
    name: 'Professional Dog Grooming Course',
    position: 1,
    url: 'https://www.qcpetstudies.com/certification-courses/dog-grooming',
    description: 'Learn professional dog grooming from basic care to advanced breed styling, gain hands-on experience, and build a successful grooming business.',
    certificate: 'International Dog Grooming Professional™',
    courseCode: [ 'dg' ],
  },
  'dog-training': {
    name: 'Dog Training Course',
    position: 2,
    url: 'https://www.qcpetstudies.com/certification-courses/dog-training',
    description: 'Learn science-based dog training techniques to teach new behaviors, correct problem habits, and build a successful dog training career.',
    certificate: 'International Dog Training Professional™',
    courseCode: [ 'dt' ],
  },
  'dog-daycare': {
    name: 'Dog Daycare Course',
    position: 3,
    url: 'https://www.qcpetstudies.com/certification-courses/dog-daycare',
    description: 'Learn dog behavior, handling, hygiene, and safety skills to start and grow a successful dog walking or daycare business.',
    certificate: 'International Dog Care Professional™',
    courseCode: [ 'dd' ],
  },
  'dog-behavior': {
    name: 'Dog Behavior Course',
    position: 4,
    url: 'https://www.qcpetstudies.com/certification-courses/dog-behavior',
    description: 'Advance your dog training skills by learning to address anxiety, phobias, reactivity, and aggression through specialized behavior modification techniques.',
    certificate: 'International Dog Behavior Specialist™',
    courseCode: [ 'dc' ],
  },
};
