const days = [
  { day: 1, title: "The Beginning", type: "Letter", content: "Day 1 content goes here. You can write a small letter about why you made this for her and how much she means to you." },
  { day: 2, title: "Tiny Memories", type: "Memory", content: "Write 3 short memories you love with her.\n\n1)\n2)\n3)" },
  { day: 3, title: "Little Quiz", type: "Fun", content: "Ask her some fun questions.\n\nWho fell first?\nWho is more dramatic?\nWho says sorry first usually?" },
  { day: 4, title: "What I Admire", type: "Deep", content: "Write about her personality. Not just looks. Things like kindness, strength, patience." },
  { day: 5, title: "Cute Dare", type: "Playful", content: "Give her a small dare.\n\nExample: Send me your current selfie.\nOr: Tell me one thing you like about yourself today." },
  { day: 6, title: "Song Of The Day", type: "Music", content: "Share a song link and explain why it reminds you of her." },
  { day: 7, title: "Inside Joke", type: "Fun", content: "Write about one inside joke between you two. Tease her a bit in a sweet way." },
  { day: 8, title: "Future Plans", type: "Dreaming", content: "List 5 things you want to do with her in the future.\n\nTrips, dates, lazy days, anything." },
  { day: 9, title: "Thank You", type: "Gratitude", content: "Write 10 tiny things you are grateful for about her.\n\nEven small things like the way she texts, laughs, or says your name." },
  { day: 10, title: "Would You Rather", type: "Fun", content: "Create some would you rather questions for her.\n\nExample:\n\nWould you rather cuddle all day or go on a long drive?\nWould you rather movie night or stargazing?" },
  { day: 11, title: "How You Changed Me", type: "Deep", content: "Tell her how your life feels different and better because she is in it." },
  { day: 12, title: "Random Fact", type: "Light", content: "Share a random fact about anything and connect it to her in a cute way." },
  { day: 13, title: "You Look So Good", type: "Flirty", content: "Write about the things you find attractive in her. Eyes, smile, voice, brain, everything." },
  { day: 14, title: "My Favourite Day", type: "Memory", content: "Describe your favourite day spent with her like a short story." },
  { day: 15, title: "Check-In", type: "Soft", content: "Ask how she is really feeling there. Remind her she is not alone and she can always lean on you." },
  { day: 16, title: "Mini Playlist", type: "Music", content: "Write 2 or 3 songs as a tiny playlist and one line why you chose each." },
  { day: 17, title: "Movie Scene", type: "Fun", content: "Describe you and her as if you are in a movie scene together." },
  { day: 18, title: "How I Grow", type: "Deep", content: "Talk about how loving her is making you grow as a person." },
  { day: 19, title: "Nicknames", type: "Playful", content: "Explain the story behind her nickname or give her a new one with meaning." },
  { day: 20, title: "I Believe In You", type: "Support", content: "Write about her dreams and how you want to support her in them." },
  { day: 21, title: "When You Come Back", type: "Flirty", content: "Describe how you will hug her, tease her, or hold her when she returns." },
  { day: 22, title: "First Impressions", type: "Memory", content: "Write about how you saw her the first time vs how you see her now." },
  { day: 23, title: "My Silly Thoughts", type: "Light", content: "Write the silly thoughts you get when you miss her too much." },
  { day: 24, title: "Questions For You", type: "Deep", content: "Ask her 5 questions about life, love, or future that you genuinely want to know." },
  { day: 25, title: "Lines For You", type: "Art", content: "Write a few lines or lyrics inspired by her. It does not have to be perfect." },
  { day: 26, title: "Soft Confessions", type: "Emotional", content: "Say a few things you usually feel shy or scared to tell her, in a gentle way." },
  { day: 27, title: "Our Future Home", type: "Fun", content: "Describe how it would be if you both lived together. The chaos, the peace, the routine." },
  { day: 28, title: "Thank You For Staying", type: "Gratitude", content: "Thank her for choosing to stay in your life and for the effort she puts in." },
  { day: 29, title: "One Day Before", type: "Build Up", content: "Write about how you are feeling with just one day left for her return." },
  { day: 30, title: "Almost In My Arms", type: "Final", content: "Write a longer letter. Recap the month. Tell her how proud you are and how excited you are to see her again." }
];

const grid = document.getElementById("days-grid");
const modalOverlay = document.getElementById("modal-overlay");
const closeModalButton = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalContent = document.getElementById("modal-content");

function createDayCards() {
  days.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("day-card");
    const number = document.createElement("div");
    number.classList.add("day-number");
    number.textContent = "Day " + item.day;
    const title = document.createElement("div");
    title.classList.add("day-title");
    title.textContent = item.title;
    card.appendChild(number);
    card.appendChild(title);
    card.addEventListener("click", () => openDay(item));
    grid.appendChild(card);
  });
}

function openDay(item) {
  modalTitle.textContent = "Day " + item.day + " • " + item.title;
  modalType.textContent = item.type;
  modalContent.textContent = item.content;
  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
}

closeModalButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

createDayCards();
