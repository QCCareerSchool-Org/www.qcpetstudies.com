/* eslint-disable camelcase */
type BrevoPageViewProperties = Record<string, unknown> & {
  /** the full URL of the page, including the scheme */
  ma_url?: string;
  /** the path of the page, i.e. the url without the scheme, the domain, the query string or the fragments */
  ma_path?: string;
  /** the title of the page */
  ma_title?: string;
  /** the referrer of the page */
  ma_referrer?: string;
};

declare global {
  interface Window {
    sendinblue: {
      page: (pageName: string, properties?: BrevoPageViewProperties) => void;
    };
  }
}

export const brevoPageView = (path: string, title?: string): void => {
  const pageName = title ? title.replace(' - QC Pet Studies', '') : 'Unknown';
  console.log(pageName, { ma_url: `https://www.qcpetstudies.com${path}`, ma_path: path, ma_title: title });
  window.sendinblue.page(pageName, { ma_url: `https://www.qcpetstudies.com${path}`, ma_path: path, ma_title: title });
};
