import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hotel Hero Section */}
      <section id="hotel-hero" className="hotel-hero section dark-background">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src="/media/video-8.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="hero-text" data-aos="fade-up" data-aos-delay="100">
                  <h1>Luxury Redefined</h1>
                  <p className="hero-subtitle">
                    Experience unparalleled comfort and elegance in the heart of the city.
                    Where every moment becomes a cherished memory.
                  </p>
                  <div className="hero-actions" data-aos="fade-up" data-aos-delay="200">
                    <Link to="/booking" className="btn btn-primary">Book Your Stay</Link>
                    <Link to="/amenities" className="btn btn-outline">Explore Amenities</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-10">
                <div className="booking-card" data-aos="fade-up" data-aos-delay="300">
                  <form className="booking-form">
                    <div className="row g-3">
                      <div className="col-md-3">
                        <label htmlFor="checkin" className="form-label">Check-in</label>
                        <input type="date" className="form-control" id="checkin" name="checkin" required />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="checkout" className="form-label">Check-out</label>
                        <input type="date" className="form-control" id="checkout" name="checkout" required />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="guests" className="form-label">Guests</label>
                        <select className="form-select" id="guests" name="guests" required>
                          <option value="">Select</option>
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5+ Guests</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="rooms" className="form-label">Rooms</label>
                        <select className="form-select" id="rooms" name="rooms" required>
                          <option value="">Select</option>
                          <option value="1">1 Room</option>
                          <option value="2">2 Rooms</option>
                          <option value="3">3 Rooms</option>
                          <option value="4">4+ Rooms</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" className="btn btn-search">
                          <i className="bi bi-search"></i> Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-4">
              <div className="col-lg-10">
                <div className="hotel-highlights" data-aos="fade-up" data-aos-delay="400">
                  <div className="row text-center">
                    <div className="col-6 col-md-3">
                      <div className="highlight-item">
                        <i className="bi bi-wifi"></i><span>Free WiFi</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="highlight-item">
                        <i className="bi bi-p-circle"></i><span>Free Parking</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="highlight-item">
                        <i className="bi bi-cup-hot"></i><span>Room Service</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="highlight-item">
                        <i className="bi bi-water"></i><span>Swimming Pool</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Home Section */}
      <section id="about-home" className="about-home section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="content-wrapper">
                <div className="section-badge">
                  <i className="bi bi-gem"></i><span>Luxury Redefined</span>
                </div>
                <h2>Where Timeless Elegance Meets Modern Comfort</h2>
                <p>
                  Nestled in the heart of the city, our boutique hotel offers an extraordinary blend of
                  contemporary luxury and classical charm. Each moment spent with us is carefully crafted
                  to create lasting memories.
                </p>
                <div className="highlight-stats">
                  <div className="stat-item"><div className="stat-number">25+</div><div className="stat-label">Years of Excellence</div></div>
                  <div className="stat-item"><div className="stat-number">150</div><div className="stat-label">Luxury Suites</div></div>
                  <div className="stat-item"><div className="stat-number">5★</div><div className="stat-label">Rating</div></div>
                </div>

                <div className="amenities-list">
                  <div className="amenity-tag"><i className="bi bi-wifi"></i><span>Complimentary WiFi</span></div>
                  <div className="amenity-tag"><i className="bi bi-car-front"></i><span>Valet Parking</span></div>
                  <div className="amenity-tag"><i className="bi bi-water"></i><span>Infinity Pool</span></div>
                  <div className="amenity-tag"><i className="bi bi-cup-hot"></i><span>24/7 Room Service</span></div>
                </div>

                <div className="cta-group">
                  <Link to="/rooms" className="btn-primary"><span>Explore Rooms</span> <i className="bi bi-arrow-right"></i></Link>
                  <Link to="/about" className="btn-outline">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="visual-section">
                <div className="main-image-container">
                  <img src="/images/showcase-7.webp" alt="Hotel Lobby" className="main-image" />
                  <div className="image-overlay-content">
                    <div className="award-badge">
                      <div className="award-icon"><i className="bi bi-trophy"></i></div>
                      <div className="award-text"><span className="award-title">Best Hotel</span><span className="award-year">2024</span></div>
                    </div>
                  </div>
                </div>
                <div className="secondary-images">
                  <div className="secondary-image"><img src="/images/dining-4.webp" alt="Fine Dining" className="img-fluid" /></div>
                  <div className="secondary-image"><img src="/images/amenities-6.webp" alt="Spa Services" className="img-fluid" /></div>
                </div>
                <div className="floating-experience">
                  <div className="experience-content">
                    <h4>Exceptional Experience</h4>
                    <p>Personalized service tailored to your every need</p>
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

          </div>
        </div>
      </section>

     {/* Offer Cards Section */}
