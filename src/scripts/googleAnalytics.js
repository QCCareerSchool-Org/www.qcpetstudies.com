'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAnalytics = void 0;
var google_1 = require("@next/third-parties/google");
var script_1 = require("next/script");
var GoogleAnalytics = function (_a) {
    var id = _a.id, adsId = _a.adsId;
    return (<>
    <google_1.GoogleAnalytics gaId={id}/>
    {adsId && <script_1.default id="google-analytics-google-ads" dangerouslySetInnerHTML={{ __html: getScript(adsId) }}/>}
  </>);
};
exports.GoogleAnalytics = GoogleAnalytics;
var getScript = function (adsId) {
    return "gtag('config', `".concat(adsId.replace(/`/ug, '\\`'), "`, { allow_enhanced_conversions: true });\n");
};
