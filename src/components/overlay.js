"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var Overlay = function (_a) {
    var backgroundColor = _a.backgroundColor, className = _a.className;
    return (<div className={className} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: backgroundColor }}/>);
};
exports.Overlay = Overlay;
