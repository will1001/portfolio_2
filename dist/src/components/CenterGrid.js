"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CenterGrid;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable space-before-function-paren */
function CenterGrid(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 0,
    direction: "column",
    alignItems: "center",
    justify: "center"
  }, props.child);
}

CenterGrid.propTypes = {
  child: _propTypes.default.element
};

//# sourceMappingURL=CenterGrid.js.map