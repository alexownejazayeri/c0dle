import { render, screen } from '@testing-library/react';
import StatsModal from './StatsModal';

describe('Stats Modal component renders', () => {
  test('stats cards', () => {
    // Arrange
    render(<StatsModal />);

    // Assert
    const statsCardsElement = screen.getByRole('application', { name: 'stats-cards' });
    expect(statsCardsElement).toBeInTheDocument();
  });
});
