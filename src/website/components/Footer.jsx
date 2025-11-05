import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <span className="sitename">NiceHotel</span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span><a href="mailto:info@nicehotel.com">info@nicehotel.com</a></span>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Branding</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links mt-3">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center mt-4">
        <div className="container">
          © Copyright <strong><span>© {new Date().getFullYear()} LuxuryStay.</span></strong>. All Rights Reserved
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
