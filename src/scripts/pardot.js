"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pardot = void 0;
var script_1 = require("next/script");
var Pardot = function (_a) {
    var accountId = _a.accountId, campaignId = _a.campaignId;
    return (<script_1.default id="pardot" dangerouslySetInnerHTML={{ __html: getScript(accountId, campaignId) }}/>);
};
exports.Pardot = Pardot;
var getScript = function (accountId, campaignId) { return "\npiAId = `".concat(accountId.replace(/`/ug, '\\`'), "`;\npicampaignId = `").concat(campaignId.replace(/`/ug, '\\`'), "`;\npiHostname = 'go.qceventplanning.com';\n\n(function() {\n  function async_load(){\n    var s = document.createElement('script');\n    s.type = 'text/javascript';\n    s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';\n    var c = document.getElementsByTagName('script')[0];\n    c.parentNode.insertBefore(s, c);\n  }\n  if (window.attachEvent) {\n    window.attachEvent('onload', async_load);\n  }\n  else {\n    window.addEventListener('load', async_load, false);\n  }\n})();\n"); };
