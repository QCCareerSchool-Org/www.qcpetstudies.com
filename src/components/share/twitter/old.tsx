import Script from 'next/script';
import type { FC } from 'react';

interface Props {
  suggestedText: string;
}

export const TwitterShare: FC<Props> = ({ suggestedText: text }) => (
  <>
    <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`} data-size="large">Tweet</a>
    <Script id="twitterWidget" dangerouslySetInnerHTML={{ __html: twitterWidgetJS }} />
  </>
);

const twitterWidgetJS = `
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));`;
