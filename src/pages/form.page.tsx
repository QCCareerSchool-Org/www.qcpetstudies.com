import { GetServerSideProps } from 'next';
import NextError from 'next/error';
import qs from 'qs';

import { BrochureForm } from '../components/BrochureForm';
import { NextPageWithLayout } from './_app.page';

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

  return <BrochureForm action={action} phoneNumber={phoneNumber} buttonText={buttonText} hiddenFields={hiddenFields} marketing={null} />;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const index = ctx.resolvedUrl.indexOf('?');
  if (index === -1) {
    return { props: { action: null, phoneNumber: false, buttonText: '', hiddenFields: [] } };
  }

  // we're using qs because Next.js doesn't support nested data in query strings,
  // e.g. hiddenFields[0][key]=foo&hiddenFields[0][value]=42&hiddenFields[1][key]=bar&hiddenFields[1][value]=99
  const querystring = ctx.resolvedUrl.substring(index + 1);
  const query = qs.parse(querystring);

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
  for (const item of obj) {
    if (!isHiddenField(item)) {
      return false;
    }
  }
  return true;
};

const isHiddenField = (obj: unknown): obj is HiddenField => {
  if (obj && typeof obj === 'object') {
    if ('key' in obj && 'value' in obj) {
      if (typeof obj.key === 'string' && (typeof obj.value === 'string' || typeof obj.value === 'number')) {
        return true;
      }
    }
  }
  return false;
};

FormPage.getLayout = page => <>{page}</>; // no layout

export default FormPage;
