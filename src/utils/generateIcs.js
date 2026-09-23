// src/utils/generateIcs.js
//
// Builds a standard .ics calendar file entirely in the browser (no server
// involved) from the event's core details, then triggers a download.
// Works with Google Calendar, Outlook, Apple Calendar, and most others.

import { eventInfo } from "../data/schedule";

// Converts an ISO datetime string (e.g. "2026-10-10T10:00:00+02:00") into
// the compact UTC format .ics files expect: YYYYMMDDTHHMMSSZ
function toIcsDate(isoString) {
  const date = new Date(isoString);
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function downloadEventIcs() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//LELLAYPC//Meet and Greet//EN",
    "BEGIN:VEVENT",
    `UID:lellaypc-meet-greet-${Date.now()}@crislibjr.github.io`,
    `DTSTAMP:${toIcsDate(new Date().toISOString())}`,
    `DTSTART:${toIcsDate(eventInfo.startDate)}`,
    `DTEND:${toIcsDate(eventInfo.endDate)}`,
    `SUMMARY:${eventInfo.name}`,
    `DESCRIPTION:${eventInfo.description}`,
    `LOCATION:${eventInfo.venueAddress}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  const blob = new Blob([lines.join("\r\n")], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "LELLAYPC-Meet-and-Greet.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
