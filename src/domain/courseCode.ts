export const courseCodes = [ 'dg', 'dt', 'fa', 'dc', 'ds', 'dd', 'gt', 'de' ] as const;

export type CourseCode = typeof courseCodes[number];

export const activeCourseCodes: CourseCode[] = [ 'dg', 'dt', 'dd', 'dc' ] as const;

const courseCodeSet = new Set<CourseCode>(courseCodes);

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && courseCodeSet.has(obj as CourseCode);
};

const names = {
  dg: 'Dog Grooming',
  dt: 'Dog Training',
  fa: 'First Aid',
  dc: 'Dog Behaviour',
  ds: 'Breed Styling',
  dd: 'Dog Daycare',
  gt: 'Grooming Technician',
  de: 'Dog Grooming Externship',
} as const satisfies { readonly [c in CourseCode]: string };

const baseUrl = 'https://www.qcpetstudies.com';

const urls = {
  dg: `${baseUrl}/certification-courses/dog-grooming`,
  dt: `${baseUrl}/certification-courses/dog-training`,
  fa: `${baseUrl}/certification-courses/first-aid`,
  dc: `${baseUrl}/certification-courses/dog-behaviour`,
  ds: `${baseUrl}/certification-courses/breed-styling`,
  dd: `${baseUrl}/certification-courses/dog-daycare`,
  gt: `${baseUrl}/certification-courses/grooming-technician`,
  de: `${baseUrl}/certification-courses/dog-grooming`,
} as const satisfies { readonly [c in CourseCode]: string };

const descriptions = {
  dg: 'Learn professional dog grooming from basic care to advanced breed styling, gain hands-on experience, and build a successful grooming business.',
  dt: 'Learn science-based dog training techniques to teach new behaviors, correct problem habits, and build a successful dog training career.',
  fa: 'Learn how to create a safe environment and how to respond to emergencies. The First Aid for Groomers course is for new and experienced groomers alike!',
  dc: 'Advance your dog training skills by learning to address anxiety, phobias, reactivity, and aggression through specialized behavior modification techniques.',
  ds: 'If you\'re already a professional dog groomer, the breed styling workshop will take your grooming skills to the next level. Start today!',
  dd: 'Learn dog behavior, handling, hygiene, and safety skills to start and grow a successful dog walking or daycare business.',
  gt: 'Become a Certified Grooming Technician with interactive online training!',
  de: 'Learn professional dog grooming from basic care to advanced breed styling, gain hands-on experience, and build a successful grooming business.',
} as const satisfies { readonly [c in CourseCode]: string };

const certifications = {
  dg: 'International Dog Grooming Professional™',
  dt: 'International Dog Training Professional™',
  fa: undefined,
  dc: 'International Dog Behavior Specialist™',
  ds: 'International Dog Grooming Professional™',
  dd: 'International Dog Care Professional™',
  gt: 'Certified Grooming Technician™',
  de: 'International Dog Grooming Professional™',
} as const satisfies { readonly [c in CourseCode]: string | undefined };

const subjects = {
  dg: undefined,
  dt: undefined,
  fa: undefined,
  dc: undefined,
  ds: undefined,
  dd: undefined,
  gt: undefined,
  de: undefined,
} as const satisfies { readonly [c in CourseCode]: readonly string[] | undefined };

const workloads = {
  dg: undefined,
  dt: undefined,
  fa: undefined,
  dc: undefined,
  ds: undefined,
  dd: undefined,
  gt: undefined,
  de: undefined,
} as const satisfies { readonly [c in CourseCode]: string | undefined };

export const getCourseName = (c: CourseCode): string => {
  return names[c];
};

export const getCourseUrl = (c: CourseCode): string => {
  return urls[c];
};

export const getCourseDescription = (c: CourseCode): string => {
  return descriptions[c];
};

export const getCourseCertification = (c: CourseCode): string | undefined => {
  return certifications[c];
};

export const getCourseSubjects = (c: CourseCode): readonly string[] | undefined => {
  return subjects[c];
};

export const getCourseWorkload = (c: CourseCode): string | undefined => {
  return workloads[c];
};
