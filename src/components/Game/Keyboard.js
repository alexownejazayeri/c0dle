import React, { useEffect } from "react";

import BackKey from "../UI/BackKey";
import EnterKey from "../UI/EnterKey";
import "./Keyboard.css";

const Keyboard = (props) => {
  
  const keys = {
    row1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    row2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    row3: ["Z", "X", "C", "V", "B", "N", "M"],
  };

  
  const keyGenerator = (keyArr) => {
    const styles = props.styles;

    return keyArr.map((char) => {
      const style = styles[char]
      console.log(styles[char]);
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
    })
  };

  useEffect(() => {
    window.addEventListener("keydown", props.onKeyDown);
    return () => window.removeEventListener("keydown", props.onKeyDown);
  }, []);

  return (
    <div className="keyboard">
      <div className="key-row">{keyGenerator(keys["row1"])}</div>
      <div className="key-row">{keyGenerator(keys["row2"])}</div>
      <div className="key-row">
        <EnterKey onClick={props.onClick}/>
        {keyGenerator(keys["row3"])}
        <BackKey onClick={props.onClick}/>
      </div>
    </div>
  );
};

export default Keyboard;
