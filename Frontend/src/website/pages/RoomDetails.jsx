import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RoomDetails() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    new PureCounter();
  }, []);

  const roomImages = [
    "/images/hotel/room-3.webp",
    "/images/hotel/room-7.webp",
    "/images/hotel/room-11.webp",
    "/images/hotel/dining-2.webp",
  ];

  return (
    <>
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Room Details</li>
            </ol>
          </nav>
          <h1>Room Details</h1>
        </div>
      </div>

      {/* Room Details Section */}
      <section id="room-details" className="room-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* Swiper Slider */}
          <div
            className="room-gallery-hero mb-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 4000 }}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="gallery-slider"
            >
              {roomImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} alt={`Room ${i + 1}`} className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Same Pagination + Navigation */}
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            {/* Overlay Info */}
            <div className="room-overlay-info">
              <div className="room-category">Executive Suite</div>
              <div className="room-rating">
                <span className="rating-score">4.9</span>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Room Information */}
          <div className="row mb-5">
            <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div className="room-main-info">
                <h1 className="room-name">Executive Harbor Suite</h1>
                <p className="room-subtitle">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae molestie convallis tempor.
                </p>

                <div className="room-specs">
                  {[
                    {
                      icon: "bi-people-fill",
                      title: "Guest Capacity",
                      value: "Up to 3 adults",
                    },
                    {
                      icon: "bi-arrows-fullscreen",
                      title: "Room Size",
                      value: "720 sq ft",
                    },
                    {
                      icon: "bi-house-door",
                      title: "Room Type",
                      value: "Queen bed + Daybed",
                    },
                    {
                      icon: "bi-water",
                      title: "View",
                      value: "Harbor & City",
                    },
                  ].map((spec, i) => (
                    <div className="spec-item" key={i}>
                      <div className="spec-icon">
                        <i className={`bi ${spec.icon}`}></i>
                      </div>
                      <div className="spec-content">
                        <h6>{spec.title}</h6>
                        <span>{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Widget */}
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select dates"
                      readOnly
                    />
                  </div>
                  <div className="guest-selector">
                    <label>Guests</label>
                    <select className="form-select">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                    </select>
                  </div>
                  <button className="btn btn-book-primary">
                    Check Availability
                  </button>
                  <div className="booking-note">
                    <i className="bi bi-shield-check"></i>
                    <span>Free cancellation until 24h before</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Room Features */}
          <div className="room-features-section mb-5" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-block">
                  <h3>Room Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus vestibulum mauris quis aliquam. Ut suscipit
                    rutrum urna id vehicula.
                  </p>
                  <p>
                    Donec auctor blandit quam, ac finibus ante pulvinar ac. Sed
                    congue lorem non lorem cursus.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="amenities-grid">
                  <h4>Suite Amenities</h4>
                  <div className="amenities-list">
                    {[
                      { icon: "bi-wifi", label: "Complimentary Wi-Fi" },
                      { icon: "bi-tv", label: '49" Smart TV' },
                      { icon: "bi-cup-hot", label: "Coffee & Tea Station" },
                      { icon: "bi-snow", label: "Individual Climate Control" },
                      { icon: "bi-shield-lock", label: "Electronic Safe" },
                      { icon: "bi-telephone", label: "Direct Dial Phone" },
                      { icon: "bi-droplet", label: "Rainfall Shower" },
                      { icon: "bi-basket", label: "Premium Bath Products" },
                    ].map((item, i) => (
                      <div className="amenity-item" key={i}>
                        <i className={`bi ${item.icon}`}></i>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Services */}
          <div className="addon-services mb-5" data-aos="fade-up">
            <h3 className="services-title">Optional Services</h3>
            <div className="row">
              {[
                {
                  icon: "bi-egg-fried",
                  title: "Continental Breakfast",
                  desc: "Fresh pastries, seasonal fruits, coffee and tea selection served daily.",
                  price: "$28 per person",
                },
                {
                  icon: "bi-car-front",
                  title: "Valet Parking",
                  desc: "Convenient valet parking available 24/7. Secure garage included.",
                  price: "$35 per night",
                },
                {
                  icon: "bi-heart-pulse",
                  title: "Wellness Package",
                  desc: "Access to fitness center, pool, and yoga classes.",
                  price: "$65 per stay",
                },
              ].map((service, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={i}>
                  <div className="service-card">
                    <div className="service-header">
                      <div className="service-icon">
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <h5>{service.title}</h5>
                    </div>
                    <p>{service.desc}</p>
                    <div className="service-price">{service.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="final-cta" data-aos="zoom-in">
            <div className="cta-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cta-content">
                    <h3>Book Your Executive Harbor Suite</h3>
                    <p>
                      Experience comfort and luxury with stunning harbor views.
                    </p>
                    <div className="cta-features">
                      <div className="feature-item">
                        <i className="bi bi-check-circle"></i>
                        <span>Best Rate Guarantee</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle"></i>
                        <span>24/7 Guest Services</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-booking">
                    <div className="price-summary">
                      <div className="total-price">
                        <span className="label">Starting from</span>
                        <span className="price">$285</span>
                        <span className="unit">per night</span>
                      </div>
                    </div>
                    <div className="cta-buttons">
                      <Link to="/booking" className="btn btn-cta-primary">
                        Reserve Now
                      </Link>
                      <a href="tel:+15551234567" className="btn btn-cta-secondary">
                        <i className="bi bi-telephone"></i> Call to Book
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomDetails;
