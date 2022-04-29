import { render, screen } from '@testing-library/react';
import Board from './Board';

// Does it render what it's supposed to?

describe('Board component renders', () => {
  test('when NO attempts or gameplay', () => {
    // Arrange
    render(<Board attempts={['', '', '', '', '', '']} codle={'array'} status={[]} turn={0} />);

    // Act

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toBeInTheDocument();
  });
  test('when attempts and gameplay', () => {
    // Arrange
    render(
      <Board
        attempts={['error', '', '', '', '', '']}
        codle={'array'}
        status={[['-incorrect', '-correct', '-correct', '-incorrect', '-incorrect']]}
        turn={1}
      />,
    );

    // Act

    // Assert
    const rowElements = screen.getAllByRole('application', { name: 'game-row' });
    rowElements.forEach((el) => expect(el).toBeInTheDocument());
  });
});

// Does it handle user interactions correctly?

// Does it handle success and failure cases on state changes?
