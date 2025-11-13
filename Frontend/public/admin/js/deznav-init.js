/* global jQuery, dezSettings */

"use strict";

(function ($) {
  "use strict";

  var dezSettingsOptions = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_1",
    headerBg: "color_1",
    navheaderBg: "color_1",
    sidebarBg: "color_1",
    sidebarStyle: "full",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
  };

  // Initialize settings only if the class is defined
  if (typeof dezSettings !== "undefined") {
    new dezSettings(dezSettingsOptions);
  } else {
    console.warn("dezSettings is not defined. Make sure custom.min.js is loaded.");
  }

  // Handle layout update on resize
  $(window).on("resize", function () {
    if (typeof dezSettings !== "undefined") {
      var layoutValue = $("#container_layout").val() || "full";
      dezSettingsOptions.containerLayout = layoutValue;
      new dezSettings(dezSettingsOptions);
    }
  });
})(jQuery);
