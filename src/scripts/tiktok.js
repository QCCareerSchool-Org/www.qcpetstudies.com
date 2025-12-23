"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiktok = void 0;
var script_1 = require("next/script");
var Tiktok = function (_a) {
    var id = _a.id;
    return (<script_1.default id="tiktok" dangerouslySetInnerHTML={{ __html: getScript(id) }}/>);
};
exports.Tiktok = Tiktok;
var getScript = function (id) { return "\n!function (w, d, t) {\nw.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[\"page\",\"track\",\"identify\",\"instances\",\"debug\",\"on\",\"off\",\"once\",\"ready\",\"alias\",\"group\",\"enableCookie\",\"disableCookie\"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++\n)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i=\"https://analytics.tiktok.com/i18n/pixel/events.js\";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement(\"script\");n.type=\"text/javascript\",n.async=!0,n.src=i+\"?sdkid=\"+e+\"&lib=\"+t;e=document.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(n,e)};\nttq.load(`".concat(id.replace(/`/ug, '\\`'), "`);\nttq.page();\n}(window, document, 'ttq');\n"); };
