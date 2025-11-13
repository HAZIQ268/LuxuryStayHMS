import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import AutoPopupModal from "./components/AutoPopupModal"; // 🆕 import

// your existing imports...
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
=======

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap-icons.css";
import "./css/aos.css";
import "./css/swiper-bundle.min.css";
import "./css/glightbox.min.css";
import "./css/main.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import PureCounter from "@srexi/purecounterjs";

function WebsiteLayout() {
  useEffect(() => {
<<<<<<< HEAD
    document
      .querySelectorAll('link[data-admin], script[data-admin]')
      .forEach((el) => el.remove());

    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
=======
    // Remove admin assets
    document.querySelectorAll('link[data-admin], script[data-admin]').forEach((el) => el.remove());

    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
    GLightbox({ selector: ".glightbox" });

    new Swiper(".swiper", {
      loop: true,
      speed: 600,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });

    new PureCounter();

    const grid = document.querySelector(".isotope-container");
    if (grid) {
      const iso = new Isotope(grid, { itemSelector: ".isotope-item" });
      imagesLoaded(grid, () => iso.layout());
    }
<<<<<<< HEAD
=======

    console.log("Website scripts initialized");
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
<<<<<<< HEAD

      <AutoPopupModal /> {/* 🆕 This shows the popup */}
=======
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
      <Footer />
    </>
  );
}

export default WebsiteLayout;
