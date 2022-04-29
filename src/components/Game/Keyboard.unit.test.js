import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';

// Does this render what it's supposed to?
describe('Keyboard component renders', () => {
  test('enter key', () => {
    // Arrange
    render(<Keyboard globalState={[]} />);

    // Assert
    const enterElement = screen.getByRole('button', { name: 'ENTER' });
    expect(enterElement).toBeInTheDocument();
  });

  test('back key', () => {
    // Arrange
    render(<Keyboard globalState={[]} />);

    //Assert
    const backElement = screen.getByRole('button', { name: 'BACK' });
    expect(backElement).toBeInTheDocument();
  });

  test('alpha keys', () => {
    // Arrange
    render(<Keyboard globalState={[]} />);

    // Assert
    const alphabet = [
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
    ];

    alphabet.forEach((el) => {
      const alphaButton = screen.getByRole('button', { name: el });
      expect(alphaButton).toBeInTheDocument();
    });
  });
});

// Does this handle user interactions correctly?

// Success and failure cases for state changes?
