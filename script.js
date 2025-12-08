/* ---------- DAY CONTENT (you fill this later) ---------- */

const days = Array.from({ length: 30 }, (_, i) => {
  const n = i + 1;
  return {
    day: n,
    title: "Day " + n,
    type: "Letter",
    content: `Write your content for Day ${n} here.\n\nUse whatever format you want: letter, list, questions, dare, etc.`
  };
});

// Day 1 custom content
days[0] = {
  day: 1,
  title: "Why I Made This",
  type: "Letter",
  content: `Hii ushashree,
  i know how much you wanted to go back to your hometown and how much you dread being there now. 
  so, i made this site for you. I hope this will get you through this month. 
  Look, im not a coder, so, dont expect much from this site 😅. 
  I know how much you miss me, and I the same.
  Dont worry about anything okay?? In no time we'll see eachother 😉.
  Also, dont argue with your mom.
  I can imagine her being a pain in the ass sometimes, but dont spoil your mood with that.
  If something did happen, just text me or call me. 
  Even if you dont wanna talk about it, its okay... just call me and stay silent.
  I love you my baby. Don't ever doubt that.

Your handsome BF`
};

/* ---------- PUZZLE CONFIG (you MUST edit words + hints) ---------- */
/* Word must be UPPERCASE, only letters, no spaces. */

const puzzleConfig = {
  1: { word: "LILU", hint: "Your petname (4 letters)" },
  2: { word: "NOSE", hint: "What I love on your face" },
  3: { word: "THREE", hint: "The word you always mispronounce" },
  4: { word: "HUG", hint: "What we both need" },
  5: { word: "THEATRE", hint: "Where i said i love you for the first time" },
  6: { word: "STM", hint: "Our favourite spot" },
  7: { word: "MUSLIM", hint: "Someone you hate" },
  8: { word: "HOME", hint: "What being with you feels like (4 letters)" },
  9: { word: "STARE", hint: "What I do when I look at you" },
  10:{ word: "FRIEDRICE", hint: "What we ate on the night of our first time" },
  11:{ word: "GODDESS", hint: "What do i say you look like" },
  12:{ word: "CHEEKS", hint: "Your fav part of my body" },
  13:{ word: "EAT", hint: "What I want to do to you" },
  14:{ word: "LAUGH", hint: "What i love about you" },
  15:{ word: "DIWALI", hint: "Our first night out" },
  16:{ word: "EVERYTHING", hint: "What reminds me of you" },
  17:{ word: "HARD", hint: "What i get when im around you" },
  18:{ word: "BABY", hint: "A word I call you all the time (4 letters if true, else change)" },
  19:{ word: "ITSME", hint: "Your best friend" },
  20:{ word: "NOTHING", hint: "What part of your body i dont like" },
  21:{ word: "BEACH", hint: "Where did we bond over the second most" },
  22:{ word: "FUCK", hint: "What i want to do to you" },
  23:{ word: "VULNERABLE", hint: "How you make me" },
  24:{ word: "MYWIFE", hint: "Maybe one day i can call you…" },
  25:{ word: "MELT", hint: "What i do everytime i see you" },
  26:{ word: "MATHS", hint: "Subject im good at" },
  27:{ word: "CUDDLE", hint: "What i wish i could do with you rn" },
  28:{ word: "PEACE", hint: "What your presence gives me" },
  29:{ word: "CHEAT", hint: "What i would never do" },
  30:{ word: "THEWORLD", hint: "What you mean to me" }
};

/* ---------- PROGRESS + 12-HOUR UNLOCK LOGIC ---------- */

const HOURS_LOCK = 24;
const MS_PER_HOUR = 1000 * 60 * 60;

let solvedDays = JSON.parse(localStorage.getItem("solvedDays") || "{}");
let lastCompletedDay = parseInt(localStorage.getItem("lastCompletedDay") || "0", 10);
let lastCompletedTime = parseInt(localStorage.getItem("lastCompletedTime") || "0", 10);

