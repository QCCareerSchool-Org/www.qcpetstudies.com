import { StaticImageData } from 'next/image';
import LisaImage from './lisa.jpg';
import MariImage from './mari.jpg';
import PaddyImage from './paddy.jpg';

export type Tutor = {
  name: string;
  yearsExperience: number;
  description: string;
  image: StaticImageData;
  video?: string;
};

export const mariKusanagi: Tutor = {
  name: 'Mari Kusanagi',
  yearsExperience: 20,
  description: 'Mari Kusanagi is a second-generation dog groomer with over 20 years of experience. She combines her deep-rooted passion for animal care with expert grooming techniques. With a background in animal hospitals and a commitment to fear-free grooming, Mari creates a safe, compassionate space for pets. She enjoys guiding pet parents on at-home care, helping them deepen their connection with their pets.',
  image: MariImage,
};

export const lisaDay: Tutor = {
  name: 'Lisa Day',
  yearsExperience: 40,
  description: "Known for her expertise and dedication to pet care, Lisa carries the prestigious titles of International Certified Master Groomer (ICMG) and Certified Master Groomer (CMG), not to mention she's a top-notch Evaluator with Canadian Professional Pet Stylists (CPPS). Lisa strives to create a positive and trusting atmosphere for both pets and their owners.",
  image: LisaImage,
  video: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-lisa.mp4',
};

export const paddyGaffney: Tutor = {
  name: 'Paddy Gaffney',
  yearsExperience: 20,
  description: 'Paddy Gaffney is a skilled dog groomer based in Ottawa, known for her expertise in grooming various breeds, particularly Poodles, Poodle mixes, and Samoyeds. As a certified Master Groomer, salon owner and certifier for Canadian Professional Pet Stylists, Paddy is passionate about sharing her skills and experience to train up-and-coming groomers. She is recognized for her dedication to maintaining high standards in grooming and pet care.',
  image: PaddyImage,
  video: 'https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-paddy.mp4',
};
