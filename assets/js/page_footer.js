'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageFooter = (function (_React$Component) {
  _inherits(PageFooter, _React$Component);

  function PageFooter(props) {
    _classCallCheck(this, PageFooter);

    _get(Object.getPrototypeOf(PageFooter.prototype), "constructor", this).call(this, props);
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
                    "株式会社MEMA"
                  ),
                  React.createElement(
                    "p",
                    null,
                    "〒104-0033 ",
                    React.createElement("br", null),
                    "東京都中央区新川１−２４−７−２０３",
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
                  "リンク"
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
                      "ホーム"
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
                      "サービス"
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
                      "会社情報"
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
                      "お問い合わせ"
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
                  "サービス"
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
                      "Webとモバイルアプリ開発"
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
                      "AI関連研究"
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
                      "プログラマー向け研修"
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
                      "農業技術研究"
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
            "© Copyright ",
            React.createElement(
              "strong",
              null,
              React.createElement(
                "span",
                null,
                "株式会社MEMA (MEMA Co.,Ltd.)"
              )
            ),
            ". All Rights Reserved"
          )
        )
      );
    }
  }]);

  return PageFooter;
})(React.Component);

var domContainer = document.querySelector('#footer');
ReactDOM.render(React.createElement(PageFooter, null), domContainer);
/* <strong>Phone:</strong> 080-9373-5115<br/> */ /* <div class="social-links mt-3">
                                                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                                  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                                  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                                  <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                                  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                                 </div> */ /* <div class="col-lg-4 col-md-6 footer-newsletter">
                                                            <h4>Our Newsletter</h4>
                                                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                                            <form action="" method="post">
                                                              <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                                            </form>
                                                           </div> */
