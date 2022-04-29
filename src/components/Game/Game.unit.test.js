import { render, screen } from '@testing-library/react';
import Game from './Game';

// Does this render what it's supposed to?
describe('Game component renders', () => {
  test('the board', () => {
    // Arrange
    render(<Game />);

    // Act - N/A

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toBeInTheDocument();
  });
  test('the keyboard', () => {
    // Arrange
    render(<Game />);

    // Act - N/A

    // Assert
    const keyBoardElement = screen.getByRole('application', { name: 'keyboard' });
    expect(keyBoardElement).toBeInTheDocument();
  });
});

// Does this handle user interactions correctly?

// Success and failure cases for state changes?
