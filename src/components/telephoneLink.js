"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelephoneLink = void 0;
var telephone_1 = require("@/lib/telephone");
var TelephoneLink = function (_a) {
    var countryCode = _a.countryCode, className = _a.className, style = _a.style, linkText = _a.linkText;
    var telephoneNumber = (0, telephone_1.getTelephoneNumber)(countryCode);
    return (<a href={"tel:".concat(telephoneNumber)} className={className} style={style}>{linkText !== null && linkText !== void 0 ? linkText : telephoneNumber}</a>);
};
exports.TelephoneLink = TelephoneLink;