function getMaxUnlockedDay() {
  if (!lastCompletedDay) {
    return 1;
  }
  const now = Date.now();
  const hoursPassed = (now - lastCompletedTime) / MS_PER_HOUR;
  if (hoursPassed >= HOURS_LOCK) {
    return Math.min(lastCompletedDay + 1, 30);
  }
  return lastCompletedDay;
}

function getTimeRemainingText() {
  if (!lastCompletedDay || !lastCompletedTime) return "";
  const unlockTime = lastCompletedTime + HOURS_LOCK * MS_PER_HOUR;
  const now = Date.now();
  const diffMs = unlockTime - now;
  if (diffMs <= 0) return "";
  const hours = Math.floor(diffMs / MS_PER_HOUR);
  const minutes = Math.floor((diffMs % MS_PER_HOUR) / (1000 * 60));
  const hText = hours > 0 ? `${hours}h ` : "";
  const mText = `${minutes}m`;
  return `${hText}${mText}`;
}

let maxUnlockedDay = getMaxUnlockedDay();

/* ---------- DOM ELEMENTS ---------- */

const gridEl = document.getElementById("days-grid");
const modalOverlay = document.getElementById("modal-overlay");
const closeModalButton = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalContent = document.getElementById("modal-content");

const puzzleOverlay = document.getElementById("puzzle-overlay");
const closePuzzleButton = document.getElementById("close-puzzle");
const puzzleTitle = document.getElementById("puzzle-title");
const puzzleHintEl = document.getElementById("puzzle-hint");
const puzzleGridEl = document.getElementById("puzzle-grid");
const puzzleMessageEl = document.getElementById("puzzle-message");
const keyboardEl = document.getElementById("keyboard");
const heartsContainer = document.getElementById("hearts-container");

/* ---------- BUILD DAY CARDS ---------- */

function createDayCards() {
  gridEl.innerHTML = "";
  const remainingText = getTimeRemainingText();

  days.forEach((item) => {
    const day = item.day;
    const card = document.createElement("div");
    card.classList.add("day-card");

    const number = document.createElement("div");
    number.classList.add("day-number");
    number.textContent = "Day " + day;

    const title = document.createElement("div");
    title.classList.add("day-title");
    title.textContent = item.title;

    const status = document.createElement("div");
    status.classList.add("day-status");

    const canOpen = day <= maxUnlockedDay;
    const isSolved = !!solvedDays[day];

    if (!canOpen) {
      card.classList.add("locked");

      // Only the *next* day shows the countdown
      if (day === maxUnlockedDay + 1 && remainingText) {
        status.textContent = `Next love letter in ${remainingText} 😏`;
      } else {
        status.textContent = "Locked for later 😏";
      }
    } else if (isSolved) {
      status.textContent = "Unlocked 💌";
    } else {
      status.textContent = "Solve the puzzle to unlock";
    }

    card.appendChild(number);
    card.appendChild(title);
    card.appendChild(status);

    if (!canOpen) {
      card.addEventListener("click", () => {
        if (day === maxUnlockedDay + 1 && remainingText) {
          alert(`Relax detective 🤭 your next love letter unlocks in ${remainingText}.`);
        } else {
          alert("This one is for later. One day at a time, baby 😌");
        }
      });
    } else if (isSolved) {
      card.addEventListener("click", () => openDayContent(item));
    } else {
      card.addEventListener("click", () => openPuzzle(day));
    }

    gridEl.appendChild(card);
  });
}


/* ---------- LOVE LETTER MODAL ---------- */

function openDayContent(item) {
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
  if (event.target === modalOverlay) closeModal();
});

/* ---------- WORDLE STATE ---------- */

let currentDay = null;
let answerWord = "";
let wordLength = 0;
let maxRows = 6;
let currentRow = 0;
let currentCol = 0;
let boardTiles = []; // 2D array of tile elements
let keyboardBuilt = false;

const KEY_LAYOUT = [
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM"
];

/* ---------- PUZZLE SETUP ---------- */

