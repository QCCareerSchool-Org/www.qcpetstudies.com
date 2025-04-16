import Image from 'next/image';

import AwardImage from './award-of-excellence.jpg';
import { fetchAward } from './fetchAward';
import { formatDate } from './formatDate';
import { SuggestedText } from './suggestedText';
import type { GenerateMetadata, PageComponent } from '@/app/serverComponent';
import { BlueskyShare } from '@/components/share/bluesky';
import { FacebookShare } from '@/components/share/facebook';
import { LinkedInShare } from '@/components/share/linkedIn';
import { ThreadsShare } from '@/components/share/threads';
import { TwitterShare } from '@/components/share/twitter';
import type { School } from '@/domain/school';

type RouteParams = {
  submissionId: string;
};

const schooolName: School = 'QC Pet Studies';

export const generateMetadata: GenerateMetadata<RouteParams> = async ({ params }) => {
  const { submissionId } = await params;

  if (!submissionId) {
    return { robots: { index: false } };
  }

  const award = await fetchAward(submissionId);

  if (award.schoolName !== schooolName) {
    return { robots: { index: false } };
  }

  const title = `Award of Excellence for ${award.name}`;
  const description = `${award.name} was awarded a grade of ${award.grade} for work in ${award.courseName}`;
  const imageSrc = 'https://www.qcpetstudies.com/images/award-of-excellence.jpg';

  return {
    title,
    description,
    alternates: { canonical: `/award/${submissionId}` },
    openGraph: {
      title,
      description,
      images: [ imageSrc ],
    },
    twitter: {
      title,
      description,
      images: [ imageSrc ],
    },
  };
};

const AwardPage: PageComponent<RouteParams> = async ({ params }) => {
  const { submissionId } = await params;

  if (!submissionId) {
    throw Error('Bad request');
  }

  const award = await fetchAward(submissionId);

  if (award.schoolName !== schooolName) {
    throw Error('Bad request');
  }

  const url = `https://www.qcpetstudies.com/award/${award.submissionId}`;
  const suggestedText = `I just earned this Award of Excellence from ${award.schoolName} for my work in ${award.courseName}! I'm so excited to be persuing my dream career. 💫 #AwardOfExcellence @QCPetStudies`;

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center g-5 mb-5">
            <div className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-9 text-center text-lg-start order-0 order-lg-1">
              <h1 className="mb-2">You Did It!</h1>
              <p className="lead fw-bold text-primary mb-2">Congratulations, {award.name}! 🎉</p>
              <p className="lead mb-2 fw-bold">Grade: {award.grade}</p>
              <p className="lead mb-0">You've earned an Award of Excellence for your amazing performance in {award.courseName} at {award.schoolName}. Your unit grade places you among the top achievers in your program. This badge recognizes your hard work, dedication, and commitment to excellence. It was issued on {formatDate(award.created)}.</p>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 col-xl-3 text-center text-lg-start order-1 order-lg-0">
              <Image src={AwardImage} alt="award" style={{ width: '100%', maxWidth: 300, height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center order-3">
              <h2 className="mb-2">Share Your Success</h2>
              <p className="lead mb-5">Celebrate your achievement by sharing your Award of Excellence with your friends and followers on social media. Don't forget to tag <b>@QCPetStudies</b> so we can cheer you on!</p>
              <div className="mb-4">
                <h3 className="h4 mb-1">Sample Text</h3>
                <SuggestedText text={suggestedText} />
              </div>
              <div className="mt-2">
                <ThreadsShare text={`${suggestedText.replace(' 💫', '')} ${url}`} />
              </div>
              <div className="mt-2">
                <BlueskyShare text={`${suggestedText} ${url}`} />
              </div>
              <div className="mt-2">
                <FacebookShare url={url} />
              </div>
              <div className="mt-2">
                <LinkedInShare url={url} text={suggestedText} />
              </div>
              <div className="mt-2">
                <TwitterShare url={url} text={suggestedText} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AwardPage;
