import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function Offers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    new PureCounter();
  }, []);

  return (
    <>
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Offers</li>
            </ol>
          </nav>
          <h1>Offers</h1>
        </div>
      </div>
      {/* End Page Title */}

      {/* Offers Section */}
      <section id="offers" className="offers section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Main Offers Grid */}
          <div className="row gy-4 mb-5">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="premium-offer">
                <div className="offer-header">
                  <div className="offer-image-wrapper">
                    <img
                      src="images/hotel/showcase-8.webp"
                      alt="Executive Suite Package"
                      className="img-fluid"
                    />
                    <div className="discount-tag">
                      <span className="discount-percent">40%</span>
                      <span className="discount-text">OFF</span>
                    </div>
                  </div>
                </div>
                <div className="offer-details">
                  <div className="offer-meta">
                    <span className="offer-type">Executive Package</span>
                    <span className="offer-duration">3 Days / 2 Nights</span>
                  </div>
                  <h3>Presidential Suite Experience</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  <div className="price-comparison">
                    <div className="price-row">
                      <span className="price-label">Regular Price:</span>
                      <span className="original-cost">$899</span>
                    </div>
                    <div className="price-row highlighted">
                      <span className="price-label">Special Price:</span>
                      <span className="special-cost">$539</span>
                    </div>
                  </div>

                  <div className="offer-actions">
                    <a href="#" className="btn-reserve">
                      Reserve Now
                    </a>
                    <div className="offer-expiry">
                      <i className="bi bi-hourglass-split"></i>
                      <span>Expires April 20, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="premium-offer">
                <div className="offer-header">
                  <div className="offer-image-wrapper">
                    <img
                      src="images/hotel/amenities-7.webp"
                      alt="Spa Wellness Package"
                      className="img-fluid"
                    />
                    <div className="discount-tag spa-theme">
                      <span className="discount-percent">25%</span>
                      <span className="discount-text">OFF</span>
                    </div>
                  </div>
                </div>
                <div className="offer-details">
                  <div className="offer-meta">
                    <span className="offer-type">Wellness Retreat</span>
                    <span className="offer-duration">2 Days / 1 Night</span>
                  </div>
                  <h3>Ultimate Spa &amp; Relaxation</h3>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse.
                  </p>

                  <div className="price-comparison">
                    <div className="price-row">
                      <span className="price-label">Regular Price:</span>
                      <span className="original-cost">$459</span>
                    </div>
                    <div className="price-row highlighted">
                      <span className="price-label">Special Price:</span>
                      <span className="special-cost">$344</span>
                    </div>
                  </div>

                  <div className="offer-actions">
                    <a href="#" className="btn-reserve">
                      Reserve Now
                    </a>
                    <div className="offer-expiry">
                      <i className="bi bi-hourglass-split"></i>
                      <span>Expires March 28, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Offers Carousel */}
          <div
            className="quick-offers-section aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="section-header">
              <h4>Flash Deals &amp; Limited Time Offers</h4>
              <p>
                Don't miss these exclusive hotel packages available for a short
                time only
              </p>
            </div>

            <div className="offers-carousel swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="quick-offer-card">
                    <div className="card-image">
                      <img
                        src="images/hotel/dining-8.webp"
                        alt="Culinary Adventure"
                        className="img-fluid"
                      />
                      <div className="offer-badge">Limited</div>
                    </div>
                    <div className="card-content">
                      <h5>Gourmet Culinary Adventure</h5>
                      <p>
                        Cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.
                      </p>
                      <div className="price-info">
                        <span className="old-price">$229</span>
                        <span className="new-price">$179</span>
                      </div>
                      <a href="#" className="quick-btn">
                        Book Deal
                      </a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="quick-offer-card">
                    <div className="card-image">
                      <img
                        src="images/hotel/room-15.webp"
                        alt="Family Suite"
                        className="img-fluid"
                      />
                      <div className="offer-badge">Popular</div>
                    </div>
                    <div className="card-content">
                      <h5>Family Suite Special</h5>
                      <p>
                        Sunt in culpa qui officia deserunt mollit anim id est
                        laborum. Sed ut perspiciatis unde.
                      </p>
                      <div className="price-info">
                        <span className="old-price">$319</span>
                        <span className="new-price">$249</span>
                      </div>
                      <a href="#" className="quick-btn">
                        Book Deal
                      </a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="quick-offer-card">
                    <div className="card-image">
                      <img
                        src="images/hotel/event-7.webp"
                        alt="Business Package"
                        className="img-fluid"
                      />
                      <div className="offer-badge">Exclusive</div>
                    </div>
                    <div className="card-content">
                      <h5>Corporate Business Package</h5>
                      <p>
                        Omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem.
                      </p>
                      <div className="price-info">
                        <span className="old-price">$199</span>
                        <span className="new-price">$159</span>
                      </div>
                      <a href="#" className="quick-btn">
                        Book Deal
                      </a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="quick-offer-card">
                    <div className="card-image">
                      <img
                        src="images/hotel/location-4.webp"
                        alt="Adventure Package"
                        className="img-fluid"
                      />
                      <div className="offer-badge">New</div>
                    </div>
                    <div className="card-content">
                      <h5>City Adventure Package</h5>
                      <p>
                        Aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae.
                      </p>
                      <div className="price-info">
                        <span className="old-price">$279</span>
                        <span className="new-price">$219</span>
                      </div>
                      <a href="#" className="quick-btn">
                        Book Deal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
      {/* /Offers Section */}
    </>
  );
}

export default Offers;
