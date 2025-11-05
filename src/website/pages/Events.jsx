import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function Events() {
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
              <li className="current">Events</li>
            </ol>
          </nav>
          <h1>Events</h1>
        </div>
      </div>

      {/* Events Section */}
      <section id="events" className="events section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h2 className="section-subtitle">Create Unforgettable Moments</h2>
              <p className="section-description">
                Our versatile event spaces are designed to accommodate every
                occasion, from intimate private celebrations to large corporate
                gatherings. With state-of-the-art facilities and personalized
                service, we ensure your special day unfolds exactly as you
                envision it.
              </p>
              <div className="event-features">
                {[
                  "Full-service event planning",
                  "Customizable menus by executive chef",
                  "Professional AV equipment included",
                  "Dedicated event coordinator",
                ].map((text, index) => (
                  <div key={index} className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="hero-image">
                <img
                  src="images/hotel/showcase-7.webp"
                  alt="Event Space"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Venues */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="venues-title" data-aos="fade-up" data-aos-delay="100">
                Our Event Venues
              </h3>
            </div>
          </div>

          <div className="row gy-4 mt-3">
            {[
              {
                img: "images/hotel/event-3.webp",
                title: "Grand Ballroom",
                desc: "Perfect for weddings, galas, and large celebrations with elegant chandeliers and spacious dance floor.",
                guests: "Up to 200 guests",
                area: "3,500 sq ft",
              },
              {
                img: "images/hotel/event-5.webp",
                title: "Executive Boardroom",
                desc: "Intimate setting ideal for corporate meetings, presentations, and business discussions.",
                guests: "Up to 25 guests",
                area: "800 sq ft",
              },
              {
                img: "images/hotel/event-8.webp",
                title: "Rooftop Terrace",
                desc: "Outdoor venue with stunning city views, perfect for cocktail receptions and evening parties.",
                guests: "Up to 120 guests",
                area: "2,200 sq ft",
              },
            ].map((venue, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="venue-card">
                  <div className="venue-image">
                    <img
                      src={venue.img}
                      alt={venue.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="venue-details">
                    <h4>{venue.title}</h4>
                    <p>{venue.desc}</p>
                    <div className="venue-specs">
                      <div className="spec-item">
                        <i className="bi bi-people"></i>
                        <span>{venue.guests}</span>
                      </div>
                      <div className="spec-item">
                        <i className="bi bi-aspect-ratio"></i>
                        <span>{venue.area}</span>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Packages */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="packages-section" data-aos="fade-up" data-aos-delay="100">
                <h3 className="packages-title">Event Packages</h3>
                <div className="row gy-4 mt-4">
                  {[
                    {
                      title: "Wedding Package",
                      subtitle: "Dream Wedding Experience",
                      items: [
                        "Bridal suite preparation room",
                        "Ceremony and reception setup",
                        "Three-course plated dinner",
                        "Wedding cake and champagne toast",
                        "Overnight honeymoon suite",
                      ],
                    },
                    {
                      title: "Corporate Package",
                      subtitle: "Professional Meetings",
                      items: [
                        "Full-day room rental",
                        "AV equipment and tech support",
                        "Coffee breaks and lunch",
                        "Complimentary WiFi and parking",
                        "Dedicated event coordinator",
                      ],
                    },
                    {
                      title: "Social Package",
                      subtitle: "Private Celebrations",
                      items: [
                        "Flexible room configuration",
                        "Customizable menu options",
                        "Basic sound system",
                        "Decoration assistance",
                        "Professional service staff",
                      ],
                    },
                  ].map((pkg, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={(index + 1) * 100}
                    >
                      <div className="package-card">
                        <div className="package-header">
                          <h4>{pkg.title}</h4>
                          <p className="package-subtitle">{pkg.subtitle}</p>
                        </div>
                        <div className="package-content">
                          <ul>
                            {pkg.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="package-footer">
                          <a href="#" className="btn btn-outline-primary">
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="testimonial-section" data-aos="fade-up" data-aos-delay="100">
                <div className="testimonial-content">
                  <blockquote>
                    "The attention to detail and personalized service made our
                    wedding day absolutely perfect. The staff went above and
                    beyond to ensure every moment was magical."
                  </blockquote>
                  <div className="testimonial-auth">
                    <strong>Sarah &amp; Michael Thompson</strong>
                    <span>Wedding Celebration, June 2024</span>
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

export default Events;
