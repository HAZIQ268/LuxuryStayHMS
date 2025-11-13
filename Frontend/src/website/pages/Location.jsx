import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs"; // npm install @srexi/purecounterjs

function Location() {
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
              <li className="current">Location</li>
            </ol>
          </nav>
          <h1>Location</h1>
        </div>
      </div>
      {/* End Page Title */}

      {/* Hotel Location Section */}
      <section id="hotel-location" className="hotel-location section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="location-info">
                <h3>Prime Downtown Location</h3>
                <p className="lead">
                  Discover the perfect blend of urban convenience and cultural
                  richness right at your doorstep. Our hotel places you in the
                  heart of the city's most vibrant district.
                </p>

                <div className="location-highlights">
                  <div
                    className="highlight-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="content">
                      <h5>Historic City Center</h5>
                      <p>
                        3-minute walk to the main square and historic landmarks
                      </p>
                    </div>
                  </div>

                  <div
                    className="highlight-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    <div className="icon">
                      <i className="bi bi-train-front-fill"></i>
                    </div>
                    <div className="content">
                      <h5>Metro Station</h5>
                      <p>
                        Central Station just 200 meters away with direct airport
                        connection
                      </p>
                    </div>
                  </div>

                  <div
                    className="highlight-item aos-init"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon">
                      <i className="bi bi-shop"></i>
                    </div>
                    <div className="content">
                      <h5>Shopping District</h5>
                      <p>
                        Premium boutiques and local markets within walking
                        distance
                      </p>
                    </div>
                  </div>

                  <div
                    className="highlight-item aos-init"
                    data-aos="fade-up"
                    data-aos-delay="450"
                  >
                    <div className="icon">
                      <i className="bi bi-palette-fill"></i>
                    </div>
                    <div className="content">
                      <h5>Cultural Quarter</h5>
                      <p>
                        Museums, galleries, and theaters just around the corner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="attractions-grid">
                <h4>Nearby Attractions</h4>

                <div
                  className="attraction-card aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <img
                    src="/images/hotel/location-1.webp"
                    alt="Cathedral"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h6>St. Mary's Cathedral</h6>
                    <span className="distance">5 min walk</span>
                    <p>
                      Gothic masterpiece with stunning architecture and
                      centuries of history
                    </p>
                  </div>
                </div>

                <div
                  className="attraction-card aos-init"
                  data-aos="zoom-in"
                  data-aos-delay="350"
                >
                  <img
                    src="/images/hotel/location-2.webp"
                    alt="Museum"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h6>National Art Museum</h6>
                    <span className="distance">8 min walk</span>
                    <p>
                      World-class collection featuring contemporary and
                      classical works
                    </p>
                  </div>
                </div>

                <div
                  className="attraction-card aos-init"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <img
                    src="/images/hotel/location-3.webp"
                    alt="Park"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h6>Riverside Park</h6>
                    <span className="distance">12 min walk</span>
                    <p>
                      Peaceful green space perfect for morning jogs and evening
                      strolls
                    </p>
                  </div>
                </div>

                <div
                  className="attraction-card aos-init"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                >
                  <img
                    src="/images/hotel/location-4.webp"
                    alt="Market"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h6>Grand Central Market</h6>
                    <span className="distance">6 min walk</span>
                    <p>
                      Bustling marketplace with local delicacies and artisanal
                      crafts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Here Section */}
          <div className="row mt-5">
            <div
              className="col-12 aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="transportation-section">
                <h4>Getting Here</h4>
                <div className="row">
                  <div
                    className="col-md-6 aos-init"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <div className="transport-info">
                      <div className="transport-item">
                        <i className="bi bi-airplane-fill"></i>
                        <div>
                          <h6>From Airport</h6>
                          <p>
                            Direct metro line takes 35 minutes. Airport shuttle
                            service available upon request.
                          </p>
                        </div>
                      </div>

                      <div className="transport-item">
                        <i className="bi bi-car-front-fill"></i>
                        <div>
                          <h6>By Car</h6>
                          <p>
                            Valet parking available. Underground garage with
                            24/7 security access.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-6 aos-init"
                    data-aos="fade-left"
                    data-aos-delay="450"
                  >
                    <div className="transport-info">
                      <div className="transport-item">
                        <i className="bi bi-train-front"></i>
                        <div>
                          <h6>By Train</h6>
                          <p>
                            Central Station is 200m away with connections to all
                            major cities.
                          </p>
                        </div>
                      </div>

                      <div className="transport-item">
                        <i className="bi bi-taxi-front-fill"></i>
                        <div>
                          <h6>Taxi &amp; Rideshare</h6>
                          <p>
                            Dedicated pickup zone right outside the main
                            entrance for your convenience.
                          </p>
                        </div>
                      </div>
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

export default Location;
