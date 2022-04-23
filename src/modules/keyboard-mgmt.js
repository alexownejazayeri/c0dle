// ============================= KEYBOARD HELPER FUNCTIONS ===================================

const getAllAttemptedChars = (gState) => {
  const attempted = gState.map((roundState, i) =>
    roundState.map((el, j) => el[0]).filter((el) => el !== "")
  );

  const allAttemptedChars = [];
  attempted.forEach((el) => el.forEach((char) => allAttemptedChars.push(char)));

  return allAttemptedChars;
};

// Keyboard generator helpers
const rowScore = (attemptCharRow) => {
  const nums = attemptCharRow.filter((el) => typeof el === "number");
  return nums.reduce((prev, curr) => prev + curr);
};

const keyGenerator = (keyArr, attemptArr, onClick, history) => {
  return keyArr.map((char) => {
    const lowerChar = char.toLowerCase();
    let style = "";
    let charStyles = [];
    let repeatCharAttemptedIndices = [];
    let answerIndicesArr = [];

    // If this character was attempted at least once
    if (attemptArr.includes(lowerChar)) {
      history.forEach((round) => {
        round.forEach((attemptRow, j) => {
          if (attemptRow[0] === lowerChar) {
            // Get its frequency in the answer
            const charNum = rowScore(attemptRow);

            // If it never occurs, it's wrong
            if (charNum === 0) {
              style = "-incorrect";
            }

            // If it only occurs once, check for positional correctness
            if (charNum === 1) {
              round.indexOf(attemptRow) === round[0].indexOf(lowerChar)
                ? charStyles.push("-correct")
                : charStyles.push("-present");
            }

            // If it occurs more than once, check the same for every occurence
            if (charNum > 1) {
              answerIndicesArr = round[0]
                .map((letter, i) => (letter === lowerChar ? i : null))
                .filter((el) => typeof el === "number");
              if (!repeatCharAttemptedIndices.includes(j)) {
                repeatCharAttemptedIndices.push(j);
              }
            }
          }
        });
      });

      const repeatCharBools = answerIndicesArr.map((el) =>
        repeatCharAttemptedIndices.includes(el)
      );

      if (repeatCharBools[0]) {
        const repeatCharScore = repeatCharBools.reduce(
          (prev, curr) => prev + curr
        );
        repeatCharScore === answerIndicesArr.length
          ? charStyles.push("-correct")
          : charStyles.push("-present");
      }

      if (charStyles.includes("-correct")) {
        style = "-correct";
      }

      if (charStyles.includes("-present") && !charStyles.includes("-correct")) {
        style = "-present";
      }
    }

    return (
      <button
        key={char}
        id={`${char}-key`}
        className={`letter-key${style} btn`}
        onClick={onClick}
      >
        {char}
      </button>
    );
  });
};

export { getAllAttemptedChars, keyGenerator };
