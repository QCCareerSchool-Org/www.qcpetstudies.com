import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import RequiredDogBreedsBackground from '../../../images/backgrounds/every-breed-bg.jpg';
import RequiredDogBreedImage from '../../../images/cards/dog-breeds-required.jpg';
import PracticumImage1 from '../../../images/cards/practicum-1.jpg';
import PracticumImage2 from '../../../images/cards/practicum-2.jpg';
import PracticumImage3 from '../../../images/cards/practicum-3.jpg';
import PracticumImage4 from '../../../images/cards/practicum-4.jpg';
import PracticumImage5 from '../../../images/cards/practicum-5.jpg';
import IconFirstAidLogo from '../../../images/first-aid-logo.svg';

const iconSize = 50;

const RequiredDogBreeds: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="Every Dog Breed You Must Groom in Your Dog Grooming Course"
        description=""
        canonical="/dog-grooming-courses/dog-grooming/required-dog-breeds"
      />

      <section id="firstSection">
        <div className="image-overlay-gardient"></div>
        <Image src={RequiredDogBreedsBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Learning during covid" />
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>DOG BREEDS YOU&apos;LL NEED</h1>
              <h2>for Your Dog Grooming Course</h2>
              <h4>Throughout your online grooming course, you will be asked to groom a number of dogs of different breeds</h4>
              <p>You&apos;ll start by practicing basic techniques, such as scissoring and clipping, before undertaking head-to-tail grooms. You&apos;ll conclude the course with five hands-on practicum units to test your knowledge and complete your certification!</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 offset-lg-1">
              <Image src={RequiredDogBreedImage} alt="assignment" />
            </div>
            <div className="col-12 col-lg-7">
              <p>For Units A to C, you&apos;re expected to work with a coated dog of any breed. For the rest of the units, you will groom dogs that exhibit a variety of different conditions.</p>
              <h4 className="mb-4">Worried about finding dogs for your assignments? Check out these guides on how to recruit dogs for your online grooming assignments!</h4>
              <h5 className="mb-3">
                <Link href="/2017/07/finding-dogs-online-grooming-assignments/">
                  <a className="link-primary">Finding Dogs for Your Online Grooming Assignments</a>
                </Link>
              </h5>
              <h5 className="mb-3">
                <Link href="/2017/09/5-places-find-dogs-pet-grooming-course/">
                  <a className="link-primary">5 Places to Find Dogs for Your Pet Grooming Course</a>
                </Link>
              </h5>
              <h5 className="mb-3">
                <Link href="/2019/03/approaching-pet-owners-to-find-dogs-for-your-online-dog-grooming-courses/">
                  <a className="link-primary">Approaching Pet Owners to Find Dogs for Your Pet Grooming Course</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mb-3 mb-md-4">
            <div className="bg-white p-5 col-md-6">
              <h3 className="mb-4">Unit A</h3>
              <p>You will start by learning basic dog anatomy and anatomical variations within a breed. In this unit&apos;s practical assignment, you will need to identify the anatomical features on the dog of your choice.</p>
              <h4>Required Dogs</h4>
              <ul>
                <li>Any coated dog</li>
              </ul>
            </div>
            <div className="bg-white p-5 col-md-6">
              <h3 className="mb-4">Unit B</h3>
              <p>Unit B focuses on dog behavior and how to identify a dog&apos;s grooming needs. In the two last assignments of this unit, you will be asked to conduct a needs analysis and a physical assessment of a coated dog.</p>
              <h4>Required Dogs</h4>
              <ul>
                <li>Any coated dog</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mb-3 mb-md-4">
            <div className="bg-white p-5 col-md-6">
              <h3 className="mb-4">Unit C</h3>
              <p>In this unit, you will be introduced to the various tools in your dog grooming kit. You will practice handling your tools through a variety of practice techniques, such as scissoring around a balloon, to prepare for grooming a live dog in later units.</p>
              <p>You will also learn how to set up a clean, safe, and functional workspace. In your last assignment, you will be asked to set up your at-home workspace, secure the dog of your choice to the grooming table, and submit a photo for your tutor to review.</p>
              <h4>Required Dogs</h4>
              <ul>
                <li>Any coated dog</li>
              </ul>
            </div>
            <div className="p-5 text-center col-md-6">
              <div className="mb-2">
                <Image src={IconFirstAidLogo} width={iconSize} height={iconSize} alt="first aid" />
              </div>
              <h3 className="mb-4">First Aid Training</h3>
              <p>Before you can move onto the practical units of the dog grooming course, you will need to complete the First Aid for Groomer&apos;s course. This course is included at no extra charge with every Dog Grooming Course enrollment. You will learn how to work safely with dogs and deal with any potential complications during the grooming appointment.</p>
              <h5 className="mb-3">
                <Link href="/online-courses/first-aid-for-groomers/">
                  <a className="link-primary">Learn more about the First Aid for Groomers&apos; Course</a>
                </Link>
              </h5>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mb-3 mb-md-4">
            <div className="p-5 bg-white col-md-6">
              <h3 className="mb-4">Unit D</h3>
              <p>In this unit, you will learn how to complete basic preparatory work before cutting and styling. This includes clipping nails, bathing, and drying. You must groom two or more dogs that exhibit each of the following criteria:</p>
              <h4>Required Dogs</h4>
              <ul>
                <li>A dog with sufficient hair between pads</li>
                <li>A dog with white nails in need of clipping</li>
                <li>A dog with black nails in need of clipping</li>
                <li>A dog with excess ear hair</li>
                <li>A double-coated dog (example: Pomeranian, Bernese Mountain Dog)</li>
                <li>A dog with at least one mat in his fur</li>
              </ul>
            </div>
            <div className="p-5 bg-white col-md-6">
              <h3 className="mb-4">Unit E</h3>
              <p>Unit E gives you a deep dive into working with different coat types. You will learn hair cutting techniques and applying finishing touches to wrap up a grooming appointment. You will need to find the following dogs for this unit:</p>
              <h4>Required Dogs</h4>
              <ul>
                <li>Any dog that is not hairless and does not have a short, flat coat</li>
                <li>A dog with enough hair on his head for a topknot (example: Poodle, Shih Tzu)</li>
                <li>A short-coated dog that also has a double coat (example: Lab, Australian Cattle Dog)</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mb-3 mb-md-4">
            <div className="p-5 bg-white col-md-6">
              <h3 className="mb-4">Unit F</h3>
              <p>In this unit, you will learn how to groom dogs with special grooming considerations. You&apos;ll learn how to handle a puppy&apos;s first groom, senior dogs, and difficult dogs. You require the following dogs to complete this unit:</p>
              <h4>Required Dogs</h4>
              <ul>
                <li>A senior dog</li>
                <li>A puppy (under 1-year-old)</li>
              </ul>
            </div>
            <div className="p-5 bg-white col-md-6">
              <h3 className="mb-4">Unit G</h3>
              <p>This unit outlines the breed standards for purebred dogs, and you will learn how to groom, style, and show purebred dogs. You will also learn how to adapt these breed standards for practical, everyday use. The unit only has one quiz assignment as you gear up for the hands-on practicum units.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center">
            <h2>Practicum Units</h2>
            <h4>There are a total of 5 Hands-on Practicum Units in QC&apos;s online dog grooming course.</h4>
            <p>In Unit 1 of the Practicum Unit, you will bath and dry a dog. For Units 2 to 5, you will be required to complete grooms from start to finish.</p>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="bg-white col-md-6 d-flex justify-content-center py-5">
              <Image src={PracticumImage1} alt="Practicum1" />
            </div>
            <div className="bg-white col-md-6">
              <h3 className="mb-4">Practicum Unit 1</h3>
              <h4>The Bath</h4>
              <p>Any coated dog that needs a bath</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="bg-white col-md-6 d-flex justify-content-center py-5">
              <Image src={PracticumImage2} alt="Practicum2" />
            </div>
            <div className="bg-white col-md-6">
              <h3 className="mb-4">Practicum Unit 2</h3>
              <h4>Grooming a Natural Breed</h4>
              <p>A purebred Golden Retriever or purebred Shetland Sheepdog</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="bg-white col-md-6 d-flex justify-content-center py-5">
              <Image src={PracticumImage3} alt="Practicum3" />
            </div>
            <div className="bg-white col-md-6">
              <h3 className="mb-4">Practicum Unit 3</h3>
              <h4>The Teddy Bear Cut</h4>
              <p>A dog suitable for a teddy bear cut with a coat that&apos;s at least 2 inches long Miniature poodle mix, Havanese mix, etc.</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="bg-white col-md-6 d-flex justify-content-center py-5">
              <Image src={PracticumImage4} alt="Practicu4" />
            </div>
            <div className="bg-white col-md-6">
              <h3 className="mb-4">Practicum Unit 4</h3>
              <h4>Grooming a Terrier</h4>
              <p>A purebred Miniature Schnauzer, a Standard Schnauzer, a West Highland White Terrier, or Airedale Terrier</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="bg-white col-md-6 d-flex justify-content-center py-5">
              <Image src={PracticumImage5} alt="Practicum5" />
            </div>
            <div className="bg-white col-md-6">
              <h3 className="mb-4">Practicum Unit 5</h3>
              <h4>Grooming a Non-Sporting Breed</h4>
              <p>A purebred Poodle or Bichon Frise</p>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default RequiredDogBreeds;
