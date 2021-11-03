# Guidelines

This project has a Bootstrap-derived theme defined in `src/styles/global.scss`. This theme must be used when laying out a page. Additional styles should be avoided. If the theme cannot cover a particular layout, the team should discuss the issue to determine which steps to take. For example,

* Revise the code to work with the existing theme
* Add local CSS to override the theme
* Adjust the theme
* Alter the graphic design

This project's theme should take precedence over the old theme from the Wordpress site. This means colors, margins, font sizes, etc. should all be taken from the new theme. When copying content from the old site, the old styles should be ignored and only the text content should be retained. For example, the fancy bulleted lists in the WordPress theme should be avoided.

## Page Layout Components

Every page must use one of the preset page layout components found in `src/components`. By default, a page should use the `DefaultLayout` component.

```javascript
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

```javascript
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

The following props are required:

| Prop | Description |
| --- | --- |
| title | The title of the page* |
| description | The page's meta description |
| canonical | A **relative** link to the current page |

\* Note: do not include the site name in the title, e.g., "About Us", not "About Us - QC Pet Studies".

```javascript
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

```javascript
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

When using a background image for a section, the image should be loaded using a `next/image` component to provide image optimization. The background color that most closely approximates the overal image color should be used as well. The `text-shadow` class should be used when it improves the legibility of the headings and text.

```javascript
<section className="bg-dark text-shadow">
  <Image src={bathingBackground} layout="fill" objectFit="cover" objectPosition="center" alt="groomer bathing a dog" />
  {/* global CSS rules will ensure that this container is overlayed on top of the image above  */}
  <div className="container text-center">
    {/* section content */}
  </div>
</section>
```

### Background Videos

Background videos should be used sparingly to avoid large network requests. When laying out a section with a background video, use the `backgroundVideoWrapper` and `foregroundContent` classes as demonstrated below. The `text-shadow` class should be used when it improves the legibility of the headings and text.

Content that uses background video cannot include a background color on the `<section>` tag. Doing so would obscure the video. Specify the background color on the `div.backgroundVideoWrapper` instead.

Videos should include a poster image so that text is readable even if the video hasn't been loaded yet.

```javascript
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

```javascript
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

Content should generally be laid using Bootstrap's column system.

#### Simple content

Simple content should be laid out in a single column. In such cases, a Bootstrap column and its containing row can _sometimes_ be avoided. Although, it's generally preferred to wrap the content in a div with the classes `col-12 col-lg-10 offset-lg-1` to prevent long paragraphs from stretching too far across the screen on larger screen sizes. Such content should generally be centered.

```javascript
<section id="firstSection">
  <div className="container text-center">
    <div className="row">
      <div className="col-12 col-lg-10 offset-lg-1">
        <h2>Simple Section</h2>
        <p>This is how we lay out a simple section. Long lines of text will be wrapped on larger screen sizes</p>
      </div>
    </div>
  </div>
</section>
```

##### Bootstrap 5 method

Bootstrap 5 has a new method for centering columns that can be easier to understand than using the offset-* classes. Since rows use flexbox layout by default, a row with the `justify-content-center` class will center the columns inside of it without having to add offsets to them.

```javascript
<div className="container text-center">
  <div className="row justify-content-center">{/* .justify-content-center */}
    <div className="col-12 col-lg-10">{/* no .offset-lg-1 needed */}
      <h2>Simple Section</h2>
      <p>This is how we lay out a simple section. Long lines of text will be wrapped on larger screen sizes</p>
    </div>
  </div>
</div>
```

#### Side-by-Side Content

When a section requires content to be laid out in separate columns, ensure that the layout is visually appealing at each bootstrap breakpoint (xs, sm, md, lg, xl, and xxl). In most cases, the content will have to be rearranged for smaller screen sizes so that it is laid out vertically instead. When arranging columns vertically, bottom margin spacing should be applied to the appropriate columns to keep them separated from each other. Such content should generally be centered.

```javascript
<section>
  <div className="container text-center">
    {/* full-width content */}
    <div className="row">
      <div className="col-12 col-lg-10 offset-lg-1">
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

##### Images in Side-by-Side Content

Images laid out in a column next to text should fill the width of the column they are in. This can be accomplished using the next/image component's responsive layout option. Filling the width of each column ensures a consistent gutter width.

```javascript
<div className="row justify-content-center">
  <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-4 mb-lg-0">
    <Image src={FrisbeeDog}> layout="responsive" alt="dog catching a frisbee" />
  </div>
  <div className="col-12 col-lg-6">
    {/* column content */}
  </div>
