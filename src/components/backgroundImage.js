"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundImage = void 0;
var image_1 = require("next/image");
var react_1 = require("react");
/**
 * Displays a background image with an option to show a different background image on small screens
 */
exports.BackgroundImage = (0, react_1.memo)(function (_a) {
    var src = _a.src, objectPosition = _a.objectPosition, mobile = _a.mobile, priority = _a.priority;
    if (mobile) {
        return (<>
        <div className={"d-none d-".concat(mobile.breakpoint, "-block")}><Part src={src} objectPosition={objectPosition} priority={priority}/></div>
        <div className={"d-".concat(mobile.breakpoint, "-none")}><Part src={mobile.src} objectPosition={mobile.objectPosition} priority={priority}/></div>
      </>);
    }
    return <Part src={src} objectPosition={objectPosition} priority={priority}/>;
});
exports.BackgroundImage.displayName = 'BackgroundImage';
var Part = function (_a) {
    var src = _a.src, objectPosition = _a.objectPosition, priority = _a.priority;
    return <image_1.default src={src} placeholder="blur" alt="" priority={priority} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: objectPosition }}/>;
};
