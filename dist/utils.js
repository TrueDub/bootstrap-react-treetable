"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = function Utils() {
  var parseStringToJsx = function parseStringToJsx(inputString) {
    return (0, _htmlReactParser.default)(inputString);
  };

  return {
    parseStringToJsx: parseStringToJsx
  };
};

exports.Utils = Utils;