</div>
```

When the design calls for an image to not be responsive, a custom layout should be used to prevent excess whitespace and to preserve the standard gutter size between columns. Note: An .m*-4 is equivalent to the standard gutter width.

```javascript
{/*
  flex-column:   lay out the nested columns vertically by default
  flex-lg-row:   lay out the nested columns horizontally on lg or greater screens
  text-center:   center align the image and the text in the nested columns by default
  text-lg-start: start align the image and the text in the nested columns on lg or greater screens
*/}
<div className="d-flex flex-column flex-lg-row text-center text-lg-start">
  {/*
    flex-shrink-0: keep the width of this column fixed (the nested image will determine the width)
    mb-4:          bottom margin by default
    mb-lg-0:       take away the bottom margin on lg or greater screens
    me-lg-4:       end margin on lg or greater screens
  */}
  <div className="flex-shrink-0 mb-4 mb-lg-0 me-lg-4">
    <Image src={PetStudiesHomepage} width={360} height={240} alt="groomer bathing a dog" />
  </div>
  {/* this column will expand to fill the remaining space */}
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nibh eleifend, convallis velit eget, lacinia lacus. Morbi eget interdum nibh. Nulla sagittis risus arcu. Sed non aliquam risus, sed dignissim lorem. Mauris libero mi, luctus vel neque vitae, varius cursus ante. Donec non blandit libero, a viverra velit. Vivamus convallis arcu justo, et placerat diam sagittis congue. Donec a tellus magna. Quisque in lacinia nibh. Proin et tincidunt arcu, eu cursus purus. Nunc dapibus dapibus mollis. Vivamus egestas nibh massa, eget dignissim diam hendrerit ut. Vivamus maximus eleifend nibh, aliquet rhoncus elit condimentum ac.</p>
  </div>
</div>
```

## Margins

Additional margins should be used sparingly. Margin sizes are already defined in the theme and should generally not be overridden. When adding additional margins, prefer bottom margins rather than top margins. It is strongly advised to use existing bootstrap margin classes and avoid custom classes or inline styles.

❌ Incorrect:

```html
<h2>Heading with Extra Margin</h2>
<!-- uses a top margin -->
<p className="mt-4">This text is separated from the header by a larger-than-usual margin.</p>
```

```html
<!-- uses a custom syle -->
<h2 className="extraSpacing">Heading with Extra Margin</h2>
<p>This text is separated from the header by a larger-than-usual margin.</p>
```

✔️ Correct:

```html
<!-- uses a bottom margin -->
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

## Links

Spaces around anchor text should be left outside the anchor element.

❌ Incorrect:

```html
Lorem ipsum dolor sit amet, consectetur<a> adipiscing </a>elit.<!-- spaces inside -->
```

✔️ Correct:

```html
Lorem ipsum dolor sit amet, consectetur <a>adipiscing</a> elit.<!-- spaces outside -->
```

Punctuation not related to the anchor text should be left outside the anchor element.

❌ Incorrect:

```html
Lorem ipsum dolor <a>sit amet,</a> consectetur adipiscing elit.<!-- comma not related to the anchor text inside -->
Lorem ipsum dolor sit amet, consectetur <a>adipiscing elit.</a><!-- comma not related to the anchor text inside -->
```

✔️ Correct:

```html
Lorem ipsum dolor <a>sit amet</a>, consectetur adipiscing elit.<!-- comma not related to the anchor text outside -->
Lorem ipsum dolor sit amet, consectetur <a>adipiscing elit</a>.<!-- comma not related to the anchor text inside -->
Lorem ipsum dolor <a>sit amet, consectetur</a> adipiscing elit.<!-- comma related to the anchor text is fine -->
```

## Line Breaks

Manual line breaks should generally be avoided. What looks acceptable with line breaks at one screen size might not appear correctly at a different screen size.

❌ Incorrect:

```html
<h1>About<br />QC Pet Studies</a><!-- manual line break -->
```

✔️ Correct:

```html
<h1>About QC Pet Studies</a><!-- no manual line break -->
```

Line breaks should not have extra spaces around them.

❌ Incorrect:

```html
<p>38 McArthur Ave <br /> Ottawa ON K1L 6R2 <br /> Canada</p><!-- unnecessary spaces -->
```

✔️ Correct:

```html
<p>38 McArthur Ave<br />Ottawa ON K1L 6R2<br />Canada</p><!-- no unnecessary spaces -->
```
