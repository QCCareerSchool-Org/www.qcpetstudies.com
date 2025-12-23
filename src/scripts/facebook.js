"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facebook = void 0;
var script_1 = require("next/script");
var Facebook = function (_a) {
    var id = _a.id;
    return (<>
    <script_1.default id="facebook" dangerouslySetInnerHTML={{ __html: getScript(id) }}/>
    <noscript dangerouslySetInnerHTML={{ __html: "<img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=".concat(encodeURIComponent(id), "&ev=PageView&noscript=1\" alt=\"\" />") }}/>
  </>);
};
exports.Facebook = Facebook;
var getScript = function (id) { return "\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', `".concat(id.replace(/`/ug, '\\`'), "`);\nfbq('track', 'PageView');\n"); };
