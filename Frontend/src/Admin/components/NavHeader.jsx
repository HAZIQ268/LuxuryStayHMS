import React from "react";

function NavHeader() {
  return (
    <div className="nav-header">
      <a href="/" className="brand-logo">
        <svg
          className="logo-abbr"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <rect
              className="rect-primary-rect"
              width="80"
              height="80"
              rx="16"
              fill="#1362FC"
            />
            <circle cx="42" cy="19" r="10" fill="white" />
            <circle cx="75.5" cy="76.5" r="16.5" fill="#12A7FB" />
            <circle cx="5.5" cy="1.5" r="17.5" fill="#1362FC" />
            <circle
              className="rect-primary-rect-1"
              cx="5.5"
              cy="1.5"
              r="16.5"
              stroke="white"
              strokeOpacity="0.66"
              strokeWidth="2"
            />
            <path
              d="M33.7656 87.2159C34.9565 76.5246 37.5874 53.6112 38.5845 47.4881V47.4881C39.1698 43.8941 40.2547 47.2322 39.8692 50.8531C38.9933 59.0813 37.1429 74.1221 35.5121 87.4131C33.1225 106.889 33.3507 95.974 33.7635 88.0818"
              stroke="white"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                className="rect-primary-rect"
                width="80"
                height="80"
                rx="16"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="brand-title"
          width="123"
          height="68"
          viewBox="0 0 123 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.376 11.22C9.996 11.22 8.092 12.92 7.616 15.3C7.14 17.544 8.568 19.38 10.948 19.38C13.192 19.38 15.3 17.544 15.776 15.3C16.252 12.92 14.62 11.22 12.376 11.22ZM3.672 36.312L2.652 42.092C1.768 46.988 5.372 51 10.2 51C11.22 51 11.9 50.864 12.104 49.844C12.308 48.416 10.404 46.92 11.152 42.976L14.416 24.072C14.892 21.284 13.464 21.216 10.676 21.216C8.296 21.216 6.256 21.692 5.78 24.072L3.672 36.312Z"
            fill="#383838"
          />
        </svg>
      </a>

      <div className="nav-control">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
