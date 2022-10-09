import React from 'react';
import styled from 'styled-components';

import VegBurgerIcon from '../SvgIcons/VegBurgerIcon';
import InfoIcon from '../SvgIcons/InfoIcon';
import StatsIcon from '../SvgIcons/StatsIcon';
import SettingsIcon from '../SvgIcons/SettingsIcon';
import { NavButton } from '../Buttons/Buttons';
import { NavHeading } from '../Typography/Typography';

const Nav = (props) => (
  <NavBar>
    <NavIconGroup>
      <NavButton onClick={props.onBobby} aria-label="vegburger-menu">
        <VegBurgerIcon />
      </NavButton>
      <NavButton onClick={props.onClickHelp} aria-label="info">
        <InfoIcon />
      </NavButton>
    </NavIconGroup>
    <NavHeading>CODE-LE</NavHeading>
    <NavIconGroup>
      <NavButton onClick={props.onClickStats} aria-label="stats">
        <StatsIcon />
      </NavButton>
      <NavButton onClick={props.onClickSettings} aria-label="settings">
        <SettingsIcon />
      </NavButton>
    </NavIconGroup>
  </NavBar>
);

// ==== Styled Components ====

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavIconGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Nav;
