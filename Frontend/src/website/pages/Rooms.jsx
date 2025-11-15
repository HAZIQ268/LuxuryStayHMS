import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filters, setFilters] = useState({ price: "", capacity: "", view: "", sort: "" });

  // Backend URL for images
  const BACKEND_URL = "http://localhost:5000";

  // ---------------------------
  // Fetch Rooms From Backend
  // ---------------------------
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/rooms`);
        const data = await res.json();

        const formatted = data.map((r) => ({
          id: r._id, // use MongoDB ID for unique key
          room_id: r.room_id,
          name: r.title || r.type,                 // Room title
          price: r.price,
          type: r.type,
          capacity: r.capacity || 2,
          view: r.view || "sea",
          image: r.image ? `${BACKEND_URL}/uploads/${r.image}` : `${BACKEND_URL}/uploads/default.png`,
          desc: r.description || "Comfortable room with excellent service.",
        }));

        setRooms(formatted);
        setFilteredRooms(formatted);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // ---------------------------
  // Apply Filters & Sorting
  // ---------------------------
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
    if (filters.view) result = result.filter((r) => r.view === filters.view);

    // Sorting
    if (filters.sort === "price-low") result.sort((a, b) => a.price - b.price);
    else if (filters.sort === "price-high") result.sort((a, b) => b.price - a.price);
    else if (filters.sort === "popularity") result.sort((a, b) => a.room_id - b.room_id);

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
                  <div className="col-xl-4 col-lg-6" key={room.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <div className="room-card">
                      <div className="room-image">
                        <img src={room.image} alt={room.name} className="img-fluid" />
                        <div className="room-badge">{room.type}</div>
                        <div className="room-price">${room.price}<span>/night</span></div>
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
