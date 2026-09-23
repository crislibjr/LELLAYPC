// src/components/ShareButtons.jsx
//
// Two "share" links built from plain URL schemes that WhatsApp and
// Facebook both support for pre-filled sharing — no SDK, no backend,
// just an <a> tag with a constructed href.

import { eventInfo } from "../data/schedule";

export default function ShareButtons() {
  const pageUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${eventInfo.name} — ${eventInfo.tagline}. Join us!`;

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    `${shareText} ${pageUrl}`
  )}`;

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    pageUrl
  )}`;

  return (
    <div className="share-buttons">
      <a
        className="btn"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true">💬</span> Share on WhatsApp
      </a>
      <a
        className="btn"
        href={facebookHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true">📘</span> Share on Facebook
      </a>
    </div>
  );
}
