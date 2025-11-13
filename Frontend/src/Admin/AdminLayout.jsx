import React, { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import NavHeader from "./components/NavHeader";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

function AdminLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const assetsLoaded = useRef(false);

  useEffect(() => {
    let isMounted = true;

    const loadCSS = (href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.dataset.admin = "true";
        document.head.appendChild(link);
      }
    };

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.dataset.admin = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(`Failed to load: ${src}`);
        document.body.appendChild(script);
      });

    const initDatetimepicker = () => {
      try {
        if ($("#datetimepicker").length) {
          $("#datetimepicker").datetimepicker({ inline: true });
        }
        $(".booking-calender .fa.fa-clock-o")
          .removeClass("fa-clock-o")
          .addClass("fa-clock");
      } catch (e) {
        console.warn("Datetimepicker init failed:", e);
      }
    };

    const initializeAssets = async () => {
      try {
        loadCSS("/admin/css/style.css");
        loadCSS("/admin/vendor/chartist/css/chartist.min.css");
        loadCSS("/admin/vendor/jquery-nice-select/css/nice-select.css");
        loadCSS("/admin/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css");

        if (!assetsLoaded.current) {
          await loadScript("/admin/vendor/global/global.min.js");
          await loadScript("/admin/vendor/jquery-nice-select/js/jquery.nice-select.min.js");
          await loadScript("/admin/vendor/chart.js/Chart.bundle.min.js");
          await loadScript("/admin/vendor/peity/jquery.peity.min.js");
          await loadScript("/admin/vendor/apexchart/apexchart.js");
          await loadScript("/admin/vendor/bootstrap-datetimepicker/js/moment.js");
          await loadScript("/admin/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js");
          await loadScript("/admin/js/custom.min.js");
          await loadScript("/admin/js/deznav-init.js");
          await loadScript("/admin/js/styleSwitcher.js");
          assetsLoaded.current = true;
        }

        if (location.pathname === "/admin" || location.pathname === "/admin/dashboard") {
          await loadScript("/admin/js/dashboard/dashboard-1.js");
        }

        // Small delay for DOM ready + plugin init
        setTimeout(() => {
          if ($ && $.fn && $.fn.niceSelect) {
            $("select").niceSelect();
            console.log("niceSelect initialized");
          }
          initDatetimepicker();
        }, 100);
      } catch (err) {
        console.error("Admin asset load error:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // Load once
    if (!assetsLoaded.current) {
      initializeAssets();
    } else {
      setLoading(false);
      setTimeout(() => {
        if ($ && $.fn && $.fn.niceSelect) $("select").niceSelect();
      }, 50);
    }

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f9fafb",
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="spinner-border text-primary mb-3"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
        <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>
          Loading Admin Panel...
        </p>
      </div>
    );
  }

  return (
    <div id="main-wrapper" className="show fade-in" style={{ animation: "fadeIn 0.3s ease" }}>
      <NavHeader />
      <Header />
      <Sidebar />
      <ChatBox />
      <div className="content-body fade-in">
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in {
          animation: fadeIn 0.4s ease;
        }
      `}</style>
    </div>
  );
}

export default AdminLayout;
