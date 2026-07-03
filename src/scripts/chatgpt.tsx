import Script from 'next/script';
import type { FC } from 'react';

import { safeJSON } from '@/lib/safeJSON';

interface Props {
  pixelId: string;
}

export const ChatGPT: FC<Props> = ({ pixelId }) => (
  <Script id="chatgpt" dangerouslySetInnerHTML={{ __html: getScript(pixelId) }} />
);

const getScript = (pixelId: string): string => `
!function(w, d, s, u) {
  if (w.oaiq) {
    return;
  }
  var q = function () {
    q.q.push(arguments);
  };
  q.q = [];
  w.oaiq = q;
  var j = d.createElement(s);
  j.async = 1;
  j.src = u;
  var f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(j, f);
}(window, document, 'script', 'https://bzrcdn.openai.com/sdk/oaiq.min.js');

oaiq('init', { pixelId: ${safeJSON(pixelId)}, debug:true });
`;
