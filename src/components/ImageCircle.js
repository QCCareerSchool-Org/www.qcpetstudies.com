"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCircle = void 0;
var image_1 = require("next/image");
var ImageCircle = function (_a) {
    var src = _a.src, alt = _a.alt, imagePositionX = _a.imagePositionX, imagePositionY = _a.imagePositionY, _b = _a.size, size = _b === void 0 ? 64 : _b, itemProp = _a.itemProp;
    var width = Math.floor(size);
    var radius = Math.ceil(width / 2);
    return (<div style={{ position: 'relative', width: width, height: width, borderRadius: radius }}>
      <image_1.default src={src} alt={alt} fill sizes={"".concat(width * 2, "px")} style={{ borderRadius: radius, objectFit: 'cover', objectPosition: "".concat(typeof imagePositionX === 'undefined' ? '50%' : "".concat(imagePositionX, "%"), " ").concat(typeof imagePositionY === 'undefined' ? '50%' : "".concat(imagePositionY, "%")) }} itemProp={itemProp ? 'image' : undefined}/>
    </div>);
};
exports.ImageCircle = ImageCircle;
