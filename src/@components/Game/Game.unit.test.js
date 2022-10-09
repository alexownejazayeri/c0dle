import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
describe('Game component behaves as expected when user', () => {
  test('clicks "New Game"', () => {
    // Arrange
    render(<Game />);

    // Act
    userEvent.keyboard('arrow');
    userEvent.click(screen.getByRole('button', { name: 'New Game' }));

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).not.toHaveTextContent('arrow');
  });

  test('keys in "Enter" to progress to next row', () => {
    // Arrange
    render(<Game />);

    // Act
    userEvent.keyboard('catch');
    userEvent.keyboard('{Enter}');
    userEvent.keyboard('const');

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toHaveTextContent('const');
  });
});
