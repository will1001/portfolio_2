"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AboutSection;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _illustration = require("./Assets/illustration.svg");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Navbar = _interopRequireDefault(require("../Navbar"));

require("./AboutSection.css");

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _uuid = require("uuid");

var _CenterGrid = _interopRequireDefault(require("../CenterGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    BgBox: function BgBox(BgBoxprops) {
      return {
        backgroundColor: BgBoxprops.backgroundColor,
        color: BgBoxprops.color,
        minHeight: '100vh',
        fontFamily: 'Montserrat'
      };
    },
    asdf: {
      height: 150,
      width: 300,
      backgroundColor: '#aac45e',
      position: 'absolute',
      top: function top(BgBoxprops) {
        return BgBoxprops.top;
      },
      opacity: '50%',
      display: 'none'
    },
    BgIllustrationAnimation: _defineProperty({
      animation: 'BgIllustrationAnimation infinite 2000ms linear',
      height: 600
    }, theme.breakpoints.down('xs'), {
      height: 300
    }),
    bodyContent: {
      paddingLeft: 27,
      fontFamily: 'Rubik',
      '& h1': {
        fontSize: 65
      },
      '& h6': {
        fontSize: 21,
        letterSpacing: 3,
        fontWeight: 'lighter'
      },
      '& p': {
        lineHeight: '25px'
      }
    },
    showhologramProject: {
      display: 'block'
    }
  };
});
var topbed = [{
  top: 113,
  right: 300
}, {
  top: 350,
  right: 0
}, {
  top: 350,
  right: 500
}];
var HoloBox = topbed.map(function (a) {
  return (0, _styles.styled)('div')({
    height: 150,
    width: 300,
    backgroundColor: '#aac45e',
    position: 'absolute',
    top: a.top,
    right: a.right,
    opacity: '50%'
  });
});
var PortfolioButton = (0, _styles.styled)(_Button.default)({
  backgroundColor: '#ff2fcb',
  color: '#ffffff',
  borderRadius: 25,
  padding: '5px 23px',
  textTransform: 'none',
  background: 'linear-gradient(-135deg, rgba(0,235,255,1) 0%, rgba(255,47,204,1) 100%)'
});

function AboutSection() {
  var stylesSetup = (0, _reactRedux.useSelector)(function (state) {
    return state.StylesParameter.stylesSetup[0];
  });
  var BgBoxprops = {
    backgroundColor: stylesSetup.primaryColor,
    color: stylesSetup.fontColor,
    top: 89
  };
  var classes = useStyles(BgBoxprops);

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      holloProjectIsOpen = _React$useState2[0],
      setholloProjectIsOpen = _React$useState2[1];

  var _React$useState3 = _react.default.useState('zoomOut'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      zoomOut = _React$useState4[0],
      setzoomOut = _React$useState4[1]; // prevent zoomOut effect when first render


  _react.default.useEffect(function () {
    setzoomOut('zoomOut0');
  }, []);

  var openHollowProject = function openHollowProject() {
    setholloProjectIsOpen(!holloProjectIsOpen);
    setzoomOut('zoomOut');
  };

  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.BgBox
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    iconMenu: /*#__PURE__*/_react.default.createElement(_Menu.default, null),
    navbarStyles: {
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
    link: "/navbarMenu"
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    className: classes.bodyContent
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement("h6", null, "React JS Developer"), /*#__PURE__*/_react.default.createElement("h1", null, "Wili Rahmat Muhamad"), /*#__PURE__*/_react.default.createElement("p", null, "Hiii , i'm a freelance React JS developer based in Indonesian.Click the button below to check my portfolio."), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/portfolioGalery",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(PortfolioButton, null, "My Portfolio"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 8
  }, /*#__PURE__*/_react.default.createElement(_CenterGrid.default, {
    child: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_illustration.ReactComponent, {
      onClick: openHollowProject,
      className: classes.BgIllustrationAnimation
    })), HoloBox.map(function (Item) {
      return /*#__PURE__*/_react.default.createElement(Item, {
        className: holloProjectIsOpen ? 'zoomIn' : zoomOut,
        key: (0, _uuid.v4)()
      });
    }))
  }))));
}

//# sourceMappingURL=AboutSection.js.map