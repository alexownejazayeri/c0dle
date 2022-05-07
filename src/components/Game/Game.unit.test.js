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

/* test('tries to key in more than 6 entries', () => {
  // Arrange
  render(<Game />);

  // Act
  userEvent.keyboard('linus{Enter}arrow{Enter}error{Enter}catch{Enter}catch{Enter}catch{Enter}webgl{Enter}');

  // Assert
  const boardElement = screen.getByRole('application', { name: 'game-board' });
  expect(jsdom).toThrowError();
});
 */

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
