import styled from 'styled-components';

const NewGameButton = styled.button`
  width: 60%;
  height: 50px;
  margin-top: 25px;
  font-family: Jura, sans-serif;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: 2px greenyellow solid;
  color: rgb(91, 91, 91);
  background-color: rgba(245, 245, 245, 0.24);

  &:hover {
    background-color: rgba(172, 255, 47, 0.663);
  }
`;

export default NewGameButton;
