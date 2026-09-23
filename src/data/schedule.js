// src/data/schedule.js
//
// Single source of truth for the day's programme.
// Pulled directly from "Meet_and_Greet_Program.pdf" (Lusaka East Luangwa YPC).
// Each section groups a block of the day; each item is one activity/slot.
// `detail` is the longer description shown when a visitor expands an item
// in the interactive Schedule component.

export const scheduleSections = [
  {
    id: "arrival-opening",
    title: "Arrival & Opening",
    time: "10:00 – 11:30",
    items: [
      {
        time: "10:00 – 11:00",
        title: "Arrival & Registration",
        detail:
          "Guests arrive, register, and settle in as seats fill up ahead of the programme start.",
      },
      {
        time: "11:00 – 11:05",
        title: "Opening Prayer",
        detail:
          "A choir leader or elder opens the session in prayer, welcoming everyone and inviting God's presence over the gathering.",
      },
      {
        time: "11:05 – 11:20",
        title: "Welcome & Introduction",
        detail:
          "The host welcomes all present, explains the purpose of Meet and Greet, and gives a brief overview of the programme.",
      },
      {
        time: "11:20 – 11:30",
        title: "Opening Song",
        detail:
          "The choir leads a lively opening song to set a warm, joyful tone for the rest of the session.",
      },
    ],
  },
  {
    id: "indoor-games",
    title: "Performances & Indoor Games",
    time: "11:30 – 13:40",
    items: [
      {
        time: "11:30 – 11:40",
        title: "Poetry",
        detail: "A short poetry recital shared with the group.",
      },
      {
        time: "11:40 – 12:05",
        title: "Name Circle",
        detail:
          "Everyone says their name with an adjective sharing the same first letter, for example Joyful John. Each new person repeats all previous names before adding their own.",
      },
      {
        time: "12:05 – 12:30",
        title: "Two Truths and a Lie",
        detail:
          "Each person shares three statements about themselves. The group guesses which statement is false.",
      },
      {
        time: "12:30 – 12:55",
        title: "Bible Character Charades",
        detail:
          "Players act out Bible characters or stories while the rest of the group guesses who or what is being portrayed.",
      },
      {
        time: "12:55 – 13:20",
        title: "Bible Trivia Quiz",
        detail:
          "The group divides into teams and answers questions from the Bible, with small prizes for the winning team.",
      },
      {
        time: "13:20 – 13:30",
        title: "Drama",
        detail: "A short drama piece performed for the group.",
      },
      {
        time: "13:30 – 13:40",
        title: "Dance",
        detail: "A dance performance to keep the energy up before lunch.",
      },
    ],
  },
  {
    id: "lunch-break",
    title: "Lunch Break",
    time: "13:40 – 14:20",
    items: [
      {
        time: "13:40 – 14:20",
        title: "Lunch Break",
        detail:
          "A break to eat, relax, and mingle informally before moving outdoors for the afternoon games.",
      },
    ],
  },
  {
    id: "outdoor-games",
    title: "Outdoor Games",
    time: "14:20 – 15:55",
    items: [
      {
        time: "14:20 – 14:35",
        title: "Sack Race",
        detail: "Teams race to the finish line while hopping inside a sack.",
      },
      {
        time: "14:35 – 14:50",
        title: "Egg Race",
        detail:
          "Participants balance an egg on a spoon and race to the finish line without dropping it.",
      },
      {
        time: "14:50 – 15:05",
        title: "Ball Toss Introductions",
        detail:
          "A soft ball is tossed around the group. Whoever catches it says their name and answers a fun question, such as their favourite hymn or Bible verse.",
      },
      {
        time: "15:05 – 15:20",
        title: "Song Race",
        detail:
          "Teams take turns singing songs on a given theme. A team is eliminated if it cannot respond within a few seconds.",
      },
      {
        time: "15:20 – 15:35",
        title: "Scavenger Hunt",
        detail:
          "Teams search the venue for Bible themed items or answer clues hidden around the grounds.",
      },
      {
        time: "15:35 – 15:55",
        title: "Eating Competition",
        detail:
          "A light hearted contest where participants race to finish a small snack first, for laughs and fellowship.",
      },
    ],
  },
  {
    id: "closing",
    title: "Closing",
    time: "15:55 – 16:00",
    items: [
      {
        time: "15:55 – 16:00",
        title: "Prize Giving & Closing",
        detail:
          "Small prizes are awarded to winners from the day's games, followed by a closing song and a closing prayer to end the session.",
      },
    ],
  },
];

// Printed on the flyer under the programme table: every game (indoor and
// outdoor) is performed by 3 representatives from each district.
export const gameParticipationNote =
  "In each and every game, 3 people from each district will perform. This applies to all indoor and outdoor games.";

// Core event facts, reused across the Hero, EventDetails, calendar (.ics)
// generator, and the JSON-LD structured data in index.html.
export const eventInfo = {
  name: "Lusaka East Luangwa YPC Meet & Greet",
  tagline: "Fun · Fellowship · Faith",
  description:
    "A day of connection, games, music, and spiritual growth for the Lusaka East Luangwa Apostle Area Young People's Choir. Everyone is welcome.",
  startDate: "2026-10-10T10:00:00+02:00",
  endDate: "2026-10-10T16:00:00+02:00",
  venueName: "Olympia Park, New Apostolic Church",
  venueAddress: "Olympia Park, Lusaka, Zambia",
  // Approximate coordinates for Olympia Park, Lusaka — used for the embedded map.
  lat: -15.3833,
  lng: 28.3833,
  bring: "Lunch and a bottle of water",
};
