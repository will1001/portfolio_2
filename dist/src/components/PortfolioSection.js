"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PortfolioSection;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _colors = require("@material-ui/core/colors");

var _PortfolioCardV = _interopRequireDefault(require("./PortfolioCardV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable space-before-function-paren */
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: _colors.red[500]
    }
  };
});

function PortfolioSection() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.PortfolioCardV2
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_PortfolioCardV.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_PortfolioCardV.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_PortfolioCardV.default, null))));
}

//# sourceMappingURL=PortfolioSection.js.map