<section id="offer-cards" className="offer-cards section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Offers</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>

  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row g-4 justify-content-center">
      {/* Offer Card 1 */}
      <div className="col-lg-6 col-md-8">
        <div className="offer-card horizontal-card" data-aos="fade-right" data-aos-delay="200">
          <div className="offer-image">
            <img src="images/showcase-5.webp" alt="Luxury Suite Weekend" className="img-fluid" />
            <div className="image-overlay">
              <div className="offer-badge">
                <span className="discount">30% OFF</span>
              </div>
            </div>
          </div>
          <div className="offer-content">
            <div className="content-header">
              <h3>Luxury Suite Weekend</h3>
              <div className="price-section">
                <span className="offer-price">$189</span>
                <span className="original-price">$270</span>
              </div>
            </div>
            <p>
              Indulge in our premium suite experience with panoramic city views, complimentary spa access,
              and gourmet dining credits included.
            </p>
            <div className="offer-features">
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Free spa access</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Late checkout</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Room service credit</span></div>
            </div>
            <div className="card-footer">
              <div className="validity-info"><i className="bi bi-clock"></i><span>Valid through March 2025</span></div>
              <a href="#" className="btn-reserve">Reserve Suite</a>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Card 2 */}
      <div className="col-lg-6 col-md-8">
        <div className="offer-card horizontal-card premium" data-aos="fade-left" data-aos-delay="300">
          <div className="offer-image">
            <img src="images/showcase-9.webp" alt="Executive Package" className="img-fluid" />
            <div className="image-overlay">
              <div className="offer-badge premium-badge">
                <span className="discount">EXCLUSIVE</span>
              </div>
            </div>
          </div>
          <div className="offer-content">
            <div className="content-header">
              <h3>Executive Package</h3>
              <div className="price-section">
                <span className="offer-price">$299</span>
                <span className="original-price">$399</span>
              </div>
            </div>
            <p>
              Perfect for business travelers seeking luxury and convenience. Includes airport transfers,
              business center access, and premium amenities.
            </p>
            <div className="offer-features">
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Airport transfers</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Business lounge</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Priority service</span></div>
            </div>
            <div className="card-footer">
              <div className="validity-info"><i className="bi bi-clock"></i><span>Book by February 28</span></div>
              <a href="#" className="btn-reserve">Book Package</a>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Card 3 */}
      <div className="col-lg-6 col-md-8">
        <div className="offer-card horizontal-card" data-aos="fade-right" data-aos-delay="400">
          <div className="offer-image">
            <img src="images/showcase-2.webp" alt="Family Escape Deal" className="img-fluid" />
            <div className="image-overlay">
              <div className="offer-badge"><span className="discount">FAMILY DEAL</span></div>
            </div>
          </div>
          <div className="offer-content">
            <div className="content-header">
              <h3>Family Escape Deal</h3>
              <div className="price-section">
                <span className="offer-price">$159</span>
                <span className="original-price">$220</span>
              </div>
            </div>
            <p>
              Create unforgettable memories with your loved ones. Kids stay free, complimentary breakfast for
              the whole family, and access to recreational facilities.
            </p>
            <div className="offer-features">
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Kids stay free</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Family breakfast</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Pool & games access</span></div>
            </div>
            <div className="card-footer">
              <div className="validity-info"><i className="bi bi-clock"></i><span>Available all year</span></div>
              <a href="#" className="btn-reserve">Book Family</a>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Card 4 */}
      <div className="col-lg-6 col-md-8">
        <div className="offer-card horizontal-card" data-aos="fade-left" data-aos-delay="500">
          <div className="offer-image">
            <img src="images/showcase-12.webp" alt="Romantic Getaway" className="img-fluid" />
            <div className="image-overlay">
              <div className="offer-badge"><span className="discount">ROMANCE</span></div>
            </div>
          </div>
          <div className="offer-content">
            <div className="content-header">
              <h3>Romantic Getaway</h3>
              <div className="price-section">
                <span className="offer-price">$249</span>
                <span className="original-price">$340</span>
              </div>
            </div>
            <p>
              Celebrate love with our romantic package featuring champagne welcome, couples spa treatment, and
              candlelit dinner for two in our finest restaurant.
            </p>
            <div className="offer-features">
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Champagne welcome</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Couples spa session</span></div>
              <div className="feature-item"><i className="bi bi-check-circle"></i><span>Romantic dinner</span></div>
            </div>
            <div className="card-footer">
              <div className="validity-info"><i className="bi bi-clock"></i><span>Perfect for anniversaries</span></div>
              <a href="#" className="btn-reserve">Plan Romance</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Special Promotion */}
    <div className="row mt-5">
      <div className="col-12">
        <div className="special-promotion" data-aos="zoom-in" data-aos-delay="600">
          <div className="promotion-background">
            <img src="images/showcase-6.webp" alt="Special Promotion" className="img-fluid" />
            <div className="promotion-overlay"></div>
          </div>
          <div className="promotion-content">
            <div className="row align-items-center h-100">
              <div className="col-lg-7">
                <div className="promo-text">
                  <h2>Flash Sale: Up to 50% Off</h2>
                  <p>
                    Limited time offer! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Don't miss this incredible opportunity.
                  </p>
                  <ul className="promo-highlights">
                    <li><i className="bi bi-star-fill"></i> Premium rooms included</li>
                    <li><i className="bi bi-star-fill"></i> Free cancellation up to 24 hours</li>
                    <li><i className="bi bi-star-fill"></i> Complimentary upgrade (subject to availability)</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="promo-action">
                  <div className="countdown-timer countdown" data-count="2025/12/20">
                    <div className="timer-item"><span className="count-days"></span><label>Days</label></div>
                    <div className="timer-item"><span className="count-hours"></span><label>Hours</label></div>
                    <div className="timer-item"><span className="count-minutes"></span><label>Minutes</label></div>
                    <div className="timer-item"><span className="count-seconds"></span><label>Seconds</label></div>
                  </div>
                  <a href="#" className="btn-flash-sale">Grab This Deal</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Call To Action Section */}
