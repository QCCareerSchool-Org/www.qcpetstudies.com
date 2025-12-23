"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrevoConversations = void 0;
var script_1 = require("next/script");
var BrevoConversations = function (_a) {
    var conversationsId = _a.conversationsId;
    return (<script_1.default id="brevoConversations" dangerouslySetInnerHTML={{ __html: getScript(conversationsId) }}/>);
};
exports.BrevoConversations = BrevoConversations;
var getScript = function (conversationsId) { return "\nwindow.BrevoConversationsGroupID = 'D9koKxcaHpzSBTrDw';\n(function(d, w, c) {\n  w.BrevoConversationsID = `".concat(conversationsId.replace(/`/ug, '\\`'), "`;\n  w[c] = w[c] || function() {\n    (w[c].q = w[c].q || []).push(arguments);\n  };\n  var s = d.createElement('script');\n  s.async = true;\n  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';\n  if (d.head) d.head.appendChild(s);\n})(document, window, 'BrevoConversations');\nBrevoConversations('setColors', {\n    buttonText: '#f5f5f5', /* chat button text/icon color */\n    buttonBg: '#57c3d7', /* chat button background color */\n    visitorBubbleBg: '#57c3d7', /* visitor's message bubble color */\n    agentBubbleBg: '#ddd', /* agent's message bubble color */\n});\nBrevoConversations('updateIntegrationData', {\n  school: 'QC Pet Studies',\n});\n"); };
