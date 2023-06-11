import type { FC, MouseEventHandler } from 'react';
import { useEffect, useReducer } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { createPushSubscription, deletePushSubscription, getPushSubscription } from '../lib/pushSubscription';
import { getRegistration } from '../lib/serviceWorker';

type Props = {
  className?: string;
  meta: {
    firstName: string | null;
    lastName: string | null;
    emailAddress: string | null;
    interests?: string[];
  };
};

type State = {
  serviceWorkerRegistration: ServiceWorkerRegistration | null;
  pushSubscription: PushSubscription | null;
  showInformation: boolean;
};

type Action =
  | { type: 'SERVICE_WORKER_REGISTRATION_FAILED' }
  | { type: 'PUSH_SUBSCRIPTION_FOUND'; payload: { serviceWorkerRegistration: ServiceWorkerRegistration; pushSubscription: PushSubscription } }
  | { type: 'PUSH_SUBSCRIPTION_MISSING'; payload: { serviceWorkerRegistration: ServiceWorkerRegistration } }
  | { type: 'PUSH_SUBSCRIPTION_CREATED'; payload: { pushSubscription: PushSubscription } }
  | { type: 'PUSH_SUBSCRIPTION_DENIED' }
  | { type: 'PUSH_SUBSCRIPTION_DELETED' }
  | { type: 'INFORMATION_DISMISSED' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SERVICE_WORKER_REGISTRATION_FAILED':
      return { ...state, serviceWorkerRegistration: null, pushSubscription: null };
    case 'PUSH_SUBSCRIPTION_FOUND':
      return { ...state, serviceWorkerRegistration: action.payload.serviceWorkerRegistration, pushSubscription: action.payload.pushSubscription };
    case 'PUSH_SUBSCRIPTION_MISSING':
      return { ...state, serviceWorkerRegistration: action.payload.serviceWorkerRegistration, pushSubscription: null };
    case 'PUSH_SUBSCRIPTION_CREATED':
      return { ...state, pushSubscription: action.payload.pushSubscription };
    case 'PUSH_SUBSCRIPTION_DENIED':
      return { ...state, showInformation: true };
    case 'PUSH_SUBSCRIPTION_DELETED':
      return { ...state, pushSubscription: null };
    case 'INFORMATION_DISMISSED':
      return { ...state, showInformation: false };
  }
};

const initialState: State = {
  serviceWorkerRegistration: null,
  pushSubscription: null,
  showInformation: false,
};

export const PushSubscription: FC<Props> = ({ className, meta }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    const checkSubscription = async (): Promise<void> => {
      const r = await getRegistration();
      if (r === null) {
        dispatch({ type: 'SERVICE_WORKER_REGISTRATION_FAILED' });
        return;
      }
      const s = await getPushSubscription(r, meta);
      if (s === null) {
        dispatch({ type: 'PUSH_SUBSCRIPTION_MISSING', payload: { serviceWorkerRegistration: r } });
        return;
      }
      dispatch({ type: 'PUSH_SUBSCRIPTION_FOUND', payload: { serviceWorkerRegistration: r, pushSubscription: s } });
    };
    checkSubscription().catch(console.error);
  }, [ meta ]);

  const handleSubsciptionButtonClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (!state.serviceWorkerRegistration) {
      return;
    }
    createPushSubscription(state.serviceWorkerRegistration, meta).then(s => {
      if (s) {
        dispatch({ type: 'PUSH_SUBSCRIPTION_CREATED', payload: { pushSubscription: s } });
      } else {
        dispatch({ type: 'PUSH_SUBSCRIPTION_DENIED' });
      }
    }).catch(console.error);
  };

  const handleUnsubsciptionButtonClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (!state.serviceWorkerRegistration) {
      return;
    }
    deletePushSubscription(state.serviceWorkerRegistration).then(() => {
      dispatch({ type: 'PUSH_SUBSCRIPTION_DELETED' });
    }).catch(console.error);
  };

  const handlePopupClose = (): void => {
    dispatch({ type: 'INFORMATION_DISMISSED' });
  };

  if (!state.serviceWorkerRegistration) {
    return null;
  }

  return (
    <section className={className}>
      <div className="container text-center">
        <h2>Get Notified of the Latest Special Offers</h2>
        {state.pushSubscription
          ? <AlreadySubscribed onClick={handleUnsubsciptionButtonClick} />
          : <Subscribe onClick={handleSubsciptionButtonClick} />
        }
        <Modal show={state.showInformation} onHide={handlePopupClose}>
          <ModalHeader closeButton>Enable Notifications</ModalHeader>
          <ModalBody>
            fdlkjgldskfjdljkf
          </ModalBody>
        </Modal>
      </div>
    </section>
  );
};

type AlreadySubscribedProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const AlreadySubscribed: FC<AlreadySubscribedProps> = props => {
  return (
    <>
      <p className="lead">You are subscribed! Keep an eye out for the latest special offers and discounts.</p>
      <button onClick={props.onClick} className="btn btn-danger"><div style={{ position: 'relative', display: 'inline-block', top: -1, marginRight: '0.5rem' }}><FaTimesCircle /></div>Unsubscribe</button>
    </>
  );
};

type SubscribeProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Subscribe: FC<SubscribeProps> = props => {
  return (
    <>
      <p className="lead">Subscribe to be notified of the latest special offers and discounts. Unsubscribe at any time.</p>
      <button onClick={props.onClick} className="btn btn-success"><div style={{ position: 'relative', display: 'inline-block', top: -1, marginRight: '0.5rem' }}><FaCheckCircle /></div>Subscribe</button>
    </>
  );
};
