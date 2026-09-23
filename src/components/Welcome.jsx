// src/components/Welcome.jsx
//
// Brief framing text before the detailed schedule — sets expectations for
// first-time visitors before they hit the timed programme.

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Welcome() {
  const revealRef = useScrollReveal();

  return (
    <section className="section" id="welcome" aria-labelledby="welcome-heading">
      <div className="container">
        <div ref={revealRef} className="reveal glass-panel welcome__card">
          <h2 id="welcome-heading">One voice. One faith. One family.</h2>
          <p>
            Meet &amp; Greet brings the Young People&rsquo;s Choir of Lusaka East
            Luangwa Apostle Area together for a day built around three simple
            things: fun, fellowship, and faith. Expect games indoors and out,
            music, a shared meal, and time to build friendships across
            congregations — all anchored in worship and the Word.
          </p>
          <p>
            Whether you sing, play an instrument, or simply want to be part of
            the day, everyone is welcome. Bring a friend.
          </p>
        </div>
      </div>
    </section>
  );
}
