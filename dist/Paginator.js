"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Paginator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paginator, _React$Component);

  function Paginator() {
    _classCallCheck(this, Paginator);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paginator).apply(this, arguments));
  }

  _createClass(Paginator, [{
    key: "performCalculations",
    value: function performCalculations(currentPage, tableLength) {
      var totalNumberOfPages = Math.ceil(tableLength / this.props.rowsPerPage);
      var firstValue = 1;
      var previousValue = currentPage - 1 < 1 ? 1 : currentPage - 1;
      var pos1Value = 1;
      var pos2Value = 2;
      var pos3Value = 3;
      var pos4Value = 4;
      var pos5Value = 5;
      var nextValue = currentPage + 1;
      var lastValue = totalNumberOfPages;

      if (currentPage > 3) {
        previousValue = currentPage - 1;
        pos1Value = currentPage - 2;
        pos2Value = currentPage - 1;
        pos3Value = currentPage;
        pos4Value = currentPage + 1;
        pos5Value = currentPage + 2;
        nextValue = currentPage + 1;
      }

      if (totalNumberOfPages - currentPage === 0) {
        previousValue = currentPage - 1;
        pos1Value = currentPage - 4;
        pos2Value = currentPage - 3;
        pos3Value = currentPage - 2;
        pos4Value = currentPage - 1;
        pos5Value = currentPage;
        nextValue = currentPage + 1;
      } else if (totalNumberOfPages - currentPage === 1) {
        previousValue = currentPage - 1;
        pos1Value = currentPage - 3;
        pos2Value = currentPage - 2;
        pos3Value = currentPage - 1;
        pos4Value = currentPage;
        pos5Value = currentPage + 1;
        nextValue = currentPage + 1;
      }

      return {
        firstValue: firstValue,
        firstClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'first'),
        previousValue: previousValue,
        previousClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'previous'),
        pos1Value: pos1Value,
        pos1Classes: this.defineListItemClasses(pos1Value, currentPage, totalNumberOfPages),
        pos2Value: pos2Value,
        pos2Classes: this.defineListItemClasses(pos2Value, currentPage, totalNumberOfPages),
        pos3Value: pos3Value,
        pos3Classes: this.defineListItemClasses(pos3Value, currentPage, totalNumberOfPages),
        pos4Value: pos4Value,
        pos4Classes: this.defineListItemClasses(pos4Value, currentPage, totalNumberOfPages),
        pos5Value: pos5Value,
        pos5Classes: this.defineListItemClasses(pos5Value, currentPage, totalNumberOfPages),
        nextValue: nextValue,
        nextClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'next'),
        lastValue: lastValue,
        lastClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'last'),
        totalNumberOfPages: totalNumberOfPages
      };
    }
  }, {
    key: "defineExtraItemClasses",
    value: function defineExtraItemClasses(currentPage, totalNumberOfPages, type) {
      var classes = 'page-item'; //default class.

      if (type === 'first' || type === 'previous') {
        if (currentPage === 1) {
          classes += ' disabled';
        }
      } else if (type === 'next' || type === 'last') {
        if (currentPage === totalNumberOfPages) {
          classes += '  disabled';
        }
      }

      return classes;
    }
  }, {
    key: "defineListItemClasses",
    value: function defineListItemClasses(posValue, currentPage, totalNumberOfPages) {
      var classes = 'page-item'; //default class.

      if (posValue <= 0 || posValue > totalNumberOfPages) {
        classes += ' disabled hidden';
      }

      if (posValue === currentPage) {
        classes += ' active';
      }

      return classes;
    }
  }, {
    key: "render",
    value: function render() {
      var paginatorData = this.performCalculations(this.props.currentPage, this.props.tableLength);
      return _react.default.createElement("nav", null, _react.default.createElement("ul", {
        className: "pagination"
      }, _react.default.createElement("li", {
        className: paginatorData.firstClasses
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.firstValue)
      }, " First ")), _react.default.createElement("li", {
        className: paginatorData.previousClasses
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.previousValue)
      }, "Previous ")), _react.default.createElement("li", {
        className: paginatorData.pos1Classes
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.pos1Value)
      }, paginatorData.pos1Value)), _react.default.createElement("li", {
        className: paginatorData.pos2Classes
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.pos2Value)
      }, paginatorData.pos2Value)), _react.default.createElement("li", {
        className: paginatorData.pos3Classes
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.pos3Value)
      }, paginatorData.pos3Value)), _react.default.createElement("li", {
        className: paginatorData.pos4Classes
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.pos4Value)
      }, paginatorData.pos4Value)), _react.default.createElement("li", {
        className: paginatorData.pos5Classes
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.pos5Value)
      }, paginatorData.pos5Value)), _react.default.createElement("li", {
        className: paginatorData.nextClasses
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.nextValue)
      }, "Next ")), _react.default.createElement("li", {
        className: paginatorData.lastClasses
      }, _react.default.createElement("a", {
        href: "#!",
        className: "page-link",
        onClick: this.props.rowMover.bind(null, paginatorData.lastValue)
      }, "Last ")), _react.default.createElement("li", {
        className: 'page-item disabled'
      }, _react.default.createElement("span", {
        className: "page-link"
      }, "Showing ", this.props.displayStartRow, " to ", this.props.displayEndRow, " of ", this.props.displayTotal, " records ", _react.default.createElement("span", {
        className: this.props.displayFiltered ? 'shown' : 'hidden'
      }, "(filtered from ", this.props.displayOverallTotal, ")")))));
    }
  }]);

  return Paginator;
}(_react.default.Component);

Paginator.propTypes = {
  currentPage: _propTypes.default.number,
  tableLength: _propTypes.default.number,
  rowsPerPage: _propTypes.default.number,
  rowMover: _propTypes.default.func,
  displayStartRow: _propTypes.default.number,
  displayEndRow: _propTypes.default.number,
  displayTotal: _propTypes.default.number,
  displayFiltered: _propTypes.default.bool,
  displayOverallTotal: _propTypes.default.number
};
var _default = Paginator;
exports.default = _default;