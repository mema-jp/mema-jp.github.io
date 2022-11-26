'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageFooter = function (_React$Component) {
  _inherits(PageFooter, _React$Component);

  function PageFooter(props) {
    _classCallCheck(this, PageFooter);

    return _possibleConstructorReturn(this, (PageFooter.__proto__ || Object.getPrototypeOf(PageFooter)).call(this, props));
  }

  _createClass(PageFooter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { "class": "footer-top" },
          React.createElement(
            "div",
            { "class": "container" },
            React.createElement(
              "div",
              { "class": "row" },
              React.createElement(
                "div",
                { "class": "col-lg-3 col-md-6" },
                React.createElement(
                  "div",
                  { "class": "footer-info" },
                  React.createElement(
                    "h3",
                    null,
                    "\u682A\u5F0F\u4F1A\u793EMEMA"
                  ),
                  React.createElement(
                    "p",
                    null,
                    "\u3012210-0844 ",
                    React.createElement("br", null),
                    "\u795E\u5948\u5DDD\u770C\u5DDD\u5D0E\u5E02\u5DDD\u5D0E\u533A",
                    React.createElement("br", null),
                    "\u6E21\u7530\u65B0\u753A\uFF11\u30FC\uFF11\u30FC\uFF16\u30FC\uFF12",
                    React.createElement("br", null),
                    React.createElement(
                      "strong",
                      null,
                      "Email:"
                    ),
                    " info@mema.co.jp",
                    React.createElement("br", null)
                  )
                )
              ),
              React.createElement(
                "div",
                { "class": "col-lg-2 col-md-6 footer-links" },
                React.createElement(
                  "h4",
                  null,
                  "Useful Links"
                ),
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "/" },
                      "\u30DB\u30FC\u30E0"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "about.html" },
                      "\u4F1A\u793E\u60C5\u5831"
                    )
                  )
                )
              ),
              React.createElement(
                "div",
                { "class": "col-lg-3 col-md-6 footer-links" },
                React.createElement(
                  "h4",
                  null,
                  "Our Services"
                ),
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "#" },
                      "Web Design"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "#" },
                      "Web Development"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "#" },
                      "Product Management"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "#" },
                      "Marketing"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "#" },
                      "Graphic Design"
                    )
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "container" },
          React.createElement(
            "div",
            { "class": "copyright" },
            "\xA9 Copyright ",
            React.createElement(
              "strong",
              null,
              React.createElement(
                "span",
                null,
                "MEMA Co.,Ltd."
              )
            ),
            ". All Rights Reserved"
          )
        )
      );
    }
  }]);

  return PageFooter;
}(React.Component);

var domContainer = document.querySelector('#footer');
ReactDOM.render(React.createElement(PageFooter, null), domContainer);