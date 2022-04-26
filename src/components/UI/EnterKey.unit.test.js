import { render, screen } from '@testing-library/react';
import EnterKey from './EnterKey';

describe('Enter key component', () => {
    test('contains "ENTER" text', () => {
        render(<EnterKey />);

        const buttonText = screen.getByText(/enter/i);
        expect(buttonText).toBeInTheDocument();
    });

    test('button is enabled', () => {
        render(<EnterKey />);
        
        const button = screen.getByRole(/button/i);
        expect(button).toBeEnabled;
    })
})