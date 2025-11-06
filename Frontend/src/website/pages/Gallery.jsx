import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function Gallery() {
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
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Gallery</li>
                        </ol>
                    </nav>
                    <h1>Gallery</h1>
                </div>
            </div>
            {/* End Page Title */}

            {/* Gallery Section */}
            <section id="gallery" className="gallery section">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Discover Our Property</h2>
                            <p className="section-subheading">
                                Experience the beauty and comfort of our hotel through stunning
                                visuals
                            </p>
                        </div>
                    </div>

                    <div
                        className="isotope-layout"
                        data-default-filter="*"
                        data-layout="masonry"
                        data-sort="original-order"
                    >
                        <ul
                            className="gallery-filters isotope-filters aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-rooms">Rooms</li>
                            <li data-filter=".filter-amenities">Amenities</li>
                            <li data-filter=".filter-dining">Dining</li>
                            <li data-filter=".filter-location">Location</li>
                        </ul>
                        {/* End Gallery Filters */}

                        <div
                            className="row gy-4 isotope-container aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            style={{ position: "relative", height: "4905.94px" }}
                        >
                            {/* Gallery Items */}
                            <div
                                className="col-lg-4 col-md-6 gallery-item isotope-item filter-rooms"
                                style={{ position: "absolute", left: "0px", top: "0px" }}
                            >
                                <div className="gallery-wrapper">
                                    <img
                                        src="images/hotel/gallery-1.webp"
                                        className="img-fluid"
                                        alt="Luxury Suite"
                                    />
                                    <div className="gallery-overlay">
                                        <div className="gallery-content">
                                            <h4>Luxury Suite</h4>
                                            <p>Spacious rooms with premium amenities</p>
                                            <a
                                                href="images/hotel/gallery-1.webp"
                                                className="glightbox gallery-link"
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Repeat for other gallery items */}
                            {/* End of Gallery Items */}
                        </div>
                        {/* End Gallery Items Container */}
                    </div>
                </div>
            </section>
            {/* /Gallery Section */}
        </>
    );
}

export default Gallery;
