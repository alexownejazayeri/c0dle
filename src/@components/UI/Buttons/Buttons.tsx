import React from 'react';

import styled from 'styled-components';

export const NavButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const KeyboardLetterButton = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin: 2px;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 30px;
  border-radius: 7px;
  border: ${(props) =>
    props.status === '-correct'
      ? '2px solid rgb(100, 252, 30)'
      : props.status === '-present'
      ? '2px solid #ffec8d'
      : props.status === '-incorrect'
      ? '2px solid rgba(94, 94, 94, 0.301)'
      : '2px #fff solid'};

  &:hover {
    background-color: ${(props) =>
      props.status === '-correct'
        ? 'rgba(100, 252, 30, 0.486)'
        : props.status === '-present'
        ? '#ffec8d80'
        : props.status === '-incorrect'
        ? 'rgba(94, 94, 94, 0.301)'
        : 'rgba(255, 255, 255, 0.425)'};
  }
`;
