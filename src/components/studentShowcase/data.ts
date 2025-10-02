import type { StaticImageData } from 'next/image';

import * as Images from './images';
import type { CourseCode } from '@/domain/courseCode';

export type Student = {
  id?: string;
  name: string;
  courses: CourseCode[];
  description: string;
  image: StaticImageData;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
};

export const students: Record<string, Student> = {
  'casey-bechard': {
    name: 'Casey Bechard',
    courses: [ 'dg' ],
    description: `
    "I’ve always had a love for animals—growing up in a small town, I’ve worked in vet clinics, horse barns, and now a grooming salon. Being surrounded by animals just feels right to me. 
    Funny enough, when I started working in grooming, I didn’t expect to become a groomer myself—I was just a bather and ran the doggy daycare. But watching the transformations the groomers would create was fascinating. 
    I saw how much it helped the dogs—sometimes even spotting issues before the owners did—and that inspired me to dive in and learn more.\n\n

    I decided to enroll in QC Pet Studies because I needed something flexible, and I was impressed right away with how well-organized and thorough the course was. 
    I didn’t have doubts about learning online, but I was surprised by how much I got out of it! The videos were detailed and easy to follow, and my tutor’s feedback was always kind, constructive, and super helpful. 
    I still use what she taught me to this day.\n\n

    One of the biggest lessons I’ve learned as a groomer is patience. Every dog is different, and staying calm makes the process smoother for both of us. 
    I also learned to write everything down—it helped so much when practicing techniques like scissoring and clipper work. The Teddy Bear Cut unit was one of my favorites! 
    I really took my time and followed my notes, and it paid off.\n\n

    I’m working at Off the Leash Pet Grooming and I’m thankful for QC for giving me the foundation I needed to start my grooming career. I’m excited for the future and all the furry clients I’ll get to meet along the way!"\n
    `,
    image: Images.CaseyBechard,
    stars: 5,
  },
  'nicki-scott': {
    name: 'Nicki Scott',
    courses: [ 'dg' ],
    description: `
    "I’m a visual learner and like to see things to really grasp them, so I found the instructional videos particularly helpful. The videos were very clear and straightforward every step of the way.\n\n

    The self-paced structure allowed me to avoid a lot of burnout. I was already working in a shop as a bather when I started, so going at my own pace meant I could still focus on work but use my downtime to work on the course. I didn’t have to change my work schedule or routine at all.\n\n

    The platform itself was delightful to work with. I had no issues navigating the portal—everything was well organized and easy to find, whether I was checking grades, reading feedback, submitting coursework, or updating payment information.

    The tutor feedback was great, and the student support team was helpful and always incredibly positive.\n\n

    It’s a great feeling to finish a tricky new standard clip and feel like I nailed it. It reminds me why I enjoy grooming so much. I’ve been working as a groomer for several years now. I started in shops and now I rent a table and work for myself alongside some really great groomers. 
    I’ve slowly built my business and have amazing clients—and I really love all my dogs so much."\n
    `,
    image: Images.NickiScott,
    stars: 5,
  },
  'kayla-macdonald': {
    name: 'Kayla MacDonald',
    courses: [ 'dt' ],
    description: `
    "When I enrolled in QC Pet Studies, I had the passion and drive, but I needed the education, structure, and support to take the leap into the professional dog world. And wow—this course gave me all that and so much more.\n\n

    The course materials were incredibly well put together—professional, clear, and full of information I still use daily. Even with hands-on experience already under my belt, I learned so many new training techniques and behavior concepts that completely changed the way I connect with dogs.\n\n

    What made it even better was the online, self-paced format. Life gets busy, especially when you’re juggling other responsibilities (and four dogs of your own!). Having the flexibility to learn on my own schedule allowed me to stay committed without feeling overwhelmed. 
    The platform was easy to navigate and kept me on track, every step of the way.\n\n

    My tutor and the support team were absolute gems. I felt so encouraged through every piece of feedback, and knowing someone was rooting for me made all the difference. Their guidance helped build my confidence and shaped me into the trainer I am today.\n\n

    One of the most unexpected joys was the Virtual Classroom. I connected with other students and animal lovers from all over—sharing wins, asking questions, and getting inspired by their journeys too. It really added a sense of community that made the course feel even more special.
    The practical assignments pushed me outside my comfort zone in the best way possible. They helped me build hands-on experience that prepared me for real-world situations, and gave me the confidence to handle all kinds of dogs with different needs and personalities."\n
    `,
    image: Images.KaylaMacDonald,
    stars: 5,
  },
  'wendy-bailey': {
    name: 'Wendy Bailey',
    courses: [ 'dc' ],
    description: `
    "The confidence I acquired through QC Pet Studies is beyond measure. After spending four years as a dog trainer, I felt ready to take on more training challenges. I decided to enroll in the QC Pet Studies Behavior Specialist Program.\n\n

    The insights I gained regarding counter conditioning for behavior modification were truly transformative. I transitioned from teaching clients' dogs basic and intermediate commands to addressing behavior issues like fear, aggression, reactivity, and resource guarding. 
    In my work with therapy dogs, this knowledge has proven to be an essential asset, especially since some dogs struggle to interact with others. With effective behavior management, these dogs can learn to change their responses to other dogs. This has significantly aided therapy dog teams in reaching their objectives.\n\n

    Upon finishing the QC Pet Studies Course, I promptly began offering behavior modification services to my clients and actively promoted my business. As a result, I have taken on numerous behavior management cases. 
    Additionally, I applied for a virtual behavior modification role with a company, and I am now receiving a wealth of online referrals. My experience with QC Pet Studies has been invaluable. They provided me with practical support whenever I needed assistance. I highly recommend their program."\n
    `,
    image: Images.WendyBailey,
    stars: 5,
  },
};
