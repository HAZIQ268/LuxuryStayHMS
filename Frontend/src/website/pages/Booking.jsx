import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const preRoom = location.state?.roomId || "";

  const [form, setForm] = useState({
    roomId: preRoom,
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    rooms: "",
    preference: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Booking submitted (mock): " + JSON.stringify(form, null, 2));
  }

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
              <li className="current">Booking</li>
            </ol>
          </nav>
          <h1>Booking</h1>
        </div>
      </div>

      {/* Booking Section */}
      <section id="booking" className="booking section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="booking-wrapper">
            {/* Visual Section */}
            <div
              className="booking-visual aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="image-stack">
                <img
                  src="/images/hotel/room-1.webp"
                  alt="Luxury Hotel Room"
                  className="img-fluid main-image"
                />
                <img
                  src="/images/hotel/amenities-3.webp"
                  alt="Hotel Amenities"
                  className="img-fluid secondary-image"
                />
              </div>

              <div className="room-preview-card">
                <div className="price-badge">
                  <span className="from">From</span>
                  <span className="amount">$299</span>
                  <span className="period">per night</span>
                </div>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span className="rating-text">4.9 (247 reviews)</span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div
              className="booking-content aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content-header">
                <span className="section-tag">Premium Reservations</span>
                <h2>Reserve Your Escape</h2>
                <p>
                  Experience unmatched elegance in our meticulously designed
                  suites. Every moment of your stay is crafted to create lasting
                  memories in the heart of the city.
                </p>
              </div>

              <div className="quick-features">
                <div className="feature-item">
                  <i className="bi bi-wifi"></i>
                  <span>Complimentary High-Speed WiFi</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-car-front"></i>
                  <span>Valet Parking Available</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-cup-hot"></i>
                  <span>24/7 In-Room Dining</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>Prime Downtown Location</span>
                </div>
              </div>

              <form className="modern-booking-form" onSubmit={handleSubmit}>
                {/* Dates */}
                <div className="form-section">
                  <div className="date-row">
                    <div className="date-field">
                      <label>Check In</label>
                      <input
                        type="date"
                        className="form-control"
                        name="checkIn"
                        value={form.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="date-separator">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                    <div className="date-field">
                      <label>Check Out</label>
                      <input
                        type="date"
                        className="form-control"
                        name="checkOut"
                        value={form.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="form-section">
                  <div className="guest-row">
                    <div className="guest-field">
                      <label>Adults</label>
                      <select
                        className="form-select"
                        name="adults"
                        value={form.adults}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                      </select>
                    </div>
                    <div className="guest-field">
                      <label>Children</label>
                      <select
                        className="form-select"
                        name="children"
                        value={form.children}
                        onChange={handleChange}
                      >
                        <option value="0">0</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3">3 Children</option>
                      </select>
                    </div>
                    <div className="guest-field">
                      <label>Rooms</label>
                      <select
                        className="form-select"
                        name="rooms"
                        value={form.rooms}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="form-section">
                  <div className="contact-fields">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Room Preference */}
                <div className="form-section">
                  <select
                    className="form-select room-preference"
                    name="preference"
                    value={form.preference}
                    onChange={handleChange}
                  >
                    <option value="">Room Preference (Optional)</option>
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>

                {/* Submit */}
                <button type="submit" className="submit-booking-btn">
                  <span className="btn-content">
                    <i className="bi bi-calendar-check"></i>
                    <span className="btn-text">Check Availability</span>
                  </span>
                  <div className="btn-effect"></div>
                </button>
              </form>

              {/* Booking Assurance */}
              <div className="booking-assurance">
                <div className="assurance-item">
                  <i className="bi bi-shield-check"></i>
                  <span>Instant Confirmation</span>
                </div>
                <div className="assurance-item">
                  <i className="bi bi-credit-card"></i>
                  <span>Secure Booking</span>
                </div>
                <div className="assurance-item">
                  <i className="bi bi-telephone"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
