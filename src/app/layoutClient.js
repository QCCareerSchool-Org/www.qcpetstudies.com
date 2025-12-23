'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutClient = void 0;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var brevo_1 = require("@/lib/brevo");
var optInMonster_1 = require("@/lib/optInMonster");
var LayoutClient = function () {
    var countRef = (0, react_1.useRef)(0);
    var pathname = (0, navigation_1.usePathname)();
    var searchParams = (0, navigation_1.useSearchParams)();
    (0, react_1.useEffect)(function () {
        if (countRef.current > 0) { // don't run the first time
            if (pathname) {
                var url = "https://www.qcpetstudies.com".concat(pathname);
                var stringSearchParams = searchParams.toString();
                if (stringSearchParams) {
                    url += "?".concat(stringSearchParams);
                }
                var title = document.title;
                (0, brevo_1.brevoPageview)(title, url, pathname);
            }
            (0, optInMonster_1.resetOptInMonster)();
        }
        countRef.current++;
    }, [pathname, searchParams]);
    return null;
};
exports.LayoutClient = LayoutClient;
