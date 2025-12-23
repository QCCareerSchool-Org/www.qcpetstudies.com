"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfectAudience = void 0;
var script_1 = require("next/script");
var PerfectAudience = function (_a) {
    var id = _a.id;
    return (<script_1.default id="perfectAudience" dangerouslySetInnerHTML={{ __html: getScript(id) }}/>);
};
exports.PerfectAudience = PerfectAudience;
var getScript = function (id) { return "\n(function () {\n  window._pa = window._pa || {};\n  // _pa.orderId = \"myOrderId\"; // OPTIONAL: attach unique conversion identifier to conversions\n  // _pa.revenue = \"19.99\"; // OPTIONAL: attach dynamic purchase values to conversions\n  // _pa.productId = \"myProductId\"; // OPTIONAL: Include product ID for use with dynamic ads\n\n  const pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;\n  pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + `//tag.perfectaudience.com/serve/".concat(id.replace(/`/ug, '\\`'), ".js`;\n  const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);\n})();"); };
