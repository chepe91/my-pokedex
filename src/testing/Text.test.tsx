import { render, screen, fireEvent } from '@testing-library/react';
import { Text } from "./Text";

describe("Text component", () => {

    test("renders label", async () => {
        render(<Text />);
        const labelElement = screen.getByText("Text test");
        expect(labelElement).toBeInTheDocument();
    });

    test("renders paragraph", async () => {
        render(<Text />);
        const paragraphElement = await screen.getByRole("paragraph");
        expect(paragraphElement).toBeInTheDocument();
    });

    test("renders a", async () => {
        render(<Text />);
        const linkElement = await screen.getByRole("link");
        expect(linkElement).toBeInTheDocument();
    });
    
});
