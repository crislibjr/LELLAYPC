// src/components/Hero.jsx
//
// The first full section a visitor sees below the header: the day's theme,
// the essential date/venue facts, a live countdown, and the two
// zero-backend actions (add to calendar, share).

import { useScrollReveal } from "../hooks/useScrollReveal";
import Countdown from "./Countdown";
import ShareButtons from "./ShareButtons";
import { downloadEventIcs } from "../utils/generateIcs";
import { eventInfo } from "../data/schedule";

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section className="section hero" id="hero">
      <div className="container">
        <div ref={revealRef} className="reveal glass-panel hero__card">
          <p className="eyebrow">{eventInfo.tagline}</p>
          <h2 className="hero__heading">Let&rsquo;s connect, have fun &amp; grow together</h2>
          <p className="hero__description">{eventInfo.description}</p>

          <dl className="hero__facts">
            <div>
              <dt>Date</dt>
              <dd>Friday, 10 October 2026</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>10:00 – 16:00</dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>{eventInfo.venueName}</dd>
            </div>
          </dl>

          <Countdown />

          <div className="hero__actions">
            <button type="button" className="btn btn-gold" onClick={downloadEventIcs}>
              <span aria-hidden="true">📅</span> Add to calendar
            </button>
          </div>

          <ShareButtons />
        </div>
      </div>
    </section>
  );
}
