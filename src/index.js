import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game/Game';
import Nav from './components/UI/Nav';
import Card from './components/UI/Card';
import StatsModal from './components/UI/StatsModal/StatsModal';
import HelpModal from './components/UI/HelpModal';
import SettingsModal from './components/UI/SettingsModal';
import Hamburger from './components/UI/Hamburger';

import './index.css';
import './components/UI/Hamburger.css';

const App = () => {
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [hamburgerVisible, setHamburgerVisible] = useState(false);

  const statsModalHandler = () => {
    setStatsModalVisible(!statsModalVisible);
  };

  const helpModalHandler = () => {
    setHelpModalVisible(!helpModalVisible);
  };

  const settingsModalHandler = () => {
    setSettingsModalVisible(!settingsModalVisible);
  };

  const fryCook = () => {
    setHamburgerVisible(!hamburgerVisible);
  };

  return (
    <div>
      {statsModalVisible && <StatsModal onStats={statsModalHandler} />}
      {helpModalVisible && <HelpModal onClick={helpModalHandler} />}
      {settingsModalVisible && <SettingsModal onClick={settingsModalHandler} />}
      <Card>
        <Nav
          onClickStats={statsModalHandler}
          onClickHelp={helpModalHandler}
          onClickSettings={settingsModalHandler}
          onBobby={fryCook}
        />
        <Game onGameEnd={statsModalHandler} />
        {hamburgerVisible && <Hamburger onShow={fryCook} />}
      </Card>
    </div>
  );
};

// ======================================================
ReactDOM.render(<App />, document.getElementById('root'));
