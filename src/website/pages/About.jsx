import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs"; 

function About() {
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
              <li className="current">About</li>
            </ol>
          </nav>
          <h1>About</h1>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="content">
                <h3>Experience Luxury & Comfort Since 1952</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>

                <div className="stats-wrapper">
                  <div className="row">
                    <div className="col-6">
                      <div className="stat-item">
                        <span
                          className="stat-number"
                          data-purecounter-start="0"
                          data-purecounter-end="245"
                          data-purecounter-duration="1"
                        >
                          245
                        </span>
                        <span className="stat-label">Luxury Rooms</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stat-item">
                        <span
                          className="stat-number"
                          data-purecounter-start="0"
                          data-purecounter-end="98"
                          data-purecounter-duration="1"
                        >
                          98
                        </span>
                        <span className="stat-label">Guest Satisfaction</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stat-item">
                        <span
                          className="stat-number"
                          data-purecounter-start="1940"
                          data-purecounter-end="1952"
                          data-purecounter-duration="2"
                        >
                          1952
                        </span>
                        <span className="stat-label">Year Established</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stat-item">
                        <span
                          className="stat-number"
                          data-purecounter-start="0"
                          data-purecounter-end="47"
                          data-purecounter-duration="1"
                        >
                          47
                        </span>
                        <span className="stat-label">Awards Won</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="btn-wrapper">
                  <a href="/rooms" className="btn btn-primary">
                    Discover Our Rooms
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="image-stack">
                <img
                  src="/images/hotel/showcase-5.webp"
                  alt="Hotel Lobby"
                  className="img-fluid main-image"
                />
                <img
                  src="/images/hotel/room-8.webp"
                  alt="Luxury Room"
                  className="img-fluid overlay-image"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="features-section" data-aos="fade-up" data-aos-delay="400">
            <div className="row gy-4">
              {[
                {
                  icon: "bi-shield-check",
                  title: "Premium Service",
                  desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
                },
                {
                  icon: "bi-geo-alt",
                  title: "Prime Location",
                  desc: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
                },
                {
                  icon: "bi-wifi",
                  title: "Modern Amenities",
                  desc: "Nam libero tempore cum soluta nobis est eligendi optio.",
                },
                {
                  icon: "bi-clock",
                  title: "24/7 Concierge",
                  desc: "Temporibus autem quibusdam et aut officiis debitis.",
                },
              ].map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="feature-item text-center">
                    <div className="icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="awards-section" data-aos="fade-up" data-aos-delay="500">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="awards-header">
                  <h3>Awards & Recognition</h3>
                  <p>
                    Our commitment to excellence has been recognized by leading
                    industry organizations.
                  </p>
                </div>
                <div className="awards-grid">
                  {[
                    { icon: "bi-award", title: "Best Luxury Hotel 2023", desc: "World Travel Awards" },
                    { icon: "bi-star-fill", title: "5-Star Rating", desc: "Travel Excellence Board" },
                    { icon: "bi-heart", title: "Guest Choice Award", desc: "Hospitality Review 2023" },
                    { icon: "bi-leaf", title: "Green Hospitality Certification", desc: "Sustainable Tourism Board" },
                  ].map((award, index) => (
                    <div key={index} className="award-item">
                      <div className="award-icon">
                        <i className={`bi ${award.icon}`}></i>
                      </div>
                      <div className="award-content">
                        <h5>{award.title}</h5>
                        <p>{award.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  );
}

export default About;
