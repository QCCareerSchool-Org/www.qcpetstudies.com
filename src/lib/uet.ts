declare global {
  interface Window {
    uetq?: any[];
  }
}

// log the pageview with their URL
export const uetPageview = (url: string): void => {
  window.uetq = window.uetq ?? [];
  window.uetq.push('event', 'page_view', { page_path: url }); // eslint-disable-line camelcase
};
