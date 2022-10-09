import React from 'react';
import BackKeyIcon from '../SvgIcons/BackKeyIcon';
import { KeyboardBackButton, KeyboardBackButtonContainer } from './ButtonStyles';

const BackKey = (props) => (
  <KeyboardBackButtonContainer>
    <KeyboardBackButton id="bck-key" onClick={props.onClick} aria-label="BACK">
      <BackKeyIcon />
    </KeyboardBackButton>
  </KeyboardBackButtonContainer>
);

export default BackKey;
