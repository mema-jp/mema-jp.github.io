'use strict';  
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
              <li><a href="about.html" className={this.state.active == "about.html" ? "active" : ""}>会社情報</a></li>
              <li><a href="contact.html" className={this.state.active == "contact.html" ? "active" : ""}>お問い合わせ</a></li>
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