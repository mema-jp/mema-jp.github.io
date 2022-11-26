'use strict';

class PageFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <React.Fragment>
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>株式会社MEMA</h3>
                <p>
                  〒210-0844 <br/>
                  神奈川県川崎市川崎区<br/>
                  渡田新町１ー１ー６ー２<br/>
                  {/* <strong>Phone:</strong> 080-9373-5115<br/> */}
                  <strong>Email:</strong> info@mema.co.jp<br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>MEMA Co.,Ltd.</span></strong>. All Rights Reserved
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector('#footer');
ReactDOM.render(<PageFooter />, domContainer);