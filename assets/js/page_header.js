'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var select = function select(el) {
  var all = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  el = el.trim();
  if (all) {
    return [].concat(_toConsumableArray(document.querySelectorAll(el)));
  } else {
    return document.querySelector(el);
  }
};
var on = function on(type, el, listener) {
  var all = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

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

var PageHeader = (function (_React$Component) {
  _inherits(PageHeader, _React$Component);

  function PageHeader(props) {
    _classCallCheck(this, PageHeader);

    _get(Object.getPrototypeOf(PageHeader.prototype), "constructor", this).call(this, props);
    this.state = { active: "index.html" };
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
                  "ホーム"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "services.html", className: this.state.active == "services.html" || this.state.active.startsWith("service-") ? "active" : "" },
                  "サービス"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "about.html", className: this.state.active == "about.html" ? "active" : "" },
                  "会社情報"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "contact.html", className: this.state.active == "contact.html" ? "active" : "" },
                  "お問い合わせ"
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
})(React.Component);

var domContainer = document.querySelector('#header');
ReactDOM.render(React.createElement(PageHeader, null), domContainer);
