// src/components/Header.jsx
//
// Two logo placements were specifically requested:
//   1. Above the main title, clearly visible on its own.
//   2. Again next to/under the "Lusaka East" portion of the header text.
// Both use the transparent-background version of the logo so it sits
// cleanly on top of the animated gradient.

import logo from "/assets/logo/logo-transparent.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Placement 1: logo standing alone above the title. */}
        <img
          src={logo}
          alt="New Apostolic Church logo — a cross with rays of light"
          className="site-header__logo-top"
          width={72}
          height={72}
        />

        {/* Placement 2: logo repeated alongside the "Lusaka East" line. */}
        <div className="site-header__title-row">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="site-header__logo-inline"
            width={40}
            height={40}
          />
          <p className="site-header__area">Lusaka East Luangwa Apostle Area</p>
        </div>

        <h1 className="site-header__title">
          Young People&rsquo;s Choir
          <span className="site-header__title-accent">Meet &amp; Greet</span>
        </h1>
      </div>
    </header>
  );
}
