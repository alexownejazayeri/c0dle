// ================  HELPER FUNCTIONS FOR GAME COMPONENT ======================

// Pulls a new, non-repeated word from 'FUEL'
// Track attempted solutions in localStorage
const getRandomVocab = (solutionsArray) => solutionsArray[Math.floor(Math.random() * solutionsArray.length)];

// Implemented in Game.js to set the round status once a player has entered a valid guess for the round
// Take in the user's guess for the current round along with the code-le solution
// Outputs an array with corresponding statuses for each tile, which get consumed by the tile renderer to style
// the tiles conditionally

// Todo: split 'guess' string into an array in the function instead of Game.js

const statusHandler = (guess, ans) => {
  let statusArr = ['', '', '', '', ''];

  let indexArr = [];
  const charPool = ans.split('');

  // Scan for correctness
  guess.forEach((char, i) => {
    if (charPool.includes(char) && guess[i] === ans[i]) {
      statusArr[i] = 'correct';
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  // Scan for presence
  guess.forEach((char, i) => {
    if (!indexArr.includes(i) && charPool.includes(char) && guess[i] !== ans[i]) {
      statusArr[i] = 'present';
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  // Scan for incorrectness
  guess.forEach((char, i) => {
    if (!indexArr.includes(i) && !charPool.includes(char)) {
      statusArr[i] = 'incorrect';
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  return statusArr;
};

const constructMatrix = (ans, attempt) => {
  const skeleton = Array(5).fill([]);
  const matrix = skeleton.map(() => [0, 0, 0, 0, 0]);

  matrix.unshift(ans.split(''));
  matrix[0].unshift('');
  matrix.forEach((r, i) => (i > 0 ? r.unshift(attempt[i - 1]) : null));

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

// This function takes in the player turn and win status on a win or loss event
// Triggered by entering a valid guess; states: correct guess on any valid turn, game failure
const handlePlayerData = (turn, winStatus) => {
  let newPlayer;

  // Check if new player (is there data in localStorage already?)
  window.localStorage.getItem('lifetime-stats') ? (newPlayer = false) : (newPlayer = true);

  // If there's no lifetime data saved to localStorage, they're assumed to be 'new'
  if (newPlayer) {
    // Initialize fresh lifetime stats; should only run on first gameplay
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

    // Update new player stats and push to localStorage

    // Increment the number of games played
    lifetimeStats.gamesPlayed++;

    // If they won...
    if (winStatus) {
      lifetimeStats.gamesWon++; // Increment number of games won
      lifetimeStats.guesses[`${turn + 1}`]++; // Increment 'guesses' data based on which turn they won on
      lifetimeStats.averageGuesses = turn + 1; // Set the avg. # of guesses to win equal to their only turn, since new player
    } else {
      lifetimeStats.guesses['fail']++; // Increment their failed game counter
    }

    lifetimeStats.winPercentage = Math.round((lifetimeStats.gamesWon / lifetimeStats.gamesPlayed) * 100);

    const strLifetimeStats = JSON.stringify(lifetimeStats); // Convert the lifetime stats object into a string (localStorage needs a string)
    window.localStorage.setItem('lifetime-stats', strLifetimeStats); // Set the localStorage 'lifetime-stats' object equal to stringified obj. from above
  }

  // If lifetime data in localStorage, they're a returning player so we read in the data, update it, and push it back up
  else {
    // read in and parse JSON string to object and update
    const lifetimeStats = JSON.parse(window.localStorage.getItem('lifetime-stats'));

    // Update stats and push to local storage

    // Increment games played
    lifetimeStats.gamesPlayed++;

    // If they've won...
    if (winStatus) {
      lifetimeStats.gamesWon++; // Increment games won
      lifetimeStats.guesses[`${turn + 1}`]++; // Increment data for the turn they won on (used for averaging)

      // Destructure lifetime data by turn to...
      const { 1: ones, 2: twos, 3: threes, 4: fours, 5: fives, 6: sixes } = lifetimeStats.guesses;

      // Calculate their avg. number of guesses to win
      lifetimeStats.averageGuesses = Math.round(
        (ones * 1 + twos * 2 + threes * 3 + fours * 4 + fives * 5 + sixes * 6) / lifetimeStats.gamesWon,
      );
    }

    // Unless they lost, in which case...
    else {
      lifetimeStats.guesses['fail']++; // Increment their failed game counter
    }

    // Calculate new win percentage
    lifetimeStats.winPercentage = Math.round((lifetimeStats.gamesWon / lifetimeStats.gamesPlayed) * 100);

    const strLifetimeStats = JSON.stringify(lifetimeStats); // Convert the lifetime stats object into a string (localStorage needs a string)
    window.localStorage.setItem('lifetime-stats', strLifetimeStats); // Set the localStorage 'lifetime-stats' object equal to stringified obj. from above
  }
};

const gameSaveHandler = (wordList) => {
  let newGame;
  window.localStorage.getItem('game-state') ? (newGame = false) : (newGame = true);

  if (newGame) {
    return {
      codle: getRandomVocab(wordList),
      attempts: ['', '', '', '', '', ''],
      status: [],
      turn: 0,
      matrixHistory: [],
      win: false,
    };
  } else if (!newGame) {
    return JSON.parse(window.localStorage.getItem('game-state'));
  }
};

export { getRandomVocab, statusHandler, constructMatrix, evaluateMatrix, handlePlayerData, gameSaveHandler };
