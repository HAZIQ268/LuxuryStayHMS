import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../website/components/Navbar";
import Footer from "../website/components/Footer";

import "../website/css/bootstrap.min.css";
import "../website/css/bootstrap-icons.css";
import "../website/css/aos.css";
import "../website/css/swiper-bundle.min.css";
import "../website/css/glightbox.min.css";
import "../website/css/main.css";

import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper";
import "swiper/css";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import PureCounter from "@srexi/purecounterjs";


function WebsiteLayout() {
  useEffect(() => {
  
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });


    GLightbox({ selector: ".glightbox" });

    new Swiper(".swiper", {
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });


    new PureCounter();

    const grid = document.querySelector(".isotope-container");
    if (grid) {
      const iso = new Isotope(grid, { itemSelector: ".isotope-item" });
      imagesLoaded(grid, () => {
        iso.layout();
      });
    }

    import("bootstrap/dist/js/bootstrap.bundle.min.js");

  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default WebsiteLayout;
