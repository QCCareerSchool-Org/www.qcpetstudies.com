import { NextPage } from 'next';
import Head from 'next/head';
import CoursePreview, { getServerSideProps, Props } from './course-preview';

const Page: NextPage<Props> = props => (
  <CoursePreview {...props} />
);

export { getServerSideProps };

export default Page;
