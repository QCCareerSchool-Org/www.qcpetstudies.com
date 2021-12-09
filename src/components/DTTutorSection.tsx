import Image from 'next/image';
import { ReactElement } from 'react';

import PlaceHolderImage from '../images/placeholder.jpg';

type Props = {
  className?: string;
  id?: string;
};

export const DTTutorSection = ({ className, id = 'tutors' }: Props): ReactElement => {

  return (
    <>
      <div id={id} className="sectionAnchor" />
      <section className={className}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Learn from <strong>Dog Training Experts</strong></h2>
              <p className="lead">QC's dog training course was developed with the assistance of Kim Cooper.</p>
              <p className="mb-5">Kim Cooper is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in aerospace engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs&mdash;all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search-and-rescue dogs. Kim and her dogs have earned many search-and-rescue certifications as well as obedience and agility titles.</p>
              <h3 className="mb-4">Your Dog Training Tutors</h3>
            </div>
            <div className="col-12 col-lg-6 text-lg-start align-item-center mb-2">
              <div className="mb-2">
                <Image src={PlaceHolderImage} layout="responsive" placeholder="blur" alt="dog-training expert, Shannon Noonan" />
              </div>
              <p className="lead"><strong>Shannon Noonan</strong></p>
              <p>Certified Dog Trainer (CPDT-KA)<br /><em>10 Years of Experience</em></p>
              <p className="mb-0">Shannon first started working with dogs when she started fostering with Ottawa Dog Rescue. Through this organization, Shannon adopted her first dog - Blue, a Great Dane/Pointer mix. Shannon and Blue learned about formal dog training together. This pair went on to found the first official Therapy Dog program at Carleton University, a program that remains popular today. Now, Shannon is a Certified Professional Dog Trainer - Knowledge Assessed, and owns her own dog training business with her Dalmatian, Elroy. Shannon and Elroy share a passion for teaching other humans and dogs about training, obedience and agility. Shannon is excited to ignite this same passion for training in QC's dog training students.</p>
            </div>
            <div className="col-12 col-lg-6 text-lg-start">
              <div className="mb-2">
                <Image src={PlaceHolderImage} layout="responsive" placeholder="blur" alt="dog-training expert, Susan Read" />
              </div>
              <p className="lead"><strong>Susan Read</strong></p>
              <p>Certified Dog Trainer<br /><em>35 Years of Experience</em></p>
              <p className="mb-0">Susan has been training dogs for over 35 years. She specializes in Search and Rescue (SAR) work, but Susan's experience extends to competitive obedience, rally and agility training as well. Susan has been teaching tracking for many years, and conducts workshops across Ontario. She has been involved with K9 SAR since 2000, and is now the head K9 trainer and handler with Georgian Bay SAR. Susan is also the Provincial K9 Coordinator and sits on the Ontario Search and Rescue Volunteer Association (OSARVA) Board of Directors. Susan is currently the only OPP/OSARVA certified dog handler in Central Ontario with her live find dog, Zena. She has also worked with Human Remains Detection K9 with her dog, Zappa, since 2014. As a former school teacher and a highly experienced dog training instructor, Susan looks forward to using her significant teaching experience to benefit QC's dog training students.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