function openPuzzle(day) {
  const config = puzzleConfig[day];
  if (!config) {
    alert("No puzzle configured for this day yet.");
    return;
  }

  currentDay = day;
  answerWord = config.word.toUpperCase();
  wordLength = answerWord.length;
  currentRow = 0;
  currentCol = 0;
  boardTiles = [];

  puzzleTitle.textContent = `Unlock Day ${day}`;
  puzzleHintEl.textContent = config.hint;
  puzzleMessageEl.textContent = "";

  buildGrid();
  if (!keyboardBuilt) buildKeyboard();
  clearKeyboardState();

  puzzleOverlay.classList.remove("hidden");
}

function closePuzzle() {
  puzzleOverlay.classList.add("hidden");
}

closePuzzleButton.addEventListener("click", closePuzzle);
puzzleOverlay.addEventListener("click", (event) => {
  if (event.target === puzzleOverlay) closePuzzle();
});

function buildGrid() {
  puzzleGridEl.innerHTML = "";
  puzzleGridEl.style.gridTemplateRows = `repeat(${maxRows}, 1fr)`;

  for (let r = 0; r < maxRows; r++) {
    const rowEl = document.createElement("div");
    rowEl.classList.add("puzzle-row");
    rowEl.style.gridTemplateColumns = `repeat(${wordLength}, 1fr)`;
    const rowTiles = [];
    for (let c = 0; c < wordLength; c++) {
      const tile = document.createElement("div");
      tile.classList.add("puzzle-tile");
      tile.dataset.row = r;
      tile.dataset.col = c;
      rowEl.appendChild(tile);
      rowTiles.push(tile);
    }
    puzzleGridEl.appendChild(rowEl);
    boardTiles.push(rowTiles);
  }
}

function buildKeyboard() {
  keyboardEl.innerHTML = "";
  KEY_LAYOUT.forEach((row, rowIndex) => {
    for (const ch of row) {
      const btn = document.createElement("button");
      btn.classList.add("key");
      btn.textContent = ch;
      btn.dataset.key = ch;
      btn.addEventListener("click", () => handleKeyPress(ch));
      keyboardEl.appendChild(btn);
    }

    if (rowIndex === 1) {
      // Add enter and delete on separate "row"
      const enterBtn = document.createElement("button");
      enterBtn.classList.add("key", "key-wide");
      enterBtn.textContent = "Enter";
      enterBtn.dataset.key = "ENTER";
      enterBtn.addEventListener("click", () => handleKeyPress("ENTER"));
      keyboardEl.appendChild(enterBtn);

      const delBtn = document.createElement("button");
      delBtn.classList.add("key", "key-wide");
      delBtn.textContent = "Del";
      delBtn.dataset.key = "DEL";
      delBtn.addEventListener("click", () => handleKeyPress("DEL"));
      keyboardEl.appendChild(delBtn);
    }
  });
  keyboardBuilt = true;

  // Also support physical keyboard
  document.addEventListener("keydown", handlePhysicalKey);
}

function clearKeyboardState() {
  const keys = keyboardEl.querySelectorAll(".key");
  keys.forEach((k) => {
    k.classList.remove("key-correct", "key-present", "key-absent");
  });
}

/* ---------- KEY HANDLING ---------- */

function handlePhysicalKey(e) {
  if (puzzleOverlay.classList.contains("hidden")) return;
  const key = e.key;
  if (key === "Enter") {
    handleKeyPress("ENTER");
  } else if (key === "Backspace") {
    handleKeyPress("DEL");
  } else {
    const upper = key.toUpperCase();
    if (upper.length === 1 && upper >= "A" && upper <= "Z") {
      handleKeyPress(upper);
    }
  }
}

function handleKeyPress(key) {
  if (!answerWord) return;
  if (key === "ENTER") {
    submitGuess();
    return;
  }
  if (key === "DEL") {
    deleteLetter();
    return;
  }
  if (currentCol >= wordLength) return;
  const tile = boardTiles[currentRow][currentCol];
  tile.textContent = key;
  currentCol++;
}

function deleteLetter() {
  if (currentCol === 0) return;
  currentCol--;
  const tile = boardTiles[currentRow][currentCol];
  tile.textContent = "";
}

