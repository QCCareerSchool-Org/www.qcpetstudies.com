import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import { useEffect, useRef } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { usePushSubscription } from '../../hooks/usePushSubscription';
import { SubscriptionMetaData } from '../../lib/pushSubscription';

import EnableNotificationsChrome from './enable-notifications-with-arrow-chrome.gif';

type Props = {
  className?: string;
  meta: SubscriptionMetaData;
};

export const PushSubscriptionSection: FC<Props> = ({ className, meta }) => {
  const [ pushSubscription, subscribe, unsubscribe, info, dismissInfo, error, dismissError ] = usePushSubscription();
  const alreadyResubscribed = useRef(false);

  // if we already have a subscription, resubscribe with this meta data
  useEffect(() => {
    if (!alreadyResubscribed.current && pushSubscription) {
      subscribe(meta, false);
      alreadyResubscribed.current = true;
    }
  }, [ pushSubscription, subscribe, meta ]);

  if (pushSubscription === null) {
    return null;
  }

  const handleSubsciptionButtonClick: MouseEventHandler = () => {
    subscribe(meta);
  };

  const handleUnsubsciptionButtonClick: MouseEventHandler = () => {
    unsubscribe();
  };

  return (
    <section className={className}>
      <div className="container text-center">
        <h2>Get Notified of the Latest Special Offers</h2>
        {pushSubscription
          ? <AlreadySubscribed onClick={handleUnsubsciptionButtonClick} />
          : <Subscribe onClick={handleSubsciptionButtonClick} />
        }
        <Modal show={info} onHide={dismissInfo}>
          <ModalHeader closeButton>How to Allow Notifications</ModalHeader>
          <ModalBody>
            <p className="lead">To enable notifications, please click the &ldquo;allow&rdquo; button in the top-left corner of your web browser.</p>
            <Image src={EnableNotificationsChrome} alt="How to enable push notifications" style={{ maxWidth: '100%', height: 'auto' }} quality={100} unoptimized={true} />
          </ModalBody>
        </Modal>

        <Modal show={error} onHide={dismissError}>
          <ModalHeader closeButton>Notifications Disabled</ModalHeader>
          <ModalBody>
            <p className="lead mb-0">Notifications have been disabled. To enable...</p>
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
