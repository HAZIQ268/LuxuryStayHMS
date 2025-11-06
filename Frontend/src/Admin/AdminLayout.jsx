import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import NavHeader from "./components/NavHeader";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

function AdminLayout() {
  const location = useLocation();

  useEffect(() => {
    // ✅ Fix for "getCookie is not defined" in custom.min.js
    if (typeof window !== "undefined") {
      window.getCookie = function (name) {
        const match = document.cookie.match(
          new RegExp("(^| )" + name + "=([^;]+)")
        );
        return match ? match[2] : null;
      };

      window.setCookie = function (name, value, days = 30) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/`;
      };
    }

    const loadCSS = (href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.admin = "true";
      document.head.appendChild(link);
    };

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.dataset.admin = "true";
        script.onload = resolve;
        script.onerror = () => reject(`❌ Failed: ${src}`);
        document.body.appendChild(script);
      });

    // ✅ Load CSS
    loadCSS("/admin/vendor/chartist/css/chartist.min.css");
    loadCSS("/admin/vendor/jquery-nice-select/css/nice-select.css");
    loadCSS(
      "/admin/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
    );

    // ✅ Load scripts sequentially
    (async () => {
      try {
        await loadScript("/admin/vendor/global/global.min.js");
        await loadScript("/admin/vendor/jquery-nice-select/js/jquery.nice-select.min.js");
        await loadScript("/admin/vendor/chart.js/Chart.bundle.min.js");
        await loadScript("/admin/vendor/apexchart/apexchart.js");
        await loadScript("/admin/vendor/chartist/js/chartist.min.js");
        await loadScript("/admin/vendor/peity/jquery.peity.min.js");
        await loadScript("/admin/vendor/bootstrap-datetimepicker/js/moment.js");
        await loadScript("/admin/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js");
        await loadScript("/admin/js/deznav-init.js");
        await loadScript("/admin/js/custom.min.js");
        await loadScript("/admin/js/styleSwitcher.js");
        console.log("✅ Admin scripts loaded");
      } catch (err) {
        console.warn("⚠️ Some admin scripts failed", err);
      }
    })();

    // ✅ Cleanup when leaving admin area
    return () => {
      document
        .querySelectorAll("link[data-admin], script[data-admin]")
        .forEach((el) => el.remove());
      console.log("🧹 Cleaned admin assets");
    };
  }, []);

  // ✅ Dashboard script (only for /admin or /admin/dashboard)
  useEffect(() => {
    if (location.pathname === "/admin" || location.pathname === "/admin/dashboard") {
      const script = document.createElement("script");
      script.src = "/admin/js/dashboard/dashboard-1.js";
      script.async = false;
      script.dataset.admin = "true";
      document.body.appendChild(script);

      return () => script.remove();
    }
  }, [location.pathname]);

  return (
    <div id="main-wrapper" className="show">
      <NavHeader />
      <Header />
      <Sidebar />
      <ChatBox />
      <div className="content-body">
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
