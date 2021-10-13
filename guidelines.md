# Guidelines

This project has a Bootstrap-derived theme defined in `src/styles/global.scss`. This theme must be used when laying out a page. Additional styles should be avoided. If the theme cannot cover a particular layout, the team should disuss the issue to determine which steps to take.

This project's theme should take precedence over the old theme from the Wordpress site. This means colors, margins, font sizes, etc. should all be taken from the new theme. When copying content from the old site, the old styles should be ignored and only the text content should be retained. For example, the fancy bulleted lists in the WordPress theme should be avoided.

## Page Layout Components

Every page must use one of the preset page layout components found in `src/components`. By default, a page should use the `DefaultLayout` component.

```typescript
import { DefaultLayout } from '../components/DefaultLayout';

const ExamplePage: NextPage = () => (
  <DefaultLayout>
    {/* page content here */}
  </DefaultLayout>
);

export default ExamplePage;
```

## Page Menus

Some pages require a secondary nav bar to link to content located on that page. The `DefaultLayout` component supports this via the `secondaryTitle` and `secondaryNavLinks` props. To avoid needless re-renders, ensure that the values passed to these props are constant.

```typescript
import { DefaultLayout } from '../components/DefaultLayout';

// this is declared outside the component so that we have a constant reference
const secondaryNavLinks = [
  { name: 'Overview', url: '#firstSection' },
  { name: 'First Aid', url: '#firstAidSection' },
  { name: 'Tutors', url: '#tutorSection' },
];

const ExamplePageWithNav: NextPage = () => (
  <DefaultLayout secondaryTitle="Example Page" secondaryNavLinks={secondaryNavLinks}>

    <section id="firstSection">
      {/* section content */}
    </section>

    <section id="firstAidSection">
      {/* section content */}
    </section>

    <section id="tutorSection">
      {/* section content */}
    </section>

  </DefaultLayout>
);

export default ExamplePageWithNav;
```

## SEO

Every page must use the `SEO` component just inside the opening tag of the page's layout component.

```typescript
import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';

const ExamplePage: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="Example Page"
      description="An explanation of how to lay out pages"
      canonical="/example-page"
    />
    {/* page content here */}
  </DefaultLayout>
);

export default ExamplePage;
```

## Sections

All content must contained within `<section>` tags. Each logical section of the page must be in its own section. Each subsequent section should use a different background color or background image to distinguish it from the preceding section.

Sections have a preset padding defined in the theme that should generally not be overridden.

The first section on a page must use the `firstSection` id to make space for the site navigation.

In the code, sections should be separated from each other by a single line.

### Background Colors

Background colors should be chosen from the available theme colors. Text colors will be applied automatically based on the global CSS. When copying a section from the old Wordpress site that uses a background color, a background color from the new theme should be used in its place.

```typescript
<section id="firstSection">
  {/* this section will have the standard (white) background and the standard (dark grey) text */}
</section>

<section className="bg-dark">
  {/* this section will use the theme's "dark" color for the background and a lighter font color for heading and text */}
</section>

<section className="bg-light">
  {/* this section will use the theme's "light" color for the background and a darker font color for heading and text */}
</section>
```

### Background Images

When using a a background image for a section, the image should be loaded using a `next/image` component to provide image optimization. The background color that most closely approximates the overal image color should be used as well. The `text-shadow` class should be used when it improves the legibility of the headings and text.

```typescript
<section className="bg-dark text-shadow">
  <Image src={bathingBackground} layout="fill" objectFit="cover" objectPosition="center" alt="groomer bathing a dog" />
  {/* global CSS rules will ensure that this section is overlayed on top of the image above  */}
  <div className="container text-center">
    {/* section content */}
  </div>
</section>
```

### Background Videos

Background videos should be used sparingly to avoid large network requests. When laying out a section with a background video, use the `backgroundVideoWrapper` and `foregroundContent` classes as demonstrated below. The `text-shadow` class should be used when it improves the legibility of the headings and text.

Content that uses background video cannot include a background color on the `<section>` tag. Doing so would obscure the video. Specify the background color on the `div.backgroundVideoWrapper` instead.

Videos should include a poster image so that text is readable even if the video hasn't been loaded yet.

