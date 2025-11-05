import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  function handleChange(e) {
    setMsg({ ...msg, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent successfully (mock)");
    setMsg({ name: "", email: "", subject: "", message: "" });
  }

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
              <li className="current">Contact</li>
            </ol>
          </nav>
          <h1>Contact</h1>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="contact-info-wrapper">
                <div
                  className="contact-info-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="info-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>Our Address</h3>
                    <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                  </div>
                </div>

                <div
                  className="contact-info-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h3>Email Address</h3>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>

                <div
                  className="contact-info-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="info-icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="info-content">
                    <h3>Hours of Operation</h3>
                    <p>Sunday–Friday: 9 AM – 6 PM</p>
                    <p>Saturday: 9 AM – 4 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div
                className="contact-form-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2>Send us a Message</h2>
                <p className="mb-4">
                  Have questions or want to learn more? Reach out to us and our
                  team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="php-email-form">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={msg.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={msg.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        value={msg.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        value={msg.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div
          className="container-fluid map-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="map-overlay"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
