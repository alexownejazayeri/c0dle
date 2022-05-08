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

  test('help modal visible after click help icon', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'info' }));

    // Assert
    const helpModal = screen.queryByRole('heading', { name: '👾 HOW TO PLAY 👾' });
    expect(helpModal).toBeInTheDocument();
  });

  test('help modal invisible after clicking out of help icon', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'info' }));
    userEvent.click(screen.getByRole('application', { name: 'close-help' }));

    // Assert
    const helpModal = screen.queryByRole('heading', { name: '👾 HOW TO PLAY 👾' });
    expect(helpModal).not.toBeInTheDocument();
  });

  test('settings modal visible after click settings icon', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'settings' }));

    // Assert
    const helpModal = screen.queryByRole('heading', { name: 'SETTINGS' });
    expect(helpModal).toBeInTheDocument();
  });

  test('settings modal invisible after clicking out of settings icon', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'settings' }));
    userEvent.click(screen.getByRole('button', { name: 'close-settings' }));

    // Assert
    const helpModal = screen.queryByRole('heading', { name: 'SETTINGS' });
    expect(helpModal).not.toBeInTheDocument();
  });

  test('vegburger modal visible after click veg patties', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'vegburger-menu' }));

    // Assert
    const vegBoi = screen.getByRole('heading', { name: 'Learning Supplements' });
    expect(vegBoi).toBeInTheDocument();
  });

  test('vegburger modal invisible after click out of veggie yum yums', () => {
    // Arrange
    render(<App />);

    // Act
    userEvent.click(screen.getByRole('button', { name: 'vegburger-menu' }));
    userEvent.click(screen.getByRole('button', { name: 'close-veger' }));

    // Assert
    const vegBoi = screen.queryByRole('heading', { name: 'Learning Supplements' });
    expect(vegBoi).not.toBeInTheDocument();
  });
});
