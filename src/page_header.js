'use strict';

// ヘッダーは HTML ではなくここで組み立てている。
// ナビにページを足すときは各 *.html ではなくこのファイルを直し、
// `npm run build` で assets/js/page_header.js を作り直す。
// assets/js は生成物なので直接編集しない（CI の drift チェックで落ちる）。

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}
class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "index.html" };
  }
  componentDidMount() {
    let pathname = window.location.pathname.replace("/", "");
    if (pathname == "") {
      pathname = "index.html"
    }
    this.setState({ active: pathname });
    on('click', '.mobile-nav-toggle', function (e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  }

  render() {
    return (
      <React.Fragment>
        <div class="container d-flex align-items-center">
          <a href="index.html" class="logo me-auto"><img src="assets/img/logo.svg" alt="" class="img-fluid" /></a>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="index.html" className={this.state.active == "index.html" ? "active" : ""}>ホーム</a></li>
              <li><a href="services.html" className={this.state.active == "services.html" || this.state.active.startsWith("service-") ? "active" : ""}>サービス</a></li>
              <li><a href="vision.html" className={this.state.active == "vision.html" ? "active" : ""}>ビジョン</a></li>
              <li><a href="community.html" className={this.state.active == "community.html" ? "active" : ""}>地域とともに</a></li>
              <li><a href="recruit.html" className={this.state.active == "recruit.html" ? "active" : ""}>採用</a></li>
              <li><a href="about.html" className={this.state.active == "about.html" ? "active" : ""}>会社情報</a></li>
              <li><a href="contact.html" className={this.state.active == "contact.html" ? "active" : ""}>お問い合わせ</a></li>
              <li><a href="https://mema.jp" target="_blank">プロダクト</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector('#header');
ReactDOM.render(<PageHeader />, domContainer);
