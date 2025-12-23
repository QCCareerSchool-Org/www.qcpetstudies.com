'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptchaProvider = void 0;
var react_google_recaptcha_v3_1 = require("react-google-recaptcha-v3");
var CaptchaProvider = function (_a) {
    var reCaptchaKey = _a.reCaptchaKey, children = _a.children;
    return (<react_google_recaptcha_v3_1.GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey !== null && reCaptchaKey !== void 0 ? reCaptchaKey : ''}>
    {children}
  </react_google_recaptcha_v3_1.GoogleReCaptchaProvider>);
};
exports.CaptchaProvider = CaptchaProvider;
