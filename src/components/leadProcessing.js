'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadProcessing = void 0;
var react_1 = require("react");
var brevo_1 = require("@/lib/brevo");
var fbq_1 = require("@/lib/fbq");
var gtag_1 = require("@/lib/gtag");
var uet_1 = require("@/lib/uet");
var LeadProcessing = function (props) {
    var effectCalled = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (!props.emailAddress) {
            return;
        }
        if (effectCalled.current) {
            return;
        }
        effectCalled.current = true;
        (0, gtag_1.gaUserData)({ email: props.emailAddress });
        (0, uet_1.uetUserData)(props.emailAddress);
        (0, fbq_1.fbqLead)(props.leadId);
        // eslint-disable-next-line camelcase
        (0, gtag_1.gaEvent)('conversion', { send_to: props.conversionId });
        (0, brevo_1.brevoIdentifyLead)(props.emailAddress, props.countryCode, props.provinceCode, props.firstName, props.lastName);
    }, [props.emailAddress, props.countryCode, props.provinceCode, props.firstName, props.lastName, props.ipAddress, props.leadId, props.conversionId]);
    return null;
};
exports.LeadProcessing = LeadProcessing;
