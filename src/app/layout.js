"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var favicon_1 = require("./favicon");
var layout_module_scss_1 = require("./layout.module.scss");
var layoutClient_1 = require("./layoutClient");
var providers_1 = require("@/providers");
var bing_1 = require("@/scripts/bing");
var brevo_1 = require("@/scripts/brevo");
var facebook_1 = require("@/scripts/facebook");
var googleAnalytics_1 = require("@/scripts/googleAnalytics");
var optInMonster_1 = require("@/scripts/optInMonster");
var perfectAudience_1 = require("@/scripts/perfectAudience");
var tiktok_1 = require("@/scripts/tiktok");
var vwo_1 = require("@/scripts/vwo");
require("./bootstrap.scss");
require("./global.scss");
exports.metadata = {
    title: { default: 'QC Pet Studies', template: '%s - QC Pet Studies' },
    metadataBase: new URL('https://www.qcpetstudies.com'),
};
var RootLayout = function (_a) {
    var children = _a.children;
    return (<html lang="en">
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <googleAnalytics_1.GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID}/>}
        {process.env.VWO_ID && <vwo_1.VWO id={parseInt(process.env.VWO_ID, 10)}/>}
        {process.env.BREVO_CLIENT_KEY && <brevo_1.Brevo clientKey={process.env.BREVO_CLIENT_KEY}/>}
        <favicon_1.FaviconMeta />
      </head>
      <body className="d-flex flex-column">
        <providers_1.Provider>
          {children}
        </providers_1.Provider>
        {process.env.FACEBOOK_ID && <facebook_1.Facebook id={process.env.FACEBOOK_ID}/>}
        {process.env.TIKTOK_ID && <tiktok_1.Tiktok id={process.env.TIKTOK_ID}/>}
        {process.env.BING_ID && <bing_1.Bing id={process.env.BING_ID}/>}
        {process.env.PERFECT_AUDIENCE_ID && <perfectAudience_1.PerfectAudience id={process.env.PERFECT_AUDIENCE_ID}/>}
        <optInMonster_1.OptInMonster />
        <react_1.Suspense><layoutClient_1.LayoutClient /></react_1.Suspense>
        <react_toastify_1.ToastContainer pauseOnFocusLoss pauseOnHover position="top-center" className={layout_module_scss_1.default.toastContainer}/>
      </body>
    </html>);
};
exports.default = RootLayout;
