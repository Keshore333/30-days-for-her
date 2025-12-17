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
// Day 2 custom content
days[1] = {
  day: 2,
  title: "3 Tiny Memories",
  type: "Memory",
  content: `Hey baby,

Today I want to talk about the **small things** — not the big ones.
Some subtle things that might go unnoticed, but i noticed.

1) [Memory 1 — The way you hold my hand. Especially, the way you caress my fingers with your thumb. 
I love it so much. I take it as you telling me that you love me in a subtle way.]
2) [Memory 2 — The day you slapped me 😂. Now look, it wasnt even that hard nor did it hurt. but you kept on apologizing for it.
I actually loved that we had that moment. For me, that was Love too.]
3) [Memory 3 — I think i haven't said this before but i love that whenever we meet, your whole face lights up and you either grab my cheeks and say you missed me.
or you give me a kiss on the cheeks. Look, if im being honest, i hate how my cheeks look so chubby and you doing that makes me feel like a baby. But I LOVE IT.
You love me in ways that i dont love myself. I hope you dont stop.]

These are some tiny memories, or moments that came to my mind rn. There's a lot more i think but not for now. 

I love you baby [tight hug].`
};

// Day 3 custom content - Photos + descriptions
days[2] = {
  day: 3,
  title: "My Favourite Pictures of Us",
  type: "Photo Memory",
  content: `
    <p>Hey ushashree,</p>

    <p>Today I wanted to show you some pictures that i love.
    For each photo I wrote a little note — as to why they are my fav.</p>

    <figure>
      <img src="media/images/IMG-20251210-WA0001.jpg" class="letter-image" alt="Photo 1">
      <figcaption><strong>Photo 1 —</strong> You know these reels where they say "Get yourself a girl who looks at you like this". 
      Yeah, that is exactly what this is. You love me that much huhh baby?? hehe. Look at you, all "in love"...</figcaption>
    </figure>

    <figure>
      <img src="media/images/IMG-20251210-WA0002.jpg" class="letter-image" alt="Photo 2">
      <figcaption><strong>Photo 2 —</strong> Look how happy we both aree. This is what i mean when i say i love your laugh. The way you giggle, and i love that i can make you do that.
      This night is easily one of the best i've had with you.. You looked soo sexyyy and gorgeousss. REALLYYY SEXYYYY.</figcaption>
    </figure>

    <figure>
      <img src="media/images/IMG-20251210-WA0003.jpg" class="letter-image" alt="Photo 3">
      <figcaption><strong>Photo 3 —</strong> This was a no Brainer. Ofcourse this had to be included.. The night we became one. Lmao, how fucking corney is sounds 🤣. 
      Thats the closest i've ever been physically to anyone. AHHHH, what i would do to lay on your chest naked like that.</figcaption>
    </figure>

    <figure>
      <img src="media/images/IMG-20251210-WA0004.jpg" class="letter-image" alt="Photo 4">
      <figcaption><strong>Photo 4 —</strong> I think of this day often. The way you were vibing to those songs. I could see you dropping your guard around me.
      The first time i saw you in a saree. I fell HARDDDD for you. We're definitely blasting songs and dance to them in the future.</figcaption>
    </figure>

    <figure>
      <img src="media/images/IMG-20251210-WA0005.jpg" class="letter-image" alt="Photo 5">
      <figcaption><strong>Photo 5 —</strong> Ahh yesss, the Diwali night. How could i leave this out. Our first night out. I was really hoping to make sure you had a wonderful night..
      because you told me diwali was one of your fav festivals. and i think i succeeded. Everything about that day was PERFECT. I loved the fact that you were just happy to be there behind me and kept taking picsss.</figcaption>
    </figure>

    <figure>
      <img src="media/images/IMG-20251210-WA0006.jpg" class="letter-image" alt="Photo 6">
      <figcaption><strong>Photo 6 —</strong> HONOURABLE MENTION: come on, there's no explanation needed here hahaha. Look how cute you loook. All serious. 
      This one is my fav out all the others 😂😘😘. HAHAAHHAHA. MWWAHHHHH </figcaption>
    </figure>

    <p>We gotta create so much more memories Babyyy. I love you. Your Man.</p>
  `
};
// Day 4 custom content - Song for her
days[3] = {
  day: 4,
  title: "A Song For You",
  type: "Voice Note",
  content: `
    <p>Heyyy Lilu,</p>

    <p>Today I wanted to give you something a little different — something you can <strong>hear</strong> instead of read.</p>

    <p>I recorded this for you.  
    Listen with your headphones… and tell me how it made you feel.</p>

    <audio controls class="letter-audio">
      <source src="media/audio/PookalPookumTharunam.mp3" type="audio/mp3">
      Your browser doesn't support audio playback.
    </audio>
    <div class="lyrics-block">
      <p>“Vaarthai thevaillai, vaazhum kaalam varai,
Paavai paarvai mozhi pesumae”
No words are needed, not for as long as I live—
Her doll-like gaze speaks a language of its own.

“Netru thevaillai, naalai thevaillai
Indru intha nodi pothumae”
Yesterday isn't needed, nor does tomorrow.
This moment today… is more than enough.

“Verindri vithaindri vinthoovum mazhai indri
Ithu enna ivan thottam poo pookuthae?”
No roots, no seeds, no falling rain—
Yet somehow, a flower has bloomed in his garden.

“Vaalindri porindri valikindra yutha mindri
Ithu enna ivanukkul ennai velluthae?”
No swords, no war, not even a battle with pain—
So how is it that I’m losing myself inside him?

“Idhayam muzhuthum irukum
Intha thayakam, engu kondu niruthum?”
This hesitation fills my entire heart—
Where would it take me?

“Ithai ariya engu kidaikum vilakam,
Athu kidaithaal solla vendum enakum”
Where can I find an answer for what I’m feeling?
And if you ever find one, you must tell me.

“Poonthalireeeeehh…”
Oh tender flower…</p>
    </div>

    <p>Its not the best, ik. I just thought you'd wanna hear something RAW</p>
    <p>I love you, sweetheart.</p>
  `
};
// Day 5 custom content - 6 Questions
days[4] = {
  day: 5,
  title: "Questions For You",
  type: "Interactive",
  content: `
    <p>Hey Ushashree,</p>

    <p>Today I don’t want to talk <em>at</em> you.  
    I want to talk <strong>with</strong> you.</p>

    <p>So here are some questions — some to make you laugh, some to make you think, and one or two that might make you blush.</p>

    <ol>
      <li><strong>[Question 1]</strong> — If i was a cartoon character, what would i be and why? (sent me the pic).</li>
      <li><strong>[Question 2]</strong> — What is something that i did before, that if didn't do, you might not fell for me? (i dont want basic answer like "ask me out on a date").</li>
      <li><strong>[Question 3]</strong> — What's something you've wanted to tell me, but didnt know how to say it?.</li>
      <li><strong>[Question 4]</strong> — When you imagine 'us' in the future, what's the image that appears?</li>
      <li><strong>[Question 5]</strong> — What are the things that you saw as red flags in me at first, but then it wasn't true?</li>
      <li><strong>[Question 6]</strong> — What’s something I do that makes your brain stop working for a second?</li>
      <li><strong>[Question 7]</strong> — What’s a small dream involving us that you’ve never told me?</li>
      <li><strong>[Question 8]</strong> — What’s one ‘first time’ with me that you secretly look forward to?</li>
      <li><strong>[Question 9]</strong> — What’s one small thing I do that you’d miss if I stopped?</li>
      <li><strong>[Question 10]</strong> — Which moment between us felt unreal, like it wasn’t supposed to happen but it did?</li>
    </ol>

    <p>I'm looking forward to your answer.  
    There’s no right or wrong — I just want to know what your heart says.</p>

    <p>I love you.</p>
  `
};
// Day 6 custom content - 10 Things I Love About You
days[5] = {
  day: 6,
  title: "10 Things I Love About You",
  type: "List",
  content: `
    <p>Jiii pookieee,</p>

    <p>Today I wanted to tell you something simple but true —  
    these are ten things I love about you, and I don't think you even realize them.</p>

    <ol>
      <li><strong>[Thing 1]</strong> — The way you squint your eyes everytime i try to hold you face.</li>
      <li><strong>[Thing 2]</strong> — I had to say this again even though you might already know this.. YOUR ACCENT (TREEEEE).</li>
      <li><strong>[Thing 3]</strong> — The smell of your forehead.</li>
      <li><strong>[Thing 4]</strong> — How you prioritize you work.</li>
      <li><strong>[Thing 5]</strong> — How obsessed you are with me. And how jealous you get easily. I LOVE IT.</li>
      <li><strong>[Thing 6]</strong> — How you react whenever i try to grab your boobs or ass in public. Hehe.</li>
      <li><strong>[Thing 7]</strong> — The shape of your body. Ufffff. Your curves....</li>
      <li><strong>[Thing 8]</strong> — How content you are with what you have, and what we have.</li>
      <li><strong>[Thing 9]</strong> — How soft your skin is. and your hands... If i were to die, i'd probably wanna do so in like a mountain or some scenic place. or in your arms 😅</li>
      <li><strong>[Thing 10]</strong> — I love that one very small mole below your right eye bag.</li>
    </ol>

    <p>I could just go onnn but it's enough for now. Dont want you to show too much cock.</p>

    <p>I love you bebweeiiii</p>
  `
};
// Day 7 custom content - Simple Letter
days[6] = {
  day: 7,
  title: "Just Me, Talking to You",
  type: "Letter",
  content: `
    <p>Hey baby,</p>

    <p>I saw a few verses that reminded me of you and i just tell them to you in my own way.</p>

    <p>1. When i finally give you the world, I'm sure I'll still owe you.</p>

    <p>2. If i knew that you existed and that one day, you would come here... I'd have never even looked at any women.</p>

    <p>3. Your skin makes me feel forgiven for all my past sins.</p>

    <p>4. My memories are limited, but take as many as you want. </p>

    <p>5. I was never sure of anything except you. I would sacrifice my dreams if it means i'll end up with you. </p>

    <p>That’s all for today.  
    I just wanted you to hear my voice in your head for a second. 
    EDIT: I've realised something baby.. In this relationship, you've shown your body more than you've recieved flowers from me. And that.. bothers me.
    I don't want you to think that i care more about lust than love. Or that this relationship is lust driven. 
    So, from here on. I'm not gonna ask you to send me anything, just for a while.</p>

    <p>I love you my baby.</p>
  `
};

