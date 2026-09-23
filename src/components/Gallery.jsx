// src/components/Gallery.jsx
//
// Static photo grid with 5 placeholder images (see public/assets/gallery).
// Clicking a thumbnail opens a simple in-page lightbox. No upload feature —
// swapping in real event photos later just means replacing the files in
// public/assets/gallery and, if needed, updating the `alt` text below.

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

// import.meta.env.BASE_URL resolves to "/" in dev and "/LELLAYPC/" in the
// production build (see vite.config.js), so these paths work in both
// without hardcoding the GitHub Pages subpath.
const GALLERY_IMAGES = [1, 2, 3, 4, 5].map((n) => ({
  src: `${import.meta.env.BASE_URL}assets/gallery/placeholder-${n}.jpg`,
  alt: `Meet & Greet photo placeholder ${n} — to be replaced with an event photo`,
}));

export default function Gallery() {
  const revealRef = useScrollReveal();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="section" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div ref={revealRef} className="reveal gallery__intro">
          <h2 id="gallery-heading">Gallery</h2>
          <p>Photos from the day will go here. check back after the event.</p>
        </div>

        <div className="gallery__grid">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="gallery__thumb"
              onClick={() => setActiveImage(index)}
              aria-label={`Open image ${index + 1} of ${GALLERY_IMAGES.length}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>

        {activeImage !== null && (
          <div
            className="gallery__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged gallery image"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={GALLERY_IMAGES[activeImage].src}
              alt={GALLERY_IMAGES[activeImage].alt}
            />
            <button
              type="button"
              className="gallery__lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close enlarged image"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
