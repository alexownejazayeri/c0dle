import React, { useState, useEffect } from "react";
import { getAllAttemptedChars, rowScore } from '../../modules/keyboard-mgmt';

import BackKey from "../UI/BackKey";
import EnterKey from "../UI/EnterKey";
import "./Keyboard.css";

const Keyboard = (props) => {
  const [attemptedChars, setAttemptedChars] = useState([]);

  const keys = {
    row1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    row2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    row3: ["Z", "X", "C", "V", "B", "N", "M"],
  };

  const history = props.globalState;
  const attemptArr = getAllAttemptedChars(history);

  attemptArr.forEach((el) =>
    !attemptedChars.includes(el)
      ? setAttemptedChars([...attemptedChars, el])
      : null
  );

  const keyGenerator = (keyArr) => {
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
                /* !repeatCharAttemptedIndices.includes(j)
                  ? repeatCharAttemptedIndices.push(j)
                  : null; */
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

        if (
          charStyles.includes("-present") &&
          !charStyles.includes("-correct")
        ) {
          style = "-present";
        }
      }

      return (
        <button
          key={char}
          id={`${char}-key`}
          className={`letter-key${style} btn`}
          onClick={props.onClick}
        >
          {char}
        </button>
      );
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", props.onKeyDown);
    return () => window.removeEventListener("keydown", props.onKeyDown);
  });

  return (
    <div className="keyboard">
      <div className="key-row">{keyGenerator(keys["row1"])}</div>
      <div className="key-row">{keyGenerator(keys["row2"])}</div>
      <div className="key-row">
        <EnterKey onClick={props.onClick} />
        {keyGenerator(keys["row3"])}
        <BackKey onClick={props.onClick} />
      </div>
    </div>
  );
};



export default Keyboard;
