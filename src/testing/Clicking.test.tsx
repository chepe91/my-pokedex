import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Clicking } from "./Clicking";

describe("Clicking component ", () => {



    test('renders "hello world"', () => {
        render(<Clicking />);
    
        const outputElement = screen.getByText('hello world', { exact: false });
        expect(outputElement).toBeInTheDocument();
      });
    
      test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Clicking />);
    
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
    
        // Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
      });


});
