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
  'TD-0004': {
    name: 'Kayla Torraville',
    courses: [ 'dg' ],
    short: [ 'QC Pet Studies allowed me to pursue my dream while at home. I learned a lot of new skills and techniques. My tutor was great and very knowledgeable. The course material was very detailed as well and easy to learn from despite it being all virtual. I would recommend it to everyone.' ],
    long: [ 'QC Pet Studies allowed me to pursue my dream while at home. I learned a lot of new skills and techniques. My tutor was great and very knowledgeable. The course material was very detailed as well and easy to learn from despite it being all virtual. I would recommend it to everyone.' ],
    image: Images.Kayla,
    stars: 5,
  },
  'TD-0005': {
    name: 'April Costigan',
    courses: [ 'dg' ],
    short: [ 'The Dog Grooming and First Aid courses are fantastic. I learned so much from Lisa and Paddy. I\'ve officially started my own business, Sparkling Dog Grooming. I\'ve constructed an entire professional grooming studio in my basement and have started building a very nice client list.' ],
    long: [ 'The Dog Grooming and First Aid courses are fantastic. I learned so much from Lisa and Paddy. I\'ve officially started my own business, Sparkling Dog Grooming. I\'ve constructed an entire professional grooming studio in my basement and have started building a very nice client list.' ],
    image: Images.April,
    stars: 5,
  },
  // 'TD-0006': {
  //   name: 'Hailie Savage',
  //   courses: [ 'dg' ],
  //   short: [ 'The tutors were extremely helpful and the course materials were very well put together and extremely helpful! The critique was fantastic. I highly recommend the program!' ],
  //   long: [ 'The tutors were extremely helpful and the course materials were very well put together and extremely helpful! The critique was fantastic. I highly recommend the program!' ],
  //   image: Images.Halllie,
  //   stars: 5,
  // },
  'TD-0007': {
    name: 'Melody Mason',
    courses: [ 'dg' ],
    short: [ 'The Dog Grooming course was extremely helpful. The video tutorials were very well done, and they made learning to groom a dog very clear. The tutor\'s notes were also very helpful. I feel very confident in my skills after finishing the course and starting my career.' ],
    long: [ 'The Dog Grooming course was extremely helpful. The video tutorials were very well done, and they made learning to groom a dog very clear. The tutor\'s notes were also very helpful. I feel very confident in my skills after finishing the course and starting my career.' ],
    image: Images.Melody,
    stars: 5,
  },
  'TD-0008': {
    name: 'Casey Becard',
    courses: [ 'dg' ],
    short: [ 'The tutors were very well-spoken and gave great instructions. There was never a time when I was confused. The hands-on videos had lots of visual content and showed you just about everything you needed to know for your assignments.' ],
    long: [ 'The tutors were very well-spoken and gave great instructions. There was never a time when I was confused. The hands-on videos had lots of visual content and showed you just about everything you needed to know for your assignments.' ],
    image: Images.Casey,
    stars: 5,
  },
  'TD-0009': {
    name: 'Nicki Hughes',
    courses: [ 'dg' ],
    short: [ 'I was concerned about how much one could actually learn about a hands-on profession online; however, as I got further in and watched the videos, I saw how in-depth they are and how they really take the time to show you the skills you need to know to complete the course.' ],
    long: [ 'I was concerned about how much one could actually learn about a hands-on profession online; however, as I got further in and watched the videos, I saw how in-depth they are and how they really take the time to show you the skills you need to know to complete the course.' ],
    image: Images.Nicki,
    stars: 5,
  },
  'TD-0010': {
    name: 'Kloe Wilson',
    courses: [ 'dg' ],
    short: [ 'Overall it was a great experience. I loved how it was all online and all at my own pace. Having the option to do it whenever I can and leaving it for a couple of days if I was busy was a blessing. I worked a full time job while taking this course and it was definitely easier to juggle everything with it being online. Would definitely recommend to others!' ],
    long: [ 'Overall it was a great experience. I loved how it was all online and all at my own pace. Having the option to do it whenever I can and leaving it for a couple of days if I was busy was a blessing. I worked a full time job while taking this course and it was definitely easier to juggle everything with it being online. Would definitely recommend to others!' ],
    image: Images.Kloe,
    stars: 5,
  },
};
