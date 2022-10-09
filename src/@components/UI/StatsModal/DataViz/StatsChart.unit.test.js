import { render, screen } from '@testing-library/react';
import StatsChart from './StatsChart';

const guesses = { 1: 2, 2: 4, 3: 5, 4: 2, 5: 6, 6: 1, fail: 3 };

describe('Stats chart renders', () => {
  test('bar chart', () => {
    // Arrange
    render(<StatsChart guesses={guesses} />);

    // Assert
    const barChartElement = screen.getByRole('img', { name: 'bar-chart' });
    expect(barChartElement).toBeInTheDocument();
  });
});
