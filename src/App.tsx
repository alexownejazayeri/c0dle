import React, { useState } from 'react';

import Game from './Game/Game';
import Nav from './@Components/UI/NavBar/Nav';
import Card from './@Components/UI/Card';
import StatsModal from './@Components/UI/StatsModal/StatsModal';
import HelpModal from './@Components/UI/HelpModal';
import SettingsModal from './@Components/UI/SettingsModal';
import Hamburger from './@Components/UI/Hamburger';

import './index.css';
import './@Components/UI/Hamburger.css';

const App: React.FC = () => {
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

export default App;
