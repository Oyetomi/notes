"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = (props) => {
    return <button>{props.children}</button>;
};
exports.Button = Button;
const Parent = () => {
    return (<>
      {/* @ts-expect-error */}
      <exports.Button children=></exports.Button>
      <exports.Button>Hello world!</exports.Button>
    </>);
};
