// src/components/Countdown.jsx
//
// Ticks down to eventInfo.startDate once a second. Purely client-side —
// just a setInterval reading the local clock, no server round-trip.

import { useEffect, useState } from "react";
import { eventInfo } from "../data/schedule";

function getTimeParts(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isOver: diff === 0 };
}

export default function Countdown() {
  const [time, setTime] = useState(() => getTimeParts(eventInfo.startDate));

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(getTimeParts(eventInfo.startDate));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  if (time.isOver) {
    return <p className="countdown countdown--over">We&rsquo;re underway — see you there!</p>;
  }

  const units = [
    { label: "days", value: time.days },
    { label: "hours", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "sec", value: time.seconds },
  ];

  return (
    <div className="countdown" role="timer" aria-live="off">
      {units.map((unit) => (
        <div className="countdown__unit" key={unit.label}>
          <span className="countdown__value">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="countdown__label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
