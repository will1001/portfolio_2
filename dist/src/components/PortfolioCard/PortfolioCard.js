"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PortfolioCard;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _portfolioProjectImg = _interopRequireDefault(require("./Assets/portfolioProjectImg.jpg"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _GitHub = _interopRequireDefault(require("@material-ui/icons/GitHub"));

var _Language = _interopRequireDefault(require("@material-ui/icons/Language"));

var _Speed = _interopRequireDefault(require("@material-ui/icons/Speed"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _PhoneIphone = _interopRequireDefault(require("@material-ui/icons/PhoneIphone"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      margin: 25
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: '95%',
      height: '250px',
      margin: '25px'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    },
    dividerHorizontal: _defineProperty({}, theme.breakpoints.up('sm'), {
      display: 'none'
    })
  };
});

function PortfolioCard() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    className: classes.cover,
    image: _portfolioProjectImg.default,
    title: "Preview Project"
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      margin: '0px 45px'
    }
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    title: "TShirt Shop",
    subheader: "Category : e-commerce,shop,tshirt"
  }), /*#__PURE__*/_react.default.createElement("h5", null, "Stack / Technology used :"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "React"), /*#__PURE__*/_react.default.createElement("li", null, "React-router"), /*#__PURE__*/_react.default.createElement("li", null, "Redux"), /*#__PURE__*/_react.default.createElement("li", null, "Sass"), /*#__PURE__*/_react.default.createElement("li", null, "Node Js"), /*#__PURE__*/_react.default.createElement("li", null, "Express Js"), /*#__PURE__*/_react.default.createElement("li", null, "Mongo db")))), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    orientation: "vertical",
    flexItem: true
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/_react.default.createElement(_Divider.default, {
    className: classes.dividerHorizontal
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.details
  }, /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    className: classes.content
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    onClick: function onClick() {
      return window.open('https://will1001.github.io/portfolio_2/#/');
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Language.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: "Live Websites"
  })), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    onClick: function onClick() {
      return window.open('https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwill1001.github.io%2Fportfolio_2%2F%23%2F&tab=desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Speed.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: "Website Performance"
  })), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    onClick: function onClick() {
      return window.open('https://github.com/will1001/portfolio_2');
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_GitHub.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: "Source Code"
  })), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    onClick: function onClick() {
      return window.open('http://iloveadaptive.com/url/https%3A%2F%2Fwill1001.github.io%2Fportfolio_2%2F');
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_PhoneIphone.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: "Responsive View"
  })))))));
}

//# sourceMappingURL=PortfolioCard.js.map