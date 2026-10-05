// 生成物。直接編集しないこと —— src/ を直して npm run build（CI の drift チェックで落ちます）
"use strict";
(() => {
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  class PageHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = { active: "index.html" };
    }
    componentDidMount() {
      let pathname = window.location.pathname.replace("/", "");
      if (pathname == "") {
        pathname = "index.html";
      }
      this.setState({ active: pathname });
      on("click", ".mobile-nav-toggle", function(e) {
        select("#navbar").classList.toggle("navbar-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
      });
    }
    render() {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { class: "container d-flex align-items-center" }, /* @__PURE__ */ React.createElement("a", { href: "index.html", class: "logo me-auto" }, /* @__PURE__ */ React.createElement("img", { src: "assets/img/logo.svg", alt: "", class: "img-fluid" })), /* @__PURE__ */ React.createElement("nav", { id: "navbar", class: "navbar" }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "index.html", className: this.state.active == "index.html" ? "active" : "" }, "\u30DB\u30FC\u30E0")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "services.html", className: this.state.active == "services.html" || this.state.active.startsWith("service-") ? "active" : "" }, "\u30B5\u30FC\u30D3\u30B9")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "vision.html", className: this.state.active == "vision.html" ? "active" : "" }, "\u30D3\u30B8\u30E7\u30F3")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "community.html", className: this.state.active == "community.html" ? "active" : "" }, "\u5730\u57DF\u3068\u3068\u3082\u306B")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "recruit.html", className: this.state.active == "recruit.html" ? "active" : "" }, "\u63A1\u7528")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "about.html", className: this.state.active == "about.html" ? "active" : "" }, "\u4F1A\u793E\u60C5\u5831")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "contact.html", className: this.state.active == "contact.html" ? "active" : "" }, "\u304A\u554F\u3044\u5408\u308F\u305B")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "https://mema.jp", target: "_blank" }, "\u30D7\u30ED\u30C0\u30AF\u30C8"))), /* @__PURE__ */ React.createElement("i", { class: "bi bi-list mobile-nav-toggle" }))));
    }
  }
  const domContainer = document.querySelector("#header");
  ReactDOM.render(/* @__PURE__ */ React.createElement(PageHeader, null), domContainer);
})();
