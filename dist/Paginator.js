"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculations = void 0;
exports.default = Paginator;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calculations = function Calculations() {
  var performCalculations = function performCalculations(currentPage, tableLength, rowsPerPage) {
    var totalNumberOfPages = Math.ceil(tableLength / rowsPerPage);
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
      firstClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'first'),
      previousValue: previousValue,
      previousClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'previous'),
      pos1Value: pos1Value,
      pos1Classes: defineListItemClasses(pos1Value, currentPage, totalNumberOfPages),
      pos2Value: pos2Value,
      pos2Classes: defineListItemClasses(pos2Value, currentPage, totalNumberOfPages),
      pos3Value: pos3Value,
      pos3Classes: defineListItemClasses(pos3Value, currentPage, totalNumberOfPages),
      pos4Value: pos4Value,
      pos4Classes: defineListItemClasses(pos4Value, currentPage, totalNumberOfPages),
      pos5Value: pos5Value,
      pos5Classes: defineListItemClasses(pos5Value, currentPage, totalNumberOfPages),
      nextValue: nextValue,
      nextClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'next'),
      lastValue: lastValue,
      lastClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'last'),
      totalNumberOfPages: totalNumberOfPages
    };
  };

  var defineExtraItemClasses = function defineExtraItemClasses(currentPage, totalNumberOfPages, type) {
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
  };

  var defineListItemClasses = function defineListItemClasses(posValue, currentPage, totalNumberOfPages) {
    var classes = 'page-item'; //default class.

    if (posValue <= 0 || posValue > totalNumberOfPages) {
      classes += ' disabled hidden';
    }

    if (posValue === currentPage) {
      classes += ' active';
    }

    return classes;
  };

  return {
    performCalculations: performCalculations
  };
};

exports.Calculations = Calculations;

function Paginator(props) {
  var paginatorData = Calculations().performCalculations(props.currentPage, props.tableLength, props.rowsPerPage);
  return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.firstClasses
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.firstValue)
  }, " First ")), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.previousClasses
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.previousValue)
  }, "Previous ")), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.pos1Classes
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.pos1Value)
  }, paginatorData.pos1Value)), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.pos2Classes
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.pos2Value)
  }, paginatorData.pos2Value)), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.pos3Classes
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.pos3Value)
  }, paginatorData.pos3Value)), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.pos4Classes
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.pos4Value)
  }, paginatorData.pos4Value)), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.pos5Classes
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.pos5Value)
  }, paginatorData.pos5Value)), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.nextClasses
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    id: "nextLink",
    onClick: props.rowMover.bind(null, paginatorData.nextValue)
  }, "Next ")), /*#__PURE__*/_react.default.createElement("li", {
    className: paginatorData.lastClasses
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    className: "page-link",
    onClick: props.rowMover.bind(null, paginatorData.lastValue)
  }, "Last ")), /*#__PURE__*/_react.default.createElement("li", {
    className: 'page-item disabled'
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "page-link"
  }, "Showing ", props.displayStartRow, " to ", props.displayEndRow, " of ", props.displayTotal, " records ", /*#__PURE__*/_react.default.createElement("span", {
    className: props.displayFiltered ? 'shown' : 'hidden'
  }, "(filtered from ", props.displayOverallTotal, ")")))));
}

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