import { render, screen } from '@testing-library/react';
import { MovesTable } from "./MovesTable";
import { Move as MoveInfo } from "./Moves";


describe("Moves table component", () => {

    const moves: MoveInfo[] = [
        {
            id: 1,
            name: "fire blast",
            accuracy: 50,
            power: 110,
            type: "fire",
            pp: 5,
            names: [],
            damage_class: "special"
        },
        {
            id: 2,
            name: "hidro cannon",
            accuracy: 50,
            power: 100,
            type: "water",
            pp: 5,
            names: [],
            damage_class: "special"
        },
        {
            id: 3,
            name: "solar beam",
            accuracy: 100,
            power: 120,
            type: "grass",
            pp: 5,
            names: [],
            damage_class: "special"
        }
    ];

    test("renders component", async () => {
        render(<MovesTable moves={moves} />);
        const tableElement = await screen.findByRole("table");
        expect(tableElement).toBeInTheDocument();
    });

    test("renders headers + moves", async () => {
        render(<MovesTable moves={moves} />);
        const rowsElement = await screen.findAllByRole("row");
        expect(rowsElement).toHaveLength(4);
    });

    test("sorts when header clicked", async () => {
        render(<MovesTable moves={moves} />);
        const nameHeader = await screen.findByText("name");
        expect(nameHeader).toBeInTheDocument();
    });

});


