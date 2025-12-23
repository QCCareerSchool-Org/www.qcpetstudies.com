'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
var captchaProvider_1 = require("./captchaProvider");
var screenWidthProvider_1 = require("./screenWidthProvider");
var scrollPositionProvider_1 = require("./scrollPositionProvider");
var taxCreditPopupProvider_1 = require("./taxCreditPopupProvider");
var reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
var Provider = function (_a) {
    var children = _a.children;
    return (<screenWidthProvider_1.ScreenWidthProvider>
    <scrollPositionProvider_1.ScrollPositionProvider>
      <captchaProvider_1.CaptchaProvider reCaptchaKey={reCaptchaKey}>
        <taxCreditPopupProvider_1.TaxCreditPopupProvider>
          {children}
        </taxCreditPopupProvider_1.TaxCreditPopupProvider>
      </captchaProvider_1.CaptchaProvider>
    </scrollPositionProvider_1.ScrollPositionProvider>
  </screenWidthProvider_1.ScreenWidthProvider>);
};
exports.Provider = Provider;