/* ---------- GUESS CHECKING ---------- */

function submitGuess() {
  if (currentCol < wordLength) {
    setPuzzleMessage("Fill the row first, braincell 😏");
    return;
  }

  const guess = boardTiles[currentRow].map(t => t.textContent).join("");

  evaluateGuess(guess);
}

function evaluateGuess(guess) {
  const guessArr = guess.split("");
  const answerArr = answerWord.split("");

  const result = new Array(wordLength).fill("absent");
  const letterCount = {};

  // count letters in answer
  for (let i = 0; i < wordLength; i++) {
    const ch = answerArr[i];
    letterCount[ch] = (letterCount[ch] || 0) + 1;
  }

  // first pass: correct
  for (let i = 0; i < wordLength; i++) {
    if (guessArr[i] === answerArr[i]) {
      result[i] = "correct";
      letterCount[guessArr[i]]--;
    }
  }

  // second pass: present
  for (let i = 0; i < wordLength; i++) {
    if (result[i] === "correct") continue;
    const ch = guessArr[i];
    if (letterCount[ch] > 0) {
      result[i] = "present";
      letterCount[ch]--;
    }
  }

  // update tiles + keyboard
  for (let i = 0; i < wordLength; i++) {
    const tile = boardTiles[currentRow][i];
    tile.classList.remove("tile-correct", "tile-present", "tile-absent");
    const ch = guessArr[i];
    if (result[i] === "correct") {
      tile.classList.add("tile-correct");
      updateKeyboardKey(ch, "correct");
    } else if (result[i] === "present") {
      tile.classList.add("tile-present");
      updateKeyboardKey(ch, "present");
    } else {
      tile.classList.add("tile-absent");
      updateKeyboardKey(ch, "absent");
    }
  }

  if (guess === answerWord) {
    onPuzzleSolved();
  } else {
    currentRow++;
    currentCol = 0;
    if (currentRow >= maxRows) {
      setPuzzleMessage("No more tries 😈 keep trying again later or DM me for help.");
      // you can reset here if you want, but I'll just let the board stay
    } else {
      setPuzzleMessage("");
    }
  }
}

function updateKeyboardKey(ch, state) {
  const keyBtn = keyboardEl.querySelector(`[data-key="${ch}"]`);
  if (!keyBtn) return;

  if (state === "correct") {
    keyBtn.classList.remove("key-present", "key-absent");
    keyBtn.classList.add("key-correct");
  } else if (state === "present") {
    if (!keyBtn.classList.contains("key-correct")) {
      keyBtn.classList.remove("key-absent");
      keyBtn.classList.add("key-present");
    }
  } else {
    if (!keyBtn.classList.contains("key-correct") && !keyBtn.classList.contains("key-present")) {
      keyBtn.classList.add("key-absent");
    }
  }
}

function setPuzzleMessage(msg) {
  puzzleMessageEl.textContent = msg;
}

/* ---------- SOLVE HANDLER ---------- */

function onPuzzleSolved() {
  setPuzzleMessage("Correct. Come here, your letter is waiting 💌");
  spawnHearts();

  // update progress
  solvedDays[currentDay] = true;
  localStorage.setItem("solvedDays", JSON.stringify(solvedDays));
  lastCompletedDay = Math.max(lastCompletedDay, currentDay);
  lastCompletedTime = Date.now();
  localStorage.setItem("lastCompletedDay", String(lastCompletedDay));
  localStorage.setItem("lastCompletedTime", String(lastCompletedTime));

  maxUnlockedDay = getMaxUnlockedDay();

  // open content after a tiny delay
  setTimeout(() => {
    closePuzzle();
    const item = days.find(d => d.day === currentDay);
    if (item) openDayContent(item);
    createDayCards();
  }, 600);
}

/* ---------- HEARTS EFFECT ---------- */

function spawnHearts() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const x = Math.random() * 100;
    const y = 60 + Math.random() * 20;
    heart.style.left = x + "%";
    heart.style.top = y + "%";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

/* ---------- INIT ---------- */

createDayCards();
