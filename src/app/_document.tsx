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
    client_key: "ggq6iykwaxh2hn0q20y7fwpu"
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
          <script dangerouslySetInnerHTML={{ __html: brevoScript }} />
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
