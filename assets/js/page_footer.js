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
                    "\u3012104-0033 ",
                    React.createElement("br", null),
                    "\u6771\u4EAC\u90FD\u4E2D\u592E\u533A\u65B0\u5DDD\uFF11\u2212\uFF12\uFF14\u2212\uFF17\u2212\uFF12\uFF10\uFF13",
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
                  "\u30EA\u30F3\u30AF"
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
                      { href: "services.html" },
                      "\u30B5\u30FC\u30D3\u30B9"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "vision.html" },
                      "\u30D3\u30B8\u30E7\u30F3"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "community.html" },
                      "\u5730\u57DF\u3068\u3068\u3082\u306B"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "recruit.html" },
                      "\u63A1\u7528"
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
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "contact.html" },
                      "\u304A\u554F\u3044\u5408\u308F\u305B"
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
                  "\u30B5\u30FC\u30D3\u30B9"
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
                      { href: "service-web-mobile.html" },
                      "\u30B7\u30B9\u30C6\u30E0\u958B\u767A"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "service-ai.html" },
                      "AI\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u7814\u7A76"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "service-training.html" },
                      "AI\u6D3B\u7528\u652F\u63F4\u30FB\u7814\u4FEE"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "service-agriculture.html" },
                      "Mema Village"
                    )
                  )
                )
              ),
              React.createElement(
                "div",
                { "class": "col-lg-4 col-md-6 footer-links" },
                React.createElement(
                  "h4",
                  null,
                  "\u30D7\u30ED\u30C0\u30AF\u30C8"
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
                      { href: "https://mema.jp", target: "_blank" },
                      "Mema-Omni"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "https://learn.nts-ed.com", target: "_blank" },
                      "Mema-Edu"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement("i", { "class": "bx bx-chevron-right" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: "https://ses.mema.jp", target: "_blank" },
                      "Mema-SES"
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
                "\u682A\u5F0F\u4F1A\u793EMEMA (MEMA Co.,Ltd.)"
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
