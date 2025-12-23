'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatLink = void 0;
var ChatLink = function (_a) {
    var className = _a.className, focus = _a.focus, children = _a.children;
    var handleChatLinkClick = function (e) {
        var _a;
        e.preventDefault();
        (_a = window.BrevoConversations) === null || _a === void 0 ? void 0 : _a.call(window, 'openChat', focus);
    };
    return <a onClick={handleChatLinkClick} href="#" className={className}>{children}</a>;
};
exports.ChatLink = ChatLink;
