// src/components/DownloadProgram.jsx
//
// Static download: a plain link to the original programme PDF, copied
// into public/assets/program/ at build time. To update the programme
// later, replace that file with a new PDF of the same name (or update
// the href below if the filename changes) — no code changes needed
// beyond that.

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function DownloadProgram() {
  const revealRef = useScrollReveal();

  return (
    <section className="section" id="download" aria-labelledby="download-heading">
      <div className="container">
        <div ref={revealRef} className="reveal glass-panel download__card">
          <h2 id="download-heading">Download the full programme</h2>
          <p>
            Prefer a printable copy of the day&rsquo;s activity plan? Grab the
            PDF below.
          </p>
          <a
            className="btn btn-gold"
            href={`${import.meta.env.BASE_URL}assets/program/Meet_and_Greet_Program.pdf`}
            download
          >
            <span aria-hidden="true">⬇</span> Download Programme (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
