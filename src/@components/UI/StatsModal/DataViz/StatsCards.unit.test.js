import { render, screen } from '@testing-library/react';
import StatsCards from './StatsCards';

const gameData = {
  averageGuesses: 3,
  gamesPlayed: 23,
  gamesWon: 20,
  guesses: { 1: 2, 2: 4, 3: 5, 4: 2, 5: 6, 6: 1, fail: 3 },
  winPercentage: 87,
};

describe('Stats cards renders', () => {
  test('games played data', () => {
    // Arrange
    render(<StatsCards gameData={gameData} />);

    // Assert
    const gamePlayedElement = screen.getByRole('application', { name: 'games-played' });
    expect(gamePlayedElement).toBeInTheDocument();
  });

  test('win percentage data', () => {
    // Arrange
    render(<StatsCards gameData={gameData} />);

    // Assert
    const winPctElement = screen.getByRole('application', { name: 'games-played' });
    expect(winPctElement).toBeInTheDocument();
  });

  test('games won data', () => {
    // Arrange
    render(<StatsCards gameData={gameData} />);

    // Assert
    const gamesWonElement = screen.getByRole('application', { name: 'games-won' });
    expect(gamesWonElement).toBeInTheDocument();
  });

  test('average guess data', () => {
    // Arrange
    render(<StatsCards gameData={gameData} />);

    // Assert
    const avgGuessElement = screen.getByRole('application', { name: 'avg-guesses' });
    expect(avgGuessElement).toBeInTheDocument();
  });
});
