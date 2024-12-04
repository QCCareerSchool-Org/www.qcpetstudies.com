'use client';
import Image from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { UnitStats } from '@/components/unitStats';
import UnitAImage from '@/images/dd-full-outline-unit-a.jpg';
import UnitBImage from '@/images/dd-full-outline-unit-b.jpg';
import UnitCImage from '@/images/dd-full-outline-unit-c.jpg';
import UnitDImage from '@/images/dd-full-outline-unit-d.jpg';
import UnitEImage from '@/images/dd-full-outline-unit-e.jpg';
import UnitFImage from '@/images/dd-full-outline-unit-f.jpg';

export const UnitSection: FC = () => {

  const [ unit, setUnit ] = useState<string | null>(null);
  const closeModal = (): void => setUnit(null);

  return (
    <>
      <section id="outlineSection" className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-5 text-center">
              <h2>Unit-by-Unit Breakdown</h2>
              <p className="mb-0">Below is an outline of each unit of the online dog care course. Expand each section to find out what you&apos;ll learn in each unit.</p>
            </div>
          </div>
          <Accordion>
            <AccordionItem heading="Unit A">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
                  <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="2 hours" videosCount={2} />
                  <p>In the first unit of your Dog Daycare course, you&apos;ll introduce yourself to your expert tutor and learn about the fundamentals of professionally caring for dogs. You&apos;ll dive into an overview of the dog daycare industry, study different types of dog-care locations and learn about the tools and equipment you&apos;ll need as you begin working with dogs.</p>
                  <button onClick={() => setUnit('A')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'A'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit A Details</Modal.Header>
                    <Modal.Body>
                      <UnitADetails />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
                  <Image
                    src={UnitAImage}
                    alt="two dogs running in a field"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </AccordionItem>
            <AccordionItem heading="Unit B">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 4 hours</div>
                  <UnitStats assignmentsCount={5} assignmentsTime="1.5 hours" readingsTime="2.5 hours" videosCount={3} />
                  <p>In Unit B, you&apos;ll learn all about dogs. You&apos;ll study canine communication signals so that you can identify potential problems that may arise when you care for dogs. You&apos;ll also learn how a dog&apos;s background, including its age and breed, can affect behavior.</p>
                  <button onClick={() => setUnit('B')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'B'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit B Details</Modal.Header>
                    <Modal.Body>
                      <UnitBDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
                  <Image
                    src={UnitBImage}
                    alt="a leashed dog and a man going for a walk"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </AccordionItem>
            <AccordionItem heading="Unit C">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
                  <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="2 hours" videosCount={2} />
                  <p>Unit C will provide you with detailed information to help you plan safe and stimulating activities for dogs in your care. You&apos;ll learn how to assess a dog&apos;s needs for social, physical, emotional and cognitive stimulation so that you can provide an engaging experience for your clients&apos; pets.</p>
                  <button onClick={() => setUnit('C')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'C'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit C Details</Modal.Header>
                    <Modal.Body>
                      <UnitCDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
                  <Image
                    src={UnitCImage}
                    alt="white puppy with a toy lying on a dog bed"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </AccordionItem>
            <AccordionItem heading="Unit D">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 2.5 hours</div>
                  <UnitStats assignmentsCount={3} assignmentsTime="1 hour" readingsTime="1.5 hours" />
                  <p>As a dog daycare provider, you&apos;ll need to ensure the safety of your clients&apos; beloved pets. In Unit D, you&apos;ll learn how to create a safe daycare space to prevent accidents and injuries when you care for dogs. You&apos;ll also learn about canine first aid so that you&apos;ll be prepared to address any accidents that do occur on the job.</p>
                  <button onClick={() => setUnit('D')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'D'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit D Details</Modal.Header>
                    <Modal.Body>
                      <UnitDDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
                  <Image
                    src={UnitDImage}
                    alt="trainer using a clicker and treat to reward a German Shepherd puppy"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </AccordionItem>
            <AccordionItem heading="Unit E">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 2 hours</div>
                  <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="1 hour" videosCount={1} />
                  <p>Make sure you&apos;re providing dog owners with the best possible services for their pets. In this unit, you&apos;ll learn how standard operating procedures can help you to feel confident in your services. You&apos;ll also discover how dog daycare providers can offer supplementary services to make their business standout.</p>
                  <button onClick={() => setUnit('E')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'E'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit E Details</Modal.Header>
                    <Modal.Body>
                      <UnitEDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
                  <Image
                    src={UnitEImage}
                    alt="trainer and a dog practicing for an obstacle course"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </AccordionItem>
            <AccordionItem heading="Unit F">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
                  <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="2 hours" videosCount={1} />
                  <p>Once you&apos;ve developed the skills you need to provide a safe and enjoyable daycare experience for dogs, you&apos;ll need to practice your business skills. In this optional unit of your course, you&apos;ll turn your finely-honed dog-care skills into a business. Learn about the important first steps involved in launching a business, including choosing a business name, building a website and finding appropriate business insurance. Practice important skills for selling your services, including marketing your business and building positive relationships with clients. This business training unit will be a valuable tool to kickstart your career.</p>
                  <button onClick={() => setUnit('F')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'F'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit F Details</Modal.Header>
                    <Modal.Body>
                      <UnitFDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 d-none d-lg-block">
                  <Image
                    src={UnitFImage}
                    alt="dog snarling at another dog"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <style jsx>{`
      #outlineSection {
        background-color: #f7f7f7 !important;
      }
    `}</style>
    </>
  );
};

const UnitADetails: FC = () => (
  <>
    <p className="lead">When you complete your course work in Unit A, you&apos;ll introduce yourself to your tutor, who is a successful pet-industry professional.</p>
    <p>You&apos;ll have the opportunity to get your tutor&apos;s feedback as you practice planning your dog-care services, considering important factors including safe locations and dog-walking equipment.</p>
    <p><strong>Introduction to Dog Daycare</strong></p>
    <p>In this lesson, you&apos;ll learn about the dog daycare industry. You&apos;ll discover the different types of dog daycare and begin to think about what your own career might look like.</p>
    <p><strong>Dog-Care Locations</strong></p>
    <p>Next, you&apos;ll learn about the different settings in which a dog daycare can be established and the necessary safety considerations for each one.</p>
    <p className="mb-0"><strong>Tools, Equipment and Supplies</strong></p>
  </>
);

const UnitBDetails: FC = () => (
  <>
    <p className="lead">With expert advice from your tutor, you&apos;ll practice interpreting canine behavior in your Unit B assignments.</p>
    <p>You&apos;ll examine canine communication signals and scenarios to prepare you for situations you might encounter while caring for dogs.</p>
    <p><strong>Understanding Dog Behavior and Communication</strong></p>
    <p>Discover the normal and abnormal behaviors a dog may display so that you&apos;ll be prepared to address any situation at daycare. You&apos;ll learn how a dog uses signals to calm other dogs and communicate fear to help you understand the animals in your care.</p>
    <p><strong>Triggers and Incidents</strong></p>
    <p>In this lesson, you&apos;ll learn from the experience of a professional dog daycare provider. Read about the different events and incidents that can trigger reactions in dogs at a daycare and learn how to address these scenarios.</p>
    <p><strong>Development and Breeds</strong></p>
    <p className="mb-0">Learn how to provide customized care for each of your client&apos;s dogs. Discover a wide range of activities, exercise and care for dogs of all ages and breeds.</p>
  </>
);

const UnitCDetails: FC = () => (
  <>
    <p className="lead">Your Unit C assignments will ask you to begin planning transportation services and exercise routines for dogs in various daycare scenarios.</p>
    <p>With detailed feedback from your tutor, you&apos;ll learn how to plan activities that will benefit every dog in your care.</p>
    <p><strong>Transportation of Dogs</strong></p>
    <p>You may provide collection and drop-off services for dogs. In this lesson, you&apos;ll learn how to choose and prepare a vehicle for dog transportation, plan an effective route and safely manage dogs while in transit.</p>
    <p><strong>Exercising Dogs</strong></p>
    <p>Every dog is unique. In this lesson, you&apos;ll learn how to assess the needs of each dog and plan activities accordingly. You&apos;ll practice coordinating a wide range of activities, exercise and care for dogs of all ages and breeds.</p>
    <p><strong>Security and Precautions</strong></p>
    <p className="mb-0">Discover how to provide topnotch dog-care services that prioritize the safety of dogs, dog owners and employees. You&apos;ll learn how to ensure vehicle, workplace and client home security while caring for dogs.</p>
  </>
);

const UnitDDetails: FC = () => (
  <>
    <p className="lead">You&apos;ll keep health and safety firmly in mind as you complete your course work in Unit D.</p>
    <p>You&apos;ll receive guidance from your tutor to help you plan essential safety policies to prevent injuries and accidents. You&apos;ll examine daycare scenarios to practice your response in the event that a dog is injured at your daycare.</p>
    <p><strong>Hygiene, Health and Safety</strong></p>
    <p>In this lesson, you&apos;ll learn how to monitor for different diseases and parasites, how to effectively clean the facility, and how to maintain a safe working environment.</p>
    <p><strong>Safe Nutrition</strong></p>
    <p>Discover the diets and nutritional needs of different dogs, as well as how to monitor for toxic items such as tools and toys.</p>
    <p><strong>Responding to Accidents and Injuries</strong></p>
    <p className="mb-0">Learn about potential first aid emergencies you may encounter in dog daycare and how to handle them. You&apos;ll learn how to respond to minor injuries and how to stabilize a dog in need of veterinary care.</p>
  </>
);

const UnitEDetails: FC = () => (
  <>
    <p className="lead">In Unit E, you&apos;ll practice writing policies to protect the health and safety of dogs and dog-daycare employees.</p>
    <p>With help from your tutor, you&apos;ll feel confident and prepared as you begin working with dogs. Your tutor will also provide you with guidance as a pet-industry professional as you consider the supplementary services you might provide to enhance your daycare business.</p>
    <p><strong>Standard Operating Procedures</strong></p>
    <p>Learn how to create a formal handbook to detail basic employment, health and safety, and legal and ethical principles for a dog daycare business. Follow an interactive example to help you build your own handbook.</p>
    <p><strong>Supplementary Revenue</strong></p>
    <p className="mb-0">Offering supplementary services will boost your income and show dog owners that you&apos;re knowledgeable in many areas of dog care. Supplementary revenue options might include dog training, dog grooming, home visits and dog food production.</p>
  </>
);

const UnitFDetails: FC = () => (
  <>
    <p className="lead">In the business portion of your Dog Daycare course, you&apos;ll begin to plan the details of your business with expert guidance from your tutor.</p>
    <p>You&apos;ll begin to plan your ideal client and develop marketing materials that will appeal to dog owners.</p>
    <p><strong>Starting Your Own Business</strong></p>
    <p>Prepare to launch a successful dog daycare business. This lesson will guide you through the initial stages of setting up your business, from choosing a name to registering your business. You&apos;ll learn about the different types of business structures and regulations. You&apos;ll also learn helpful tips to help you manage your finances and develop a business plan.</p>
    <p><strong>Marketing and Promotion</strong></p>
    <p>Learn how to find new clients by marketing and promoting your dog daycare business. Develop important skills, including building an effective website and managing your social media. Explore these essential skills to reach out to new clients.</p>
    <p><strong>Working with Clients</strong></p>
    <p className="mb-0">Turn every client into a repeat customer. Learn how to communicate professionally and respectfully with clients to create a positive relationship. Study different techniques for selling your services and learn how to deal with unhappy clients in a professional and resourceful manner.</p>
  </>
);
