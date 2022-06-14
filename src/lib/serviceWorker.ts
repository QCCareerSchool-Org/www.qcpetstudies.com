export class ServiceWorkersUnsupported extends Error { }

const createNewRegistration = async (): Promise<ServiceWorkerRegistration> => {
  if (!('navigator' in window && 'serviceWorker' in window.navigator)) {
    throw new ServiceWorkersUnsupported();
  }
  return navigator.serviceWorker.register('/service-worker.js');
};

const getExistingRegistration = async (): Promise<ServiceWorkerRegistration | undefined> => {
  if (!('navigator' in window && 'serviceWorker' in window.navigator)) {
    throw new ServiceWorkersUnsupported();
  }
  return navigator.serviceWorker.getRegistration();
};

export const getRegistration = async (): Promise<ServiceWorkerRegistration> => {
  const existingRegistration = await getExistingRegistration();
  if (existingRegistration) {
    return existingRegistration;
  }
  return createNewRegistration();
};
