"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveChat = void 0;
var script_1 = require("next/script");
var LiveChat = function (_a) {
    var license = _a.license, group = _a.group;
    return (<>
    <script_1.default id="livechat" dangerouslySetInnerHTML={{ __html: getScript(license, group) }}/>
    <noscript>
      <a href={"https://www.livechat.com/chat-with/".concat(license, "/")} rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noreferrer nofollow" target="_blank">LiveChat</a>
    </noscript>
  </>);
};
exports.LiveChat = LiveChat;
var getScript = function (license, group) { return "\nwindow.__lc = window.__lc || {};\nwindow.__lc.license = ".concat(license, ";\nwindow.__lc.group = ").concat(group, ";\nwindow.__lc.chat_between_groups = false;\nwindow.__lc.ga_version = 'gtag';\nwindow.__lc.params = window.__lc.params || [];\nwindow.__lc.params.push({ name: 'school', value: 'QC Design School' });\n;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:\"2.0\",on:function(){i([\"on\",c.call(arguments)])},once:function(){i([\"once\",c.call(arguments)])},off:function(){i([\"off\",c.call(arguments)])},get:function(){if(!e._h)throw new Error(\"[LiveChatWidget] You can't use getters before load.\");return i([\"get\",c.call(arguments)])},call:function(){i([\"call\",c.call(arguments)])},init:function(){var n=t.createElement(\"script\");n.async=!0,n.type=\"text/javascript\",n.src=\"https://cdn.livechatinc.com/tracking.js\",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))"); };
