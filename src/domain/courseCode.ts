export type CourseCode = 'dg' | 'dt' | 'dc' | 'dd' | 'gt' | 'de';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'dg', 'dt', 'dc', 'dd', 'gt', 'de' ].includes(obj);
};

export const getCourseDescription = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'dg':
      return 'Dog Grooming';
    case 'dt':
      return 'Dog Training';
    case 'dc':
      return 'Dog Behaviour';
    case 'dd':
      return 'Dog Daycare';
    case 'gt':
      return 'Grooming Technician';
    case 'de':
      return 'Dog Grooming Externship';
  }
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'dg':
      return 'Dog Grooming';
    case 'dt':
      return 'Dog Training';
    case 'dc':
      return 'Dog Behaviour';
    case 'dd':
      return 'Dog Daycare';
    case 'gt':
      return 'Grooming Technician';
    case 'de':
      return 'Dog Grooming Externship';
  }
};

export const getCourseUrl = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'dg':
    case 'de':
      return 'https://www.qcpetstudies.com/certification-courses/dog-grooming';
    case 'dt':
      return 'https://www.qcpetstudies.com/certification-courses/dog-training';
    case 'dc':
      return 'https://www.qcpetstudies.com/certification-courses/dog-behaviour';
    case 'dd':
      return 'https://www.qcpetstudies.com/certification-courses/dog-daycare';
    case 'gt':
      return 'https://www.qcpetstudies.com/certification-courses/grooming-technician';
  }
};
