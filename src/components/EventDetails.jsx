// src/components/EventDetails.jsx
//
// Practical logistics in one place: date, time, venue, what to bring, and
// an embedded Google Map of the venue. The map uses Google's no-API-key
// "output=embed" iframe form, so it works without any backend or billing
// account — appropriate for a static site.

import { useScrollReveal } from "../hooks/useScrollReveal";
import { eventInfo } from "../data/schedule";

export default function EventDetails() {
  const revealRef = useScrollReveal();

  const mapQuery = encodeURIComponent(eventInfo.venueAddress);
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`;

  return (
    <section className="section" id="details" aria-labelledby="details-heading">
      <div className="container details__grid">
        <div ref={revealRef} className="reveal glass-panel details__card">
          <h2 id="details-heading">Event details</h2>
          <ul className="details__list">
            <li>
              <strong>Date</strong>
              <span>Friday, 10 October 2026</span>
            </li>
            <li>
              <strong>Time</strong>
              <span>10:00 – 16:00 (6 hours)</span>
            </li>
            <li>
              <strong>Venue</strong>
              <span>{eventInfo.venueName}</span>
            </li>
            <li>
              <strong>Bring</strong>
              <span>{eventInfo.bring}</span>
            </li>
          </ul>
        </div>

        <div className="details__map glass-panel">
          <iframe
            title={`Map showing ${eventInfo.venueName}`}
            src={mapSrc}
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: "inherit" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
