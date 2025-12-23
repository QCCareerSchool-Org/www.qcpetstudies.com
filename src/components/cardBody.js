'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardBody = void 0;
var CardBody = function (_a) {
    var children = _a.children;
    return (<>
    <div id="formCardBody" className="card-body">{children}</div>
    <style jsx>{"\n    @media only screen and (max-width: 575px) {\n      #formCardBody {\n        padding: 1.25rem;\n      }\n    }\n    "}</style>
  </>);
};
exports.CardBody = CardBody;
