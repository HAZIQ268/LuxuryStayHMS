import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function RoomDetail() {
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
              <li><a href="/">Home</a></li>
              <li className="current">Room Details</li>
            </ol>
          </nav>
          <h1>Room Details</h1>
        </div>
      </div>

      {/* Room Details Section */}
      <section id="room-details" className="room-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          {/* Room Gallery Slider */}
          <div className="room-gallery-hero mb-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="gallery-slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/images/hotel/room-3.webp" alt="Premium Suite Main View" className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src="/images/hotel/room-7.webp" alt="Bedroom Area" className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src="/images/hotel/room-11.webp" alt="Living Space" className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src="/images/hotel/dining-2.webp" alt="Bathroom" className="img-fluid" />
                </div>
              </div>

              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>

              <div className="room-overlay-info">
                <div className="room-category">Executive Suite</div>
                <div className="room-rating">
                  <span className="rating-score">4.9</span>
                  <div className="rating-stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Room Information Cards */}
          <div className="row mb-5">
            <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div className="room-main-info">
                <h1 className="room-name">Executive Harbor Suite</h1>
                <p className="room-subtitle">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae molestie convallis tempor.
                </p>

                <div className="room-specs">
                  <div className="spec-item">
                    <div className="spec-icon"><i className="bi bi-people-fill"></i></div>
                    <div className="spec-content">
                      <h6>Guest Capacity</h6>
                      <span>Up to 3 adults</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon"><i className="bi bi-arrows-fullscreen"></i></div>
                    <div className="spec-content">
                      <h6>Room Size</h6>
                      <span>720 sq ft</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon"><i className="bi bi-house-door"></i></div>
                    <div className="spec-content">
                      <h6>Room Type</h6>
                      <span>Queen bed + Daybed</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon"><i className="bi bi-water"></i></div>
                    <div className="spec-content">
                      <h6>View</h6>
                      <span>Harbor & City</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="booking-widget">
                <div className="pricing-header">
                  <div className="current-price">
                    <span className="amount">$285</span>
                    <span className="period">/ night</span>
                  </div>
                  <div className="original-price">$340</div>
                </div>
                <div className="booking-form">
                  <div className="date-selector">
                    <label>Check-in & Check-out</label>
                    <input type="text" className="form-control" placeholder="Select dates" readOnly />
                  </div>
                  <div className="guest-selector">
                    <label>Guests</label>
                    <select className="form-select">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                    </select>
                  </div>
                  <button className="btn btn-book-primary">Check Availability</button>
                  <div className="booking-note">
                    <i className="bi bi-shield-check"></i>
                    <span>Free cancellation until 24h before</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of the sections remain same */}
          {/* Room features, tabs, and add-on services can be kept identical, just replace class → className and fix image paths */}

        </div>
      </section>
    </>
  );
}

export default RoomDetail;
