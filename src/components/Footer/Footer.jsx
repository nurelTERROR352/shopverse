import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-left">
            <h2>Shopverse</h2>
            <p>© 2024 Shopverse. All Rights Reserved</p>

            <div className="footer-images">
              <img src="/f.png" alt="" />
              <img src="/ins.png" alt="" />
              <img src="/t.png" alt="" />
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-a">
              <h4>Download</h4>
              <a href="#">Windows</a>
              <a href="#">Mac OS</a>
              <a href="#">Android</a>
              <a href="#">iOS</a>
            </div>

            <div className="footer-a">
              <h4>Resources</h4>
              <a href="#">About</a>
              <a href="#">Shop</a>
              <a href="#">Categories</a>
              <a href="#">Help</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
