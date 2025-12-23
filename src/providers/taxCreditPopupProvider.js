'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCreditPopupProvider = exports.TaxCreditPopupContext = void 0;
var react_1 = require("react");
var useToggle_1 = require("@/hooks/useToggle");
exports.TaxCreditPopupContext = (0, react_1.createContext)(undefined);
var TaxCreditPopupProvider = function (_a) {
    var children = _a.children;
    var _b = (0, useToggle_1.useToggle)(), show = _b[0], toggle = _b[1];
    return (<exports.TaxCreditPopupContext.Provider value={[show, toggle]}>
      {children}
    </exports.TaxCreditPopupContext.Provider>);
};
exports.TaxCreditPopupProvider = TaxCreditPopupProvider;
