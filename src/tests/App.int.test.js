import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from '../Game/Game';

// Success and failure cases for state changes?

describe('Game state change', () => {
  test('succeeds after new game', () => {
    // Arrange
    render(<Game />);

    // Act
    userEvent.keyboard('arrow{Enter}arrow{Enter}arrow{Enter}arrow{Enter}');
    userEvent.click(screen.getByRole('button', { name: 'New Game' }));

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).not.toHaveTextContent('arrow');
  });

  test('does not render new game w/o new game click', () => {
    // Arrange
    render(<Game />);

    // Act
    userEvent.keyboard('arrow{Enter}arrow{Enter}');

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toHaveTextContent('arrow');
  });

  test('succeeds on "Backspace" keydown', () => {
    // Arrange
    render(<Game />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'New Game' }));
    userEvent.keyboard('linus{Backspace}{Backspace}{Backspace}{Backspace}');

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toHaveTextContent('l');
  });
  test('succeeds on "Backspace" button click', () => {
    // Arrange
    render(<Game />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'New Game' }));
    userEvent.keyboard('const');
    userEvent.click(screen.getByRole('button', { name: 'BACK' }));

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toHaveTextContent('cons');
  });
});
