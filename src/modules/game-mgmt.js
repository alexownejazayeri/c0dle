// ================  HELPER FUNCTIONS FOR GAME COMPONENT ======================

const getRandomVocab = (arr) => arr[Math.floor(Math.random() * arr.length)];

const statusHandler = (guess, ans) => {
  let statusArr = ["", "", "", "", ""];

  let indexArr = [];
  const charPool = ans.split("");

  // Scan for correctness
  guess.forEach((char, i) => {
    if (charPool.includes(char) && guess[i] === ans[i]) {
      statusArr[i] = "-correct";
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  // Scan for presence
  guess.forEach((char, i) => {
    if (
      !indexArr.includes(i) &&
      charPool.includes(char) &&
      guess[i] !== ans[i]
    ) {
      statusArr[i] = "-present";
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  // Scan for incorrectness
  guess.forEach((char, i) => {
    if (!indexArr.includes(i) && !charPool.includes(char)) {
      statusArr[i] = "-incorrect";
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  return statusArr;
};

const constructMatrix = (ans, atmpt) => {
  const skeleton = Array(5).fill([]);
  const matrix = skeleton.map(() => [0, 0, 0, 0, 0]);

  matrix.unshift(ans.split(""));
  matrix[0].unshift("");
  matrix.forEach((r, i) => (i > 0 ? r.unshift(atmpt[i - 1]) : null));

  return matrix;
};

const evaluateMatrix = (ans, atmpt) => {
  const matrix = constructMatrix(ans, atmpt);

  matrix.forEach((row, i) => {
    if (i > 0) {
      row.forEach((el, j) => {
        if (matrix[0][j] === matrix[i][0]) {
          matrix[i][j] = 1;
        }
      });
    }
  });

  return matrix;
};

const handlePlayerData = (turn, winStatus) => {
  let newPlayer;
  !!window.localStorage.getItem("lifetime-stats")
    ? (newPlayer = false)
    : (newPlayer = true);

  if (!!newPlayer) {
    const lifetimeStats = {
      guesses: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        fail: 0,
      },
      gamesPlayed: 0,
      gamesWon: 0,
      winPercentage: 0,
      averageGuesses: 0,
    };
    // Update stats and push to local storage
    lifetimeStats.gamesPlayed++;
    if (!!winStatus) {
      lifetimeStats.gamesWon++;
      lifetimeStats.guesses[`${turn + 1}`]++;
      const {
        1: ones,
        2: twos,
        3: threes,
        4: fours,
        5: fives,
        6: sixes,
      } = lifetimeStats.guesses;
      lifetimeStats.averageGuesses = Math.round(
        (ones * 1 + twos * 2 + threes * 3 + fours * 4 + fives * 5 + sixes * 6) /
          lifetimeStats.gamesWon
      );
    } else {
      lifetimeStats.guesses["fail"]++;
    }

    lifetimeStats.winPercentage = Math.round(
      (lifetimeStats.gamesWon / lifetimeStats.gamesPlayed) * 100
    );

    const strLifetimeStats = JSON.stringify(lifetimeStats);
    window.localStorage.setItem("lifetime-stats", strLifetimeStats);
  } else {
    // read in and parse JSON string to object and update
    const lifetimeStats = JSON.parse(
      window.localStorage.getItem("lifetime-stats")
    );

    // Update stats and push to local storage
    lifetimeStats.gamesPlayed++;
    if (!!winStatus) {
      lifetimeStats.gamesWon++;
      lifetimeStats.guesses[`${turn + 1}`]++;
      const {
        1: ones,
        2: twos,
        3: threes,
        4: fours,
        5: fives,
        6: sixes,
      } = lifetimeStats.guesses;
      lifetimeStats.averageGuesses = Math.round(
        (ones * 1 + twos * 2 + threes * 3 + fours * 4 + fives * 5 + sixes * 6) /
          lifetimeStats.gamesWon
      );
    } else {
      lifetimeStats.guesses["fail"]++;
    }

    lifetimeStats.winPercentage = Math.round(
      (lifetimeStats.gamesWon / lifetimeStats.gamesPlayed) * 100
    );

    const strLifetimeStats = JSON.stringify(lifetimeStats);
    window.localStorage.setItem("lifetime-stats", strLifetimeStats);
  }
};

const gameSaveHandler = (wordList) => {
  let newGame;
  !!window.localStorage.getItem("game-state")
    ? (newGame = false)
    : (newGame = true);

  if (!!newGame) {
    return {
      codle: getRandomVocab(wordList),
      attempts: ["", "", "", "", "", ""],
      status: [],
      turn: 0,
      matrixHistory: [],
      win: false,
    };
  } else if (!newGame) {
    return JSON.parse(window.localStorage.getItem("game-state"));
  }
};

export { getRandomVocab, statusHandler, evaluateMatrix, handlePlayerData, gameSaveHandler }