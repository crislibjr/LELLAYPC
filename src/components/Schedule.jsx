// src/components/Schedule.jsx
//
// Renders the full timed programme, grouped into the sections defined in
// src/data/schedule.js. Each activity is a <button> that expands to show
// its longer description — implemented with plain useState (one open key
// at a time per section) rather than the native <details> element, so we
// can animate the reveal and keep consistent styling across browsers.

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { scheduleSections, gameParticipationNote } from "../data/schedule";

function ScheduleItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="schedule-item">
      <button
        type="button"
        className="schedule-item__trigger"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="schedule-item__time">{item.time}</span>
        <span className="schedule-item__title">{item.title}</span>
        <span className="schedule-item__chevron" aria-hidden="true">
          {isOpen ? "–" : "+"}
        </span>
      </button>
      {isOpen && <p className="schedule-item__detail">{item.detail}</p>}
    </li>
  );
}

function ScheduleSectionBlock({ section }) {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="reveal glass-panel schedule-section">
      <div className="schedule-section__header">
        <h3>{section.title}</h3>
        <span className="schedule-section__time">{section.time}</span>
      </div>
      <ul className="schedule-section__list">
        {section.items.map((item) => (
          <ScheduleItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function Schedule() {
  const headingRef = useScrollReveal();

  return (
    <section className="section" id="schedule" aria-labelledby="schedule-heading">
      <div className="container">
        <div ref={headingRef} className="reveal schedule__intro">
          <p className="eyebrow">10:00 – 16:00</p>
          <h2 id="schedule-heading">The day&rsquo;s programme</h2>
          <p>Tap any activity for a quick rundown of how it works.</p>
          <p className="schedule__note">{gameParticipationNote}</p>
        </div>

        <div className="schedule__sections">
          {scheduleSections.map((section) => (
            <ScheduleSectionBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
