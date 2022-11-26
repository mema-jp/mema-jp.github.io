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
      <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>株式会社MEMA</h3>
                <p>
                  A108 Adam Street <br/>
                  NY 535022, USA<br/><br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>株式会社MEMA</span></strong>. All Rights Reserved
        </div>
      </div>
      </footer>
    );
  }
}

const domContainer = document.querySelector('#footer');
ReactDOM.render(<PageFooter />, domContainer);