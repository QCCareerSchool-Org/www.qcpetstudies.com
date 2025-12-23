'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabGroup = void 0;
var react_bootstrap_1 = require("react-bootstrap");
var TabGroup = function (_a) {
    var videoContent = _a.videoContent, assignmentContent = _a.assignmentContent;
    return (<>
    <react_bootstrap_1.Tabs defaultActiveKey="video">
      <react_bootstrap_1.Tab key="video" eventKey="video" title="Preview">
        <div className="my-4">
          {videoContent}
        </div>
      </react_bootstrap_1.Tab>
      <react_bootstrap_1.Tab key="assignment" eventKey="assignment" title="Example Assignment">
        <div className="my-4">
          {assignmentContent}
        </div>
      </react_bootstrap_1.Tab>
    </react_bootstrap_1.Tabs>
  </>);
};
exports.TabGroup = TabGroup;
