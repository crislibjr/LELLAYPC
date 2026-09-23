// src/components/ScriptureClosing.jsx
//
// The two scripture references and closing taglines from the printed
// flyers, given their own quiet moment before the practical footer
// sections (download, contact).

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ScriptureClosing() {
  const revealRef = useScrollReveal();

  return (
    <section className="section" id="scripture" aria-label="Scripture and closing words">
      <div className="container">
        <div ref={revealRef} className="reveal scripture__block">
          <blockquote>
            &ldquo;How good and pleasant it is when God&rsquo;s people live
            together in unity!&rdquo;
            <cite>— Psalm 133:1</cite>
          </blockquote>
          <blockquote>
            &ldquo;Don&rsquo;t be afraid, just believe.&rdquo;
            <cite>— Mark 5:36</cite>
          </blockquote>
          <p className="scripture__tagline">
            Let&rsquo;s meet, laugh, sing and grow together in Christ! See you
            there!
          </p>
        </div>
      </div>
    </section>
  );
}
