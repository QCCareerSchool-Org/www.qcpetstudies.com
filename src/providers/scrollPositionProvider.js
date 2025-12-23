'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollPositionProvider = exports.ScrollPositionContext = void 0;
var react_1 = require("react");
exports.ScrollPositionContext = (0, react_1.createContext)(undefined);
var ScrollPositionProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(0), state = _b[0], dispatch = _b[1];
    (0, react_1.useEffect)(function () {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        dispatch(window.scrollY);
        var handleScroll = function () { dispatch(window.scrollY); };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<exports.ScrollPositionContext.Provider value={state}>
      {children}
    </exports.ScrollPositionContext.Provider>);
};
exports.ScrollPositionProvider = ScrollPositionProvider;
