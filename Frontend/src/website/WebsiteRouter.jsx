import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import WebsiteLayout from "./WebsiteLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import RoomDetail from "./pages/RoomDetail";
import Restaurant from "./pages/Restaurant";
import Offers from "./pages/Offers";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";

function WebsiteRouter() {
  const location = useLocation();

  // Remove admin scripts/styles when entering website
  useEffect(() => {
    document
      .querySelectorAll('link[href*="/admin"], script[src*="/admin"]')
      .forEach((el) => el.remove());
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/location" element={<Location />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/room-details" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      
      </Route>
    </Routes>
  );
}

export default WebsiteRouter;
