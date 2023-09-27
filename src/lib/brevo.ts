declare global {
  interface Window {
    sendinblue: {
      page: (pageName: string, properties: unknown) => void;
    };
  }
}

export const brevoPageView = (pageName: string, properties?: unknown): void => {
  window.sendinblue.page(pageName, properties);
};
