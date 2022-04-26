import { render, screen } from '@testing-library/react';
import Game from './Game';

describe('Game component', () => {
    test('buttons are enabled', () => {
      render(<Game />);
      const buttonArray = screen.getAllByRole('button');
      buttonArray.forEach((el) => expect(el).toBeEnabled());
    });

   test('debug game component', () => {
        render(<Game />);

        screen.debug();
    });
});