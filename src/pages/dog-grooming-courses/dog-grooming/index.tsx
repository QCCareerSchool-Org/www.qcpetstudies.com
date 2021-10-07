import { NextPage } from 'next';
import Image from 'next/image';

import { DefaultLayout } from '../../../components/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';

import guarantee1Year from '../../../images/1-year-guarantee-outlined.svg';
import guarantee21Day from '../../../images/21-day-guarantee-outlined.svg';
import tutorBackground from '../../../images/backgrounds/tutor-background.jpg';
import firstAidBook from '../../../images/first-aid-book-white.jpg';
import firstAidLogo from '../../../images/first-aid-logo.svg';
import scissorsSet from '../../../images/scissor-set-1.jpg';

const secondaryNavLinks = [
  { name: 'Foo', url: '#firstSection' },
  { name: 'First Aid', url: '#firstAidSection' },
  { name: 'Tutors', url: '#tutorSection' },
];

const DogGroomingPage: NextPage = () => {
  return (
    <DefaultLayout secondaryTitle="Dog Grooming Course" secondaryNavLinks={secondaryNavLinks}>
      <SEO
        title="Dog Grooming Course"
        description=""
        canonical="/dog-grooming-courses/dog-grooming"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={tutorBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dddd" />
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>Lorem Ipsum</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>Nam Tempus Vestibulum Gravida</h2>
              <p>Donec felis erat, eleifend eu consequat vitae, semper a lectus. Maecenas luctus nisi augue, vitae aliquam velit vestibulum sit amet. Pellentesque orci tellus, convallis nec odio at, sollicitudin scelerisque risus. Vestibulum quis blandit massa. Maecenas vitae vestibulum ligula. Quisque ut sem nec sem semper suscipit vel at lectus. Donec diam sapien, hendrerit vel velit sit amet, accumsan consectetur arcu. Etiam gravida malesuada odio, vitae tempus ipsum cursus vel. Pellentesque lobortis nibh vel erat condimentum, vitae porttitor nisi fermentum. Proin condimentum quam nec tristique ultrices. Praesent placerat erat neque, non maximus odio ornare vel. Ut commodo, nibh non malesuada eleifend, tortor turpis pretium neque, sit amet auctor felis magna nec dolor.</p>
              <button className="btn btn-primary-dark">Maximus Odio</button>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={[ 'dg' ]} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <h2 className="mb-5">Suspendisse Viverra Elit Lacinia Eleifend Bibendum</h2>
          <div className="row">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <Image src={guarantee21Day} width={165} height={165} alt="21-Day Money-Back Guarantee" />
              </div>
              <h3 className="h5">Quisque Placerat Odio Lectus</h3>
              <p>Vel sodales nunc euismod a. Sed ut diam scelerisque, consequat massa a, vulputate leo. Morbi sollicitudin fringilla ex, nec rutrum turpis porttitor vel. Duis sit amet sem commodo, hendrerit odio vel, dapibus erat. Quisque eget magna volutpat, varius velit sed, sollicitudin est. Donec sit amet erat ut orci faucibus elementum. Duis augue tellus, fringilla eu nisl id, tristique dictum diam. Morbi sit amet augue ultrices, vehicula nisl at, congue augue. Vestibulum volutpat lectus erat, quis fringilla odio cursus non.</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <Image src={guarantee1Year} width={199} height={165} alt="1-Year Money-Back Guarantee" />
              </div>
              <h3 className="h5">Leo Sit Amet Sollicitudin Sollicitudin</h3>
              <p>hasellus rhoncus volutpat ex a dapibus. Aenean id purus non nisi pretium bibendum. Donec dapibus sollicitudin nunc. Ut bibendum, leo sit amet sollicitudin sollicitudin, nisl ipsum sollicitudin ante, ut imperdiet tellus elit eget ligula. In at velit quis odio sodales sollicitudin. Nullam a magna sed sem gravida iaculis vitae a quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus auctor risus in lorem porttitor, sed facilisis augue feugiat. Nullam et eleifend tellus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h2>Bonus Tools for Dog Grooming Students</h2>
              <p className="h5">Professional Grooming Scissors</p>
              <p>Before you begin your practical work in Unit C, you&apos;ll receive three pairs of professional grooming scissors that enable you to create a variety of looks.</p>
              <Image src={scissorsSet} alt="scissors set" width={816} height={270} />
              <p><em>Product may vary based on the supplier.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section id="firstAidSection">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 mb-2 mb-lg-0 text-lg-start">
              <Image src={firstAidLogo} alt="First Aid Course logo" width={60} height={60} />
              <h2>Get a <strong>FREE</strong> First Aid Course</h2>
              <p className="lead">Enroll in Dog Grooming &amp; receive the First Aid for Dog Groomers course to take your career to the next level!</p>
              <p>Being trained in Pet First Aid prepares you to respond to emergencies and maintain a safe grooming environment. You&apos;ll learn from dog first aid experts who will teach you what you need to know to keep yourself and your furry clients out of harm&apos;s way, and how to deal with emergency situations if they arise.</p>
            </div>
            <div className="col-12 col-lg-6" style={{ fontSize: 0, marginBottom: '-20px' }}>
              <Image src={firstAidBook} alt="First Aid book" width={504} height={385} />
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default DogGroomingPage;
