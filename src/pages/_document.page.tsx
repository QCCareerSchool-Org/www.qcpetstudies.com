// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

const getGoogleAnalyticsSrc = (id: string): string => `https://www.googletagmanager.com/gtag/js?id=${id}`;

const getGoogleAnalyticsScript = (id: string, adsId?: string): string => `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { page_path: window.location.pathname });
${adsId ? `gtag('config', '${adsId}', { allow_enhanced_conversions: true });` : ''}`;

const uetScript = `
(function(w,d,t,r,u) {
  var f, n, i;
  w[u] = w[u] || [], f = function() {
    var o = { ti: "5751420" };
    o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
  },
  n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
    var s = this.readyState;
    s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
  },
  i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
})(window, document, "script", "//bat.bing.com/bat.js", "uetq");`;

const getFacebookScript = (id: string): string => `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${id}');
fbq('track', 'PageView');`;

const pardotScript = `
piAId = '948642';
piCId = '';
piHostname = 'go.qcpetstudies.com';

(function() {
  function async_load() {
    var s = document.createElement('script'); s.type = 'text/javascript';
    s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
    var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
  }
  if (window.attachEvent) {
    window.attachEvent('onload', async_load);
  } else {
    window.addEventListener('load', async_load, false);
  }
})();`;

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

const optInMonsterScript = `
(function(d,u,ac){
  var s=d.createElement('script');
  s.type='text/javascript';
  s.src='https://a.omappapi.com/app/js/api.min.js';
  s.async=true;
  s.dataset.user=u;
  s.dataset.account=ac;
  d.getElementsByTagName('head')[0].appendChild(s);
})(document,42601,48459);`;

const trustPulseScript = `
!function(w,d,s,n,r,a){
  (w._tpq=w._tpq||[]).push(['init',n]),
  (r=d.createElement(s)).type='text/javascript',
  r.src='https://a.trstplse.com/app/js/api.min.js',
  r.async=!0,
  (a=d.getElementsByTagName(s)[0]).parentNode.insertBefore(r,a)
}(window,document,'script',10509);`;

const brevoScript = `
(function() {
  window.sib = {
    equeue: [],
    client_key: "wik5t1al63ykgvgi0qflcqee"
  };
  /* OPTIONAL: email for identify request*/
  // window.sib.email_id = 'example@domain.com';
  window.sendinblue = {};
  for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
    (function(k) {
      window.sendinblue[k] = function() {
        var arg = Array.prototype.slice.call(arguments);
        (window.sib[k] || function() {
          var t = {};
          t[k] = arg;
          window.sib.equeue.push(t);
        })(arg[0], arg[1], arg[2], arg[3]);
      };
    })(j[i]);
  }
  var n = document.createElement("script"),
    i = document.getElementsByTagName("script")[0];
  n.type = "text/javascript", n.id = "sendinblue-js", n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
})();`;

const getActiveCampaignScript = (accountId: string): string => `
(function (e,t,o,n,p,r,i) {
  e.visitorGlobalObjectAlias = n;
  e[e.visitorGlobalObjectAlias] = e[e.visitorGlobalObjectAlias] || function() {
    (e[e.visitorGlobalObjectAlias].q = e[e.visitorGlobalObjectAlias].q || []).push(arguments);
  };
  e[e.visitorGlobalObjectAlias].l = (new Date).getTime();
  r = t.createElement("script");
  r.src = o;
  r.async = true;
  i = t.getElementsByTagName('script')[0];
  i.parentNode.insertBefore(r, i);
})(window, document, 'https://diffuser-cdn.app-us1.com/diffuser/diffuser.js', 'vgo');
vgo('setAccount', ${accountId});
vgo('setTrackByDefault', true);
vgo('process');`;

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): ReactElement {
    return (
      <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
        <Head>
          {process.env.GOOGLE_ANALYTICS_ID && (
            <>
              {/* {process.env.GOOGLE_OPTIMIZE_ID && <script async src={`https://www.googleoptimize.com/optimize.js?id=${process.env.GOOGLE_OPTIMIZE_ID}`} />} */}
              <script async src={getGoogleAnalyticsSrc(process.env.GOOGLE_ANALYTICS_ID)} />
              <script dangerouslySetInnerHTML={{ __html: getGoogleAnalyticsScript(process.env.GOOGLE_ANALYTICS_ID, 'AW-1071836607') }} />
            </>
          )}
          <script dangerouslySetInnerHTML={{ __html: uetScript }} />
          {process.env.FACEBOOK_ID && <script dangerouslySetInnerHTML={{ __html: getFacebookScript(process.env.FACEBOOK_ID) }} />}
          <script dangerouslySetInnerHTML={{ __html: pardotScript }} />
          {/* <script dangerouslySetInnerHTML={{ __html: brevoScript }} /> */}
          {/* {process.env.ACTIVECAMPAIGN_ID && <script dangerouslySetInnerHTML={{ __html: getActiveCampaignScript(process.env.ACTIVECAMPAIGN_ID) }} />} */}
          <script dangerouslySetInnerHTML={{ __html: livechatScript }} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Raleway:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="d-flex flex-column h-100">
          <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1725004270923176&ev=PageView&noscript=1" /></noscript>{ /* eslint-disable-line @next/next/no-img-element,jsx-a11y/alt-text */ }
          <noscript><a href="https://www.livechatinc.com/chat-with/1056788/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow noreferrer" target="_blank">LiveChat</a></noscript>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: optInMonsterScript }} />
          <script dangerouslySetInnerHTML={{ __html: trustPulseScript }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
