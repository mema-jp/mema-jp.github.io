'use strict';

class PageFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>株式会社MEMA</h3>
                  <p>
                    〒104-0033 <br />
                    東京都中央区新川１−２４−７−２０３<br />
                    {/* <strong>Phone:</strong> 080-9373-5115<br/> */}
                    <strong>Email:</strong> info@mema.co.jp<br />
                  </p>
                  {/* <div class="social-links mt-3">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                  </div> */}
                </div>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>リンク</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="/">ホーム</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="services.html">サービス</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="about.html">会社情報</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="contact.html">お問い合わせ</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>サービス</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="service-web-mobile.html">Webと携帯アプリ開発</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="service-ai.html">AI関連研究</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="service-training.html">プログラマー向け研修</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="service-agriculture.html">農業技術研究</a></li>
                </ul>
              </div>

              {/* <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>

              </div> */}
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>株式会社MEMA (MEMA Co.,Ltd.)</span></strong>. All Rights Reserved
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector('#footer');
ReactDOM.render(<PageFooter />, domContainer);