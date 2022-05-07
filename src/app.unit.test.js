import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('On state change', () => {
  test('stats modal visible after click stats icon', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'stats' }));

    // Assert
    const statsModal = screen.getByRole('application', { name: 'stats-modal' });
    expect(statsModal).toBeInTheDocument();
  });

  test('stats modal visible after click "x" icon', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'stats' }));
    userEvent.click(screen.getByRole('button', { name: 'close-stats' }));

    // Assert
    const statsModal = screen.queryByRole('application', { name: 'stats-modal' });
    expect(statsModal).not.toBeInTheDocument();
  });

  /* test('help modal visible after click help icon', () => {
      // Arrange
        render(<App />);

        // Act
        userEvent.click(screen.getByRole(''))
  }) */
});
