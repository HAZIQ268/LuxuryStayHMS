/* global $, jQuery */
"use strict";

// Cookie setter helper
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

// Add theme/layout switcher
function addSwitcher() {
  const dzSwitcher = `
    <div class="sidebar-right">
      <div class="bg-overlay"></div>
      <a class="sidebar-right-trigger" href="javascript:void(0);">
        <span><i class="fa fa-cog fa-spin"></i></span>
      </a>
      <a class="sidebar-close-trigger" href="javascript:void(0);">
        <span><i class="la-times las"></i></span>
      </a>
      <div class="sidebar-right-inner">
        <h4>Pick your style</h4>
        <div class="tab-content">
          <!-- Theme Tab -->
          <div class="fade tab-pane active show" id="tab1">
            <div class="admin-settings">
              <div class="row">
                <div class="col-sm-12">
                  <p>Background</p>
                  <select class="default-select form-control wide" id="theme_version" name="theme_version">
                    <option value="" disabled selected hidden>Choose Mode</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <p>Primary Color</p>
                  <div>
                    ${Array.from({ length: 15 }, (_, i) => `
                      <span>
                        <input class="chk-col-primary" id="primary_color_${i+1}" name="primary_bg" type="radio" value="color_${i+1}">
                        <label for="primary_color_${i+1}"></label>
                      </span>`).join('')}
                  </div>
                </div>
                <div class="col-sm-6">
                  <p>Navigation Header</p>
                  <div>
                    ${Array.from({ length: 15 }, (_, i) => `
                      <span>
                        <input class="chk-col-primary" id="nav_header_color_${i+1}" name="navigation_header" type="radio" value="color_${i+1}">
                        <label for="nav_header_color_${i+1}"></label>
                      </span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Layout Tab -->
          <div class="fade tab-pane" id="tab2">
            <div class="admin-settings">
              <div class="row">
                <div class="col-sm-6">
                  <p>Layout</p>
                  <select class="default-select form-control wide" id="theme_layout" name="theme_layout">
                    <option value="" disabled selected hidden>Choose Layout</option>
                    <option value="vertical">Vertical</option>
                    <option value="horizontal">Horizontal</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <p>Header Position</p>
                  <select class="default-select form-control wide" id="header_position" name="header_position">
                    <option value="" disabled selected hidden>Choose Header Position</option>
                    <option value="static">Static</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <p>Sidebar Style</p>
                  <select class="default-select form-control wide" id="sidebar_style" name="sidebar_style">
                    <option value="" disabled selected hidden>Choose Sidebar</option>
                    <option value="full">Full</option>
                    <option value="mini">Mini</option>
                    <option value="compact">Compact</option>
                    <option value="modern">Modern</option>
                    <option value="overlay">Overlay</option>
                    <option value="icon-hover">Icon-hover</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <p>Sidebar Position</p>
                  <select class="default-select form-control wide" id="sidebar_position" name="sidebar_position">
                    <option value="" disabled selected hidden>Choose Sidebar Position</option>
                    <option value="static">Static</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- Content Tab -->
          <div class="fade tab-pane" id="tab3">
            <div class="admin-settings">
              <div class="row">
                <div class="col-sm-6">
                  <p>Container</p>
                  <select class="default-select form-control wide" id="container_layout" name="container_layout">
                    <option value="" disabled selected hidden>Choose Container</option>
                    <option value="wide">Wide</option>
                    <option value="boxed">Boxed</option>
                    <option value="wide-boxed">Wide Boxed</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <p>Body Font</p>
                  <select class="default-select form-control wide" id="typography" name="typography">
                    <option value="" disabled selected hidden>Choose Font</option>
                    <option value="roboto">Roboto</option>
                    <option value="poppins">Poppins</option>
                    <option value="opensans">Open Sans</option>
                    <option value="HelveticaNeue">HelveticaNeue</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  if ($("#dzSwitcher").length === 0) {
    $("body").append(dzSwitcher);

    $(".sidebar-right-trigger").on("click", function () {
      $(".sidebar-right").toggleClass("show");
    });
    $(".sidebar-close-trigger,.bg-overlay").on("click", function () {
      $(".sidebar-right").removeClass("show");
    });
  }
}

(function ($) {
  "use strict";
  addSwitcher();

  const body = $("body");
  const html = $("html");

  // Select elements
  const typographySelect = $("#typography");
  const versionSelect = $("#theme_version");
  const layoutSelect = $("#theme_layout");
  const sidebarStyleSelect = $("#sidebar_style");
  const sidebarPositionSelect = $("#sidebar_position");
  const headerPositionSelect = $("#header_position");
  const containerLayoutSelect = $("#container_layout");
  const themeDirectionSelect = $("#theme_direction");

  // Event handlers
  typographySelect.on("change", function () {
    body.attr("data-typography", this.value);
    setCookie("typography", this.value);
  });

  versionSelect.on("change", function () {
    body.attr("data-theme-version", this.value);
    setCookie("version", this.value);
  });

  layoutSelect.on("change", function () {
    body.attr("data-layout", this.value);
    setCookie("layout", this.value);
  });

  sidebarStyleSelect.on("change", function () {
    body.attr("data-sidebar-style", this.value);
    setCookie("sidebarStyle", this.value);
  });

  sidebarPositionSelect.on("change", function () {
    body.attr("data-sidebar-position", this.value);
    setCookie("sidebarPosition", this.value);
  });

  headerPositionSelect.on("change", function () {
    body.attr("data-header-position", this.value);
    setCookie("headerPosition", this.value);
  });

  containerLayoutSelect.on("change", function () {
    body.attr("data-container", this.value);
    setCookie("containerLayout", this.value);
  });

  themeDirectionSelect.on("change", function () {
    html.attr("dir", this.value).attr("class", this.value);
    body.attr("direction", this.value);
    setCookie("direction", this.value);
  });

  $("input[name='navigation_header']").on("click", function () {
    body.attr("data-nav-headerbg", this.value);
    setCookie("navheaderBg", this.value);
  });

  $("input[name='primary_bg']").on("click", function () {
    body.attr("data-primary", this.value);
    setCookie("primary", this.value);
  });

})(jQuery);
