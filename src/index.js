import React, { useState } from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game/Game";
import Nav from "./components/Nav";
import Card from './components/UI/Card';
import StatsModal from "./components/UI/StatsModal";

import "./index.css";

const App = () => {
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const statsModalHandler = () => {
    setStatsModalVisible(!statsModalVisible);
  }

  return (
      <div>
      {statsModalVisible && <StatsModal onClick={statsModalHandler}/>}
      <Card >
          <Nav onClickStats={statsModalHandler}/>
          <Game onGameEnd={statsModalHandler}/>
        </Card>
      </div>
    );
}

// ================================================
ReactDOM.render(<App />, document.getElementById("root"));
