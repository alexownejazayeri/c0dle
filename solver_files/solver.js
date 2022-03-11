const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

let gameState = {
  guess: ["twerk", "mount", "faint", "scant", "", ""],
  evaluations: [
    ["present", "absent", "absent", "absent", "absent"],
    ["absent", "absent", "absent", "correct", "correct"],
    ["absent", "present", "absent", "correct", "correct"],
    ["absent", "present", "correct", "correct", "correct"],
  ],
};

let { guess, evaluations } = gameState;

let strDeconstructor = (str) => str.split("");

let letterElim = (g, e) => {
  const strArr = strDeconstructor(g);
  const strEval = e;
  const alpArr = alpha;
  const remaining = [];
  strArr.map((el, i) =>
    e[i] === "absent" ? remaining.push(el) : console.log("shloopy")
  );
  return remaining;
};

let letterTracker = (a, g, e) => {
  let available = a;
  let absent = [];
  g.map((el, i) => {
    let arr = letterElim(el, e);
    arr.map((el) => absent.push(el));
  });
  return absent;
};

letterTracker(alpha, guess, evaluations);

let rem = [
  "q",
  "y",
  "i",
  "d",
  "f",
  "g",
  "h",
  "j",
  "z",
  "x",
  "c",
  "v",
  "b",
  "m",
];

let permuter = (rem) => {
  const options = [];
  for (let i = 0; i < rem.length; i++) {
    rem.map((el) => {
      options.push(el + "i" + rem[i] + "id");
    });
  }
  return options;
};

let newPermuter = (rem) => {
  const options = [];
  rem.map((el) => {
    options.push(el + "ivid");
  });
  return options;
};

let options = newPermuter(rem);
console.log(options);

/* async function fetchWord(potentialWord) {
  let response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + potentialWord
  );
  let data = await response.json();
  !data["title"] ? console.log(data[0]["word"] + " is a real word!") : null;
} */

async function fetchRealWords(opts)  {
    let response = await fetch("https://gist.githubusercontent.com/BideoWego/60fbd40d5d1f0f1beca11ba95221dd38/raw/58fb4cce910fbf5fa67a2f0f1f619c09d7b1b373/dictionary.json");
    let data = await response.json();
    let possibleSolutions = opts.filter(el => !!data[el] === true);
    console.log(possibleSolutions);
}

console.log(fetchRealWords());