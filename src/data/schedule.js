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
    time: "09:00 – 11:00",
    items: [
      {
        time: "09:00 – 10:00",
        title: "Arrival",
        detail:
          "Guests arrive and settle in as seats fill up ahead of the programme start.",
      },
      {
        time: "10:00 – 10:30",
        title: "Socialization",
        detail:
          "An informal time to greet one another and meet choir members from other congregations.",
      },
      {
        time: "10:30 – 10:35",
        title: "Opening Prayer",
        detail:
          "A choir leader or elder opens the session in prayer, welcoming everyone and inviting God's presence over the gathering.",
      },
      {
        time: "10:35 – 10:50",
        title: "Welcoming Remarks & Introductions",
        detail:
          "The host welcomes all present, explains the purpose of Meet and Greet, and gives a brief overview of the programme.",
      },
      {
        time: "10:50 – 11:00",
        title: "Opening Song",
        detail:
          "The choir leads a lively opening song to set a warm, joyful tone for the rest of the session.",
      },
    ],
  },
  {
    id: "indoor-games",
    title: "Performances & Indoor Games",
    time: "11:00 – 13:00",
    items: [
      {
        time: "11:00 – 11:10",
        title: "Poetry One",
        detail: "A short poetry recital shared with the group.",
      },
      {
        time: "11:10 – 11:20",
        title: "Poetry Two",
        detail: "A second poetry recital shared with the group.",
      },
      {
        time: "11:20 – 11:30",
        title: "Explanation of Games",
        detail:
          "The facilitators explain how each of the indoor games works before everyone splits into groups.",
      },
      {
        time: "11:30 – 12:30",
        title: "Indoor Games (Simultaneous)",
        detail:
          "Games run at the same time in different groups: Country Games, Bible Character Charades, Bible Trivia Quiz, Name Circle, and Two Truths and a Lie.",
      },
      {
        time: "12:30 – 12:45",
        title: "Drama",
        detail: "A short drama piece performed for the group.",
      },
      {
        time: "12:45 – 12:55",
        title: "Dance",
        detail: "A dance performance to keep the energy up before lunch.",
      },
      {
        time: "12:55 – 13:00",
        title: "Closing of Indoor Activities",
        detail: "A brief wrap-up of the indoor programme before lunch.",
      },
    ],
  },
  {
    id: "lunch-break",
    title: "Lunch",
    time: "13:00 – 13:40",
    items: [
      {
        time: "13:00 – 13:40",
        title: "Lunch",
        detail:
          "A break to eat, relax, and mingle informally. Remember to bring your own lunch and a bottle of water.",
      },
    ],
  },
  {
    id: "outdoor-games",
    title: "Outdoor Games",
    time: "13:40 – 15:30",
    items: [
      {
        time: "13:40 – 14:00",
        title: "Mobilization",
        detail:
          "Everyone gathers and moves outdoors, ready to be organised into teams for the afternoon activities.",
      },
      {
        time: "14:00 – 14:10",
        title: "Scavenger Hunt",
        detail:
          "Teams search the venue for Bible themed items or answer clues hidden around the grounds.",
      },
      {
        time: "14:10 – 14:40",
        title: "Outdoor Set 1 (Simultaneous)",
        detail:
          "Sack Race: teams race to the finish line while hopping inside a sack. Egg Race: participants balance an egg on a spoon and race to the finish line without dropping it.",
      },
      {
        time: "14:40 – 15:10",
        title: "Outdoor Set 2 (Simultaneous)",
        detail:
          "Musical Chairs: walk to the music and grab a seat when it stops. Ball Toss: a soft ball is tossed around the group, and whoever it lands on when the music is stopped gets eliminated.",
      },
      {
        time: "15:10 – 15:30",
        title: "Eating Competition",
        detail:
          "A light hearted contest where participants race to finish a small snack first, for laughs and fellowship.",
      },
    ],
  },
  {
    id: "closing",
    title: "Closing",
    time: "15:30 – 16:00",
    items: [
      {
        time: "15:30 – 15:45",
        title: "LSHE Talk",
        detail: "A short talk to close out the day's activities.",
      },
      {
        time: "15:45 – 16:00",
        title: "Conclusion & Closing Remarks",
        detail:
          "Closing remarks and thanks to everyone who joined, bringing the day to a close.",
      },
    ],
  },
];

// The updated flyer no longer prints a game participation note.
export const gameParticipationNote = "";

// Core event facts, reused across the Hero, EventDetails, calendar (.ics)
// generator, and the JSON-LD structured data in index.html.
export const eventInfo = {
  name: "Lusaka East Luangwa YPC Meet & Greet",
  tagline: "Fun · Fellowship · Faith",
  description:
    "A day of connection, games, music, and spiritual growth for the Lusaka East Luangwa Apostle Area Young People's Choir. Everyone is welcome.",
  startDate: "2026-10-10T09:00:00+02:00",
  endDate: "2026-10-10T16:00:00+02:00",
  venueName: "Olympia Park, New Apostolic Church",
  venueAddress: "Olympia Park, Lusaka, Zambia",
  // Approximate coordinates for Olympia Park, Lusaka — used for the embedded map.
  lat: -15.3833,
  lng: 28.3833,
  bring: "Lunch and a bottle of water",
};
