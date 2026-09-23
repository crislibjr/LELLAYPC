// src/components/Contact.jsx
//
// Placeholder contact details, as requested — every value here is a
// stand-in. Update the CONTACTS array below with real names/numbers/
// handles once they're confirmed; nothing else in the component needs
// to change.

import { useScrollReveal } from "../hooks/useScrollReveal";

// TODO: replace every value below with the real contact details.
const CONTACTS = [
  { label: "Programme enquiries", value: "Add phone number" },
  { label: "Email", value: "Add email address" },
  { label: "WhatsApp", value: "Add WhatsApp number" },
  { label: "Facebook / Instagram", value: "Add social handle" },
];

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div ref={revealRef} className="reveal glass-panel contact__card">
          <h2 id="contact-heading">Contact</h2>
          <p className="contact__note">
            Details below are placeholders and will be updated closer to the
            event.
          </p>
          <dl className="contact__list">
            {CONTACTS.map((contact) => (
              <div key={contact.label}>
                <dt>{contact.label}</dt>
                <dd>{contact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
