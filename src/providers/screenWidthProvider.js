'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWidthProvider = exports.ScreenWidthContext = void 0;
var react_1 = require("react");
exports.ScreenWidthContext = (0, react_1.createContext)(undefined);
var ScreenWidthProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(0), state = _b[0], dispatch = _b[1];
    (0, react_1.useEffect)(function () {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        dispatch(window.innerWidth);
        var handleResize = function () { dispatch(window.innerWidth); };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (<exports.ScreenWidthContext.Provider value={state}>
      {children}
    </exports.ScreenWidthContext.Provider>);
};
exports.ScreenWidthProvider = ScreenWidthProvider;
