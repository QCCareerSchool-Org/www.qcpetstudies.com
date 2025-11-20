import Image from 'next/image';

import AwardImage from './award-of-excellence.png';
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
import { fetchOldAward } from './fetchOldAward';

interface RouteParams {
  submissionId: string;
}

const schooolName: School = 'QC Pet Studies';

export const generateMetadata: GenerateMetadata<RouteParams> = async ({ params }) => {
  const { submissionId } = await params;

  const submissionIdNumber = parseInt(submissionId, 10);

  const award = !isNaN(submissionIdNumber) ? await fetchOldAward(submissionIdNumber) : await fetchAward(submissionId);

  if (award.schoolName !== schooolName) {
    return { robots: { index: false } };
  }

  const title = `Award of Excellence for ${award.name}`;
  const description = `Awarded in recognition of outstanding performance in ${award.courseName}`;
  const imageSrc = 'https://www.qcpetstudies.com/images/award-of-excellence.png';

  return {
    title,
    description,
    alternates: { canonical: `/awards/${submissionId}` },
    openGraph: {
      url: `https://www.qcpetstudies.com/awards/${award.submissionId}`,
      type: 'website',
      title,
      description,
      images: [ { url: imageSrc, alt: `Award of Excellence for ${award.name}` } ],
    },
    twitter: {
      title,
      description,
      images: [ { url: imageSrc, alt: `Award of Excellence for ${award.name}` } ],
    },
  };
};

const AwardPage: PageComponent<RouteParams> = async ({ params }) => {
  const { submissionId } = await params;

  const submissionIdNumber = parseInt(submissionId, 10);

  const award = !isNaN(submissionIdNumber) ? await fetchOldAward(submissionIdNumber) : await fetchAward(submissionId);

  if (award.schoolName !== schooolName) {
    throw Error('Bad request');
  }

  const url = `https://www.qcpetstudies.com/awards/${award.submissionId}`;
  const suggestedText = `I just earned this Award of Excellence from ${award.schoolName} for my work in ${award.courseName}! I'm so excited to be pursuing my dream career. 💫 #AwardOfExcellence @QCPetStudies`;

  return (
    <>
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <h1 className="mb-2">You Did It!</h1>
              <p className="lead fw-bold text-primary mb-2">Congratulations, {award.name}! 🎉</p>
              <p className="lead mb-2 fw-bold">Grade: {award.grade}</p>
              <p className="lead mb-4">You've earned an Award of Excellence from {award.schoolName} for your amazing performance in {award.courseName}. Your grade places you among the top achievers in your program. This badge recognizes your hard work, dedication, and commitment to excellence. It was issued for Submission {award.unitLetter}{award.created ? <> on {formatDate(award.created)}</> : <></>}.</p>
              <Image src={AwardImage} alt={`${schooolName} Award of Excellence`} style={{ maxWidth: 200, height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
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
