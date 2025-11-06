import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Rooms() {
  const [rooms, ] = useState([
    {
      id: 1,
      name: "Deluxe Ocean Suite",
      price: 299,
      type: "Premium",
      capacity: 4,
      view: "sea",
      image: "images/hotel/room-1.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    },
    {
      id: 2,
      name: "Garden View Family Room",
      price: 189,
      type: "Family",
      capacity: 6,
      view: "garden",
      image: "images/hotel/room-3.webp",
      desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      id: 3,
      name: "Executive Business Room",
      price: 159,
      type: "Business",
      capacity: 2,
      view: "city",
      image: "images/hotel/room-5.webp",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 4,
      name: "Classic City View",
      price: 129,
      type: "Standard",
      capacity: 2,
      view: "city",
      image: "images/hotel/room-7.webp",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    },
    {
      id: 5,
      name: "Luxury Presidential Suite",
      price: 549,
      type: "Luxury",
      capacity: 8,
      view: "sea",
      image: "images/hotel/room-9.webp",
      desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    },
    {
      id: 6,
      name: "Romantic Honeymoon Suite",
      price: 339,
      type: "Romance",
      capacity: 2,
      view: "garden",
      image: "images/hotel/room-11.webp",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    },
  ]);

  const [filters, setFilters] = useState({
    price: "",
    capacity: "",
    view: "",
    sort: "",
  });

  const [filteredRooms, setFilteredRooms] = useState(rooms);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    let result = [...rooms];

    // Price filter
    if (filters.price) {
      if (filters.price === "under-100") result = result.filter((r) => r.price < 100);
      else if (filters.price === "100-200") result = result.filter((r) => r.price >= 100 && r.price <= 200);
      else if (filters.price === "200-300") result = result.filter((r) => r.price >= 200 && r.price <= 300);
      else if (filters.price === "over-300") result = result.filter((r) => r.price > 300);
    }

    // Capacity filter
    if (filters.capacity) {
      const cap = parseInt(filters.capacity);
      if (cap === 6) result = result.filter((r) => r.capacity >= 6);
      else result = result.filter((r) => r.capacity === cap);
    }

    // View filter
    if (filters.view) {
      result = result.filter((r) => r.view === filters.view);
    }

    // Sorting
    if (filters.sort === "price-low") result.sort((a, b) => a.price - b.price);
    else if (filters.sort === "price-high") result.sort((a, b) => b.price - a.price);
    else if (filters.sort === "popularity") result.sort((a, b) => a.id - b.id); // dummy sort

    setFilteredRooms(result);
  }, [filters, rooms]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <>
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Rooms</li>
            </ol>
          </nav>
          <h1>Rooms</h1>
        </div>
      </div>

      {/* Rooms Section */}
      <section id="rooms-2" className="rooms-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          {/* Filter Bar */}
          <div className="filter-sort-bar" data-aos="fade-up" data-aos-delay="200">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7">
                <div className="filters">
                  <span className="filter-label">Filter by:</span>
                  <div className="filter-group">
                    <select name="price" className="filter-select" onChange={handleFilterChange}>
                      <option value="">Price Range</option>
                      <option value="under-100">Under $100</option>
                      <option value="100-200">$100 - $200</option>
                      <option value="200-300">$200 - $300</option>
                      <option value="over-300">Over $300</option>
                    </select>
                    <select name="capacity" className="filter-select" onChange={handleFilterChange}>
                      <option value="">Capacity</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6+ Guests</option>
                    </select>
                    <select name="view" className="filter-select" onChange={handleFilterChange}>
                      <option value="">View Type</option>
                      <option value="sea">Sea View</option>
                      <option value="garden">Garden View</option>
                      <option value="city">City View</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="sort-options">
                  <span className="sort-label">Sort by:</span>
                  <select name="sort" className="sort-select" onChange={handleFilterChange}>
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="rooms-grid" data-aos="fade-up" data-aos-delay="300">
            <div className="row gy-4">
              {filteredRooms.length > 0 ? (
                filteredRooms.map((room, index) => (
                  <div
                    className="col-xl-4 col-lg-6"
                    key={room.id}
                    data-aos="fade-up"
                    data-aos-delay={100 * (index + 1)}
                  >
                    <div className="room-card">
                      <div className="room-image">
                        <img src={room.image} alt={room.name} className="img-fluid" />
                        <div className="room-badge">{room.type}</div>
                        <div className="room-price">
                          ${room.price}<span>/night</span>
                        </div>
                      </div>
                      <div className="room-content">
                        <h4>{room.name}</h4>
                        <p className="room-description">{room.desc}</p>
                        <div className="room-features">
                          <span><i className="bi bi-people"></i> {room.capacity} Guests</span>
                          <span><i className="bi bi-wifi"></i> Free WiFi</span>
                          <span><i className="bi bi-tv"></i> Smart TV</span>
                        </div>
                        <div className="room-actions">
                          <Link to={`/room/${room.id}`} className="btn-view-details">View Details</Link>
                          <Link to="/booking" className="btn-book-now">Check Availability</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No rooms match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rooms;
