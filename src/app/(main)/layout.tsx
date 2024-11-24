'use client';

import type { ReactNode } from 'react';
import { LayoutComponent } from '../serverComponent';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const MainLayout: LayoutComponent = ({
  children,
}: {
  children: ReactNode;
}) => {
  console.log('MainLayout');
  return (
    <div id="defaultPage" className="d-flex flex-column">
      <Header />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="bg-navy mt-auto" />
      <script dangerouslySetInnerHTML={{ __html: livechatScript }} />
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

export default MainLayout;
