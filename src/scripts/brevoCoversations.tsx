import Script from 'next/script';
import type { FC } from 'react';

type Props = {
  conversationsId: string;
};

export const BrevoConversations: FC<Props> = ({ conversationsId }) => (
  <Script id="brevoConversations" dangerouslySetInnerHTML={{ __html: getScript(conversationsId) }} />
);

const getScript = (conversationsId: string): string => `
window.BrevoConversationsGroupID = 'D9koKxcaHpzSBTrDw';
(function(d, w, c) {
  w.BrevoConversationsID = \`${conversationsId.replace(/`/ug, '\\`')}\`;
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
  var s = d.createElement('script');
  s.async = true;
  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'BrevoConversations');
BrevoConversations('setColors', {
    buttonText: '#f5f5f5', /* chat button text/icon color */
    buttonBg: '#57c3d7', /* chat button background color */
    visitorBubbleBg: '#57c3d7', /* visitor's message bubble color */
    agentBubbleBg: '#ddd', /* agent's message bubble color */
});
BrevoConversations('updateIntegrationData', {
  school: 'QC Pet Studies',
});
`;
