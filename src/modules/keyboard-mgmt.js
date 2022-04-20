// ============================= KEYBOARD HELPER FUNCTIONS ===================================

const getAllAttemptedChars = (gState) => {
    const attempted = gState.map((roundState, i) =>
      roundState.map((el, j) => el[0]).filter((el) => el !== "")
    );
  
    const allAttemptedChars = [];
    attempted.forEach((el) => el.forEach((char) => allAttemptedChars.push(char)));
  
    return allAttemptedChars;
  };
  
  const rowScore = (attemptCharRow) => {
    const nums = attemptCharRow.filter((el) => typeof el === "number");
    return nums.reduce((prev, curr) => prev + curr);
  };

  export { getAllAttemptedChars, rowScore }