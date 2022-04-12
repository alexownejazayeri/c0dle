import React, { useState } from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game/Game";
import Nav from "./components/Nav";
import Card from "./components/UI/Card";
import StatsModal from "./components/UI/StatsModal/StatsModal";
import HelpModal from "./components/UI/HelpModal";
import SettingsModal from "./components/UI/SettingsModal";

import "./index.css";

const App = () => {
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const statsModalHandler = () => {
    setStatsModalVisible(!statsModalVisible);
  };

  const helpModalHandler = () => {
    setHelpModalVisible(!helpModalVisible);
  };

  const settingsModalHandler = () => {
    setSettingsModalVisible(!settingsModalVisible);
  };

  return (
    <div>
      {statsModalVisible && <StatsModal onClick={statsModalHandler} />}
      {helpModalVisible && <HelpModal onClick={helpModalHandler} />}
      {settingsModalVisible && <SettingsModal onClick={settingsModalHandler} />}

      <Card>
        <Nav
          onClickStats={statsModalHandler}
          onClickHelp={helpModalHandler}
          onClickSettings={settingsModalHandler}
        />
        <Game onGameEnd={statsModalHandler} />
      </Card>
    </div>
  );
};

// ======================================================
ReactDOM.render(<App />, document.getElementById("root"));