```typescript
<div className="backgroundVideoWrapper bg-dark">
  <video autoPlay muted loop className="backgroundVideo">
    <source src={groomingVideo} type="video/mp4" />
  </video>
  <div className="foregroundContent">
    {/* in this example, this is also the first section on the page and uses the firstSection id */}
    <section id="firstSection" className="text-shadow">
      <div className="container text-center">
        <h1>Become a Professional<br />Dog Groomer</h1>
        <p className="h4">Learn Online and Get Hands-On Training</p>
      </div>
    </section>
  </div>
</div>
```

### Containers

All content within a section must be wrapped with a `<div>` tag using the Bootstrap `container` class.

```typescript
<section id="firstSection">
  <div className="container">
    {/* section content */}
  </div>
</section>

<section className="bg-dark">
  <div className="container">
    {/* section content */}
  </div>
</section>
```

### Columns

Content should be laid using Bootstrap's column system.

#### Simple content

Simple content should be laid out in a single column. In such cases, a Bootstrap column and its containing row can _sometimes_ be avoided. Although, it's generally preferred to wrap the content in a div with the classes `col-12 col-md-10 offset-md-1` to prevent long paragraphs from stretching too far across the screen on larger screen sizes. Such content should generally be centered.

```typescript
<section id="firstSection">
  <div className="container text-center">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1">
        <h2>Simple Section</h2>
        <p>This is how we lay out a simple section. Long lines of text will be wrapped on larger screen sizes</p>
      </div>
    </div>
  </div>
</section>
```

#### Side-by-Side Content

When a section requires content to be laid out in separate columns, ensure that the layout is visually appealing at each bootstrap breakpoint (xs, sm, md, lg, xl, and xxl). In most cases, the content will have to be rearranged for smaller screen sizes so that it is laid out vertically instead. When arranging columns vertically, bottom margin spacing should be applied to the appropriate columns to keep them separated from each other. Such content should generally be centered.

```typescript
<section>
  <div className="container text-center">
    {/* full-width content */}
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1">
        <h2>Side-By-Side Content</h2>
        <p>This is an example of a section with a heading, some introductory text, and a three column layout.</p>
      </div>
    </div>
    {/* side-by-side content */}
    <div className="row">
      {/* on smaller screen sizes only, this column has a bottom margin to separate it from the next column */}
      <div className="col-12 col-lg-4 mb-4 mb-lg-0">
        <h3>Column A</h3>
        {/* column content */}
      </div>
      {/* on smaller screen sizes only, this column has a bottom margin to separate it from the next column */}
      <div className="col-12 col-lg-4 mb-4 mb-lg-0">
        <h3>Column B</h3>
        {/* column content */}
      </div>
      {/* this column has no bottom margin */}
      <div className="col-12 col-lg-4">
        <h3>Column C</h3>
        {/* column content */}
      </div>
    </div>
  </div>
</section>
```

## Margins

Additional margins should be used sparingly. Margin sizes are already defined in the theme and should generally not be overridden. When adding additional margins, prefer bottom margins rather than top margins. It is strongly advised to use existing bootstrap margin classes and avoid custom classes or inline styles.

❌ Incorrect:

```typescript
<h2>Heading with Extra Margin</h2>
<!-- uses a top margin -->
<p className="mt-4">This text is separated from the header by a larger-than-usual margin.</p>
```

```typescript
<h2 style={{ marginBottom: '16px' }}>Heading with Extra Margin</h2>
<!-- uses an inline syle -->
<p>This text is separated from the header by a larger-than-usual margin.</p>
```

✔️ Correct:

```typescript
<h2 className="mb-4">Heading with Extra Margin</h2>
<p>This text is separated from the header by a larger-than-usual margin.</p>
```

## Capitalization

Headings and button text should be written in title case.

❌ Incorrect:

```html
<h2>The quick brown fox jumps over the lazy dog</h2><!-- written in sentence case -->
```

✔️ Correct:

```html
<h2>The Quick Brown Fox Jumps Over the Lazy Dog</h2><!-- written in title case -->
```

> 📝 Small co-ordinating conjuctions should be written in lower case. The word "is" is a verb and must be written in title case.

### Uppercase Elements

Some HTML elements, notably buttons and some headings, are displayed in UPPERCASE. This is accomplished via the theme. Such elements should be written using normal capitalization rules.

❌ Incorrect:

```html
<button>LEARN MORE</button><!-- written in uppercase -->
```

✔️ Correct:

```html
<button>Learn More</button><!-- will be coverted to uppercase by the theme -->
```
