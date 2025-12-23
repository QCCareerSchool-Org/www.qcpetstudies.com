'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = void 0;
var react_1 = require("react");
var useOnScreen_1 = require("@/hooks/useOnScreen");
var Bar = function (_a) {
    var variant = _a.variant, _b = _a.align, align = _b === void 0 ? 'center' : _b;
    var ref = (0, react_1.useRef)(null);
    var onScreen = (0, useOnScreen_1.useOnScreen)(ref);
    var _c = (0, react_1.useState)(false), onScreenOnce = _c[0], setOnScreenOnce = _c[1];
    (0, react_1.useEffect)(function () {
        if (onScreen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setOnScreenOnce(true);
        }
    }, [onScreen]);
    var className = "bar ".concat(onScreenOnce ? 'expanded' : 'collapsed', " bg-").concat(variant);
    return (<>
      <hr ref={ref} className={className}/>
      <style jsx>{"\n        .bar {\n          border: none;\n          height: 0.5rem;\n          width: 4rem;\n          margin: 0 ".concat(align === 'end' ? 0 : 'auto', " 1.5rem ").concat(align === 'start' ? 0 : 'auto', ";\n          opacity: 1;\n          transition: width 1s;\n        }\n        .bar.collapsed {\n          width: 1rem;\n        }\n      ")}</style>
    </>);
};
exports.Bar = Bar;
