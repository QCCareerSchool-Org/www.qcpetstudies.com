import type { StaticImageData } from 'next/image';

import * as Images from './images';

export interface Expert {
  id?: string;
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
}

export const experts: Record<string, Expert> = {
  'lisa-day': {
    name: 'Lisa Day',
    title: 'Certified Master Groomer',
    description: 'Lisa holds prestigious ICMG and CMG titles with 40+ years of experience. As a top-notch CPPS Evaluator, she is dedicated to creating a positive and trusting atmosphere for pets and their owners.',
    image: Images.LisaDay,
  },
  'mari-kusanagi': {
    name: 'Mari Kusanagi',
    title: 'Second-Generation Groomer',
    description: 'As a second-generation groomer with over two decades of experience, Mari specializes in fear-free techniques. She is passionate about creating a safe and compassionate space for dogs while guiding owners on at-home care.',
    image: Images.MariKusanagi,
  },
  'susan-read': {
    name: 'Susan Read',
    title: 'Certified Dog Trainer',
    description: 'Susan brings over 35 years of experience specializing in Search and Rescue (SAR). As head K9 trainer and certified handler, Susan uses her strong teaching background to effectively guide both dogs and their handlers.',
    image: Images.SusanRead,
  },
  'paddy-gaffney': {
    name: 'Paddy Gaffney',
    title: 'Certified Master Groomer',
    description: 'Paddy is a certified Master Groomer and salon owner with over 20 years of expertise. As a certifier for CPPS, she is passionate about training new groomers and upholding high standards in pet care.',
    image: Images.PaddyGaffney,
  },
  'bruno-baker': {
    name: 'Bruno Baker',
    title: 'K9 Search and Rescue Training',
    description: 'Following a career in the RCMP and RCAF, Bruno is now a K9 Wilderness Search and Rescue specialist. He draws on his extensive background as a trainer to educate fellow owners and grow their canine partnerships.',
    image: Images.BrunoBaker,
  },
};
