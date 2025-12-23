"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxNavBar = void 0;
var AuxNavBar = function (_a) {
    var background = _a.background, color = _a.color, className = _a.className, style = _a.style, children = _a.children;
    return (<div className={className} style={__assign({ width: '100%', padding: '0.5rem 0', background: background, color: color }, style)}>
    <div className="container">
      {children}
    </div>
  </div>);
};
exports.AuxNavBar = AuxNavBar;
