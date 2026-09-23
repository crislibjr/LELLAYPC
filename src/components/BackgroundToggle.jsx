// src/components/BackgroundToggle.jsx
//
// Renders the live animated background using @shadergradient/react and
// lets the visitor switch between the two presets that were supplied for
// this site ("first" = violet/blue sphere, "second" = teal/orange sphere).
//
// The canvas is pinned behind everything else with position: fixed, so it
// scrolls with the viewport rather than the page — every section sits on
// top of the same continuous animated backdrop.

import { useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// The two presets are kept as plain prop objects so the toggle is just a
// matter of picking which object to spread onto <ShaderGradient />.
const PRESETS = {
  first: {
    animate: "on",
    axesHelper: "off",
    bgColor1: "#000000",
    bgColor2: "#000000",
    brightness: 1.5,
    cAzimuthAngle: 250,
    cDistance: 1.5,
    cPolarAngle: 140,
    cameraZoom: 12.5,
    color1: "#809bd6",
    color2: "#910aff",
    color3: "#af38ff",
    embedMode: "off",
    envPreset: "city",
    fov: 45,
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.5,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 140,
    shader: "defaults",
    type: "sphere",
    uAmplitude: 7,
    uDensity: 0.8,
    uFrequency: 5.5,
    uSpeed: 0.3,
    uStrength: 0.4,
    uTime: 0,
    wireframe: false,
  },
  second: {
    animate: "on",
    axesHelper: "off",
    bgColor1: "#000000",
    bgColor2: "#000000",
    brightness: 0.8,
    cAzimuthAngle: 270,
    cDistance: 0.5,
    cPolarAngle: 180,
    cameraZoom: 15.1,
    color1: "#73bfc4",
    color2: "#ff810a",
    color3: "#8da0ce",
    embedMode: "off",
    envPreset: "city",
    fov: 45,
    grain: "on",
    lightType: "env",
    pixelDensity: 1,
    positionX: -0.1,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.4,
    rotationX: 0,
    rotationY: 130,
    rotationZ: 70,
    shader: "defaults",
    type: "sphere",
    uAmplitude: 3.2,
    uDensity: 0.8,
    uFrequency: 5.5,
    uSpeed: 0.3,
    uStrength: 0.3,
    uTime: 0,
    wireframe: false,
  },
};

export default function BackgroundToggle() {
  // Which preset is currently showing. Defaults to "first".
  const [preset, setPreset] = useState("first");

  const nextPreset = preset === "first" ? "second" : "first";

  return (
    <>
      {/* Fixed, full-viewport, behind everything (see z-index in App.jsx's
          layering) and non-interactive so clicks pass through to the page. */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <ShaderGradientCanvas
          style={{ width: "100%", height: "100%" }}
          pixelDensity={1}
          fov={PRESETS[preset].fov}
        >
          <ShaderGradient {...PRESETS[preset]} />
        </ShaderGradientCanvas>
        {/* A soft dark scrim keeps foreground text readable regardless of
            which preset is playing underneath. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6,10,18,0.35) 0%, rgba(6,10,18,0.55) 55%, rgba(6,10,18,0.75) 100%)",
          }}
        />
      </div>

      {/* The toggle itself: fixed to the corner so it's reachable from
          anywhere on the page, not just the hero. */}
      <button
        type="button"
        className="btn background-toggle"
        onClick={() => setPreset(nextPreset)}
        aria-label={`Switch background theme (currently showing "${preset}")`}
        style={{
          position: "fixed",
          top: "1.25rem",
          right: "1.25rem",
          zIndex: 40,
        }}
      >
        <span aria-hidden="true">🎨</span>
        Switch background
      </button>
    </>
  );
}
