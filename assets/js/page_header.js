'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var select = function select(el) {
  var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  el = el.trim();
  if (all) {
    return [].concat(_toConsumableArray(document.querySelectorAll(el)));
  } else {
    return document.querySelector(el);
  }
};
var on = function on(type, el, listener) {
  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach(function (e) {
        return e.addEventListener(type, listener);
      });
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

var PageHeader = function (_React$Component) {
  _inherits(PageHeader, _React$Component);

  function PageHeader(props) {
    _classCallCheck(this, PageHeader);

    var _this = _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).call(this, props));

    _this.state = { active: "index.html" };
    return _this;
  }

  _createClass(PageHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pathname = window.location.pathname.replace("/", "");
      if (pathname == "") {
        pathname = "index.html";
      }
      this.setState({ active: pathname });
      on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { "class": "container d-flex align-items-center" },
          React.createElement(
            "a",
            { href: "index.html", "class": "logo me-auto" },
            React.createElement("img", { src: "assets/img/logo.svg", alt: "", "class": "img-fluid" })
          ),
          React.createElement(
            "nav",
            { id: "navbar", "class": "navbar" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "index.html", className: this.state.active == "index.html" ? "active" : "" },
                  "\u30DB\u30FC\u30E0"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "about.html", className: this.state.active == "about.html" ? "active" : "" },
                  "\u4F1A\u793E\u60C5\u5831"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "contact.html", className: this.state.active == "contact.html" ? "active" : "" },
                  "\u304A\u554F\u3044\u5408\u308F\u305B"
                )
              )
            ),
            React.createElement("i", { "class": "bi bi-list mobile-nav-toggle" })
          )
        )
      );
    }
  }]);

  return PageHeader;
}(React.Component);

var domContainer = document.querySelector('#header');
ReactDOM.render(React.createElement(PageHeader, null), domContainer);