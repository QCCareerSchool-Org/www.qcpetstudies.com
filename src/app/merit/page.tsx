import type { GenerateMetadata, PageComponent } from '../serverComponent';
import { fetchData } from './fetchData';
import { TwitterShare } from './twitterShare';
import TestImage from '../(main)/maltipu-begging.jpg';

export const generateMetadata: GenerateMetadata = async ({ searchParams }) => {
  if (!('submissionId' in searchParams && typeof searchParams.submissionId === 'string')) {
    return {
      robots: { index: false },
    };
  }

  const data = await fetchData(searchParams.submissionId);

  const title = `Award of Merit for ${data.name}`;
  const description = 'skdjfhsdkjhf';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ TestImage.src ],
    },
    twitter: {
      title,
      description,
      images: [ TestImage.src ],
    },
  };
};

const MeritPage: PageComponent = async ({ searchParams }) => {
  if (!('submissionId' in searchParams && typeof searchParams.submissionId === 'string')) {
    throw Error('Bad request');
  }

  const data = await fetchData(searchParams.submissionId);

  return (
    <>
      <h1>Merit</h1>
      {JSON.stringify(data, null, ' ')}
      <div>
        <TwitterShare text="Check out my award!" />
      </div>
    </>
  );
};

export default MeritPage;
