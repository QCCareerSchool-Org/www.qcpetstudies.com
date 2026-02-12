import type { FC } from 'react';

export const OptInMonster: FC = () => <script dangerouslySetInnerHTML={{ __html: script }} />;

const script = `
(function(d,u,ac){
  var s=d.createElement('script');
  s.type='text/javascript';
  s.src='https://a.omappapi.com/app/js/api.min.js';
  s.async=true;
  s.dataset.user=u;
  s.dataset.account=ac;
  d.getElementsByTagName('head')[0].appendChild(s);
})(document,42601,48459);
`;
