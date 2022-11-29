import { GetServerSideProps } from 'next';
import NextError from 'next/error';
import qs from 'qs';

import { BrochureForm } from '../components/BrochureForm';
import { NextPageWithLayout } from './_app';

type HiddenField = { key: string; value: string | number };

type Props = {
  action: string | null;
  phoneNumber: boolean;
  buttonText: string;
  hiddenFields: Array<HiddenField>;
};

const FormPage: NextPageWithLayout<Props> = ({ action, phoneNumber, buttonText, hiddenFields }) => {
  if (!action) {
    return <NextError statusCode={400} />;
  }

  console.log('render', hiddenFields);

  return <BrochureForm action={action} phoneNumber={phoneNumber} buttonText={buttonText} hiddenFields={hiddenFields} />;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const index = ctx.resolvedUrl.indexOf('?');
  if (index === -1) {
    return { props: { action: null, phoneNumber: false, buttonText: '', hiddenFields: [] } };
  }
  const querystring = ctx.resolvedUrl.substring(index + 1);
  const query = qs.parse(querystring); // we're using qs because Next.js doesn't support nested data in query strings
  const action = typeof query.action === 'string' ? query.action : null;
  const phoneNumber = typeof query.phoneNumber === 'string' ? !!query.phoneNumber : false;
  const buttonText = typeof query.buttonText === 'string' ? query.buttonText : 'Get the Free Preview';
  const hiddenFields = isHiddenFields(query.hiddenFields) ? query.hiddenFields : [];

  return { props: { action, phoneNumber, buttonText, hiddenFields } };
};

const isHiddenFields = (obj: unknown): obj is HiddenField[] => {
  if (!Array.isArray(obj)) {
    return false;
  }
  for (const item of obj as unknown[]) {
    if (!(item && typeof item === 'object' && 'key' in item && typeof item.key === 'string' && 'value' in item && (typeof item.value === 'string' || typeof item.value === 'number'))) {
      return false;
    }
  }
  return true;
};

FormPage.getLayout = page => <>{page}</>; // no layout

export default FormPage;
