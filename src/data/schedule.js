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
    time: "10:00 – 11:40",
    items: [
      {
        time: "10:00 – 11:00",
        title: "Arrival & Registration",
        detail:
          "Guests arrive, register, and settle in as seats fill up ahead of the programme start.",
      },
      {
        time: "11:00 – 11:15",
        title: "Opening Prayer",
        detail:
          "A choir leader or elder opens the session in prayer, welcoming everyone and inviting God's presence over the gathering.",
      },
      {
        time: "11:15 – 11:25",
        title: "Welcome & Introduction",
        detail:
          "The host welcomes all present, explains the purpose of Meet and Greet, and gives a brief overview of the programme.",
      },
      {
        time: "11:25 – 11:40",
        title: "Opening Song",
        detail:
          "The choir leads a lively opening song to set a warm, joyful tone for the rest of the session.",
      },
    ],
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    time: "11:40 – 13:30",
    items: [
      {
        time: "11:40 – 11:55",
        title: "Name Circle",
        detail:
          "Everyone says their name with an adjective sharing the same first letter, for example Joyful John. Each new person repeats all previous names before adding their own.",
      },
      {
        time: "11:55 – 12:10",
        title: "Two Truths and a Lie",
        detail:
          "Each person shares three statements about themselves. The group guesses which statement is false.",
      },
      {
        time: "12:10 – 12:25",
        title: "Bible Character Charades",
        detail:
          "Players act out Bible characters or stories while the rest of the group guesses who or what is being portrayed.",
      },
      {
        time: "12:25 – 12:40",
        title: "Would You Rather (Clean Edition)",
        detail:
          "The host asks fun questions such as would you rather witness the parting of the Red Sea or be with Daniel in the lions' den, and participants share their answers.",
      },
      {
        time: "12:40 – 12:55",
        title: "Find Someone Who",
        detail:
          "Everyone receives a list of traits such as find someone who sings in the choir, plays football, or joined the church this year, and mingles to match each one.",
      },
      {
        time: "12:55 – 13:15",
        title: "Human Bingo",
        detail:
          "Everyone receives a bingo card with prompts such as has visited another country, plays an instrument, or has three siblings, and mingles to find someone who matches each square.",
      },
      {
        time: "13:15 – 13:30",
        title: "Bible Trivia Quiz",
        detail:
          "The group divides into teams and answers questions from the Bible, with small prizes for the winning team.",
      },
    ],
  },
  {
    id: "refreshment-break",
    title: "Refreshment Break",
    time: "13:30 – 13:45",
    items: [
      {
        time: "13:30 – 13:45",
        title: "Refreshment Break",
        detail:
          "A short break to relax, take refreshments, and mingle informally before moving outdoors.",
      },
    ],
  },
  {
    id: "outdoor-games",
    title: "Outdoor Games",
    time: "13:45 – 15:45",
    items: [
      {
        time: "13:45 – 14:00",
        title: "Sack Race",
        detail: "Teams race to the finish line while hopping inside a sack.",
      },
      {
        time: "14:00 – 14:15",
        title: "Egg Race",
        detail:
          "Participants balance an egg on a spoon and race to the finish line without dropping it.",
      },
      {
        time: "14:15 – 14:30",
        title: "Ball Toss Introductions",
        detail:
          "A soft ball is tossed around the group. Whoever catches it says their name and answers a fun question, such as their favourite hymn or Bible verse.",
      },
      {
        time: "14:30 – 14:50",
        title: "Tower Challenge",
        detail:
          "Teams build the tallest tower they can using cups, paper, or straws within a set time limit.",
      },
      {
        time: "14:50 – 15:05",
        title: "Song Race",
        detail:
          "Teams take turns singing songs on a given theme. A team is eliminated if it cannot respond within a few seconds.",
      },
      {
        time: "15:05 – 15:30",
        title: "Scavenger Hunt",
        detail:
          "Teams search the venue for Bible themed items or answer clues hidden around the grounds.",
      },
      {
        time: "15:30 – 15:45",
        title: "Eating Competition",
        detail:
          "A light hearted contest where participants race to finish a small snack first, for laughs and fellowship.",
      },
    ],
  },
  {
    id: "closing",
    title: "Closing",
    time: "15:45 – 16:00",
    items: [
      {
        time: "15:45 – 16:00",
        title: "Prize Giving & Closing",
        detail:
          "Small prizes are awarded to winners from the day's games, followed by a closing song and a closing prayer to end the session.",
      },
    ],
  },
];

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
