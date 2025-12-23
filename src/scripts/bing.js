"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bing = void 0;
var script_1 = require("next/script");
var Bing = function (_a) {
    var id = _a.id;
    return (<script_1.default id="bing-uet" dangerouslySetInnerHTML={{ __html: getScript(id) }}/>);
};
exports.Bing = Bing;
var getScript = function (id) { return "\n(function(w,d,t,r,u) {\n  var f,n,i;\n  w[u]=w[u]||[],f=function() {\n    var o={ti:`".concat(id.replace(/`/ug, '\\`'), "`, enableAutoSpaTracking: true};\n    o.q=w[u],w[u]=new UET(o),w[u].push(\"pageLoad\")\n  },\n  n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {\n    var s=this.readyState;\n    s&&s!==\"loaded\"&&s!==\"complete\"||(f(),n.onload=n.onreadystatechange=null)\n  },\n  i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)\n})(window,document,\"script\",\"//bat.bing.com/bat.js\",\"uetq\");\n"); };
