import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import NavHeader from "./components/NavHeader.jsx";

// ✅ jQuery setup
import $ from "jquery";
window.$ = window.jQuery = $;

// ✅ Local CSS (from src)
import "./css/style.css";

// ✅ Icon Libraries
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

function AdminLayout() {
  useEffect(() => {
    // ✅ Load CSS dynamically from /public/admin
    const loadCSS = (href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    };

    loadCSS("/admin/vendor/chartist/css/chartist.min.css");
    loadCSS("/admin/vendor/jquery-nice-select/css/nice-select.css");
    loadCSS("/admin/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css");

    // ✅ Load JS dynamically
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    (async () => {
      await loadScript("/admin/vendor/global/global.min.js");
      await loadScript("/admin/vendor/chart.js/Chart.bundle.min.js");
      await loadScript("/admin/js/custom.min.js");
      await loadScript("/admin/js/deznav-init.js");
      await loadScript("/admin/js/styleSwitcher.js");
      await loadScript("/admin/js/dashboard/dashboard-1.js");
    })();
  }, []);

  return (
    <div id="main-wrapper" className="show menu-toggle">
      <NavHeader />
      <Header />
      <Sidebar />
      <ChatBox />

      <div className="content-body">
        <div className="container-fluid py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
