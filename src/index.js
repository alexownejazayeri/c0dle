import React, { useState } from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game/Game";
import Nav from "./components/Nav";
import Card from './components/UI/Card';
import StatsModal from "./components/UI/StatsModal";
import HelpModal from "./components/UI/HelpModal";

import "./index.css";

const App = () => {
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const [helpModalVisible, setHelpModalVisible] = useState(true); // change this to false once developed
  const statsModalHandler = () => {
    setStatsModalVisible(!statsModalVisible);
  }

  const helpModalHandler = () => {
    setHelpModalVisible(!helpModalVisible);
  }

  return (
      <div>
      {statsModalVisible && <StatsModal onClick={statsModalHandler}/>}
      {helpModalVisible && <HelpModal onClick={helpModalHandler} />}
      <Card >
          <Nav onClickStats={statsModalHandler}/>
          <Game onGameEnd={statsModalHandler}/>
        </Card>
      </div>
    );
}

// ================================================
ReactDOM.render(<App />, document.getElementById("root"));