// Day 8 custom content - If you were here
days[7] = {
  day: 8,
  title: "Things i wanna do to you",
  type: "Wanting",
  content: `
    <p>These are the things i wanna do to you soo baddd.</p>

    <p> Hold your face with my hands. And kiss you all over your face.</p>
    <p> Kiss your fingers one by one.</p>
    <p> Run my hands across your waist while kissing you.</p>
    <p> Lift your shirt up, look up at you and slowly kiss your nipples. Lick them. And suck on them.</p>
    <p> Bury my face in your pussy while you crush my head between your thighs.</p>
    <p> Slide my finger inside you and watch you squirm.</p>
    <p> Make you get on your knees and let you kiss my dick.</p>
    <p> Slap you across your face and shove my dick in your mouth.</p>
    <p> Push your head all the way into my dick. Hear you gag. Ask you questions like "are you my good girl?" and see you answer them with sounds while you suck me hard.</p>
    <p> Slide my dick inside you, your legs wrapped around my waist, and fuck you to show my much i love you.</p>
    <p> Put your legs on my shoulder and go even deeper in you. Look you in the eye and fuck you like you're my slut.</p>
    <p> Turn you against your belly and pound you in doggy while choking your neck. Slap your ass so hard that it leaves a print.</p>
    <p> Lay on my back and let you ride me. Watch your throbbing pussy squirt all over my dick.</p>
    <p> Finally, fuck you soo HARD in missionary while choking you, till you feel like blacking out and can't remember your name. Finish inside you and tell you how much i love you.</p>

    

    <p>That’s it.  
    Nothing dramatic.</p>
  `
};

