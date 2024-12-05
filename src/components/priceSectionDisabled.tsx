import type { FC } from 'react';

type Variant = 'dark' | 'light';

type Props = {
  variant?: Variant;
  id?: string;
};

export const PriceSectionDisabled: FC<Props> = ({ variant = 'dark', id = 'tuition' }) => (
  <>
    <div id={id} className="sectionAnchor" />
    <section className={variant === 'dark' ? 'bg-navy' : 'bg-light'}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
            <p>Unfortunately the Dog Grooming and First Aid for Groomers courses are not available in Ontario</p>
          </div>
        </div>
      </div>
    </section>
  </>
);
