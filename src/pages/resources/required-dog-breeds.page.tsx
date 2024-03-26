import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { SEO } from '../../components/SEO';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import RequiredDogBreedsBackground from '../../images/backgrounds/every-breed-bg.jpg';
import RequiredDogBreedImage from '../../images/dog-breeds-required.jpg';
import PracticumImage1 from '../../images/dogs/practicum-1.jpg';
import PracticumImage2 from '../../images/dogs/practicum-2.jpg';
import PracticumImage3 from '../../images/dogs/practicum-3.jpg';
import PracticumImage4 from '../../images/dogs/practicum-4.jpg';
import PracticumImage5 from '../../images/dogs/practicum-5.jpg';
import IconFirstAidLogo from '../../images/first-aid-logo.svg';

const iconSize = 50;

const RequiredDogBreeds: NextPage = () => {
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return <>
    <SEO
      title="Every Dog Breed You Must Groom in Your Dog Grooming Course"
      description="Find out what types of dog breeds you'll need in order to complete your online dog groomer training with QC"
      canonical="/dog-grooming/required-dog-breeds"
    />

    <section id="top" className="bg-dark">
      <Image
        src={RequiredDogBreedsBackground}
        placeholder="blur"
        alt="dog in a towel after a bath"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <h1>Dog Breeds You'll Need</h1>
            <h2 className="mb-4">For Your Dog Grooming Course</h2>
            <p className="lead">Throughout your online grooming course, you will be asked to groom a number of dogs of different breeds</p>
            <p>You'll start by practicing basic techniques, such as scissoring and clipping, before undertaking head-to-tail grooms. You'll conclude the course with five hands-on practicum units to test your knowledge and complete your certification!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          {lgOrGreater && (
            <div className="col-12 col-lg-3 offset-lg-1">
              <Image
                src={RequiredDogBreedImage}
                alt="dog in a towel"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )}
          <div className="col-12 col-lg-8">
            <p>For Units A to C, you're expected to work with a coated dog of any breed. For the rest of the units, you will groom dogs that exhibit a variety of different conditions.</p>
            <p className="lead mb-4">Worried about finding dogs for your assignments? Check out these guides on how to recruit dogs for your online grooming assignments!</p>
            <ul>
              <li><Link href="/blog/2017/07/finding-dogs-online-grooming-assignments/" className="link-secondary">Finding Dogs for Your Online Grooming Assignments</Link></li>
              <li><Link href="/blog/2017/09/5-places-find-dogs-pet-grooming-course/" className="link-secondary">5 Places to Find Dogs for Your Pet Grooming Course</Link></li>
              <li><Link href="/blog/2019/03/approaching-pet-owners-to-find-dogs-for-your-online-dog-grooming-courses/" className="link-secondary">Approaching Pet Owners to Find Dogs for Your Pet Grooming Course</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="unitsSection" className="bg-light">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12 col-md-6 mb-g d-flex align-items-stretch">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="mb-4">Unit A</h3>
                <p>You will start by learning basic dog anatomy and anatomical variations within a breed. In this unit's practical assignment, you will need to identify the anatomical features on the dog of your choice.</p>
                <h4>Required Dogs</h4>
                <ul>
                  <li>Any coated dog</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-g d-flex align-items-stretch">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="mb-4">Unit B</h3>
                <p>Unit B focuses on dog behavior and how to identify a dog's grooming needs. In the two last assignments of this unit, you will be asked to conduct a needs analysis and a physical assessment of a coated dog.</p>
                <h4>Required Dogs</h4>
                <ul>
                  <li>Any coated dog</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-g d-flex align-items-stretch">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="mb-4">Unit C</h3>
                <p>In this unit, you will be introduced to the various tools in your dog grooming kit. You will practice handling your tools through a variety of practice techniques, such as scissoring around a balloon, to prepare for grooming a live dog in later units.</p>
                <p>You will also learn how to set up a clean, safe, and functional workspace. In your last assignment, you will be asked to set up your at-home workspace, secure the dog of your choice to the grooming table, and submit a photo for your tutor to review.</p>
                <h4>Required Dogs</h4>
                <ul>
                  <li>Any coated dog</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-g d-flex align-items-center">
            <div className="card-body text-center">
              <div className="mb-2">
                <Image
                  src={IconFirstAidLogo as StaticImageData}
                  width={iconSize}
                  height={iconSize}
                  alt="first aid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <h3 className="mb-4">First Aid Training</h3>
              <p>Before you can move onto the practical units of the dog grooming course, you will need to complete the First Aid for Groomer's course. This course is included at no extra charge with every Dog Grooming Course enrollment. You will learn how to work safely with dogs and deal with any potential complications during the grooming appointment.</p>
              <p className="lead"><Link href="/certification-courses/first-aid" className="link-primary">Learn more about the First Aid for Groomers' Course</Link></p>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-g d-flex align-items-stretch">
            <div className="card bg-white">
              <div className="card-body">
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
            </div>
          </div>
          <div className="col-12 col-md-6 mb-g d-flex align-items-stretch">
            <div className="card bg-white">
              <div className="card-body">
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
          </div>
          <div className="col-12 col-md-6 mb-g d-flex align-items-stretch">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="mb-4">Unit F</h3>
                <p>In this unit, you will learn how to groom dogs with special grooming considerations. You'll learn how to handle a puppy's first groom, senior dogs, and difficult dogs. You require the following dogs to complete this unit:</p>
                <h4>Required Dogs</h4>
                <ul>
                  <li>A senior dog</li>
                  <li>A puppy (under 1-year-old)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-g d-flex align-items-stretch">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="mb-4">Unit G</h3>
                <p>This unit outlines the breed standards for purebred dogs, and you will learn how to groom, style, and show purebred dogs. You will also learn how to adapt these breed standards for practical, everyday use. The unit only has one quiz assignment as you gear up for the hands-on practicum units.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row text-center">
          <h2>Practicum Units</h2>
          <p className="lead">There are a total of 5 Hands-on Practicum Units in QC's online dog grooming course.</p>
          <p>In Unit 1 of the Practicum Unit, you will bath and dry a dog. For Units 2 to 5, you will be required to complete grooms from start to finish.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-sm-10 offset-1 col-md-6 offset-md-0 mb-4">
            <Image
              src={PracticumImage1}
              alt="Dog lying down"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start mb-4">
            <h3 className="mb-4">Practicum Unit 1</h3>
            <h4>The Bath</h4>
            <p>Any coated dog that needs a bath</p>
          </div>
          <div className="col-12 col-sm-10 offset-1 col-md-6 offset-md-0 mb-4">
            <Image
              src={PracticumImage2}
              alt="Dog lying down"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start mb-4">
            <h3 className="mb-4">Practicum Unit 2</h3>
            <h4>Grooming a Natural Breed</h4>
            <p>A purebred Golden Retriever or purebred Shetland Sheepdog</p>
          </div>
          <div className="col-12 col-sm-10 offset-1 col-md-6 offset-md-0 mb-4">
            <Image
              src={PracticumImage3}
              alt="Dog lying down"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start mb-4">
            <h3 className="mb-4">Practicum Unit 3</h3>
            <h4>The Teddy Bear Cut</h4>
            <p>A dog suitable for a teddy bear cut with a coat that's at least 2 inches long Miniature poodle mix, Havanese mix, etc.</p>
          </div>
          <div className="col-12 col-sm-10 offset-1 col-md-6 offset-md-0 mb-4">
            <Image
              src={PracticumImage5}
              alt="Dog lying down"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start mb-4">
            <h3 className="mb-4">Practicum Unit 4</h3>
            <h4>Grooming a Terrier</h4>
            <p>A purebred Miniature Schnauzer, a Standard Schnauzer, a West Highland White Terrier, or Airedale Terrier</p>
          </div>
          <div className="col-12 col-sm-10 offset-1 col-md-6 offset-md-0 mb-4 mb-md-0">
            <Image
              src={PracticumImage4}
              alt="Dog lying down"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-start">
            <h3 className="mb-4">Practicum Unit 5</h3>
            <h4>Grooming a Non-Sporting Breed</h4>
            <p>A purebred Poodle or Bichon Frise</p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      #unitsSection .card-body {
        padding: 2rem;
      }
    `}</style>
  </>;
};

export default RequiredDogBreeds;
