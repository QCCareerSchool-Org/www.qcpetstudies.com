import { FC, ReactNode, useState } from 'react';

import { useLocation } from '../../hooks/useLocation';
import { CountDownTimer } from '../countDownTimer';
import { Footer, FooterCTAType } from '../Footer';
import { Header } from '../Header';
import { SecondaryNavLinks } from '../SecondaryNav';

type Props = {
  noHero?: boolean;
  inverseNav?: boolean;
  secondaryTitle?: string;
  secondaryNavLinks?: SecondaryNavLinks;
  /** overrides the entire CTA */
  footerCTA?: ReactNode;
  footerCTAType?: FooterCTAType;
  enrollPath?: string;
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ noHero, inverseNav, secondaryTitle, secondaryNavLinks, footerCTA, footerCTAType, enrollPath = '/', children }) => {
  const date = new Date().getTime();
  const location = useLocation();
  const [ countdownHeight, setCountdownHeight ] = useState(0);

  return (
    <div>
      <CountDownTimer date={date} countryCode={location?.countryCode ?? ''} setCountdownHeight={setCountdownHeight} />

      <div id="defaultPage" className="d-flex flex-column">
        <Header
          noHero={noHero}
          inverseNav={inverseNav}
          secondaryTitle={secondaryTitle}
          secondaryNavLinks={secondaryNavLinks}
          enrollPath={enrollPath}
          className="flex-shrink-0 fixed-top"
          style={{ marginTop: countdownHeight }}
        />
        <main className="flex-shrink-0">
          {children}
        </main>
        <Footer cta={footerCTA} ctaType={footerCTAType} enrollPath={enrollPath} className="bg-navy mt-auto" />
        <script dangerouslySetInnerHTML={{ __html: livechatScript }} />
        <noscript><a href="https://www.livechatinc.com/chat-with/1056788/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow noreferrer" target="_blank">LiveChat</a></noscript>
      </div>
    </div>
  );
};

const livechatScript = `
window.__lc = window.__lc || { };
window.__lc.license = 1056788;
window.__lc.chat_between_groups = false;
window.__lc.ga_version = 'gtag';
window.__lc.group = 18;
(function(n,t,c) {
  function i(n) {
    return e._h ? e._h.apply(null, n) : e._q.push(n)
  }
  var e={
    _q:[],
    _h:null,
    _v:"2.0",
    on:function(){i(["on", c.call(arguments)])},
    once:function(){i(["once", c.call(arguments)])},
    off:function(){i(["off", c.call(arguments)])},
    get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},
    call:function(){i(["call", c.call(arguments)])},
    init:function(){var n=t.createElement("script");n.defer=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}
  };
  !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
}(window,document,[].slice))`;
