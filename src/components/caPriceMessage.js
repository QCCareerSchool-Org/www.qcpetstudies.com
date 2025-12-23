'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAPriceMessage = void 0;
var image_1 = require("next/image");
var maple_leaf_svg_1 = require("@/components/icons/maple-leaf.svg");
var useTaxCreditPopup_1 = require("@/hooks/useTaxCreditPopup");
var gtag_1 = require("@/lib/gtag");
var CAPriceMessage = function () {
    var _a = (0, useTaxCreditPopup_1.useTaxCreditPopup)(), toggle = _a[1];
    var handleClick = function (e) {
        e.preventDefault();
        toggle();
        (0, gtag_1.gaEvent)('canadian tax popup');
    };
    return (<div>
      <p className="lead mb-0"><strong><image_1.default src={maple_leaf_svg_1.default} width={600} height={650} alt="Maple Leaf" style={{ width: 'auto', height: 20 }}/> Canadian Students Save!</strong></p>
      <p className="mb-0">You could save more than 50% on your course fees. <a onClick={handleClick} href="#" className="link-light" style={{ textDecoration: 'underline' }}>Learn more</a></p>
    </div>);
};
exports.CAPriceMessage = CAPriceMessage;
