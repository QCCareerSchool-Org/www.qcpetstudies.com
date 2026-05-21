import type { CourseCode } from './courseCode';

interface CourseData {
  name: string;
  url: string;
  description: string;
  certification: string | undefined;
  subjects: string[] | undefined;
  workload: string | undefined;
}

const baseUrl = 'https://www.qcpetstudies.com';

export const dataMap: Readonly<Record<CourseCode, CourseData>> = {
  dg: {
    name: 'Dog Grooming',
    url: `${baseUrl}/certification-courses/dog-grooming`,
    description: 'Learn professional dog grooming from basic care to advanced breed styling, gain hands-on experience, and build a successful grooming business.',
    certification: 'International Dog Grooming Professional™',
    subjects: undefined,
    workload: undefined,
  },
  dt: {
    name: 'Dog Training',
    url: `${baseUrl}/certification-courses/dog-training`,
    description: 'Learn science-based dog training techniques to teach new behaviors, correct problem habits, and build a successful dog training career.',
    certification: 'International Dog Training Professional™',
    subjects: undefined,
    workload: undefined,
  },
  fa: {
    name: 'First Aid',
    url: `${baseUrl}/certification-courses/first-aid`,
    description: 'Learn how to create a safe environment and how to respond to emergencies. The First Aid for Groomers course is for new and experienced groomers alike!',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  dc: {
    name: 'Dog Behaviour',
    url: `${baseUrl}/certification-courses/dog-behaviour`,
    description: 'Advance your dog training skills by learning to address anxiety, phobias, reactivity, and aggression through specialized behavior modification techniques.',
    certification: 'International Dog Behavior Specialist™',
    subjects: undefined,
    workload: undefined,
  },
  ds: {
    name: 'Breed Styling',
    url: `${baseUrl}/certification-courses/breed-styling`,
    description: 'If you\'re already a professional dog groomer, the breed styling workshop will take your grooming skills to the next level. Start today!',
    certification: 'International Dog Grooming Professional™',
    subjects: undefined,
    workload: undefined,
  },
  dd: {
    name: 'Dog Daycare',
    url: `${baseUrl}/certification-courses/dog-daycare`,
    description: 'Learn dog behavior, handling, hygiene, and safety skills to start and grow a successful dog walking or daycare business.',
    certification: 'International Dog Care Professional™',
    subjects: undefined,
    workload: undefined,
  },
  gt: {
    name: 'Grooming Technician',
    url: `${baseUrl}/certification-courses/grooming-technician`,
    description: 'Become a Certified Grooming Technician with interactive online training!',
    certification: 'Certified Grooming Technician™',
    subjects: undefined,
    workload: undefined,
  },
  de: {
    name: 'Dog Grooming Externship',
    url: `${baseUrl}/certification-courses/dog-grooming`,
    description: 'Learn professional dog grooming from basic care to advanced breed styling, gain hands-on experience, and build a successful grooming business.',
    certification: 'International Dog Grooming Professional™',
    subjects: undefined,
    workload: undefined,
  },
  te: {
    name: 'Dog Training Externship',
    url: `${baseUrl}/certification-courses/dog-training`,
    description: '',
    certification: 'International Dog Training Professional™',
    subjects: undefined,
    workload: undefined,
  },
};
