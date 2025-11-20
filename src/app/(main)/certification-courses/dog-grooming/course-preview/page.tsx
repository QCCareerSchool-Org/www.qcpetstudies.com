import type { Metadata } from 'next';
import { BsBook } from 'react-icons/bs';

import AssignmentBackground from './your-career-bg.jpg';
import { PriceSection } from '../priceSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { Bar } from '@/components/bar';
import IDGPCertificationLogo from '@/components/certifications/IDGP-certification-gold.svg';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import { TabGroup } from '@/components/tabGroup';
import { TutorSectionDG } from '@/components/tutorSectionDG';
import { externship } from '@/lib/externship';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';
import Image from 'next/image';

const courseCodes = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Dog Grooming Certification Course',
  alternates: { canonical: '/certification-courses/dog-grooming/course-preview' },
};

const GroomingCoursePreviewPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getData();
  const dgPriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const dePriceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: [ 'de' ] };

  const [ dgPrice, dePrice ] = await Promise.all([
    fetchPrice(dgPriceQuery),
    fetchPrice(dePriceQuery),
  ]);

  if (!dgPrice || !dePrice) {
    return null;
  }

  return (
    <>
      <section className="bg-dark">
        <BackgroundImage src={AssignmentBackground} priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <BsBook className="h1 mb-3" />
              <h1 className="mb-4">Dog Grooming Certification Course</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2>Congratulations on Choosing to Explore a Career as a <strong>Dog Groomer</strong>!</h2>
              <p>Dog grooming is an extremely rewarding and profitable career! Does this sound like you?</p>
              <ul>
                <li>You love all dogs, big and small</li>
                <li>You're able to interact with all types of dogs calmly and carefully</li>
                <li>You're good with your hands and are able to stand on your feet for hours at a time</li>
                <li>You have good people skills</li>
                <li>You're driven and ambitious</li>
                <li>You're willing to continue learning throughout your career</li>
              </ul>
              <p className="lead mb-0">If this list describes you, then you're in the right place!</p>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <p className="card-text">QC's online dog grooming course will prepare you in every way for a successful dog grooming career. You will learn everything from dog behavior and safety practices to tools of the trade, to specific grooming techniques and the most popular cuts.</p>
                  <p className="card-text">Whether you want to launch your own grooming business, work in a grooming salon, or just groom your own dog, you'll gain all the skills you need to achieve your goals.</p>
                  <p className="card-text">Even though you're learning online, you'll get plenty of hands-on experience every step of the way! You'll complete tons of practical assignments designed to enhance your grooming skills, and you'll have support from your personal tutor, a Certified Master Groomer!</p>
                  <p className="card-text">Don't miss out on this amazing opportunity to work with an expert to develop your skills!</p>
                  {externship(countryCode, provinceCode) && <p className="card-text"><strong>New! Take your training to the next level with our <strong>Optional Externship Track</strong>—get additional real-world, hands-on experience working side-by-side with a professional groomer.</strong></p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-contents-center align-items-center">
            <div className="flex-shrink-0 mb-4 mb-md-0 me-md-4">
              <Image src={IDGPCertificationLogo} width={200} height={200} alt="IDGP International Dog Grooming Professional logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="text-center text-md-start">
              <h2>Your <strong>Certification</strong></h2>
              <p className="lead mb-0">Upon graduation, you'll receive the International Dog Grooming Professional&trade; (IDGP&trade;) Certification. With your certification and professional title, you'll be ready to start your own business or work for an established grooming salon right away!</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="text-center">
                <h2>Course <strong>Syllabus</strong></h2>
                <p className="lead">The Dog Grooming Course is split into five parts, each containing individual training units.</p>
                <p className="mb-4">You must complete a unit with a satisfactory grade before you can submit assignments for the next units.</p>
              </div>
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 1:</strong> Units A&ndash;C</h3>
                      <p>The first few units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you'll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade, and more.</p>
                      <p>During these units, it is recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment, and products.</p>
                      <p className="mb-0">It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <TabGroup
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-screenshots-a.jpg">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-a.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Assignment A3</h4>
                            <p className="lead">Topical Structure</p>
                            <p className="mb-4">View the assignment sample below to discover more about what you'll learn in Unit A. Click on the labels to see how you'll complete your assignments online.</p>
                            <a href="/documents/dog-grooming/A3.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit A</h4>
              <p className="mb-0">In the first unit of the dog grooming course, you'll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health &amp; safety as a dog groomer. You'll also learn about dog anatomy in great detail, and you'll start learning about skincare and esthetics.</p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit B</h4>
              <p className="mb-0">In this second unit, you'll focus on how to work with dogs in a grooming environment. You'll learn about dog behaviors and temperaments, and you'll find out more about how dogs learn and communicate with humans. You'll then learn about how you can keep the dog and yourself safe during a grooming appointment, and how to conduct an effective needs analysis when meeting a dog grooming client for the first time.</p>
            </div>
            <div className="col-12 col-lg-6">
              <Bar variant="primary" align="start" />
              <h4>Unit C</h4>
              <p className="mb-0">The third dog grooming unit will help you become intimately familiar with your grooming tools. You'll learn all about brushes, scissors, clippers, and you'll start to practice techniques to use these tools effectively. You'll also learn how to properly set up your grooming environment, and how to keep it clean and safe!</p>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 2:</strong> First Aid</h3>
                      <p>In order to provide you with the resources to learn your craft safely, your grooming course also comes with a two-unit course on dog first aid. This course covers emergency situations that may occur in a grooming environment and prepares you to respond calmly and effectively in any emergency.</p>
                      <p className="mb-0">In two units of the First Aid course, you'll learn how to deal with a number of injuries or accidents that might occur while grooming dogs, but you'll also learn how to do everything you can to prevent those emergencies from occurring!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <TabGroup
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-screenshots-fa.jpg">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-first-aid.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Self Study B2</h4>
                            <p className="lead">Conducting a Physical Evaluation</p>
                            <p className="mb-4">View the assignment sample below to see how you'll practice emergency response throughout your First Aid Unit.</p>
                            <a href="/documents/dog-grooming/FA-SS-2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12 mb-5">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 3:</strong> Units D&ndash;G</h3>
                      <p className="mb-0">Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved in grooming. In these units, you'll cover nail trimming, ear cleaning, brushing, de-matting, bathing, drying, coat types, pet cuts, breed standards, and more. You'll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <TabGroup
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-screenshots-d.jpg">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-d.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Assignment D2</h4>
                            <p className="lead">Clipping White Nails</p>
                            <p className="mb-4">View the assignment sample below to find out how you'll be assessed in your abilities to prep a dog for the groom.</p>
                            <a href="/documents/dog-grooming/D2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit D</h4>
              <p>Now that you have basic dog grooming theory and First Aid under your belt, you're going to start working on dogs and practicing your practical dog grooming skills!</p>
              <p className="mb-0">In Unit D, you'll learn about all the basic preparatory work that goes into a grooming session, from clipping nails to bathing and drying. These skills will form the foundation of all the grooming work you'll perform later in the course and in your career.</p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit E</h4>
              <p className="mb-0">This unit is all about different coat types in dogs. You'll learn how to handle every coat type including the necessary care and maintenance of these coats. You'll also be introduced to some indispensable pet cuts, and techniques for creating eye-catching finishing touches to top off a stylish groom in any dog!</p>
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <Bar variant="primary" align="start" />
              <h4>Unit F</h4>
              <p className="mb-0">You'll now start to work with dogs that require special accommodations or considerations when grooming. This includes introducing puppies to the grooming process, grooming seniors and other dogs who might have health issues to consider when grooming, and dogs that may have behavioral issues that make them particularly difficult to groom.</p>
            </div>
            <div className="col-12 col-lg-6">
              <Bar variant="primary" align="start" />
              <h4>Unit G</h4>
              <p>In this final mandatory unit before your practicum, you'll learn the guidelines for styling and showing purebred dogs. These are the standards that give different dog breeds their unique looks.</p>
              <p className="mb-0">Unit G guides you through the process of adapting breed standards to practical pet cuts for a number of common breeds. You'll return to the information in this unit over and over again throughout your grooming career!</p>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12 mb-5">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 4:</strong> Practicum</h3>
                      <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs.</p>
                      <p className="mb-0">Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you've mastered throughout the course. You'll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you'll create throughout your career.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <TabGroup
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-screenshots-practicum.jpg">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/practicum.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Assignment C1</h4>
                            <p className="lead">The Teddy Bear Cut: Preparation</p>
                            <p className="mb-4">View the assignment sample below to see how you'll complete your practicum assignments, as well as how you'll submit your work to be assessed.</p>
                            <a href="/documents/dog-grooming/P3.1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>PRACTICUM A<span className="fw-normal">&mdash;The Bath</span></h4>
              <p className="mb-0">Practice wetting a dog with the ideal water temperature and pressure, and then choosing a suitable shampoo to lather and cleanse his coat. Next, thoroughly rinse the dog and check for any leftover dirt or debris. Finally, select an appropriate dryer to thoroughly dry and straighten the dog's coat.</p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>PRACTICUM B<span className="fw-normal">&mdash;Grooming a Natural Breed</span></h4>
              <p className="mb-0">Practice grooming a natural breed that requires minimal shaping and styling. Create the breed standard on either a Golden Retriever or a Shetland Sheepdog. Use the best tools and techniques to achieve a flattering but natural look.</p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>PRACTICUM C<span className="fw-normal">&mdash;Creating the Teddy Bear Cut</span></h4>
              <p className="mb-0">The teddy bear cut can be a groomer's bread and butter. In this unit you'll complete 6 individual assignments where your tutor will evaluate your take on the teddy bear cut, from prep work through execution and finishing touches.</p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>PRACTICUM D<span className="fw-normal">&mdash;Grooming a Terrier</span></h4>
              <p className="mb-0">Grooming a terrier is a requirement for many dog grooming certification exams. Create the breed standard on a Miniature Schnauzer, Standard Schnauzer, Airedale Terrier or West Highland White Terrier. Use the best tools and techniques to achieve the desired shapes and styles.</p>
            </div>
            <div className="col-12 col-lg-6">
              <Bar variant="primary" align="start" />
              <h4>PRACTICUM E<span className="fw-normal">&mdash;Grooming a Non-Sporting Breed</span></h4>
              <p className="mb-0">Grooming a Non-sporting breed is a requirement for many dog grooming certification exams. Create the breed standard on either a Poodle or a Bichon Frise. Use the best tools and techniques to make stylized breeds look sleek and polished.</p>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 5:</strong> Business Essentials</h3>
                      <p className="mb-0">Dog grooming is a creative career, but it's also a business. After completing your practicum you can choose to complete the optional Business Essentials unit. This unit will help you develop the skills you need to run your own successful dog grooming business, from building your brand, to constructing a business plan, to setting your prices.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <h4>Assignment H1</h4>
                      <p className="lead">Choose Your Business</p>
                      <p className="mb-4">View the assignment sample below to learn more about how your course will guide you in starting your own dog grooming business.</p>
                      <a href="/documents/dog-grooming/H1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Assignment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 6:</strong> Optional Externship</h3>
                      <p className="mb-0">If you choose the Externship Track, you'll be matched with a professional grooming salon in your area once you've completed the online portion of your course and paid your fees.  Spend 80 hours working alongside an experienced groomer, honing your skills in a real salon environment, and gaining valuable industry insight.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <h4>Certification</h4>
                      <p className="mb-4">As an Externship Track student, you'll also earn an additional professional certificate showcasing your advanced training and hands-on experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12 text-center">
              For a full course outline, including required dog breeds, tools, and completion times, please see the dog grooming course curriculum.
            </div>

          </div>
        </div>
      </section>

      {externship(countryCode, provinceCode)
        ? <PriceSection dgPrice={dgPrice} dePrice={dePrice} countryCode={countryCode} />
        : <PriceSectionWithDiscount courses={courseCodes} price={dgPrice} doubleGuarantee={true} />
      }

      <TutorSectionDG className="bg-light" />
    </>
  );
};

export default GroomingCoursePreviewPage;
