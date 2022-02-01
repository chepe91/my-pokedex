import { render, screen } from '@testing-library/react';
import { Move } from "./Move";
import { Move as MoveInfo } from "./Moves";

describe("Move component", () => {

    const moveProps: MoveInfo = {
        id: 1,
        name: "fire blast",
        accuracy: 50,
        power: 100,
        type: "fire",
        pp: 5,
        names: [],
        damage_class: "special"
    } 

    test("renders tr", () => {
        render(<table>
            <tbody>
                <Move {...moveProps} />
            </tbody>
        </table>);
        const trElement = screen.getByRole("row");
        expect(trElement).toBeInTheDocument();
    });

    test("renders name", () => {
        render(<table>
            <tbody>
                <Move {...moveProps} />
            </tbody>
        </table>);
        const nameElement = screen.getByText("fire blast");
        expect(nameElement).toBeInTheDocument();
    });
});