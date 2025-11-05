import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs"; // make sure to install: npm install @srexi/purecounterjs

function Restaurant() {
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
              <li className="current">Restaurant</li>
            </ol>
          </nav>
          <h1>Restaurant</h1>
        </div>
      </div>

      {/* Restaurant Section */}
      <section id="restaurant" className="restaurant section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="about-content">
                <h3>Culinary Excellence in Luxury Setting</h3>
                <p className="lead">
                  Nestled within our prestigious hotel, our restaurant offers an
                  unparalleled dining experience that combines world-class cuisine
                  with the sophisticated ambiance of luxury hospitality.
                </p>
                <p>
                  Our executive chef brings over two decades of international
                  culinary expertise, crafting seasonal menus that celebrate both
                  local ingredients and global flavors. Every dish is carefully
                  prepared to create memorable moments for our hotel guests and
                  discerning local diners alike.
                </p>

                <div className="features-list">
                  <div className="feature-item d-flex align-items-start">
                    <div className="feature-icon">
                      <i className="bi bi-award"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Award-Winning Cuisine</h5>
                      <p>
                        Recognized with multiple culinary awards and featured in
                        prestigious dining guides for our innovative approach to
                        contemporary cuisine.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-start">
                    <div className="feature-icon">
                      <i className="bi bi-leaf"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Farm-to-Table Philosophy</h5>
                      <p>
                        We partner with local farms and suppliers to ensure the
                        freshest ingredients while supporting our community's
                        sustainable agriculture.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-start">
                    <div className="feature-icon">
                      <i className="bi bi-clock"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Exceptional Service</h5>
                      <p>
                        Our professionally trained staff provides attentive,
                        personalized service that reflects the highest standards of
                        hotel hospitality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="about-images">
                <div className="main-image">
                  <img
                    src="/images/restaurant/showcase-3.webp"
                    alt="Elegant hotel restaurant interior"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="secondary-image">
                  <img
                    src="/images/restaurant/chef-2.webp"
                    alt="Executive chef preparing signature dish"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Chef Quote Section */}
          <div className="row mt-5" data-aos="fade-up" data-aos-delay="400">
            <div className="col-12">
              <div className="chef-quote">
                <div className="row align-items-center">
                  <div className="col-lg-2 text-center">
                    <div className="chef-avatar">
                      <img
                        src="/images/restaurant/chef-5.webp"
                        alt="Executive Chef Marcus Thompson"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <blockquote className="quote-text">
                      "Our restaurant represents the perfect marriage of luxury
                      hospitality and culinary artistry. Every dish tells a story,
                      every meal creates a memory. We don't just serve food – we
                      craft experiences that reflect the exceptional standards our
                      hotel guests deserve."
                    </blockquote>
                    <cite className="quote-author">
                      <strong>Marcus Thompson</strong>
                      <br />
                      Executive Chef &amp; Culinary Director
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="row mt-5 gy-4">
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="bi bi-star"></i>
                </div>
                <h4>Private Dining</h4>
                <p>
                  Exclusive private dining rooms available for intimate celebrations
                  and business meetings, with personalized menu options and
                  dedicated service.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <h4>Room Service Excellence</h4>
                <p>
                  24-hour gourmet room service featuring our restaurant's signature
                  dishes, bringing fine dining directly to our guests'
                  accommodations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="bi bi-cup-hot"></i>
                </div>
                <h4>Wine &amp; Spirits</h4>
                <p>
                  Curated selection of premium wines and craft cocktails, with our
                  sommelier available to recommend perfect pairings for every
                  occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Menu</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div
          className="container isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul className="menu-filters isotope-filters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>

          {/* Menu Items */}
          <div className="row isotope-container" data-aos="fade-up" data-aos-delay="200">
            {[
              { img: "/images/menu/menu-item-11.webp", name: "Lobster Bisque", price: "$5.95", desc: "Lorem, deren, trataro, filede, nerada", category: "filter-starters" },
              { img: "/images/menu/menu-item-15.webp", name: "Bread Barrel", price: "$6.95", desc: "Lorem, deren, trataro, filede, nerada", category: "filter-specialty" },
              { img: "/images/menu/menu-item-14.webp", name: "Crab Cake", price: "$7.95", desc: "A delicate crab cake served on a toasted roll with lettuce and tartar sauce", category: "filter-starters" },
              { img: "/images/menu/menu-item-13.webp", name: "Caesar Selections", price: "$8.95", desc: "Lorem, deren, trataro, filede, nerada", category: "filter-salads" },
              { img: "/images/menu/menu-item-8.webp", name: "Tuscan Grilled", price: "$9.95", desc: "Grilled chicken with provolone, artichoke hearts, and roasted red pesto", category: "filter-specialty" },
              { img: "/images/menu/menu-item-9.webp", name: "Mozzarella Stick", price: "$4.95", desc: "Lorem, deren, trataro, filede, nerada", category: "filter-starters" },
              { img: "/images/menu/menu-item-12.webp", name: "Greek Salad", price: "$9.95", desc: "Fresh spinach, crisp romaine, tomatoes, and Greek olives", category: "filter-salads" },
              { img: "/images/menu/menu-item-7.webp", name: "Spinach Salad", price: "$9.95", desc: "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette", category: "filter-salads" },
              { img: "/images/menu/menu-item-10.webp", name: "Lobster Roll", price: "$12.95", desc: "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll", category: "filter-specialty" },
            ].map((item, i) => (
              <div key={i} className={`col-lg-6 menu-item isotope-item ${item.category}`}>
                <img src={item.img} className="menu-img" alt={item.name} />
                <div className="menu-content">
                  <a href="#">{item.name}</a><span>{item.price}</span>
                </div>
                <div className="menu-ingredients">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Restaurant;
