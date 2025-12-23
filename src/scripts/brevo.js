"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brevo = void 0;
var script_1 = require("next/script");
var Brevo = function (_a) {
    var clientKey = _a.clientKey;
    return (<script_1.default id="brevo" dangerouslySetInnerHTML={{ __html: getScript(clientKey) }}/>);
};
exports.Brevo = Brevo;
var getScript = function (clientKey) { return "\n(function() {\n  window.sib = {\n    equeue: [],\n    client_key: `".concat(clientKey.replace(/`/ug, '\\`'), "`\n  };\n  /* OPTIONAL: email for identify request*/\n  // window.sib.email_id = 'example@domain.com';\n  window.sendinblue = {};\n  for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {\n    (function(k) {\n      window.sendinblue[k] = function() {\n        var arg = Array.prototype.slice.call(arguments);\n        (window.sib[k] || function() {\n          var t = {};\n          t[k] = arg;\n          window.sib.equeue.push(t);\n        })(arg[0], arg[1], arg[2], arg[3]);\n      };\n    })(j[i]);\n  }\n  var n = document.createElement(\"script\");\n  var i = document.getElementsByTagName(\"script\")[0];\n  n.type = \"text/javascript\";\n  n.id = \"sendinblue-js\";\n  n.async = !0;\n  n.src = \"https://sibautomation.com/sa.js?key=\" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();\n})();\n"); };
