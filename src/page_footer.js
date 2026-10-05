'use strict';

// フッターは HTML ではなくここで組み立てている。
// リンクを足す・消すときは各 *.html ではなくこのファイルを直し、
// `npm run build` で assets/js/page_footer.js を作り直す。
// assets/js は生成物なので直接編集しない（CI の drift チェックで落ちる）。
//
// 社名・住所・メールは site.config.json の locked 値。勝手に変えない。

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
                  <li><i class="bx bx-chevron-right"></i> <a href="vision.html">ビジョン</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="community.html">地域とともに</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="recruit.html">採用</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="about.html">会社情報</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="contact.html">お問い合わせ</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>サービス</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="service-web-mobile.html">システム開発</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="service-ai.html">AIソリューション研究</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="service-training.html">AI活用支援・研修</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="https://mema.jp/kazoeru">カゾエル（サイネージ視聴率計測）</a></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4>プロダクト</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="https://mema.jp" target="_blank">Mema-Omni</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="https://learn.nts-ed.com" target="_blank">Mema-Edu</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="https://ses.mema.jp" target="_blank">Mema-SES</a></li>
                </ul>
              </div>
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