<section id="call-to-action" className="call-to-action section dark-background">
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
        <div className="content">
          <h2>Experience Luxury Like Never Before</h2>
          <p>
            Immerse yourself in unparalleled comfort and sophistication at our premium hotel. From elegantly appointed
            rooms to world-class amenities, every detail is crafted to exceed your expectations. Book your extraordinary
            stay today and create unforgettable memories.
          </p>
          <ul className="features-list">
            <li><i className="bi bi-check-circle"></i> Complimentary breakfast and Wi-Fi</li>
            <li><i className="bi bi-check-circle"></i> 24/7 concierge and room service</li>
            <li><i className="bi bi-check-circle"></i> State-of-the-art spa and fitness center</li>
            <li><i className="bi bi-check-circle"></i> Prime location with stunning city views</li>
          </ul>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">Book Your Stay</a>
            <a href="#" className="btn-secondary">View Rooms</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
        <div className="image-wrapper">
          <img src="images/showcase-9.webp" alt="Luxury Hotel Experience" className="img-fluid" />
          <div className="overlay-content">
            <div className="special-offer">
              <span className="label">Special Offer</span>
              <span className="discount">Save 30%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Events Cards Section */}
<section id="events-cards" className="events-cards section">

  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Events</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>

  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row g-4">

      {/* Event Card 1 */}
      <div className="col-lg-6">
        <div className="event-card" data-aos="zoom-in" data-aos-delay="100">
          <div className="card-image">
            <img src="/images/event-2.webp" alt="Luxury Weddings" className="img-fluid" />
            <div className="card-overlay">
              <div className="event-badge"><i className="bi bi-heart-fill"></i></div>
            </div>
          </div>
          <div className="card-body">
            <div className="event-meta">
              <span className="event-category">Celebrations</span>
              <span className="event-capacity">Up to 200 guests</span>
            </div>
            <h3>Luxury Weddings</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <ul className="amenities-list">
              <li><i className="bi bi-check2"></i> Bridal Suite Access</li>
              <li><i className="bi bi-check2"></i> Professional Photography</li>
              <li><i className="bi bi-check2"></i> Floral Arrangements</li>
            </ul>
            <div className="card-footer">
              <a href="hotel-events.html" className="btn-explore">
                <span>Learn More</span>
                <i className="bi bi-arrow-right-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Event Card 2 */}
      <div className="col-lg-6">
        <div className="event-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="card-image">
            <img src="/images/event-3.webp" alt="Corporate Meetings" className="img-fluid" />
            <div className="card-overlay">
              <div className="event-badge"><i className="bi bi-briefcase"></i></div>
            </div>
          </div>
          <div className="card-body">
            <div className="event-meta">
              <span className="event-category">Business</span>
              <span className="event-capacity">Up to 150 guests</span>
            </div>
            <h3>Corporate Meetings</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
            <ul className="amenities-list">
              <li><i className="bi bi-check2"></i> AV Equipment</li>
              <li><i className="bi bi-check2"></i> High-Speed Internet</li>
              <li><i className="bi bi-check2"></i> Coffee Breaks</li>
            </ul>
            <div className="card-footer">
              <a href="hotel-events.html" className="btn-explore">
                <span>Learn More</span>
                <i className="bi bi-arrow-right-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Event Card 3 */}
      <div className="col-lg-6">
        <div className="event-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="card-image">
            <img src="/images/event-7.webp" alt="Social Gatherings" className="img-fluid" />
            <div className="card-overlay">
              <div className="event-badge"><i className="bi bi-people-fill"></i></div>
            </div>
          </div>
          <div className="card-body">
            <div className="event-meta">
              <span className="event-category">Social</span>
              <span className="event-capacity">Up to 100 guests</span>
            </div>
            <h3>Social Gatherings</h3>
            <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <ul className="amenities-list">
              <li><i className="bi bi-check2"></i> Themed Decorations</li>
              <li><i className="bi bi-check2"></i> Entertainment Options</li>
              <li><i className="bi bi-check2"></i> Custom Catering</li>
            </ul>
            <div className="card-footer">
              <a href="hotel-events.html" className="btn-explore">
                <span>Learn More</span>
                <i className="bi bi-arrow-right-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Event Card 4 */}
      <div className="col-lg-6">
        <div className="event-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="card-image">
            <img src="/images/event-10.webp" alt="Exclusive Events" className="img-fluid" />
            <div className="card-overlay">
              <div className="event-badge"><i className="bi bi-gem"></i></div>
            </div>
          </div>
          <div className="card-body">
            <div className="event-meta">
              <span className="event-category">Premium</span>
              <span className="event-capacity">Up to 80 guests</span>
            </div>
            <h3>Exclusive Events</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <ul className="amenities-list">
              <li><i className="bi bi-check2"></i> VIP Services</li>
              <li><i className="bi bi-check2"></i> Premium Venues</li>
              <li><i className="bi bi-check2"></i> Concierge Support</li>
            </ul>
            <div className="card-footer">
              <a href="hotel-events.html" className="btn-explore">
                <span>Learn More</span>
                <i className="bi bi-arrow-right-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    <section id="location-cards" className="location-cards section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Location & Activities</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      {/* Location Cards */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="location-card">
              <div className="location-card-inner">
                <div className="location-visual">
                  <img src="/images/location-7.webp" alt="Cultural Center" className="img-fluid" />
                  <div className="distance-indicator">
                    <i className="bi bi-palette"></i>
                    <span>8 min</span>
                  </div>
                </div>
                <div className="location-details">
                  <h5>Arts & Cultural Center</h5>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                  <div className="location-highlights">
                    <span><i className="bi bi-music-note"></i> Live Shows</span>
                    <span><i className="bi bi-easel"></i> Galleries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="location-card">
              <div className="location-card-inner">
                <div className="location-visual">
                  <img src="/images/location-5.webp" alt="Dining Quarter" className="img-fluid" />
                  <div className="distance-indicator">
                    <i className="bi bi-geo-alt"></i>
                    <span>2 min</span>
                  </div>
                </div>
                <div className="location-details">
                  <h5>Gourmet Dining Quarter</h5>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                  <div className="location-highlights">
                    <span><i className="bi bi-award"></i> Michelin Rated</span>
                    <span><i className="bi bi-clock"></i> Late Night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="location-card">
              <div className="location-card-inner">
                <div className="location-visual">
                  <img src="/images/location-9.webp" alt="Recreational Park" className="img-fluid" />
                  <div className="distance-indicator">
                    <i className="bi bi-tree"></i>
                    <span>5 min</span>
                  </div>
                </div>
                <div className="location-details">
                  <h5>Central Recreation Park</h5>
                  <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus.</p>
                  <div className="location-highlights">
                    <span><i className="bi bi-sun"></i> Outdoor Yoga</span>
                    <span><i className="bi bi-bicycle"></i> Bike Trails</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="location-card">
              <div className="location-card-inner">
                <div className="location-visual">
                  <img src="/images/location-3.webp" alt="Shopping District" className="img-fluid" />
                  <div className="distance-indicator">
                    <i className="bi bi-bag"></i>
                    <span>4 min</span>
                  </div>
                </div>
                <div className="location-details">
                  <h5>Premium Shopping District</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  <div className="location-highlights">
                    <span><i className="bi bi-gem"></i> Luxury Brands</span>
                    <span><i className="bi bi-credit-card"></i> Tax Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="location-card">
              <div className="location-card-inner">
                <div className="location-visual">
                  <img src="/images/location-1.webp" alt="Transportation Hub" className="img-fluid" />
                  <div className="distance-indicator">
                    <i className="bi bi-train-front"></i>
                    <span>6 min</span>
                  </div>
                </div>
                <div className="location-details">
                  <h5>Central Station Hub</h5>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                  <div className="location-highlights">
                    <span><i className="bi bi-airplane"></i> Airport Link</span>
                    <span><i className="bi bi-bus-front"></i> Metro Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div className="location-card">
              <div className="location-card-inner">
                <div className="location-visual">
                  <img src="/images/location-4.webp" alt="Historic Quarter" className="img-fluid" />
                  <div className="distance-indicator">
                    <i className="bi bi-building-fill-check"></i>
                    <span>7 min</span>
                  </div>
                </div>
                <div className="location-details">
                  <h5>Historic Old Town</h5>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                  <div className="location-highlights">
                    <span><i className="bi bi-camera"></i> Photo Tours</span>
                    <span><i className="bi bi-book"></i> Museums</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="location-summary" data-aos="fade-up" data-aos-delay="300">
          <div className="summary-content">
            <div className="summary-icon">
              <i className="bi bi-map"></i>
            </div>
            <div className="summary-text">
              <h4>Discover Your Neighborhood</h4>
              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.
              </p>
            </div>
            <div className="summary-action">
              <a href="explore.html" className="explore-btn">
                <span>Explore All Locations</span>
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* Gallery Showcase Section */}
<section id="gallery-showcase" className="gallery-showcase section">
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row g-4">
      <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
        <div className="featured-gallery">
          <div className="main-gallery-item">
            <img src="/images/showcase-3.webp" alt="Premium Hotel Experience" className="img-fluid" loading="lazy" />
            <a href="/images/hotel/showcase-3.webp" className="gallery-lightbox glightbox">
              <div className="lightbox-icon"><i className="bi bi-zoom-in"></i></div>
            </a>
            <div className="gallery-info">
              <h4>Exceptional Luxury</h4>
              <p>Experience unmatched elegance in our premium facilities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
        <div className="gallery-grid">
          {/* Each gallery grid item */}
          <div className="gallery-grid-item">
            <img src="/images/room-8.webp" alt="Executive Suite" className="img-fluid" loading="lazy" />
            <a href="/images/hotel/room-8.webp" className="grid-overlay glightbox">
              <i className="bi bi-plus-circle"></i>
            </a>
          </div>
          <div className="gallery-grid-item">
            <img src="/images/amenities-4.webp" alt="Wellness Center" className="img-fluid" loading="lazy" />
            <a href="/images/hotel/amenities-4.webp" className="grid-overlay glightbox">
              <i className="bi bi-plus-circle"></i>
            </a>
          </div>
          <div className="gallery-grid-item">
            <img src="/images/dining-6.webp" alt="Fine Dining" className="img-fluid" loading="lazy" />
            <a href="/images/hotel/dining-6.webp" className="grid-overlay glightbox">
              <i className="bi bi-plus-circle"></i>
            </a>
          </div>
          <div className="gallery-grid-item">
            <img src="/images/location-2.webp" alt="Scenic Views" className="img-fluid" loading="lazy" />
            <a href="/images/hotel/location-2.webp" className="grid-overlay glightbox">
              <i className="bi bi-plus-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="gallery-actions text-center" data-aos="zoom-in" data-aos-delay="500">
      <div className="action-buttons">
        <a href="/gallery" className="btn-primary-gallery">
          <i className="bi bi-images me-2"></i>Complete Gallery
        </a>
        <a href="/virtual-tour" className="btn-secondary-gallery">
          <i className="bi bi-camera-video me-2"></i>Virtual Tour
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