// Day 9 custom content - House Tour Vlog (Embedded)
days[8] = {
  day: 9,
  title: "Come Inside My World",
  type: "Vlog",
  content: `
    <p>Hii babyy,</p>

    <p>I wanted to do something different today.</p>

    <p>Use headphones</p>

    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/SM9Yk7udfAY"
        title="My House Tour"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <p>I hope this made the distance feel smaller.</p>
  `
};

// Day 10 custom content - Barcelona 101
days[9] = {
  day: 10,
  title: "Barcelona 101",
  type: "Love",
  content: `
    <p>Hey babyy,</p>

    <p>Since it’s Day 10, I think it’s time you learned something important.</p>

    <p><strong>Top 10 Barcelona facts you must know.</strong>  
    (This is compulsory. Viva will be conducted later tonight.)</p>

    <ol>
      <li> Fact 1 — All fans of FC Barcelona are called culers.</li>
      <li> Fact 2 — Slogan of our club is "Més que un club" which means "More than a club".</li>
      <li> Fact 3 — La Masia is the name of the football academy of FC Barcelona that trains young players (from under 8yo to under 21yo) and the best of the best from them is promoted to the main team, like, Messi, Lamine yamal etc.</li>
      <li> Fact 4 — Some of the ex-players of FCB that you should remember - Messi, Iniesta, Xavi, Busquets, Ronaldinho, Neymar.</li>
      <li> Fact 5 — El clasico (Real madrid vs Barca) is more than just a match, its 100years of rivalry. Fight between the 'government' and the people, the entitled vs the humble.</li>
      <li> Fact 6 — FC Barcelona/Barca is owned by the people. Unlike any other sports team where a billionare owns it. Barcelona is owned by hundreds of thousands of people who pays a certain amount every year. (Search who owns barca in google)</li>
      <li> Fact 7 — The people of catalonia (a state in spain in which barcelona is located) were the creators of the club. So comes the slogan "Visca el Barça, visca Catalunya!" meaning "Long live Barca, long live catalonia".</li>
      <li> Fact 8 — Clubs we/I hate - Real madrid, PSG, Liverpool, Chelsea (etc, but i dont hate many teams)</li>
      <li> Fact 9 — Our iconic stadium is called "Camp Nou" and its currently rebuilding- as you know.</li>
      <li> Fact 10 — Black days in Barca recent history - 5th August 2021, 14th Aug 2020, 7th May 2019, 10th April 2018, 6th May 2009. (special mention - 7th May 2025)</li>
    </ol>

    <p>Revision is advised.  
    Viva will be oral. I'll call you tonight.</p>
  `
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
  7: { word: "HOME", hint: "What being with you feels like (4 letters)" },
  8: { word: "MUSLIM", hint: "Someone you hate" },
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

const HOURS_LOCK = 12;
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
  modalContent.innerHTML = item.content;
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
