import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function Amenities() {
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
                <a href="/">Home</a>
              </li>
              <li className="current">Amenities</li>
            </ol>
          </nav>
          <h1>Amenities</h1>
        </div>
      </div>

      {/* Amenities Section */}
      <section id="amenities" className="amenities section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Spa Feature */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="amenity-feature">
                <div className="feature-image">
                  <img
                    src="/images/hotel/amenities-1.webp"
                    alt="Luxury Spa"
                    className="img-fluid"
                  />
                  <div className="feature-overlay">
                    <div className="feature-icon">
                      <i className="bi bi-heart-pulse"></i>
                    </div>
                  </div>
                </div>
                <div className="feature-content">
                  <h3>Tranquil Spa &amp; Wellness Center</h3>
                  <p>
                    Indulge in our full-service spa featuring therapeutic
                    massages, rejuvenating facials, and holistic wellness
                    treatments. Our experienced therapists use premium organic
                    products to help you unwind and restore your inner balance.
                  </p>
                  <div className="feature-details">
                    <div className="detail-item">
                      <i className="bi bi-clock"></i>
                      <span>Open 6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-telephone"></i>
                      <span>Advance booking recommended</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn-feature">
                    Book Treatment
                  </a>
                </div>
              </div>
            </div>

            {/* Fitness Feature */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="amenity-feature">
                <div className="feature-image">
                  <img
                    src="/images/hotel/amenities-4.webp"
                    alt="Fitness Center"
                    className="img-fluid"
                  />
                  <div className="feature-overlay">
                    <div className="feature-icon">
                      <i className="bi bi-lightning"></i>
                    </div>
                  </div>
                </div>
                <div className="feature-content">
                  <h3>State-of-the-Art Fitness Center</h3>
                  <p>
                    Maintain your workout routine in our fully equipped fitness
                    facility. Featuring modern cardio equipment, free weights,
                    and strength training machines, plus personal training
                    sessions available upon request.
                  </p>
                  <div className="feature-details">
                    <div className="detail-item">
                      <i className="bi bi-clock"></i>
                      <span>24/7 Access</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-person-check"></i>
                      <span>Personal trainers available</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn-feature">
                    View Equipment
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Cards */}
          <div className="row gy-4 mt-4">
            {[
              {
                icon: "bi-wifi",
                title: "Complimentary High-Speed Wi-Fi",
                desc: "Stay connected with unlimited high-speed internet access throughout the property, including guest rooms, lobby, and outdoor areas.",
              },
              {
                icon: "bi-car-front",
                title: "Valet Parking Service",
                desc: "Leave the parking to us with our convenient valet service. Your vehicle will be safely secured while you enjoy your stay with complete peace of mind.",
              },
              {
                icon: "bi-cup-hot",
                title: "24-Hour Room Service",
                desc: "Enjoy gourmet dining in the comfort of your room at any hour. Our extensive menu features international cuisine and local specialties prepared by our expert chefs.",
              },
              {
                icon: "bi-water",
                title: "Infinity Pool & Deck",
                desc: "Take a refreshing dip in our stunning infinity pool with panoramic city views. Relax on comfortable loungers and enjoy poolside beverage service.",
              },
              {
                icon: "bi-airplane",
                title: "Airport Transfer Service",
                desc: "Start your journey stress-free with our convenient airport shuttle service. Available upon request with advance booking for seamless transportation.",
              },
              {
                icon: "bi-shield-check",
                title: "Concierge & Guest Services",
                desc: "Our dedicated concierge team is available to assist with restaurant reservations, tour bookings, and local recommendations to enhance your stay.",
              },
            ].map((amenity, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400 + index * 50}
              >
                <div className="amenity-card">
                  <div className="card-icon">
                    <i className={`bi ${amenity.icon}`}></i>
                  </div>
                  <h4>{amenity.title}</h4>
                  <p>{amenity.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dining Section */}
          <div className="dining-section mt-5" data-aos="fade-up" data-aos-delay="700">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="dining-content">
                  <h3>Award-Winning Dining Experience</h3>
                  <p className="lead">
                    Savor exceptional cuisine at our signature restaurant, where
                    our renowned chef crafts innovative dishes using locally
                    sourced ingredients and international culinary techniques.
                  </p>
                  <ul className="dining-highlights">
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      Mediterranean-inspired fine dining
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Extensive wine
                      collection
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Private dining rooms
                      available
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Vegetarian and vegan
                      options
                    </li>
                  </ul>
                  <div className="dining-actions">
                    <a href="#" className="btn btn-primary">
                      View Menu
                    </a>
                    <a href="#" className="btn btn-outline">
                      Make Reservation
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="dining-images">
                  <img
                    src="/images/hotel/dining-3.webp"
                    alt="Restaurant Interior"
                    className="img-fluid main-image"
                  />
                  <div className="image-overlay">
                    <img
                      src="/images/hotel/dining-5.webp"
                      alt="Signature Dish"
                      className="img-fluid overlay-image"
                    />
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

export default Amenities;
