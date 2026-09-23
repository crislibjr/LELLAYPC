// src/App.jsx
//
// Assembles the page. Section order follows the agreed structure:
// Header (logo/title) -> Hero -> Welcome -> Schedule -> Event details ->
// Gallery -> Scripture/closing -> Download programme -> Contact -> Footer.
// BackgroundToggle renders the fixed animated backdrop behind all of it.

import BackgroundToggle from "./components/BackgroundToggle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Schedule from "./components/Schedule";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import ScriptureClosing from "./components/ScriptureClosing";
import DownloadProgram from "./components/DownloadProgram";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BackgroundToggle />
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Schedule />
        <EventDetails />
        <Gallery />
        <ScriptureClosing />
        <DownloadProgram />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
