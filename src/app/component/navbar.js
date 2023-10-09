"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
function Navbar() {
    return (<div>
          <link_1.default href="/about">About</link_1.default>
          <link_1.default href="/about/us">About us</link_1.default>
          <link_1.default href="/about/someone">someone</link_1.default>
          <link_1.default href="/listofpost">Posts</link_1.default>
        </div>);
}
exports.default = Navbar;
