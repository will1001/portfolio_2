"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable space-before-function-paren */
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    listMenuContainer: {
      width: 'fit-content',
      height: '20px',
      marginRight: theme.spacing(6)
    },
    toolbar: {
      justifyContent: 'space-between'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Montserrat'
    },
    listMenu: {
      marginRight: theme.spacing(5),
      fontFamily: 'Montserrat',
      '&:hover': {
        cursor: 'pointer',
        color: '#8B68FF'
      },
      fontSize: 17
    }
  };
});

function Navbar(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    position: "static",
    style: props.navbarStyles
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.toolbar
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    style: {
      color: '#ffffff'
    },
    to: props.link
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu"
  }, props.iconMenu))));
}

Navbar.propTypes = {
  iconMenu: _propTypes.default.element.isRequired,
  navbarStyles: _propTypes.default.object,
  link: _propTypes.default.string
};

//# sourceMappingURL=Navbar.js.map