'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailLink = void 0;
var react_1 = require("react");
var EmailLink = function () {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            // eslint-disable-next-line no-useless-concat
            var emailAddress = 'info' + '@' + 'qcpetstudies.com';
            ref.current.href = "mailto:".concat(emailAddress);
            ref.current.innerHTML = emailAddress;
        }
    }, []);
    return <a ref={ref}/>;
};
exports.EmailLink = EmailLink;
