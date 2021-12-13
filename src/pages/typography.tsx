import { NextPage } from 'next';
import Error from 'next/error';
import { DefaultLayout } from '../components/DefaultLayout';

type Props = {
  production: boolean;
};

const TypographyPage: NextPage<Props> = ({ production }: Props) => {

  if (production) {
    // don't show this page in production
    return <Error statusCode={400} />;
  }

  return (
    <DefaultLayout>
      <section id="top" className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>Typography</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>This Is an H1&mdash;CSS Makes it Uppercase</h1>
              <p className="lead">Donec tempor, leo <strong>tincidunt tempor finibus</strong>, dui sapien ullamcorper nis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum lorem vel ipsum ultricies cursus. Donec vel blandit ex. In risus nibh, dapibus a dapibus sed, gravida sit amet dolor. Nunc sit amet molestie justo. Quisque sit amet suscipit ante, id bibendum purus. Sed faucibus quis est convallis facilisis. <strong>Aliquam erat volutpat.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h2>This Is an H2&mdash;It Can <strong>Have Bold Text</strong></h2>
              <p>Integer massa felis, auctor non eros in, cursus rhoncus mi. Aliquam sit amet tempus nisi. Nunc eget arcu sed mauris euismod iaculis. Ut commodo rhoncus mi non mollis. Morbi cursus auctor lectus in laoreet. Pellentesque congue ex a magna rutrum luctus. Mauris pharetra turpis at ante placerat gravida. Phasellus vestibulum gravida justo a elementum. Donec ut dolor eu lectus tempus porta sed et nisl. Suspendisse magna justo, fermentum quis velit eu, tempor euismod erat. In pharetra auctor quam, id tristique nisi faucibus sit amet. Cras ultricies elementum mauris, sed rutrum mauris. Sed elementum felis ac iaculis sodales. Aenean sit amet purus porttitor, accumsan elit vel, mollis dui.</p>
              <h3>This Is an H3</h3>
              <p>Ut fringilla ullamcorper ipsum id consectetur. Curabitur rhoncus quam in dolor egestas blandit. Quisque tincidunt nunc at augue laoreet, ac faucibus ligula vehicula. Vestibulum bibendum magna erat, non viverra est sodales sed. Cras dictum gravida est, a ultrices erat congue at. Morbi venenatis enim est, vel varius est iaculis vel. Nam tempor ut augue sit amet egestas. Nam nec eleifend purus. Sed facilisis porttitor lobortis.</p>
              <h4>This Is an H4&mdash;CSS Makes it Capitalized</h4>
              <p>Maecenas non erat sed arcu dignissim hendrerit. Donec ex leo, condimentum nec est sed, dapibus tempus felis. Vestibulum rhoncus volutpat augue eu bibendum. Phasellus tempus ex sed odio rhoncus, eget gravida quam venenatis. Sed viverra porttitor imperdiet. Vivamus nec bibendum metus. Pellentesque posuere est vitae dolor ornare, viverra facilisis tortor ullamcorper. Nunc iaculis sem nibh, vel suscipit lacus finibus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tincidunt vel odio vel viverra. Cras nec tellus elit. In interdum ante a lacus maximus aliquam. Pellentesque tristique, tortor eget suscipit faucibus, est justo tincidunt libero, ut semper nisi elit nec risus. Curabitur rutrum, turpis ac blandit auctor, diam nunc malesuada orci, imperdiet euismod nisi lacus sed ante.</p>
              <button className="btn btn-primary">Primary Standard</button>
              <button className="btn btn-secondary">Secondary Standard</button>
              <button className="btn btn-outline-primary">Primary Outline</button>
              <button className="btn btn-outline-secondary">Secondary Outline</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>This Is an H1&mdash;CSS Makes it Uppercase</h1>
              <p className="lead">Donec tempor, leo <strong>tincidunt tempor finibus</strong>, dui sapien ullamcorper nis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum lorem vel ipsum ultricies cursus. Donec vel blandit ex. In risus nibh, dapibus a dapibus sed, gravida sit amet dolor. Nunc sit amet molestie justo. Quisque sit amet suscipit ante, id bibendum purus. Sed faucibus quis est convallis facilisis. <strong>Aliquam erat volutpat.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h2>This Is an H2&mdash;It Can <strong>Have Bold Text</strong></h2>
              <p>Integer massa felis, auctor non eros in, cursus rhoncus mi. Aliquam sit amet tempus nisi. Nunc eget arcu sed mauris euismod iaculis. Ut commodo rhoncus mi non mollis. Morbi cursus auctor lectus in laoreet. Pellentesque congue ex a magna rutrum luctus. Mauris pharetra turpis at ante placerat gravida. Phasellus vestibulum gravida justo a elementum. Donec ut dolor eu lectus tempus porta sed et nisl. Suspendisse magna justo, fermentum quis velit eu, tempor euismod erat. In pharetra auctor quam, id tristique nisi faucibus sit amet. Cras ultricies elementum mauris, sed rutrum mauris. Sed elementum felis ac iaculis sodales. Aenean sit amet purus porttitor, accumsan elit vel, mollis dui.</p>
              <h3>This Is an H3</h3>
              <p>Ut fringilla ullamcorper ipsum id consectetur. Curabitur rhoncus quam in dolor egestas blandit. Quisque tincidunt nunc at augue laoreet, ac faucibus ligula vehicula. Vestibulum bibendum magna erat, non viverra est sodales sed. Cras dictum gravida est, a ultrices erat congue at. Morbi venenatis enim est, vel varius est iaculis vel. Nam tempor ut augue sit amet egestas. Nam nec eleifend purus. Sed facilisis porttitor lobortis.</p>
              <h4>This Is an H4&mdash;CSS Makes it Capitalized</h4>
              <p>Maecenas non erat sed arcu dignissim hendrerit. Donec ex leo, condimentum nec est sed, dapibus tempus felis. Vestibulum rhoncus volutpat augue eu bibendum. Phasellus tempus ex sed odio rhoncus, eget gravida quam venenatis. Sed viverra porttitor imperdiet. Vivamus nec bibendum metus. Pellentesque posuere est vitae dolor ornare, viverra facilisis tortor ullamcorper. Nunc iaculis sem nibh, vel suscipit lacus finibus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tincidunt vel odio vel viverra. Cras nec tellus elit. In interdum ante a lacus maximus aliquam. Pellentesque tristique, tortor eget suscipit faucibus, est justo tincidunt libero, ut semper nisi elit nec risus. Curabitur rutrum, turpis ac blandit auctor, diam nunc malesuada orci, imperdiet euismod nisi lacus sed ante.</p>
              <button className="btn btn-primary">Primary Standard</button>
              <button className="btn btn-secondary">Secondary Standard</button>
              <button className="btn btn-outline-primary">Primary Outline</button>
              <button className="btn btn-outline-secondary">Secondary Outline</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>This Is an H1&mdash;CSS Makes it Uppercase</h1>
              <p className="lead">Donec tempor, leo <strong>tincidunt tempor finibus</strong>, dui sapien ullamcorper nis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum lorem vel ipsum ultricies cursus. Donec vel blandit ex. In risus nibh, dapibus a dapibus sed, gravida sit amet dolor. Nunc sit amet molestie justo. Quisque sit amet suscipit ante, id bibendum purus. Sed faucibus quis est convallis facilisis. <strong>Aliquam erat volutpat.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h2>This Is an H2&mdash;It Can <strong>Have Bold Text</strong></h2>
              <p>Integer massa felis, auctor non eros in, cursus rhoncus mi. Aliquam sit amet tempus nisi. Nunc eget arcu sed mauris euismod iaculis. Ut commodo rhoncus mi non mollis. Morbi cursus auctor lectus in laoreet. Pellentesque congue ex a magna rutrum luctus. Mauris pharetra turpis at ante placerat gravida. Phasellus vestibulum gravida justo a elementum. Donec ut dolor eu lectus tempus porta sed et nisl. Suspendisse magna justo, fermentum quis velit eu, tempor euismod erat. In pharetra auctor quam, id tristique nisi faucibus sit amet. Cras ultricies elementum mauris, sed rutrum mauris. Sed elementum felis ac iaculis sodales. Aenean sit amet purus porttitor, accumsan elit vel, mollis dui.</p>
              <h3>This Is an H3</h3>
              <p>Ut fringilla ullamcorper ipsum id consectetur. Curabitur rhoncus quam in dolor egestas blandit. Quisque tincidunt nunc at augue laoreet, ac faucibus ligula vehicula. Vestibulum bibendum magna erat, non viverra est sodales sed. Cras dictum gravida est, a ultrices erat congue at. Morbi venenatis enim est, vel varius est iaculis vel. Nam tempor ut augue sit amet egestas. Nam nec eleifend purus. Sed facilisis porttitor lobortis.</p>
              <h4>This Is an H4&mdash;CSS Makes it Capitalized</h4>
              <p>Maecenas non erat sed arcu dignissim hendrerit. Donec ex leo, condimentum nec est sed, dapibus tempus felis. Vestibulum rhoncus volutpat augue eu bibendum. Phasellus tempus ex sed odio rhoncus, eget gravida quam venenatis. Sed viverra porttitor imperdiet. Vivamus nec bibendum metus. Pellentesque posuere est vitae dolor ornare, viverra facilisis tortor ullamcorper. Nunc iaculis sem nibh, vel suscipit lacus finibus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tincidunt vel odio vel viverra. Cras nec tellus elit. In interdum ante a lacus maximus aliquam. Pellentesque tristique, tortor eget suscipit faucibus, est justo tincidunt libero, ut semper nisi elit nec risus. Curabitur rutrum, turpis ac blandit auctor, diam nunc malesuada orci, imperdiet euismod nisi lacus sed ante.</p>
              <button className="btn btn-primary">Primary Standard</button>
              <button className="btn btn-secondary">Secondary Standard</button>
              <button className="btn btn-outline-primary">Primary Outline</button>
              <button className="btn btn-outline-secondary">Secondary Outline</button>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
TypographyPage.getInitialProps = async () => {
  return { production: process.env.NODE_ENV === 'production' };
};

export default TypographyPage;
